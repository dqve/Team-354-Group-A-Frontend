import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class Test extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
       <div id="success" className="animation-ctn sucvg">
                    <div className="icon icon--order-success svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">  
                            <g fill="none" stroke="#22AE73" strokeWidth="2"> 
                            <circle cx="77" cy="77" r="72" strokeDasharray="480px, 480px" strokeDashoffset= "960px"></circle>
                            <circle id="colored" fill="#22AE73" cx="77" cy="77" r="72" strokeDasharray="480px, 480px" strokeDashoffset= "960px"></circle>
                            <polyline className="st0" stroke="#fff" strokeWidth="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " strokeDasharray="100px, 100px" strokeDashoffset= "200px"/>   
                            </g>
                        </svg>
                        </div>
                </div>
        <QrReader
          delay={50}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '50%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}
 
export default Test