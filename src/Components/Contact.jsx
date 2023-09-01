import React, {useRef} from 'react'
import emailjs from 'emailjs-com';
function Contact() {
  const form = useRef();
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_syyvg5c', 'template_htat0ic',form.current ,'SWj2Fz9JUveLcKIR6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  return (
    <section className="py-10 " id='Contact' >
     <h2 className="text-3xl font-bold ">Contact Me</h2>
     <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
      
      <div className="container mx-auto w-80 h-80    ">
      <div className='mt-4  text-left ms-2 text-md'>
        <p><b>Let's talk how I can help you!</b></p><br/>
        <p>If you like my work and want to hire me to avail my services then drop me a Message using Contact form. Thanks!</p>
        <br/><p>Or get in touch using my Email or my contact number.</p>
        <p>See you!</p>
       <br/>
          <h6>Email: <b>kiran.cs577@gmail.com</b></h6>
          <h6>Contact: <b>+923176834506</b></h6>
      </div>
       </div>
       <div className="container mx-auto w-80 h-80 mt-4" >
       
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="block w-full p-2 border bg-[#194054] rounded"
            placeholder="Name"
            name='name'
          />
          
          <input
            type="email"
            className="block w-full mt-2 p-2 border bg-[#194054]  rounded"
            placeholder="Email"
            name='email'
          />
           <input
            type="text"
            className="block w-full mt-2 p-2 border bg-[#194054] rounded"
            placeholder="Subject"
            name='subject'
          />
          <textarea
            className="block w-full mt-2 p-2 border bg-[#194054]  rounded"
            rows="4"
            placeholder="Message"
            name='message'
          ></textarea>
          <button
            type="submit"
            id='button'
            defaultValue="Send"
            className="mt-4 px-4 py-2  bg-[#cd4818] rounded">
            Submit
          </button>
          
        </form>



    
        
      </div>
      </div>
    </section>
  )
}

export default Contact