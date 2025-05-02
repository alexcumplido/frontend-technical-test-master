export function Input(props) {
  return (
    <input
      value={props.inputValue}
      onChange={(event) => props.onChange(event.target.value)}
      placeholder={props.placeholder}
      className={`${props.className || ""}`}
    />
  );
}
