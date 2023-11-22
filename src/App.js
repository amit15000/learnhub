import React, { useEffect } from "react";
import "./App.css";
import { filterData, apiUrl } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        toast.success("Done");
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards />h
    </div>
  );
}

export default App;
