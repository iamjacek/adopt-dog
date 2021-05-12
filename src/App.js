
import ReactDOM from 'react-dom'
import React from 'react'
import SearchParams from "./SearchParams"

const App = () => {

  return (
    <div>
      <h1>Adopt Dog!</h1>
     
      <SearchParams />
    </div>
    
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
