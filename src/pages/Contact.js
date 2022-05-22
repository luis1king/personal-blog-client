import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.scss';

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y38avm5', 'template_hiorg2f', form.current, 'z6x3BzzGFe43HLz9c')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact'>

<section className="mb-4">

    <h2 className="h1-responsive font-weight-bold text-center my-4">Contacto</h2>

    <p className="text-center w-responsive mx-auto mb-5">¿Tienes alguna pregunta? Por favor, no dudes en contactar conmigo. Intentaré responder lo antes posible.
    </p>

    <div className="row">

        <div className="col-md-9 col-xl-12 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST" ref={form}>

                <div className="row">

                    <div className="col-md-6 ">
                        <div className="md-form mb-0">
                            <label for="name" className="">Nombre y Apellidos</label>
                            <input type="text" id="name" name="user_name" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <label for="email" className="">E-mail</label>
                            <input type="text" id="email" name="user_email" className="form-control"/>
                        </div>
                    </div>

                </div>

        

                <div className="row">

                    <div className="col-md-12">

                        <div className="md-form">
                            <label for="message">Tu mensaje</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        </div>

                    </div>
                </div>

            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-primary" onClick={sendEmail}>Enviar</a>
            </div>
            <div className="status"></div>
        </div>

      

    </div>

</section>
    </div>
    
  )
}
