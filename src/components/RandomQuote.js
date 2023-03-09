import React, { useState, useEffect } from 'react';

import axios from 'axios';

import ImageAndQuote from './ImageAndQuote.js';

const RandomQuote  = (props) => {
  const [character, setCharacter] = useState("");
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios.get(`${props.baseUrl}api/quotes/1`)
    .then((res) => {
      const {character, quote, image} = res.data[0];
      console.log('fired')
      setCharacter(character);
      setQuote(quote);
      setImage(image);
    })
  }, [props.baseUrl])

  const getNewQuoteByCharacter = (character) => {
    character = character.character.split(/[\s]+/).join("-");
    axios.get(`${props.baseUrl}api/characters/${character}/1`)
    .then((res) => {
      const {character, quote, image} = res.data[0];
      setCharacter(character);
      setQuote(quote);
      setImage(image)
    })
  }

  const getNewRandomQuote = () => {
    axios.get(`${props.baseUrl}api/quotes/1`)
    .then((res) => {
      const {character, quote, image} = res.data[0];
      setCharacter(character);
      setQuote(quote);
      setImage(image);
      }
    )
  }

  return(
    <div className="col container actionText mt-5 py-4">
      <button  className="btn btn-outline-dark mb-4" onClick={() => props.dispatch({type: 'homepage'})}>Back</button>
      <ImageAndQuote character={character} quote={quote} image={image}/>
      <div className="text-center py-5">
        <button className="btn btn-outline-dark mx-2" onClick={() => {
          getNewQuoteByCharacter({character})
        }}>Another hit from {character}</button>
        <button className="btn btn-outline-dark mx-2" onClick={() => {
          getNewRandomQuote()
        }}>Rando-me</button>
      </div>
    </div>
)
}

export default RandomQuote;
