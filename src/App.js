import { useState, useEffect } from "react";
import search from "./assets/images/search.svg";
import { useAxios } from "./hooks/useAxios";
import file from "./assets/images/file.svg";
import { Header } from "./components/header/Header";
import { Button } from "./components/button/Button";
import { Input } from "./components/input/Input";
import { List } from "./components/list/List";
import { Icon } from "./components/icon/Icon";

function App() {
  const [results, setResults] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const { getRepoData } = useAxios();
  const [filteredList, setFilteredList] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    getRepoData(inputValue).then((results) => setResults(results));
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
    <section>
      <Header />
      <form onSubmit={handleSubmit}>
        <Input
          value={inputValue}
          onChange={setInputValue}
          placeholder={"https://api.github.com/repos/[USER]/[REPO]"}
        />
        <Button>
          <Icon src={search} sizes={21} />
        </Button>
      </form>
      <div>
        <List elements={filteredList}>
          <Icon src={file} sizes={50} />
        </List>
      </div>
    </section>
  );
}

export default App;
