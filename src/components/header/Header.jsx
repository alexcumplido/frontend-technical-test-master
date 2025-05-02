export function Header(props) {
  return (
    <header className={`${props.className || ""}`}>
      <h1>Github Extension Counter</h1>
      <p>Añade la URL del repositorio que quieras analizar</p>
    </header>
  );
}
