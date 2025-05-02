import { useState, useEffect } from "react";
import search from "./assets/images/search.svg";
import { useAxios } from "./hooks/useAxios";
import file from "./assets/images/file.svg";
import { Header } from "./components/header/Header";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { List } from "./components/list/List";
import { Icon } from "./components/icon/Icon";
import { validate } from "./clients/clientValidator";
import { InputError } from "./components/inputError/InputError";

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
      <Header className={"header"} />
      <form className="form" onSubmit={handleSubmit}>
        <Input
          value={inputValue}
          onChange={setInputValue}
          placeholder={"https://api.github.com/repos/[USER]/[REPO]"}
          className={"form__input"}
        />
        <InputError className={"form__error-show"} text={errorMessage} />

        <Button type={"submit"} className={"form__submit"}>
          <Icon src={search} sizes={21} text={"Search"} />
        </Button>
      </form>
      <List elements={filteredList} className={"table-data"}>
        <Icon src={file} sizes={21} text={"Search"} />
      </List>
    </section>
  );
}

export default App;
