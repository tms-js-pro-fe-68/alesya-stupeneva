import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'




export default function App() {
  const [count, setCount] = useState(0);
  const [catFacts, setCatFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  setIsLoading(true);
  fetch("https://cat-fact.herokuapp.com/facts")

   .then((response) => response.json())
   .then((data) => {
     setCatFacts(data);
     setIsLoading(false);
   });
},[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>{isLoading && 'Loading...'}</p>
        <ul>
          {catFacts.map(({ _id: id, text}) => (
            <li  
            style={{
              listStyleType:'none',
              border: '1px solid green'
              }} key={id}>{text}</li>
          ))}
        </ul>    
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}


