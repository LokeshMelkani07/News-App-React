import React from "react";
import Stories from "./Stories";
import Pagination from "./Pagination";
import Search from "./Search";

const App = () => {
  return (
    <>
      <h1>Welcome to our News App</h1>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
