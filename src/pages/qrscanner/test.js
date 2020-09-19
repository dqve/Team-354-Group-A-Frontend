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
            <div className="qr justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={ window.innerWidth > 600 ? "485" : "320"} height= { window.innerWidth > 600 ? "233.8" : "175"} class="svg" viewBox="0 0 983 873.8"><g id="svg" transform="translate(-100%, -100%)"><path id="Path_3" data-name="Path 3" d="M865.7,236.7C865.7,148.3,844.4,127,756,127H668.2V83.1H799.8A109.682,109.682,0,0,1,909.5,192.8V324.4H865.6V236.7Zm-746,0v87.8H75.8V192.8A109.682,109.682,0,0,1,185.5,83.1H317.1V127H229.3C142.1,127,119.7,148.3,119.7,236.7Zm0,526.6c0,87.1,22.6,109.7,109.7,109.7h87.8v43.9H185.5A109.682,109.682,0,0,1,75.8,807.2V675.5h43.9v87.8Zm746,0V675.5h43.9V807.1A109.682,109.682,0,0,1,799.9,916.8H668.2V873H756C844.4,873,865.7,850.4,865.7,763.3Z" transform="translate(2209 11.9)" fill="#fff"></path><line id="Line_1" data-name="Line 1" x2="933" transform="translate(2235.5 511.5)" fill="none" stroke="#ebebeb" stroke-linecap="round" stroke-width="50"></line></g></svg>
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