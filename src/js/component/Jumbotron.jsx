
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";



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

    export { Jumbotron,home };