import React from 'react'
;import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'


const divStyle ={
    border: 'solid 1px',
    borderColor:'#15384e',
    marginTop:'2rem',
    height: '30rem',
    width: '90vh',
    margin:'5rem auto 0 auto',
    borderRadius:'2rem'
   
  }

  const formStyle={
      padding:'2rem',
  }

  const buttonStyle={
      backgroundColor:'#15384e',
      
      marginTop:'5vh'
  }
export default function Contact(){
    return(<div style={divStyle}>
        <Form style={formStyle}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email..." />
    </Form.Group>

  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Dirección</Form.Label>
    <Form.Control placeholder="Dirección..." />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>País</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Ciudad</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Elige...</option>
        <option>CABA</option>
        <option>Buenos Aires</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Código Postal</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button  type="submit" style={buttonStyle}>
    Submit
  </Button>
</Form>
</div>
    )
}