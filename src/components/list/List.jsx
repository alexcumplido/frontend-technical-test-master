export function List(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>File Extension</th>
          <th>Repetitions</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props.elements).length > 0 &&
          Object.keys(props.elements).map((key, index) => (
            <tr key={index}>
              <td>
                <div>
                  {props.children}
                  <span>{key}</span>
                </div>
              </td>
              <td>{props.elements[key]}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
