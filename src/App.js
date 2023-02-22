import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import FilteringComponent from "./components/Filtering";
import PaginationComponent from "./components/Pagination";
import SortingComponent from "./components/Sorting";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  // const string1 = "banana";
  // const string2 = "banana";

  // console.log(string1.localeCompare(string2));
  return (
    <div className="App">
      <PaginationComponent items={data} />
      <FilteringComponent items={data} />
      <SortingComponent items={data} />
    </div>
  );
}

export default App;
