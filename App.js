import Home from "./src/screens/Home"
import ItemListCategories from "./src/screens/ItemListCategories"
import { useState } from "react"
export default function App () {
  const [categorySelected, setCategorySelected]= useState ("");
  return (
  <>
    {categorySelected ? (

      <ItemListCategories />

    ):(
      <Home setCategorySelected={setCategorySelected}/> 

    )}
    
    

  </>)
  

};