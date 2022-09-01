import React, { Component } from 'react'
import Toto from './toto'

class Maman extends Component {
  state = {
    messageMaman: null,
    messageToto: null
  }

  ordreMaman = () => {
    this.setState({
      messageMaman: 'Vas ranger ta chambre'
    })
  }

  reponseToto = () => {
    this.setState({
      messageToto: "D'accord maman"
    })
  }

  render() {
    return (
      <div>
        <h1>Maman</h1>
        <button onClick={this.ordreMaman}>Ordre de la mère</button>
        <p>{this.state.messageMaman}</p>

        <hr />

        <Toto name="Toto" leState={this.state} reponseToto={this.reponseToto}/>
      </div>
    )
  }
}

export default Maman
