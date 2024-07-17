// import { useReducer, useEffect } from "react";

// const initialState = {
//   data: null,
//   status: "loading",
//   errormsg: null,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "LOADING":
//       return { data: null, status: "Loading", errormsg: null };
//     case "SUCCESS":
//       return { data: action.payload, errormsg: null, status: "Success" };
//     case "ERROR":
//       return { data: action.payload, errormsg: null, status: "Error" };
//   }
// }

// export function useQuery(dependencyList,apiCall) {
//     const [state, dispatch ] =useReducer(reducer,initialState);
//     useEffect(()=>{
//         if(dependencyList[0]?.length === 0) return;
//         dispatch({type: "LOADING"});
//         fetch(apiCall)
//         .then((res)=>{
//             return res.json;
//         })
//         .then((data) => {
//         console.log({ data });
//         if (data.error) {
//           throw new Error(data.error.message);
//         }
//         dispatch( type: "")
//       })
//       .catch((error) => {
//         setStatus("error");
//         setErrorMssg(error.message);
//       });
//   }, dependencyList);

//   return { data, errorMssg, status };
// }

import { useReducer, useEffect } from "react";

const initialState = {
  data: null,
  status: "loading",
  errorMssg: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { data: null, errorMssg: null, status: "loading" };
    case "SUCCESS":
      return { data: action.payload, errorMssg: null, status: "success" };
    case "ERROR":
      return { data: null, errorMssg: action.errorMssg, status: "error" };
  }
}

export function useQuery(dependencyList, apiCall) {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   const [data, setData] = useState(null);
  //   const [status, setStatus] = useState("idle");
  //   const [errorMssg, setErrorMssg] = useState(""); // useState({data: null, status: idle, errorMssg: null})
  useEffect(() => {
    if (dependencyList[0]?.length === 0) return;
    // setStatus("loading");
    dispatch({ type: "LOADING" });
    fetch(apiCall)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        if (data.error) {
          throw new Error(data.error.message);
        }
        // setData(data);
        // setStatus("success");
        dispatch({ type: "SUCCESS", payload: data });
      })
      .catch((error) => {
        // setStatus("error");
        // setErrorMssg(error.message);
        dispatch({ type: "ERROR", errorMssg: error.message });
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyList);

  // return { data, errorMssg, status}
  return state;
}