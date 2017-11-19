import React from 'react'

import Modal from '../components/Modal'

const cls = s => s ? `Home-${s}` : 'Home'
export default class Home extends React.Component {
  state = {}

  _onOpenModal = () => {
    this.setState({isOpen: true})
  }

  onCloseModal = () => {
    this.setState({isOpen: false})
  }

  _getModal () {
    if (this.state.isOpen) {
      return (
        <Modal
          isOpen={this.state.isOpen}
          onClose={this.onCloseModal}
          openedBy='Home page'
          />
      )
    }
    return null
  }

  render () {
    return (
      <div className={cls()}>
        <div className={cls('title')}>
          Home page
        </div>
        <div className={cls('content')}>
          {this._getModal()}
        </div>
        <div className={cls('action')}>
          <button onClick={this._onOpenModal}>open modal</button>
        </div>
      </div>
    )
  }
}
