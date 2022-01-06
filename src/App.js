import './App.css';

import React, {useReducer} from 'react';

import {Intro} from  './components/Header.js';
import RandomQuote from './components/RandomQuote.js';
import CharacterQuote from './components/CharacterQoute.js';
import Search from './components/SearchQuotes.js';


function App() {

const initialState = {page: 'homepage'};

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
            <h2 className="actionText">Get a random quote from some meatbag or what not</h2>
            <img className="img-fluid rounded mx-auto d-block actionImages" src="https://fwotaddicts.files.wordpress.com/2018/02/image48.jpg"/>
          </div>
          <div className="col-md py-3" onClick={() => dispatch({type: 'character'})}>
            <h2 className="actionText">Get a quote from your favoriate character.</h2>
            <img className="img-fluid rounded mx-auto d-block actionImages" src="https://thedisinsider.com/wp-content/uploads/2021/02/futurama.jpg" />
          </div>
          <div className="col-md py-3" onClick={() => dispatch({type: 'search'})}>
            <h2 className="actionText">Seach for one of your favorite Futurama quotes</h2>
            <img className="img-fluid rounded mx-auto d-block actionImages" src="https://thatshelf.com/wp-content/uploads/2014/07/Futurama-Fry.jpg"/>
          </div>
        </div> : <></>
      }
      {state.page === 'random' ? <RandomQuote dispatch={dispatch} />: null}
      {state.page === 'character' ? <CharacterQuote dispatch={dispatch} />: null}
      {state.page === 'search' ? <h1>search</h1>: null}
      </div>
    </div>
  );
}

export default App;
