export function Icon({ src, sizes, text }) {
  return <img src={src} width={sizes} height={sizes} alt={text} />;
}
