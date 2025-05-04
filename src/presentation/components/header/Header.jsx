import "./header.css";

export function Header({ className, content }) {
  return (
    <header className={className.header}>
      <h1 className={className.title}>{content.title}</h1>
      <p>{content.description}</p>
    </header>
  );
}
