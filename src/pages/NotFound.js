import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class NotFoundPage extends Component {
  render() {
    //const {counter} = this.props
    return (
      <div>
        <h1>Not Found</h1>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({...state})

// export default connect(mapStateToProps)(NotFoundPage)