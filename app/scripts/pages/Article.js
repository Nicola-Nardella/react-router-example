import React from 'react'
import { NavLink } from 'react-router-dom'

import Modal from '../components/Modal'

import articlesAPI from '../articlesAPI'

const cls = s => s ? `Article-${s}` : 'Article'
export default class Article extends React.Component {
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
          openedBy={`Article ${this.props.match.params.article} page`}
          />
      )
    }
    return null
  }

  _renderItem () {
    const article = articlesAPI.get(this.props.match.params.article)
    return (
      <div className={cls('item')}>
        <div className={cls('item-title')}>
          Article ID: {this.props.match.params.article}
        </div>
        <div className={cls('item-description')}>
          {article.description}
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className={cls()}>
        <div className={cls('title')}>
          Article page
        </div>
        <div className={cls('content')}>
          {this._getModal()}
          <div>
            {this._renderItem()}
          </div>
        </div>
        <div className={cls('action')}>
          <button onClick={this._onOpenModal}>open modal</button>
          <button onClick={this.props.history.goBack}>go back</button>
        </div>
      </div>
    )
  }
}
