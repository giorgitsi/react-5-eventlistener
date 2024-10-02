import './App.css'

function App() {


  function func1() {
    console.log(4)
  }


  return (
    <>
      <button onClick={func1}>Click me !!</button>
      <button onDoubleClick={func1}>click double</button>
      <button onDoubleClick={() => {
        console.log("hello")
      }}>click</button>
    </>
  )
}

export default App
