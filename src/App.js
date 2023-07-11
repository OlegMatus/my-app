import './App.css';
import {useEffect, useState} from "react";
import Users from "./Componenets/Users/Users";
import UsersComponent from "./Componenets/UsersComponent/UsersComponent";
import Posts from "./Componenets/UsersComponent/Posts/Posts";

function App() {
  const[users,setUsers]=useState([]);
  const [userId, setUserId]=useState(null)
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users').then(resp=>resp.json()).then(users=>
    setUsers(users))
  },[])
  return (
    <div className="App">
{/*<Users  users={users}/>*/}
<UsersComponent users={users} setUserId={setUserId}/>
      {userId&& <Posts userId={userId}/>}
    </div>
  );
}
export default App;
