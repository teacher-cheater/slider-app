import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  //const [image, setImage] = useState([]);
  //console.log(image);

  //useEffect(() => {
  //  const controller = new AbortController();
  //  fetch("https://slider.ymatuhin.workers.dev/", {
  //    signal: controller.signal,
  //  })
  //    .then((data) => data.json())
  //    .then((response) => setImage(response.images));
  //  return () => controller.abort();
  //}, []);

  const [appState, setAppState] = useState();
  console.log(appState);
  useEffect(() => {
    const apiUrl = "https://slider.ymatuhin.workers.dev/";
    axios.get(apiUrl).then((resp) => {
      const allImages = resp.data;
      setAppState(allImages.images);
    });
  }, [setAppState]);

  //const data = image.length - 1;
  //const [slideActive, setSlideActive] = useState(0);

  return (
    <div className="App">
      <div className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" className="active" data-bs-target />
          <button type="button" data-bs-target />
          <button type="button" data-bs-target />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/200/300"
              className="d-block w-100"
              height="400px"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/200/300"
              className="d-block w-100"
              height="400px"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/200/300"
              className="d-block w-100"
              height="400px"
              alt="..."
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button className="carousel-control-next" type="button">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>
  );
}

export default App;
