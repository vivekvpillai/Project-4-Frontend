import React, { useState } from 'react'

const Edit = (props) => {
  // let emptyEntry = { id: props.id, name: '', image: '', calories: ''} not needed because we passed props.entry
  const [entry, setEntry] = useState(props.entry)

  const handleChange = (event) => {
    setEntry({...entry, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(entry)
  }

  return(
    <>
    <details>
      <summary>Edit Entry </summary>
      <form className = "editForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input className = "editFormField" type="text" name="name" onChange={handleChange} value={entry.name} />
        <label htmlFor="image">Image: </label>
        <input className = "editFormField" type="text" name="image" onChange={handleChange} value={entry.image} />
        <label htmlFor="calories">Calories: </label>
        <input className = "editFormField" type="number" name="calories" onChange={handleChange} value={entry.calories} />
        <input className = "editSubmit" type="submit" />
      </form>
    </details>
    </>
  )

}

export default Edit;
