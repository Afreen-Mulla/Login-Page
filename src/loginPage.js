import React,{Component} from 'react';
import {Container,Form,Button} from 'react-bootstrap';
import axios from 'axios';
// import Home from './Home';
class Login extends Component {
  
  submitForm= e =>{
    e.preventDefault();
    const data ={
    name:this.test,
    Password:this.test123
  };
  console.log(data);

  axios.post('http://localhost:3000',data).then(
   res =>{
     console.log(res)
   } 
  ).catch(
    err=>{
      console.log(err);
    }
  )
  
}
  render(){
    return(
      <>
  
      <div className="Body">
      <Container className="container d-flex justify-content-center align-items-center">
            
                  <Form action="" onSubmit={this.submitForm} className="form rounded p-4 p-sm-3">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" className="input mb-3" onChange={e=>this.name=e.target.value}/>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" className="input mb-3" onChange={e=>this.Password=e.target.value}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
              
          </Container>
          </div>
        
          </>
    );
}
}
 export default Login;
