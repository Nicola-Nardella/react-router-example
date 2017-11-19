import React from 'react';
import { NavLink } from 'react-router-dom'

const cls = s => s ? `Modal-${s}` : 'Modal'
export default class Modal extends React.Component {

  static propTypes = {
    isOpen: React.PropTypes.bool,
    openedBy: React.PropTypes.string,
    onClose: React.PropTypes.func,
  }

  state = {}

  componentWillMount () {
    this.setState({isOpen: this.props.isOpen})
  }

  _onClose = () => {
    this.setState({isOpen: false})
    this.props.onClose()
  }

  render () {
    console.log(this.state, this.props)
    const className = this.state.isOpen ? `${cls()} ${cls('-isOpen')}` : cls()
    console.log(this.props.match)
    return (
      <div className={className}>
        <div className={cls('title')}>
          Modal
        </div>
        <div className={cls('content')}>
          Modal opened by {this.props.openedBy}
        </div>
        <div className={cls('action')}>
          <button onClick={this._onClose}>
            Close modal
          </button>
        </div>
      </div>
    )
  }
}

