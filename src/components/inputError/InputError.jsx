export function InputError(props) {
  return (
    <span
      style={{
        fontWeight: "bold",
        color: "red",
      }}
    >
      {props.text}
    </span>
  );
}
