import React, { useState } from 'react'

const CreateLogin = (props) => {
    let emptyEntry = { email: '', password: '' }
    const [entry, setEntry] = useState(emptyEntry)
    const [showCreate, setShowCreate] = useState(false)

    const handleChange = (event) => {
      setEntry({...entry, [event.target.name]: event.target.value})
    }

    const submitLogin = (event) => {
      event.preventDefault()
      console.log(entry)
      props.newLogin(entry)
    }

    const toggleShow = () => {
      showCreate ? setShowCreate(false) : setShowCreate(true)
    }

    return (
      <>
        <div className="SignContainer">
          <div>
                <p className="Createbt" onClick={toggleShow}>Sign Up</p>
                {showCreate?
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
                    :
                   <></>
                }
          </div>
        </div>
      </>
    )

}

export default CreateLogin;
