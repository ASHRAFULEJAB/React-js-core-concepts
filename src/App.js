
import { useEffect, useState } from 'react';
import './App.css';
// const singers=[
//   {name:'jdvnnjf',job:'lkk'},
//   {name:'uifdgrsuidr',job:'89r9'},
//   {name:'jdvnnjf',job:'lkk'},
//   {name:'uifdgrsuidr',job:'89r9'}
// ]

function App() {
  // const nayoks = [ 'a','b','t','r','o','u'];
  return (
    <div className='App'>
      <ExternalUsers></ExternalUsers>
      {/* <Person></Person> */}
      {/* <h1>We are here??</h1>
      {/* {
       nayoks.map(nayok=> <Person name={nayok}></Person>)
      } */}
      {/* {
        singers.map(singer=> <Person name={singer.name} price={singer.job}></Person>)
      } */} 
      {/* <Person name="Kit" number="019999"></Person> */}
    </div>
  );
}

function ExternalUsers(){
  const [users,setUsers]= useState([]);
  // console.log(users)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h1>External User</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} Email={user.email}></User>)
      }
    </div>
  );
}
function User(props){
  return (
  <div>
    <h1>Name:{props.name}</h1>
    <p>Email: {props.Email}</p>
  </div>
  );
}

// function Person(){
//   // console.log(props)
//   const [count,setCount]= useState(30)
//   const increaseAdd = ()=>setCount(count+1)
//   const decreaseAdd = ()=>setCount(count-1)
  
//   return(


//     <div>
//    <h1>Count: {count}</h1>
//    <button onClick={increaseAdd}>Increase</button>
//    <button onClick={decreaseAdd}>Deccrease</button>
//     </div>
//     // <div className='extra-container'>
    
//     //    <h1>
    //    {props.name}
    //   </h1>
    //   <p>price:{props.price}</p> 
    // </div>

  // );
// }

export default App;
