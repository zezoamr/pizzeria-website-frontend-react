import React from 'react'
import pizzaleft from '../assets/pizzaLeft.jpg'
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
        <div className='rightSide' style={{ backgroundImage: `url( ${pizzaleft} )`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='enter full name..' type='text' />
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='enter email..' type='text' />
                <label htmlFor='message'>message</label>
                <textarea rows='6' placeholder='enter message..' name='message' required></textarea>
                <button type='submit'> Send message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact