import React from "react";
import './App.css'
import APIbutton from "./Components/APIbutton.jsx";
import {useState} from "react";
import Catinfobutton from "./Components/Catinfobutton.jsx";

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {

  const [catInfo, setCatInfo] = useState({
    breed: "",
    age: "",
    weight: "",
    location: ""
  })
  const [currentImage, setCurrentImage] = useState(null);
  const [banAttributes, setBanAttributes] = useState({})

  const submitForm = () => {
    makeQuery();
  };

  const makeQuery = () => {
    let query = `https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&size=small&api_key=${ACCESS_KEY}`;

    callAPI(query).catch(console.error);
  };

  const callAPI = async (query) => {

    const response = await fetch(query);
    const json = await response.json();
    console.log(json[0])

    if (json[0].url == null){
      alert("Oops! Something went wrong with that query, let's try again!")
    }
    else {
      setCurrentImage(json[0].url);
      setCatInfo({
        breed: json[0].breeds[0].name,
        age: json[0].breeds[0].life_span,
        weight: json[0].breeds[0].weight.imperial,
        location: json[0].breeds[0].origin
      })
    }

  }

  const addToBanList = () => {

  }

  return (
    <div className="App">
      <div className={"container"}>
        <h1>Cute Cat Pic Scroller</h1>
        <div className={"cat-info"}>
          <img src={currentImage} alt={"cat image"} className={"cat-img"}/>
          <Catinfobutton
            infos={catInfo}
            onSubmit={addToBanList}
          />
        </div>
        <APIbutton
          onSubmit={submitForm}
        />
      </div>
    </div>
  )
}

export default App
