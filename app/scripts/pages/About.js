import React from 'react'

import Modal from '../components/Modal'

const cls = s => s ? `About-${s}` : 'About'
export default class About extends React.Component {
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
          openedBy='About page'
          />
      )
    }
    return null
  }

  render () {
    console.log(this.props)
    return (
      <div className={cls()}>
        <div className={cls('title')}>
          About page
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
