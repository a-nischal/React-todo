// import "./App.css";
// import { createContext, useContext } from "react";
import Memo from "./UseCallBack";
// import Users from "./User";
// import Weather from "./Weather";
// import Counter from "./Counter";

// function App() {
//   return (
//     <>
//       {/* <Weather /> */}
//       {/* <Users /> */}
//       <Counter/>
//     </>
//   );
// }

// const UserContext = createContext(null);

// const Child = () => {
//   const user = useContext(UserContext);
//   return <h1>{user.name}</h1>;
// };

// const Parent = () => {
//   return <Child />;
// };

// const GrandParent = () => {
//   return <Parent />;
// };

const hello = () => {
  // const user = { name: "Nischal", age: 21 };
  return (
    <Memo />
    // <UserContext.Provider value={user}>
    //   <GrandParent />

    // </UserContext.Provider>
  );
};

export default hello;

// 1. using local storage in todos app
// 2. useEffect (api call revise)
// 3. pokenmon app, different varaible for managing state
// 4. use state object.
