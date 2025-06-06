import { useState } from 'react';
import './Header'
import styled from 'styled-components';
import React from 'react';
import Input from './input.jsx';



const Button = styled.button`
padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

&:hover{
color: #f0920e;
}
`

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`



export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return ( 
    <div id="auth-inputs" className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-900">
      <div className="flex flex-col gap-2 mb-6">
        
          <Input
          label = "Email"
           invalid ={emailNotValid}
            type="email"
           // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
      
       
          <Input
           invalid = {passwordNotValid}
           label = "Password"
            type="password"
            
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-gray-600">
          Create a new account
        </button>
        <Button className='button' onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
