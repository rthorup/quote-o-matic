import './App.css';

import React, {useReducer} from 'react';

import {Intro} from  './components/Header.js';
// import Random from './components/RandomQuote.js';
// import Character from './components/CharacterQoute.js';
// import Search from './components/SearchQuotes.js';


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
      {state.page === 'homepage' ?
        <>
          <div onClick={() => dispatch({type: 'random'})}>Random</div>
          <div onClick={() => dispatch({type: 'character'})}>Character</div>
          <div onClick={() => dispatch({type: 'search'})}>Search</div>
        </> : <></>
      }
      {state.page === 'random' ? <h1>random</h1>: null}
      {state.page === 'character' ? <h1>character</h1>: null}
      {state.page === 'search' ? <h1>search</h1>: null}

    </div>
  );
}

export default App;
