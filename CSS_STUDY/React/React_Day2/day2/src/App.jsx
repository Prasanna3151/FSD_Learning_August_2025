import './App.css'
import Child from './components/Child';

function App() {
  // const movies = [
  //   {
  //     id:1,
  //     title: "Venom",
  //     rating: 8.4,
  //     language: "English"
  //   },
  //   {
  //     id:2,
  //     title: "Avengers",
  //     rating: 9.1,
  //     language: "Tamil"
  //   }
  // ]

  // return (
  //   <>
  //     <List list={movies}/>
  //   </>
  // )
  const message = "Hi from APP.jsx";
  return (
    <div>
      <h1>Parent Component</h1> <hr />
      <Child msg = {message} />
    </div>
  )
}

// function List(props) {
//   return (
//     <ul>
//       {props.list.map((movie)=>{
//         return <li key={movie.id}>
//           <h1>Movie Name = {movie.title}</h1>
//           <h1>Movie Rating = {movie.rating} </h1>
//           <h2>Movie Language = {movie.language} </h2>
//         </li>
//       })}
//     </ul>
//   )
// }

export default App; 