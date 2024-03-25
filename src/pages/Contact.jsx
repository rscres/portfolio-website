import './Contact.css'

function Contact() {
  return (
    <div className='contact-container'>
      <form className='contact-form'>
        <label>Name</label>
        <input type='text' required/>
        <label>Email</label>
        <input type='email' required/>
        <label>Message</label>
        <textarea type='textarea' rows='5' className='message-form'required/>
        <button type='submit'>Submit</button>
      </form>
      {/* <form className='contact-form' action="https://formsubmit.co/renatocrescenti@gmail.com" method="POST">
        <input type="text" name="name" required/>
        <input type="email" name="email" required/>
        <input type='text' name='textarea' className='message-form' required/>
        <button type="submit">Send</button>
      </form> */}
    </div>
  )
}

export default Contact