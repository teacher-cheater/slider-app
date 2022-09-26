//import axios from "axios";
import "./App.css";

//axios.get('https://slider.ymatuhin.workers.dev/', {
//  params: {
//    ID: 12345
//  }
//})
//.then(function (response) {
//  console.log(response);
//})
//.catch(function (error) {
//  console.log(error);
//});

function App() {
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
