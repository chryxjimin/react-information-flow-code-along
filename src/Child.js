import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    return (
      console.log(this.props)
      <div onClick={this.props.handleColorChange}
       className="child" 
       style={{backgroundColor: "#FFF"}}
       >

      </div>
    )
  }
}

export default Child
