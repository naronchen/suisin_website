function Card(props) {
  return (
    <div className="card">
      <br />
      
      <div className="text-center">
        <img alt="card-img" src={"../img/"+props.img} className="text-center img-fluid" />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">
           <body className="card-body-text">{props.title1}</body>
           <body className="card-body-text">{props.title2}</body>
           <body className="card-body-text">{props.title3}</body>

        </p>

      </div>
    </div>
  );
}
export default Card;
