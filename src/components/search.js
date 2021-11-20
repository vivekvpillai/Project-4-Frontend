import React, { useState } from 'react'
import axios from 'axios'

const SearchBar = () => {

  let [foodCal, setFoodCal] = useState()
  let [query, setQuery] = useState('tomato')
  console.log(foodCal)

  const handleChange = (event)=>{
    setQuery(event.target.value)
  }

  const submitSearch = (event) => {
    console.log('wow')
    event.preventDefault()
    axios
        .get('https://api.calorieninjas.com/v1/nutrition?query=' + query,
        {headers:  {'X-Api-Key': 'ymUhvvBI6d53erZlZI63Bw==knh8lWhx24cZ4ze1'}}
        // ,contentType: 'application/json',
    ).then(
      (data) => {
        console.log(data.data.items[0].calories)
        setFoodCal(data.data.items[0].calories)
      }
    );
    console.log('asgew')
  }


  return (
    <div>
    <form onSubmit={submitSearch}>
      <label htmlFor="search">Search: </label>
      <input type="text" name="search" value={query} onChange={handleChange} />
      <br/>
      <input type="submit" value="Register"/>
    </form>
    </div>
  );
};

export default SearchBar;
