export function Button (props) {
    return (
        <button type="submit">
            <img src={props.src} width={21} height={21} alt="Buscar" />
        </button>
    )
}