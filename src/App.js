import { useState, useEffect } from "react";
import { useAxios } from "./hooks/useAxios";
import { Header } from "./components/header/Header";
import { List } from "./components/list/List";
import { validate } from "./clients/clientValidator";
import { Form } from "./components/form/Form";

function App() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { getRepoData } = useAxios();
  const [filteredList, setFilteredList] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate(inputValue, setErrorMessage)) {
      getRepoData(inputValue).then((results) => setResults(results));
    }
  };

  const groupItems = (items) => {
    const uniqs = items.reduce((acc, val) => {
      acc[val] = acc[val] === undefined ? 1 : (acc[val] += 1);
      return acc;
    }, {});
    setFilteredList(uniqs);
  };

  useEffect(() => {
    results.length > 0 && groupItems(results);
  }, [results]);

  return (
    <section className="component">
      <Header
        title={"Github Extension Counter"}
        text={"Write the URL of the repository to analyze"}
        className={"header"}
      />
      <Form
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
        errorMessage={errorMessage}
        placeholder={"https://api.github.com/repos/[USER]/[REPO]"}
        className={"form"}
      />
      <List elements={filteredList} className={"table-data"} />
    </section>
  );
}

export default App;
