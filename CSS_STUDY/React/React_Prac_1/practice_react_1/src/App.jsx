import './App.css'
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {
  let name = "Prasanna";
  let instructor = "Manikandan"
  let moduleName = "React"

  return (
    <>
    <Page1/>
    <Page2/>
    <p>I am {name} and I am learning {moduleName} to upskill my knowledge with {instructor} and be in a good position.</p>
    
    </>
  )
}

export default App
