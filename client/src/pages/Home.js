import React from "react";
import NavBar from "../components/NavBar";
import Cards from "../components/Cards";
import { useState } from "react";
import Users from "../not needed files/users";

function Home() {
  const [query, setQuery] = useState("");
  const[data, setData] = useState([])

  // const search = (data) =>{
  //   return data.filter((items)=>items.login.toLowerCase().includes(query))
  // }
  return (
    <div>
      <NavBar query={query} setQuery={setQuery} data={data} setData={setData} />
      {/* <Cards data={search(Users)} /> */}
      <Cards data={data} />
    </div>
  );
}
export default Home;
