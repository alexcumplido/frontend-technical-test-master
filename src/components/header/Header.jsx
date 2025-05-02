import "./header.css";

export function Header({ className, title, text }) {
  return (
    <header className={`${className || ""}`}>
      <h1>{title}</h1>
      <p>{text}</p>
    </header>
  );
}
