import React from "react";
//import ReactDOM from "react-dom";
//import PropType from "prop-types";


//create your first component
import Jumbotron from "./Jumbotron.jsx";
import Card from "./card.jsx";
import Navbar from "./Navbar.jsx";
	


const Home = () => {
	return (
		<>
		<div>
			<Navbar />
  
		  <br />
		  <div >
			  <Jumbotron />	
		  </div>	

		  <br />
		  <div>
			  <Card />
			  <Card />
			  <Card />
			  <Card />
		  </div>

	  </div>
  </> 
		
	);
};

export default Home;
