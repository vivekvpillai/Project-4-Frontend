import React, { useState } from 'react'

const Login = (props) => {
    let emptyEntry = { email: '', password: '' }
    const [entry, setEntry] = useState(emptyEntry)

    const handleChange = (event) => {
      setEntry({...entry, [event.target.name]: event.target.value})
    }

    const submitLogin = (event) => {
      event.preventDefault()
      console.log(entry)
      props.handleLogin(entry)
    }

    return (
      <>
        <details>
            <summary>Login</summary>
            <form onSubmit={submitLogin}>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" value={entry.email} onChange={handleChange} />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={entry.password} onChange={handleChange} />
                <br/>
                <input type="submit" value="Login"/>
            </form>
        </details>
      </>
    )

}

export default Login;
