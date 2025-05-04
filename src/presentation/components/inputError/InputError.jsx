import "./inputError.css";
export function InputError({ className, text }) {
  return <span className={`${className || ""}`}>{text}</span>;
}
