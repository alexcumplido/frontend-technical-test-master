import "./input.css";

export function Input({ value, placeholder, onChange, className }) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className={`${className}`}
    />
  );
}
