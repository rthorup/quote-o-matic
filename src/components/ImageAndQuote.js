
const ImageAndQuote = (props) => {
  return(
    <div className="imageAndQuoteBox text-center row">
      <h3>"{props.quote}" -- {props.character}</h3>
      <div className="col imageBox">
        <img className="img-fluid" src={props.image} alt={props.character} />
      </div>
    </div>
  )
}

export default ImageAndQuote;
