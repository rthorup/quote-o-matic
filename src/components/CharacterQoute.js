import React, {useState, useEffect} from 'react';

import axios from 'axios';

import IndividualQuote from './IndividualQuote.js';

const CharacterQuote = (props) => {
  const [allCharacters, setAllCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState([""]);
  const [individualQuote, setIndividualQuote] = useState(false);

  useEffect(() => {
    axios.get(`${props.baseUrl}api/quotes/500`).then((res) => {

      let newArray = res.data.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.character=== value.character
        ))
      )
      return newArray;
    })
    .then((newArray) => {
      setAllCharacters(newArray)
    })
  }, [props.baseUrl])


  return(
    <div className="col container actionText py-4">

      {selectedCharacter && individualQuote ?
          <div>
            <button  className="btn btn-outline-dark" onClick={() => setIndividualQuote()}>Back</button>
            <IndividualQuote character={selectedCharacter} baseUrl={props.baseUrl}/>
          </div>
          :
          <div>
            <button  className="btn btn-outline-dark" onClick={() => props.dispatch({type: 'homepage'})}>Back</button>
            <div className="row">
            {allCharacters.map((item) => {
              return(
                <div key={item.character} className="col-xs-12, col-sm-6 col-md-4 col-lg-3 mx-auto my-auto text-center characterGrid mx-5 p-5" onClick={() => {
                  setSelectedCharacter(item.character);
                  setIndividualQuote(true)
                }}>
                  <img className="img-fluid gridImages mx-auto my-auto" src={item.image} alt={item.character} />
                  <h3 className="font-weight-bold">{item.character}</h3>
                </div>
              )
            })}
          </div>
          </div>
      }

    </div>
  )
}

export default CharacterQuote;
