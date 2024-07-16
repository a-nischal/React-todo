import { useState } from "react";
import "./App.css";
import "./Counter";
// import App1 from "./Counter";
import { useEffect } from "react";

async function getGithubUserDataByUserName() {
  const res = await fetch("https://api.github.com/users/Basanta-Kc");
  const data = await res.json();
  const followersRes = await fetch(data.followers_url);
  const floowersData = await followersRes.json();
}



// function Button() {
//   return (
//     <div>
//       <button>test</button>
//       <button>another test</button>
//     </div>
//   );
// }

// eslint-disable-next-line react/prop-types
// function Button2({ color = "blue", text = "Button2" }) {
//   return (
//     <button
//       style={{
//         backgroundColor: color,
//       }}
//     >
//       {text}
//     </button>
//   );
// }

function AdminPanel() {
  return <h2>Admin Panel</h2>;
}

function UserPanel() {
  return <h2>User Panel</h2>;
}
// const h1Style = {
//   color: "blue",
// };

const user = {
  name: "basnata",
  age: 10,
  imgUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97",
  roles: ["admin", "user"],
  isAdmin: null,
};

function Call() {
  const [username, setUsername] = useState("J3rRy0546");
  const [user, setUser] = useState(null);

  useEffect(() => {
    getGithubUserDataByUserName(username).then(({ user }) =>{
      setUser(user);
    } );
    setUser( user );
  }, [username] 
)
  
}

function App() {
  return (
    <>
      <h1 style={{ color: "red" }} className="main-heading">
        Hello {`${user.name} ${user.age}`}
      </h1>

      <img src={user.imgUrl} width="100px" />
      {user.isAdmin ? <AdminPanel /> : <UserPanel />}

      {/* <Button />
      {/* <Button />
      <Button />
      <Button /> }
      <Button2   />
      <App1/> */}
      <Call/>
    </>
  );
}

export default App;
