
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

  export {Card,Home };