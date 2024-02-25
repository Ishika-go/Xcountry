// import { useState, useEffect } from "react";

// export default function App() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data))
//       .catch((err) => console.log("Error of fetching: ", err));
//   }, []);

//   const allCountryContainer = {
//     height: "100vh",
//     width: "100vw",
//     display: "flex",
//     flexWrap: "wrap",
//   };
//   const singleCountryCard = {
//     width: "200px",
//     // height: "200px",
//     padding: "10px",
//     margin: "10px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center",
//     borderRadius: "10px",
//     border: "1px solid grey",
//   };

//   const imageStyle = {
//     height: "100px",
//     width: "100px",
//   };

//   return (
//     <div style={allCountryContainer}>
//       {countries.map((item) => (
//         <div key={item.cca3} style={singleCountryCard}>
//           <img src={item.flags.png} alt={item.name.common} style={imageStyle} />
//           <h2>{item.name.official}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }
import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error of fetching: ", err));
  }, []);
  const countryCard = {
    width: "200px",
    padding: "10px",
    margin: "10px",
    border: "1px solid grey",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };
  const countryContainer = {
    height: "100vh",
    display: "flex",
    flexWrap: "wrap",
  };
  return (
    <div style={countryContainer}>
      {countries.map((country) => (
        <div key={country.cca3} style={countryCard}>
          <img
            src={country.flags.png}
            alt={country.name.common}
            width="100px"
          />
          <h2>{country.name.official}</h2>
        </div>
      ))}
    </div>
  );
}