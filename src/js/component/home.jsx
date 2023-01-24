import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";


//create your first component
import Jumbotron from "./component/Jumbotron.jsx";
import Card from "./component/card.jsx";
import Navbar from "./component/Navbar.jsx";
	


const Home = () => {
	return (
      <><Navbar />
	     <div>
			<Jumbotron />
			<div>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>

		</div></> 


		
	);
};

//export default function Home()
render(<Home />, document.getElementById("root"));
//ReactDOM.render(<Home/>, document.querySelector("#app"));


