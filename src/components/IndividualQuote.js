import React, {useState, useEffect} from 'react';

import axios from 'axios';

import ImageAndQuote from './ImageAndQuote.js';




const IndividualQuote = (props) => {
  const charName = props.character;
  const [character, setCharacter] = useState("");
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios.get(`https://futuramaapi.herokuapp.com/api/characters/${charName}/1`)
    .then((res) => {
      const {character, image, quote} = res.data[0];
      setCharacter(character)
      setQuote(quote);
      setImage(image);

    })
  }, []);

  const getNewQuoteByCharacter = (character) => {
    character = character.character.split(/[\s]+/).join("-");
    axios.get(`https://futuramaapi.herokuapp.com/api/characters/${character}/1`)
    .then((res) => {
      const {character, quote, image} = res.data[0];
      console.log('fired')
      setCharacter(character);
      setQuote(quote);
      setImage(image)
    })
  }


  return(
    <>
      <ImageAndQuote character={character} quote={quote} image={image} />
      <div className="text-center py-5">
        <button className="btn btn-outline-dark mx-2" onClick={() => {
          getNewQuoteByCharacter({character})
        }}>Another hit from {character}</button>
      </div>
    </>
  )
}

export default IndividualQuote;
