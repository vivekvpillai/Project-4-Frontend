import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

import Add from './components/Add'
import Edit from './components/Edit'

function App() {
  let [entries, setEntries] = useState([{id:6, name: 'test', image: 'https://www.livewellbakeoften.com/wp-content/uploads/2021/05/Key-Lime-Pie-NEW-7s.jpg', calories: 100}])
  let [totalcals, setTotalcals] = useState()

  const getEntries = () => {
    axios
      // .get('http://localhost:8000/api/foods')
      .get('https://powerful-sierra-13214.herokuapp.com/api/foods')
      .then((response)=> {
        totalCal(response.data)
        setEntries(response.data)
        }
      )
      .catch((error) => console.error(error))
  }

  const handleCreate = (addEntry) => {
    axios
      // .post('http://localhost:8000/api/foods', addEntry)
      .post('https://powerful-sierra-13214.herokuapp.com/api/foods', addEntry).then((response) => {
        console.log(response)
        getEntries()
      })
  }

  const handleDelete = (event) => {
    axios
      .delete('https://powerful-sierra-13214.herokuapp.com/api/foods/' + event.target.value)
      // .delete('http://localhost:8000/api/foods/' + event.target.value)
      .then((response) => {
        getEntries()
      })
  }

  const handleUpdate = (editEntry) => {
    axios
      .put('https://powerful-sierra-13214.herokuapp.com/api/foods/' + editEntry.id, editEntry)
      // .put('http://localhost:8000/api/foods/' + editEntry.id, editEntry)
      .then((response) => {
        getEntries()
      })
  }

  const totalCal = (values) => {
    let sum=0
    console.log('sum ' + sum)
    for (let i=0; i<values.length;i++) {
      sum+=values[i].calories
      console.log('test ' + values[i].calories)
      console.log('hello')
    }
    console.log('sum ' + sum)
    setTotalcals(sum)
  }

  useEffect(() => {
    getEntries()
  }, [])

  return (
    <>
    <h1>Add an Entry</h1>
    <Add handleCreate={handleCreate} />
    <hr />
    <h1> Total Calories: {totalcals} </h1>
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
            <Edit handleUpdate={handleUpdate} entry={entry} />
            <button onClick={handleDelete} value={entry.id}>X</button>
          </div>
        )
      })}
    </div>
    </>
  );
}

export default App;
