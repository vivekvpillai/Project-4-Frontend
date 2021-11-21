import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Add = (props) => {

  let [foodCal, setFoodCal] = useState()
  let [query, setQuery] = useState('')
  let emptyEntry = { name: '', image: '', calories: foodCal || '', linked_users: [] }

  const [entry, setEntry] = useState(emptyEntry)


  const handleChange = (event) => {
    if (event.currentTarget.value.slice(-1) === '\u2063') {
      let foodName = event.currentTarget.value.slice(0, -1);
      let foundFood = props.entries.filter((food) => food.name === foodName)
      const myObject = { name: foundFood[0].name, image: foundFood[0].image, calories: foundFood[0].calories, linked_users: [] }
      setEntry(myObject)
    } else {
      setEntry({ ...entry, [event.target.name]: event.target.value })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    entry.linked_users.push(props.user.id)
    props.handleCreate(entry)
  }

  /////Calorie Search
  const handleQueryChange = (event) => {
    setQuery(event.target.value)
  }

  const submitSearch = (event) => {
    console.log('wow')
    event.preventDefault()
    axios
      .get('https://api.calorieninjas.com/v1/nutrition?query=' + query,
        { headers: { 'X-Api-Key': 'ymUhvvBI6d53erZlZI63Bw==knh8lWhx24cZ4ze1' } }
        // ,contentType: 'application/json',
      ).then(
        (data) => {
          console.log(data)
          console.log(data.data.items[0].calories)
          setFoodCal(data.data.items[0].calories)
        }
      )
      .catch((error) => setFoodCal('Not found, please manually add')
      )
  }

 
  return (
    <>
      <div className="addSection">
        <h1>Add an Entry</h1>
        <form className="addForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input className="addFormField" id="food-name" type="text" name="name" autoComplete="off" list="food-data" onChange={handleChange} value={entry.name} />
          <datalist id="food-data">
            {props.entries.map((afood) => {
              return (
                <option id={afood.id}>{afood.name}&#8291;</option>
              )
            })}
          </datalist>
          <br />
          <label htmlFor="image">Image: </label>

          <input className="addFormField" type="text" name="image" onChange={handleChange} value={entry.image} />
          <br />
          <label htmlFor="calories">Calories: </label>
          <input className="addFormField" type="number" name="calories" onChange={handleChange} value={entry.calories} />
          <br />
          <input className="addSubmit" type="submit" />
        </form>
      </div>

      <div className="searchCals">
        <h1>Search A Food's Calorie</h1>
        <form onSubmit={submitSearch}>
          <label htmlFor="search">Search: </label>
          <br />
          <input className="addFormField" type="text" name="search" value={query} onChange={handleQueryChange} />
          <br />
          <input className="searchBtn" type="submit" value="Search" />
          <br />
        </form>
        <p><u>Calories: {foodCal}</u></p>
      </div>
    </>
  )
}

export default Add;
