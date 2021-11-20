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
          <details>
                <summary>Create a User</summary>
                <form onSubmit={submitLogin}>
                  <label htmlFor="email">Email: </label>
                  <br />
                  <input type="text" name="email" value={entry.email} onChange={handleChange} />
                  <br />
                  <label htmlFor="password">Password: </label>
                  <br />
                  <input type="password" name="password" value={entry.password} onChange={handleChange} />
                  <br/>
                  <input className = "registerBtn" type="submit" value="Register"/>
                </form>
          </details>
      </>
    )

}

export default CreateLogin;
