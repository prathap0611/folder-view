import React from "react";
import "./App.css";
import { List } from "./components/list";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./services/data.service";
import NavBar from "./components/nav-bar";

function App() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["backendData"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    let errorObj = error as Error;
    return <span>Error: {errorObj.message}</span>;
  }

  return (
    <div className="App">
      <header>
        {/* <h1>Atlassian Browser Interview</h1>
        <p>Datetime: {new Date().toLocaleDateString()}</p> */}
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
