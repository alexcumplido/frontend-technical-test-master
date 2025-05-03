import "./table.css";
import file from "../../assets/images/file.svg";
import { Icon } from "../icon/Icon";

export function List({ elements, className }) {
  const extensions = Object.keys(elements);
  return (
    <table className={className.table}>
      <thead>
        <tr>
          <th>File Extension</th>
          <th>Number of files</th>
        </tr>
      </thead>
      <tbody>
        {extensions.length > 0 ? (
          extensions.map((key, index) => (
            <tr key={index}>
              <td className={className.tableData}>
                <div className={className.tableDataContainer}>
                  <Icon src={file} sizes={21} text={"Search"} />
                  <span>{key}</span>
                </div>
              </td>
              <td className={className.tableData}>{elements[key]}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td className={className.tableData}>No results</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
