import { useState, useEffect } from "react";
import { useAxios } from "./application/hooks/useAxios.jsx";
import { Header } from "./presentation/components/header/Header.jsx"; //import { Header } from "./components/header/Header";
import { List } from "./presentation/components/table/Table.jsx";
import { validate } from "./domain/clientValidator.js";
import { Form } from "./presentation/components/form/Form";
import { groupItems } from "./domain/utils/utils.js";
import { GITHUB_API_PLACHOLDER } from "./infrastructure/constants/constants.js";
function App() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { getRepoData } = useAxios();
  const [filteredList, setFilteredList] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate(inputValue)) {
      setErrorMessage("");
      getRepoData(inputValue).then((results) => setResults(results));
    } else {
      setErrorMessage("Not a valid URL");
    }
  };

  useEffect(() => {
    if (results.length > 0) {
      const grouped = groupItems(results);
      setFilteredList(grouped);
    }
  }, [results]);

  return (
    <section className="component">
      <Header
        content={{
          title: "Github Extension Counter",
          description: "Write the URL of the repository to analyze",
        }}
        className={{
          header: "header",
          title: "header__title",
        }}
      />
      <Form
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
        errorMessage={errorMessage}
        placeholder={GITHUB_API_PLACHOLDER}
        className={{
          form: "form",
          input: "form__input",
          button: "form__submit",
          error: "form__error-show",
        }}
      />
      <List
        elements={filteredList}
        className={{
          table: "table",
          tableData: "table__data",
          tableDataContainer: "table__data-container",
        }}
      />
    </section>
  );
}

export default App;
