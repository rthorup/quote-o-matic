import React, {useState} from 'react';

import axios from 'axios';

const SearchQuote = (props) => {

  const [searchText, updateSearchText] = useState("");
  const [searchTerm, updateSearchTerm] = useState("");
  const [characterList, updateCharacterList] = useState([]);
  const [resultStatus, setResultStatus] = useState(true);

  const initiateSearch = () => {
    if(searchText !== "") {
      if(searchText !== searchTerm){
        updateSearchTerm(searchText);
        axios.get('https://futuramaapi.herokuapp.com/api/v2/characters?search=' + searchText)
        .then((res) => {
          if(res.data.length) {
            updateCharacterList(res.data);
            setResultStatus(true)
          }
          else {
            setResultStatus(false);
          }
        })
      }
    }
    else {
      alert('Please enter a search term in order to search characters.')
    }
  }

  return(
    <div className="col container actionText mt-5 py-4">
      <button  className="btn btn-outline-dark mb-4" onClick={() => props.dispatch({type: 'homepage'})}>Back</button>
      <h1 className="text-center">Search for your favorite character</h1>
      <div className="text-center">
        <input className="m-3" type="text" placeholder="Search name here"
        onChange={(e) => {
          updateSearchText(e.target.value)
        }}
        onKeyDown={(e) => {
          if(e.keyCode === 13) {
            initiateSearch()
          }
        }}
        ></input>
        <button className="btn btn-outline-dark m-3" onClick={initiateSearch}>Search</button>
      </div>
      <div className="row">
      {!resultStatus ?
        <>
          <h3 className="text-center my-5">QUERY DOES NOT COMPUTE. That meatbag, robot or alien does not exists. Please try again</h3>
        </>
        : null
      }
        {characterList.length && resultStatus ?
           characterList.map((item) => {
               return(
                 <div key={item.Name} className="col-xs-12, col-sm-6 col-md-4 col-lg-3 mx-auto my-auto text-center mx-5 p-5">
                   <img className="img-fluid gridImages mx-auto my-auto" src={item.PicUrl} alt={item.Name} />
                   <h3 className="font-weight-bold">{item.Name}</h3>
                   {item.Age ? <p><span className="font-weight-bold">Age:</span> {item.Age}</p>: null}
                   {item.Species ? <p><span className="font-weight-bold">Species:</span> {item.Species}</p>: null}
                   {item.Planet ? <p><span className="font-weight-bold">Planet:</span> {item.Planet}</p>: null}
                   {item.Profession ? <p><span className="font-weight-bold">Profession:</span> {item.Profession}</p>: null}
                   {item.Status ? <p><span className="font-weight-bold">Status:</span> {item.Status}</p>: null}
                 </div>
               )
           })
          : null
        }
        </div>
    </div>
  )
}

export default SearchQuote;
