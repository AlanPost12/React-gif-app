import { useState } from "react"
import GifGrid  from './Components/GifGrid'
import AddCategory from "./Components/AddCategory";




const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Demon Slayer']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories,]);
  }



  return (
    <>

      <h1>Gif apps</h1>

      <AddCategory
        //setCategories={ setCategories }
        onNewValue={onAddCategory}
      />


        {categories.map(category => (
          <GifGrid key={category} category={category}/>
        ))
        }




    </>
  )
}

export default GifExpertApp
