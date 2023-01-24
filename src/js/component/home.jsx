import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";


//create your first component
const Navbar = () => {
	return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Star Bootstrap</a>
    
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Service</a>
        </li>

      </ul>
      <span className="navbar-text">
       Contact
      </span>
    </div>
  </div>
</nav>
	)
}

const Jumbotron = () => {
	return(
		<div className="col-md-6">
        <div className="h-100 p-12 bg-light border rounded-3">
          <h1>A Warm Welcome</h1>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button className="btn btn-outline-secondary" type="button">Call to action</button>
        </div>
      </div> 

		)
	}
const Card = (prop) => {
		return(
			<div className="card" style="width: 18rem;">
			<img src={prop.imageURL} className="card-img-top" alt="..."/>
			<div className="card-body">
			  <h5 className="card-title">{prop.title}</h5>
			  <p className="card-text">{prop.description}</p>
			  <a href={prop.buttonUrl} className="btn btn-primary">Go somewhere</a>
			</div>
		  </div>
			)
		}

	 Card.propType = {
	  title: PropType.string,
	  imageURL: PropType.imageURL,
	  description: PropType.string,
	  buttonUrl: PropType.string,

	
      };
 

	


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

export default function Home()
//render(<Home />, document.getElementById("root"));
ReactDOM.render(<Home />, document.querySelector("#app"));
