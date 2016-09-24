import React from 'react'
import ReactDom from 'react-dom'

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <p><b>Hello World.</b>  I am Kirayue</p>
      </div>
    )
  }
}
ReactDom.render(<HelloWorld />, document.getElementById('container'))
