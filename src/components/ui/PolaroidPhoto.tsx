interface PolaroidPhotoProps {
  src: string;
  alt: string;
  rotacion?: number;
  caption?: string;
  pin?: boolean;
  className?: string;
}

export default function PolaroidPhoto({
  src,
  alt,
  rotacion = 0,
  caption,
  pin = true,
  className = "",
}: PolaroidPhotoProps) {
  return (
    <div
      className={`relative bg-knd-paper p-2 shadow-[0_10px_24px_rgba(0,0,0,0.5)] ${
        caption ? "pb-9" : "pb-3"
      } ${className}`}
      style={{ transform: `rotate(${rotacion}deg)` }}
    >
      {pin && (
        <span className="absolute -top-3 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-red-400 via-knd-red to-knd-red-dark shadow-[0_2px_4px_rgba(0,0,0,0.6)]" />
      )}
      {/* aspect-square fija el marco para que object-cover recorte sin
          deformar, sin importar la orientación/proporción de la foto original */}
      <div className="aspect-square overflow-hidden bg-knd-black-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={encodeURI(src)}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </div>
      {caption && (
        <span className="absolute bottom-1.5 left-0 right-0 text-center font-hand text-sm leading-none text-knd-ink">
          {caption}
        </span>
      )}
    </div>
  );
}
