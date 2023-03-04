/**
 * use class component to declare input component
 * 1. 声明组件状态
 * 2. 声明事件处理函数
 * 3. 为输入框绑定组件状态，事件处理函数
 */

import React from 'react'
class InputCOmponent extends React.Component {
  // 声明组件状态
  state = {
    msg: 'I an a state of input component'
  }

  // 声明事件处理函数
  handleChanged = (e) => {
    this.setState({ msg: e.target.value })
    console.log(e.target.value)
  }

  render () {
    return (
      <input type='text' value={this.state.msg} onChange={this.handleChanged} />
    )
  }
}

export default InputCOmponent