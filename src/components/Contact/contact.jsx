import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './contact.css'

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_txoqpta', 'template_yr5gr0i', form.current, {
        publicKey: 'Fw1qKhUPAreyrP-FK',
      })
      .then(
        () => {
          toast.promise('Your message sent successfully')
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
           toast.error('Something went wrong');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact'>
     <div className="contactHeading">
        Contact {/* &#160;  */} Me</div>   
   <div className="form">
   <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name='from_name' placeholder="Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"name='from_email' placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" name='message' rows={3} />
      </Form.Group>
      <Button variant="primary" type='submit'>Send now</Button>
    </Form>
   </div>
    </div>
  );
}

export default contact;
