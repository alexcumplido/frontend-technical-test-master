import { useState, useEffect } from 'react'
import search from "./assets/images/search.svg";
import { useAxios } from "./hooks/useAxios";
import file from "./assets/images/file.svg";

function App() {

  const [results, setResults] = useState([]);

	const [inputValue, setInputValue] = useState('');
	const { getRepoData } = useAxios();
  const [ filteredList, setFilteredList ] = useState({})

	const handleSubmit = (event) => {
		event.preventDefault();
		getRepoData(inputValue).then(results => setResults(results))
	}

	const groupItems = (items) => {
		const uniqs = items.reduce((acc, val) => {
			acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
			return acc;
		}, {});
		setFilteredList(uniqs)
	}

	useEffect(() => {
		results.length > 0 && groupItems(results)
	}, [results]);

  return (
    <div>
      <header>
       <h2>Github Extension Counter</h2>
        <p>Añade la URL del repositorio que quieras analizar</p>
      </header>
      <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder="https://api.github.com/repos/[USER]/[REPO]"/>
          <button type="submit">
            <img src={search} width={21} height={21} alt="Buscar" />
          </button>
    </form>
    <div>
			{ Object.keys(filteredList).length > 0 &&
				Object.keys(filteredList).map((key, index) => (
						<div key={index}>
							<div>
								<img src={file} width={50} height={40} alt="Buscar" />
								<div>{key}</div>
							</div>
							<div>{filteredList[key]}</div>
						</div>
					)
				)
			 }
		</div>
    </div>
  );
}

export default App;
