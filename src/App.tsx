import React,{useContext,useState,useEffect,createContext,useRef,useReducer} from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import useFetch from './useFetch';
const UserContext = createContext("Onkar" );

function Component1() {
  const [user, setUser] = useState("Onkar Patil");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

function App() {
  const[count,setCount]=useState(0);
  useEffect(()=>{
    document.title= ""+count
  },[count])


  const myRef = useRef(null)
  useEffect(() => {
    const node = myRef.current as any
    node.classList.add('something')
  })


const initialState = 0;
const reducer = (state: any, action: any) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};
const [count1, dispatch] = useReducer(reducer, initialState);


const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");



  return (
    
    <div className="App">
     hello onkar
      <br></br>
     <button onClick={()=>setCount( count +1)}>+</button>
     <h1>Count: {count}</h1>
     <button onClick={()=>setCount( count -1)}>-</button>
    
     {/* <Component1></Component1> */}
     <Component5></Component5>
     <div ref={myRef}>useRef</div>
     
     <div>
      <h2>{count1}</h2>
      <button onClick={() => dispatch("add")}>
        add
      </button>
      <button onClick={() => dispatch("subtract")}>
        subtract
      </button>
      <button onClick={() => dispatch("reset")}>
        reset
      </button>
    </div>
    <>
      data FETCHED
    </>
    </div>
  );
}


export default App;
