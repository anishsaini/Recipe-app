import './doc.css'
import React, { useState } from'react'
import './Mealcard.tsx'
import Mealcards from './Mealcard.tsx'

const Mainpage = () => {

    const [search, setSearch] = useState("")
    const [count, setCount] = useState<{idMeal: string, strMeal: string, strMealThumb: string}[]>([])
    const inputvalue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const callapi = async() => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const data = await get.json()
        setCount(data.meals ? data.meals.map((meal: { idMeal: string, strMeal: string, strMealThumb: string }) => ({
            idMeal: meal.idMeal,
            strMeal: meal.strMeal,
            strMealThumb: meal.strMealThumb
        })) : [])
    }

  return (
    <div className="container">
        <div className="searchBar">
            <input type="text" placeholder="Enter Dishe" onChange={inputvalue} />
            <button onClick={callapi}>search</button>
        </div>
        <div>
            <Mealcards Meal={count} />
        </div>
    </div>
    )
}

export default Mainpage
