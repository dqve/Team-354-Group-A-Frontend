import React from "react";
// reactstrap components
import {
  Button,
  Modal,
  ModalBody,
} from "reactstrap";

// core component
import QrReader from 'react-qr-reader'

function QrScanner(props) {

    const [link, setLink] = React.useState(false)
    const [sucvg, setSucvg] = React.useState({display: "none"})

    const toggle = () => {
        props.setModal(false)
    }
    const handleScan = data => {
        if (data) {
          setLink(data)
          setTimeout(() => {
            setSucvg({display: "block"})
          }, 10);
        }
      }
    const handleError = err => {
    console.error(err)
    }
    const clear = () => {
        setLink(false)
    }

  return (
               
    <Modal isOpen={props.modal} toggle={toggle}>
    <div className="modal-header justify-content-center">
            <button
            className="close"
            type="button"
            onClick={() => props.setModal(false)}
            >
            <i className="now-ui-icons ui-1_simple-remove"></i>
            </button>
            <h4 className="title title-up">Scan a QR-Code</h4>
        </div>
    <ModalBody>
        {link ? 
        <>
            <div className="justify-content-center text-center">
                <div id="success" class="animation-ctn sucvg" style={sucvg}>
                    <div class="icon icon--order-success svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">  
                            <g fill="none" stroke="#22AE73" strokeWidth="2"> 
                                <circle cx="77" cy="77" r="72" strokeDasharray="480px, 480px" strokeDashoffset= "960px"></circle>
                                <circle id="colored" fill="#22AE73" cx="77" cy="77" r="72" strokeDasharray="480px, 480px" strokeDashoffset= "960px"></circle>
                                <polyline className="st0" stroke="#fff" strokeWidth="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " strokeDasharray="100px, 100px" strokeDashoffset= "200px"/>   
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="suctext">
                    <p>Hey, you are currently at {link}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer">Click here to learn more</a>
                </div>
            </div>
            <div className="modal-footer justify-content-center">
                <Button color="info" type="button" onClick={clear}>
                Clear
                </Button>
            </div>
        </>
            :

            <div className="qr justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={ window.innerWidth > 600 ? "485" : "320"} height= { window.innerWidth > 600 ? "233.8" : "175"} class="svg" viewBox="0 0 983 873.8"><g id="svg" transform="translate(-2270.5 -75)"><path id="Path_3" data-name="Path 3" d="M865.7,236.7C865.7,148.3,844.4,127,756,127H668.2V83.1H799.8A109.682,109.682,0,0,1,909.5,192.8V324.4H865.6V236.7Zm-746,0v87.8H75.8V192.8A109.682,109.682,0,0,1,185.5,83.1H317.1V127H229.3C142.1,127,119.7,148.3,119.7,236.7Zm0,526.6c0,87.1,22.6,109.7,109.7,109.7h87.8v43.9H185.5A109.682,109.682,0,0,1,75.8,807.2V675.5h43.9v87.8Zm746,0V675.5h43.9V807.1A109.682,109.682,0,0,1,799.9,916.8H668.2V873H756C844.4,873,865.7,850.4,865.7,763.3Z" transform="translate(2209 11.9)" fill="#fff"></path><line id="Line_1" data-name="Line 1" x2="933" transform="translate(2235.5 511.5)" fill="none" stroke="#ebebeb" stroke-linecap="round" stroke-width="50"></line></g></svg>
                <QrReader
                delay={50}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
                />
                <p>{link}</p>
            </div>
        }
    </ModalBody>
    </Modal>

  );
}

export default QrScanner
