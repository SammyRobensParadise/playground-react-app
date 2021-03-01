import React, { useState } from 'react'
import { getGithubContributions } from 'github-contributions-counter'
import JSONPretty from 'react-json-pretty'

import './App.css'

const App = () => {
  const [username, setUsername] = useState('')
  const [results, updateResults] = useState(null)
  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await getGithubContributions({ username: username })
    console.log(res)
    updateResults(res)
  }
  return (
    <div className="App">
      <h1>
        <code>npm i github-contributions-counter</code>
      </h1>
      <p>Enter a username and click "Submit" to try it out!</p>
      <div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            id="username-input"
            placeholder="SammyRobensParadise"
            style={{ width: '60%' }}
            autoFocus
            onChange={(event) => {
              setUsername(event.target.value)
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div style={{ marginTop: '40px' }}>
        <JSONPretty
          id="json-pretty"
          data={JSON.stringify(results)}
        ></JSONPretty>
      </div>
    </div>
  )
}

export default App
