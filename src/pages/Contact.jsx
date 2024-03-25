import './Contact.css'

function Contact() {
  return (
    <>
    <section className='contact-container'>
      <h1>Contact</h1>
      {/* <form className='contact-form'>
        <label>Name</label>
        <input type='text' required/>
        <label>Email</label>
        <input type='email' required/>
        <label>Message</label>
        <textarea type='textarea' rows='5' className='message-form'required/>
        <button type='submit'>Submit</button>
      </form> */}
      <form className='contact-form' action="https://formsubmit.co/renatocrescenti@gmail.com" method="POST">
        <CustomInput tag='input' label='Name' type='text' name='name'/>
        <CustomInput tag='input' label='Email' type='email' name='email'/>
        <label>Message</label>
        <textarea type='text' name='message' rows='8' className='message-form' required/>
        <button type="submit">Send</button>
      </form>
    </section>
    </>
  )
}

function CustomInput({ tag: Tag, ...props }) {
  return (
    <>
      <label>{props.label}</label>
      <Tag type={props.type} name={props.name} required/>
    </>
  )
}

export default Contact