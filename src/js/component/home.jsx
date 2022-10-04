import React from "react";

// import ReactDOM from 'react-dom';

//create your first component
const Home = (props) => {
	return (
		<div className="container text-center">
  <div className="row text-white bg-dark">
    <div className="col m-5 pt-4 pb-4 border border-2 rounded">
	<i className="far fa-clock"></i>
    </div>
	<div className="col m-5 pt-4 pb-4 border border-2 rounded">
    <h1>{props.hora}</h1>
    </div>
    <div className="col m-5 pt-4 pb-4 border border-2 rounded">
    <h1>{props.minuto2}</h1>
    </div>
    <div className="col m-5 pt-4 pb-4 border border-2 rounded">
	<h1>{props.minuto}</h1>
    </div>
    <div className="col m-5 pt-4 pb-4 border border-2 rounded">
	<h1>{props.segundos2}</h1>
    </div>
    <div className="col m-5 pt-4 pb-4 border border-2 rounded">
    <h1>{props.segundos}</h1>
    </div>
  </div>
</div>
	);
};

export default Home;
