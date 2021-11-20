import React, { useState } from 'react'

const Add = (props) => {
  let emptyEntry = { name: '', image: '', calories: '', linked_users:[]}
  const [entry, setEntry] = useState(emptyEntry)

  const handleChange = (event) => {
    setEntry({...entry, [event.target.name]: event.target.value})

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(entry)
    entry.linked_users.push(props.user.id)
    console.log(entry);
    props.handleCreate(entry)
  }

  return (
    <>
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input className = "addFormField" type="text" name="name" onChange={handleChange} value={entry.name} />
        <br />
        <br />
        <label htmlFor="image">Image: </label>
        <input className = "addFormField" type="text" name="image" onChange={handleChange} value={entry.image} />
        <br/>
        <br/>
        <label htmlFor="calories">Calories: </label>
        <input className = "addFormField" type="number" name="calories" onChange={handleChange} value={entry.calories} />
        <br/>
        <input className = "addSubmit" type="submit" />
      </form>
    </>
  )
}

export default Add;
