import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

class LoginButton extends React.Component {
  state={
    open:false,    
  }

  openModal=()=>{
    this.setState({open:!this.state.open});
  }


  render(){

    const modalStyles ={
      position: "absolute",
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      overflow:"hidden"
    }

    return(
      <>   
        
      <button className="btn-login" type="button" onClick={this.openModal}>Login</button> 
      
      <Modal isOpen={this.state.open} style={modalStyles} className="customModal">
        <Button className="btn-close" onClick={this.openModal}></Button>
        <div className="modal-wrapper">  
          <h1 className="modalTitle">Login</h1>
          <ModalHeader>        
            Kindly Login to your Account
          </ModalHeader>
          
          <ModalBody>
            <FormGroup>
              <Label for="email">Email Address</Label>
              <Input type="email" id="email" placeholder="kendrick@gmail.com"></Input>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" id="password" placeholder="******"></Input>
            </FormGroup>        
            <h6 className="forgotPass">Forgot Password ?</h6>  
          </ModalBody>
          
          <ModalFooter>
          <button className="btn-start btn-submit" type="button"> Submit </button>        
          </ModalFooter>
          
        </div>
      </Modal>             
      </>
    )
  }
}
 
export default LoginButton;
