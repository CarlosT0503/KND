"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { mensajesComm } from "@/data/comms";
import { agentes } from "@/data/agents";
import type { MensajeComm } from "@/types";
import TerminalPanel from "@/components/ui/TerminalPanel";

// El chat corre 100% en el navegador (todavía no hay Supabase/backend):
// los mensajes se guardan en localStorage de ESTE navegador, así que
// sobreviven a un refresh pero no se comparten entre agentes/dispositivos
// distintos. Eso llega cuando conectemos la base de datos real.
const STORAGE_KEY = "knd-comms-mensajes";
const AGENTE_KEY = "knd-comms-agente";

export default function CommsPanel() {
  const [mensajes, setMensajes] = useState<MensajeComm[]>(mensajesComm);
  const [texto, setTexto] = useState("");
  const [agenteNumero, setAgenteNumero] = useState<number>(agentes[0].numero);
  const [listo, setListo] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Cargar historial + identidad guardados en este navegador.
  useEffect(() => {
    try {
      const guardados = window.localStorage.getItem(STORAGE_KEY);
      if (guardados) {
        const parsed = JSON.parse(guardados) as MensajeComm[];
        if (Array.isArray(parsed) && parsed.length > 0) setMensajes(parsed);
      }
      const agenteGuardado = window.localStorage.getItem(AGENTE_KEY);
      if (agenteGuardado) setAgenteNumero(Number(agenteGuardado));
    } catch {
      // localStorage no disponible (modo privado, etc.) — seguimos con mock.
    }
    setListo(true);
  }, []);

  // Guardar cada vez que cambian los mensajes (una vez cargado el historial).
  useEffect(() => {
    if (!listo) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(mensajes));
    } catch {
      // sin espacio / navegador privado: no pasa nada, solo no persiste.
    }
  }, [mensajes, listo]);

  useEffect(() => {
    try {
      window.localStorage.setItem(AGENTE_KEY, String(agenteNumero));
    } catch {
      // ignorar
    }
  }, [agenteNumero]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [mensajes]);

  function enviar(event: FormEvent) {
    event.preventDefault();
    const limpio = texto.trim();
    if (!limpio) return;

    setMensajes((prev) => [
      ...prev,
      {
        id: `local-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        hora: new Intl.DateTimeFormat("es-MX", {
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date()),
        agenteNumero,
        texto: limpio,
      },
    ]);
    setTexto("");
  }

  return (
    <TerminalPanel title="Comunicaciones" cursor className="h-full">
      <div ref={scrollRef} className="max-h-40 space-y-1.5 overflow-y-auto pr-1">
        {mensajes.map((m) => (
          <p key={m.id} className="text-xs leading-relaxed sm:text-sm">
            <span className="text-knd-terminal-dim">[{m.hora}]</span>{" "}
            <span className="text-knd-terminal-glow">Número {m.agenteNumero}:</span>{" "}
            {m.texto}
          </p>
        ))}
      </div>
      <form
        onSubmit={enviar}
        className="mt-3 flex flex-wrap gap-2 border-t border-knd-border pt-3"
      >
        <select
          value={agenteNumero}
          onChange={(e) => setAgenteNumero(Number(e.target.value))}
          aria-label="Enviar como"
          className="border border-knd-border bg-knd-black-soft px-1.5 py-1.5 text-xs text-knd-terminal outline-none focus:border-knd-terminal-dim"
        >
          {agentes.map((a) => (
            <option key={a.id} value={a.numero}>
              N.{a.numero}
            </option>
          ))}
        </select>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribiendo mensaje..."
          className="min-w-0 flex-1 border border-knd-border bg-knd-black-soft px-2 py-1.5 text-xs text-knd-terminal outline-none placeholder:text-knd-terminal-dim focus:border-knd-terminal-dim"
        />
        <button
          type="submit"
          className="border border-knd-terminal-dim px-3 py-1.5 text-xs uppercase tracking-wider text-knd-terminal transition-colors hover:bg-knd-terminal hover:text-knd-black"
        >
          Enviar
        </button>
      </form>
    </TerminalPanel>
  );
}
