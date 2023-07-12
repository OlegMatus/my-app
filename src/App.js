// import './App.css';
import {createContext, useEffect, useState} from "react";
// import Users from "./Componenets/Users/Users";
import UsersComponent from "./Componenets/UsersComponent/UsersComponent";
import Posts from "./Componenets/UsersComponent/Posts/Posts";
import {Child1} from "./Componenets/Child1/Child1";
import {Child2} from "./Componenets/Child2/Child2";

// function App() {
//   const[users,setUsers]=useState([]);
//   const [userId, setUserId]=useState(null)
//
//   useEffect(()=> {
//     fetch('https://jsonplaceholder.typicode.com/users').then(resp=>resp.json()).then(users=>
//     setUsers(users))
//   },[])
import React from 'react';
const Context = createContext(null);
const App = () => {
    const[data, setData] = useState([3,2,1]);
     return (
    <div className="App">
{/*<Users  users={users}/>*/}
{/*<UsersComponent users={users} setUserId={setUserId}/>*/}
{/*      {userId&& <Posts userId={userId}/>}*/}
        <Context.Provider value={{data,setData}}>
       <Child1/>
        <hr/>
        <Child2/>
        </Context.Provider>
    </div>
  );
}
export default App;
export {Context}
