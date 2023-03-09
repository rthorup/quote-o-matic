import './App.css';

import React, {useReducer} from 'react';

import {Intro} from  './components/Header.js';
import RandomQuote from './components/RandomQuote.js';
import CharacterQuote from './components/CharacterQoute.js';
import SearchQuote from './components/SearchQuotes.js';


function App() {

const initialState = {page: 'homepage'};
const baseUrl = 'https://futurama-api.fly.dev/'

function reducer(state, action) {
    switch(action.type) {
      case 'homepage':
       return {page: 'homepage'}
      case 'random':
        return {page: 'random'}
      case 'character':
        return{page: 'character'}
      case 'search':
        return {page: 'search'}
      default:
        console.log('not working')
        return;
    };
  };

const[state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="">
      <Intro dispatch={dispatch} />
      <div className="app-body container-fluid py-5">
      {state.page === 'homepage' ?
        <div className="row vh-100 text-center">
          <div className="col-md py-3" onClick={() => dispatch({type: 'random'})}>
            <h2 className="actionText">Get a random quote from some meatbag or what not.</h2>
            <img className="img-fluid rounded mx-auto d-block actionImages" src="https://fwotaddicts.files.wordpress.com/2018/02/image48.jpg" alt="array of dozens of prominent Futurama characters. Clicking here gives you a random quote from a random character."/>
          </div>
          <div className="col-md py-3" onClick={() => dispatch({type: 'character'})}>
            <h2 className="actionText">Get a quote from your favoriate character.</h2>
            <img className="img-fluid rounded mx-auto d-block actionImages" src="https://s31242.pcdn.co/wp-content/uploads/2021/02/Screenshot-2021-02-23-at-17.jpg" alt={"Bender posing as Coilette after his robot sex change. Clicking here lets you select a Futurama character to get a quote."}/>
          </div>
          <div className="col-md py-3" onClick={() => dispatch({type: 'search'})}>
            <h2 className="actionText">Seach for one of your favorite Futurama characters.</h2>
            <img className="img-fluid rounded mx-auto d-block actionImages" src="https://thatshelf.com/wp-content/uploads/2014/07/Futurama-Fry.jpg" alt="Fry thinking really hard. Clicking here lets you search for a particular Futuram character."/>
          </div>
        </div> : <></>
      }
      {state.page === 'random' ? <RandomQuote dispatch={dispatch} baseUrl={baseUrl} />: null}
      {state.page === 'character' ? <CharacterQuote dispatch={dispatch} baseUrl={baseUrl}/>: null}
      {state.page === 'search' ? <SearchQuote dispatch={dispatch} baseUrl={baseUrl}/>: null}
      </div>
    </div>
  );
}

export default App;
