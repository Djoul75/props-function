import React from 'react'

const Toto = (props) => {
  return(
    <div>
        <h1>{props.name}</h1>
        <button
          disabled={props.leState.disabled}
          onClick={() => props.reponseTotoProps("D'accord")}
        >Réponse</button>
        <p>{props.leState.messageToto}</p>
    </div>
  )
}

export default Toto
