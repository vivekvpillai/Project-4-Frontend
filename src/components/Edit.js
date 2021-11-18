import React, { useState } from 'react'

const Edit = (props) => {
  let emptyEntry = { id: props.id, name: '', image: '', calories: ''}
  const [entry, setEntry] = useState(emptyEntry)

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" onChange={handleChange} value={entry.name} />
        <br />
        <br />
        <label htmlFor="image">Image: </label>
        <input type="text" name="image" onChange={handleChange} value={entry.image} />
        <br/>
        <br/>
        <label htmlFor="Calories">Calories: </label>
        <input type="number" name="calories" onChange={handleChange} value={entry.calories} />
        <br/>
        <input type="submit" />
      </form>
    </details>
    </>
  )

}

export default Edit;
