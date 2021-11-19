import React, { useState } from 'react'

const CreateLogin = (props) => {
    let emptyEntry = { email: '', password: '' }
    const [entry, setEntry] = useState(emptyEntry)

    const handleChange = (event) => {
      setEntry({...entry, [event.target.name]: event.target.value})
    }

    const submitLogin = (event) => {
      event.preventDefault()
      console.log(entry)
      props.newLogin(entry)
    }

    return (
      <>
        <form onSubmit={submitLogin}>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" onChange={handleChange} value={entry.email} />
          <br />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" onChange={handleChange} value={entry.password} />
          <br/>
          <input type="submit" />
        </form>
      </>
    )
  }
}
