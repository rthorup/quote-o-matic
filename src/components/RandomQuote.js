import React, { useState, useEffect } from 'react';

import axios from 'axios';

import ImageAndQuote from './ImageAndQuote.js';

const RandomQuote  = (props) => {
  const [character, setCharacter] = useState("");
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios.get('https://futuramaapi.herokuapp.com/api/quotes/1').then((res) => {
      const {character, quote, image} = res.data[0];
      console.log('fired')
      setCharacter(character);
      setQuote(quote);
      setImage(image);
    })
  }, [])
  return(
    <div className="col container actionText mt-5 py-4">
      <button  className="btn btn-outline-dark" onClick={() => props.dispatch({type: 'homepage'})}>Back</button>
      <ImageAndQuote character={character} quote={quote} image={image}/>
    </div>
)
}

export default RandomQuote;
