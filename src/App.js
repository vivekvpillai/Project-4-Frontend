import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import moment from 'moment'
import React, { useState, useEffect } from 'react'

import Add from './components/Add'
import Edit from './components/Edit'
import Header from './components/Header'
import Footer from './components/Footer'
import CreateLogin from './components/CreateLogin'
import Login from './components/LoginForm'

function App() {
  let [entries, setEntries] = useState([])
  let [totalcals, setTotalcals] = useState()
  let [showAdd, setShowAdd] = useState(false)

  let [user, setUser] = useState([])

  const getEntries = () => {
    axios
      // .get('http://localhost:8000/api/foods')
      .get('https://powerful-sierra-13214.herokuapp.com/api/foods')
      .then((response)=> {
          // console.log(response.data[0].linked_users);
          // for(let i = 0; i < response.data.length; i++) {
          //     // console.log(response.data[i]);
          //     for(let j = 0; j < response.data[i].linked_users.length; j++){
          //         // console.log(response.data[i].linked_users[j]);
          //         if (response.data[i].linked_users[j] == user.id) {
          //             console.log(response.data[i]);
          //             setEntries(response.data[i])
          //             console.log(entries);
          //         }
          //     }
          // }
          // const data = response.data.filter(food => food.linked_users.includes(user.id))
          // console.log(data);
        totalCal(response.data)
        setEntries(response.data)
        console.log(response.data);
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

  //Calorie Total Calculator
  const totalCal = (values) => {
    let sum=0
    // console.log('sum ' + sum)
    for (let i=0; i<values.length;i++) {
      sum+=values[i].calories
      // console.log('test ' + values[i].calories)
      // console.log('hello')
    }
    // console.log('sum ' + sum)
    setTotalcals(sum)
  }

  //Modal
  const revealAdd = () => {
      showAdd ? setShowAdd(false) : setShowAdd(true)
  }

////////Login
  // const getUser = (loginInfo) => {
  //   axios
  //     // .get('http://localhost:8000/api/foods')
  //     .get('https://powerful-sierra-13214.herokuapp.com/api/user/' + loginInfo.id, loginInfo)
  //     .then((response)=> {
  //       setUsers(response.data)
  //       }
  //     )
  //     .catch((error) => console.error(error))
  // }

  const newLogin = (addUser) => {
    axios
      .post('https://powerful-sierra-13214.herokuapp.com/api/user', addUser).then((response) => {
        // setUsers(response.data)
        // console.log('response ' + response.data.email)
        // console.log('users ' + users.email)
      })
  }

  const handleLogin = (loginInfo) => {
    axios
      .put('https://powerful-sierra-13214.herokuapp.com/api/user/login', loginInfo)
      // .put('http://localhost:8000/api/foods/' + editEntry.id, editEntry)
      .then((response) => {
        setUser(response.data)
        localStorage.setItem('user', JSON.stringify(response.data))
      })
  }

  const handleLogOut = () => {
      setUser({});
      localStorage.clear();
  }

  useEffect(() => {
      const loggedInUser = localStorage.getItem('user');
      if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser)
          setUser(foundUser)
          // console.log(user);
      }
  }, [])



  useEffect(() => {
    getEntries()
  }, [])

  return (
    <div className = "container">
        <Header />
        <div className = "nav">
            <CreateLogin newLogin={newLogin}/>
            <Login handleLogin={handleLogin} />
            <button onClick={handleLogOut}>Log Out</button>
            {user.email}
        </div>
        <div className = "add">
            <button className="addBtn" onClick={revealAdd}>Add New Entry</button>
            {showAdd ?
                <>
                <div className = "addComp">
                    <div className = "addCompTextbox">
                        <h1>Add an Entry</h1>
                        <Add handleCreate={handleCreate} user={user}/>
                        <button className = "addClose" onClick={revealAdd}>Close</button>
                    </div>
                </div>
                </>
                :
                <></>
            }
        </div>
        <hr />
        <div className = "calories">
            <h1 className = "totalCalories"> Total Calories: {totalcals} </h1>
        </div>
        <hr />
        <div className="entries">
          {entries.map((entry) => {
            return(
              <div className="entry" key={entry.id}>
                <h3>Food: {entry.name}</h3>
                <img className = "imgOne" src={entry.image} />
                <br/>
                <div className = "bodyBot">
                    <Edit handleUpdate={handleUpdate} entry={entry} />
                </div>
                <h3>Calories: {entry.calories}</h3>
                <h3>Meal: </h3>
                <h3>Date: {entry.created_at}</h3>
                <button className = "deleteBtn" onClick={handleDelete} value={entry.id}>Remove</button>
              </div>
            )
          })}
        </div>
        <Footer />
    </div>
  );
}

export default App;
