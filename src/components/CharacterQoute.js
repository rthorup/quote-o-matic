import React, {useState, useEffect} from 'react';

import axios from 'axios';

const CharacterQuote = (props) => {
  const [allCharacters, setAllCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState([]);

  useEffect(() => {
    axios.get('https://futuramaapi.herokuapp.com/api/v2/characters ').then((res) => {
      setAllCharacters(res.data)
      console.log(res.data)
    })
  }, [])
  return(
    <div className="col container actionText py-4">
      <button  className="btn btn-outline-dark" onClick={() => props.dispatch({type: 'homepage'})}>Back</button>
      <div className="row">
        {allCharacters.map((item) => {
          return(
            <div className="col-xs-12, col-sm-6 col-md-4 col-lg-3 mx-auto my-auto text-center characterGrid mx-5 p-5">
              <img className="img-fluid gridImages mx-auto my-auto" src={item.PicUrl} />
              <h3 className="font-weight-bold">{item.Name}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CharacterQuote;
