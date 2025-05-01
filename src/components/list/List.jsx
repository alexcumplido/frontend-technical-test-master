export function List(props) {
    return(
        <ul>
            {Object.keys(props.elements).length > 0 &&
                Object.keys(props.elements).map((key, index) => (
                <li key={index}>
                    <div>
                        {props.children}
                        <div>{key}</div>
                    </div>
                    <div>{props.elements[key]}</div>
                </li>
            ))}
        </ul>
    )
}