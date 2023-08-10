// import React, {useEffect, useState} from 'react';
//
// const Lesson9 = () => {
//     const [users, setUsers] = useState([])
//     useEffect(() => {
//         fetch('https://rickandmortyapi.com/api/character')
//             .then(resp=> resp.json)
//             .then(data => console.log(data)
//             );
//     }, []);
//     return (
//         <div>
//             {users.map(user=> (
//                 <div>
//                     <p>{user.name}</p>
//                     {/*<img src={user.image} alt={image.name} style={{width:100,height:100}}/>*/}
//                 </div>
//                 ))}
//         </div>
//     );
// };
//
// export default Lesson9;