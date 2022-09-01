import React from 'react'

const Toto = (props) => {

  const btnResponseToto = props.leState.messageMaman !== null
    ? (<button onClick={props.reponseToto}>Réponse</button>)
    : (<button disabled>Réponse</button>)

  return(
    <div>
        <h1>{props.name}</h1>
        {btnResponseToto}
        <p>{props.leState.messageToto}</p>
    </div>
  )
}

export default Toto
