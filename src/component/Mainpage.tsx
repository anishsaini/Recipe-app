import './doc.css'
import React, { useState } from'react'
// import './Mealcard.tsx'
import Mealcard from './Mealcard.tsx'
const Mainpage = () => {

    const [search, setSearch] = useState("")
    const [count, setCount] = useState<Meal[]>([])
    const inputvalue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const callapi = async() => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const data = await get.json()
        console.log(data.meals)
        setCount(data.meals || [])
    }
    console.log(count)

  return (
    <div className="container">
        <div className="searchBar">
            <input type="text" placeholder="Enter Dish" onChange={inputvalue} />
            <button onClick={callapi}>search</button>
        </div>
        <div>
            {count.map((meal) => (
                <Mealcard key={meal.idMeal} meal={meal} />
            ))}
        </div>
    </div>
  )
}

export default Mainpage
