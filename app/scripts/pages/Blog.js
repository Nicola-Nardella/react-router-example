import React from 'react'
import { NavLink } from 'react-router-dom'

import Modal from '../components/Modal'

import articlesAPI from '../articlesAPI'

const cls = s => s ? `Blog-${s}` : 'Blog'
export default class Blog extends React.Component {
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
          openedBy='Blog page'
          />
      )
    }
    return null
  }

  render () {
    const articlesLink = articlesAPI.all().map(a => (
      <NavLink
        className={cls('articleLink')}
        to={`/blog/${a.id}`}
        activeClassName={cls('selected')}
        key={a.id}
        >
        article {a.id}
      </NavLink>
    ))
    return (
      <div className={cls()}>
        <div className={cls('title')}>
          Blog page
        </div>
        <div className={cls('content')}>
          {articlesLink}
          {this._getModal()}
        </div>
        <div className={cls('action')}>
          <button onClick={this._onOpenModal}>open modal</button>
        </div>
      </div>
    )
  }
}
