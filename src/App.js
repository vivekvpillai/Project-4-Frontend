import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

// import Add from './components/Add'
// import Edit from './components/Edit'

function App() {
  let [entries, setEntries] = useState([])

  const getEntries = () => {
    axios
      .get('http://localhost:8000/api/foods')
      .then(
        (response)=> setEntries(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  const handleCreate = (addEntry) => {
    axios
      .post('http://localhost:8000/api/foods', addEntry).then((response) => {
        console.log(response)
        getEntries()
      })
  }

  const handleDelete = (event) => {
    axios
      .delete('http://localhost:8000/api/foods/' + event.target.value)
      .then((response) => {
        getEntries()
      })
  }

  const handleUpdate = (editEntry) => {
    axios
      .put('http://localhost:8000/api/foods/' + editEntry.id, editEntry)
      .then((response) => {
        getEntries()
      })
  }

  useEffect(() => {
    getEntries()
  }, [])

  return (
    <>
    <h1>Hello World</h1>
    <div className="entries">
      {entries.map((entry) => {
        return(
          <div className="entry" key={entry.id}>
            <h4>Name: {entry.name}</h4>
            <br/>
            <img src={entry.image} />
            <br/>
            <h4>Calories: {entry.calories}</h4>
            <br/>
          </div>
        )
      })}
    </div>
    </>
  );
}

export default App;
