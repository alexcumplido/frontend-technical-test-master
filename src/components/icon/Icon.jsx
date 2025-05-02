export function Icon(props) {
  return (
    <img
      src={props.src}
      width={props.sizes}
      height={props.sizes}
      alt={props.text}
    />
  );
}
