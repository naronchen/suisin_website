function Card(props) {
  return (
    <div className="card">
      <br />
      
      <div className="text-center">
        <img alt="card-img" src={process.env.PUBLIC_URL+"/img/"+props.img} className="text-center img-fluid" />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <div className="card-text">
           <div className="card-body-text">{props.title1}</div>
           <div className="card-body-text">{props.title2}</div>
           <div className="card-body-text">{props.title3}</div>

        </div>

      </div>
    </div>
  );
}
export default Card;
