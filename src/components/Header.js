import  {useState} from 'react';

export function Intro(props) {

  return(
    <header onClick={() => props.dispatch({type: 'homepage'})}>
      <div className="container text-align-center py-3">
        <h2 className='text-center col-12'>Quote-o-Matic</h2>
      </div>
    </header>
  )
}
