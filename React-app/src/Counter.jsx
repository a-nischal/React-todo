import "./App.css";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Counter({ count, setCount }) {
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <p>Button is clicked {count} times.</p>
    </>
  );
}

function App1() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [data, setData] = useState(null); // State to hold fetched data

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data"); // Replace with your API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call fetchData when component mounts

    console.log("Component mounted");

    // Clean-up function (optional)
    return () => {
      console.log("Component will unmount");
      // Cleanup tasks can be performed here if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    console.log("Count or Count2 changed:", count, count2);
  }, [count, count2]);

  return (
    <>
      <ul>
        <button onClick={() => setCount2(count2 + 1)}>
          count 2 ({count2})
        </button>
        <Counter count={count} setCount={setCount} />
        <Counter count={count} setCount={setCount} />
      </ul>

      {/* Display fetched data */}
      <div>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
}

export default App1;
