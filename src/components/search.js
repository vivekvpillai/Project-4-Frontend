import React, { useState } from 'react'


const SearchBar = () => {

  let [foodCal, setFoodCal] = useState()
  let [query, setQuery] = useState('tomato')

  const handleChange = (event)=>{
    setQuery(event.target.value)
  }

  const submitSearch = () => {
    $.getJSON({
        method: 'GET',
        url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
        headers: { 'X-Api-Key': 'ymUhvvBI6d53erZlZI63Bw==knh8lWhx24cZ4ze1'},
        contentType: 'application/json',
    }).then(
      (data) => {
        console.log(data.items[0].calories)
        setFoodCal(data.items[0].calories)
      }
    );
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

export default App;
