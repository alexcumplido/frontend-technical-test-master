import { useState, useEffect } from "react";
import { useAxios } from "./application/hooks/useAxios.jsx";
import { Header } from "./presentation/components/header/Header.jsx";
import { List } from "./presentation/components/table/Table.jsx";
import { Form } from "./presentation/components/form/Form";
import { groupItems } from "./domain/utils/utils.js";
import { GITHUB_API_PLACHOLDER } from "./infrastructure/constants/constants.js";
import { Loader } from "./presentation/components/loader/Loader.jsx";
import { validateInput } from "./domain/utils/inputValidate.js";
function App() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { getRepoData } = useAxios();
  const [filteredList, setFilteredList] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInput(inputValue, setErrorMessage)) {
      setResults([]);
      setFilteredList({});
      setLoading(true);
      getRepoData(inputValue)
        .then((results) => setResults(results))
        .finally(() => setLoading(false));
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
      {loading ? (
        <Loader className={"loader"} />
      ) : (
        <List
          elements={filteredList}
          className={{
            table: "table",
            tableData: "table__data",
            tableDataContainer: "table__data-container",
          }}
        />
      )}
    </section>
  );
}

export default App;
