import React from "react"
import ReactDom from "react-dom/client"
import App from "./App"
// import ReactDom from "react-dom"

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
  
// ReactDom.render(<BookLists />, document.getElementById('root')) // This is no more supported in react 18