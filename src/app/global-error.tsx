"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#090d09] px-6 text-center font-mono">
        <p className="text-xs uppercase tracking-[0.3em] text-[#5c7a48]">
          Sistema KND
        </p>
        <h1 className="text-3xl font-bold uppercase tracking-wide text-[#b5372c]">
          Sistema comprometido
        </h1>
        <p className="max-w-md text-sm text-[#8fe36b]">
          Algo salió mal en el cuartel general. El equipo técnico (o sea,
          nosotros) ya fue notificado.
        </p>
        {error?.digest && (
          <p className="text-[10px] uppercase tracking-widest text-[#5c7a48]">
            Código: {error.digest}
          </p>
        )}
        <button
          onClick={() => reset()}
          className="mt-2 border-2 border-[#8fe36b] px-5 py-2 text-xs uppercase tracking-[0.15em] text-[#8fe36b] transition-colors hover:bg-[#8fe36b] hover:text-[#090d09]"
        >
          Reintentar conexión
        </button>
      </body>
    </html>
  );
}
