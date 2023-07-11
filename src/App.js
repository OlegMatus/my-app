import './App.css';
import {createContext, useEffect, useState} from "react";
// import Users from "./Componenets/Users/Users";
import UsersComponent from "./Componenets/UsersComponent/UsersComponent";
import Posts from "./Componenets/UsersComponent/Posts/Posts";
import {Child} from "./Componenets/Child/Child";
const AppContext = createContext(null)
function App() {
  const[users,setUsers]=useState([]);
  const [userId, setUserId]=useState(null)
    const[characters, setCharacters] = useState([])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users').then(resp=>resp.json()).then(users=>
    setUsers(users))
  },[])
    useEffect(()=> {
        fetch('https://rickandmortyapi.com/api/character').then(value => value.json()).then(value => setCharacters(value))
    },[])
  return (
    <div className="App">
{/*<Users  users={users}/>*/}
<UsersComponent users={users} setUserId={setUserId}/>
      {userId&& <Posts userId={userId}/>}
        <AppContext.Provider value={characters}>
        <Child character={characters}/>
        </AppContext.Provider>
    </div>
  );
}
export default App;
