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
      <div>
        <details>
            <summary className="LoginDrop">Login</summary>
            <form onSubmit={submitLogin}>
                <label htmlFor="email">Email: </label>
                <br />
                <input type="text" name="email" value={entry.email} onChange={handleChange} />
                <br />
                <label htmlFor="password">Password: </label>
                <br />
                <input type="password" name="password" value={entry.password} onChange={handleChange} />
                <br/>
                <input className = "loginBtn" type="submit" value="Login"/>
            </form>
        </details>
      </div>
    )

}

export default Login;
