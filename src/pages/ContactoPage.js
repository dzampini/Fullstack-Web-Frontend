
import React from 'react';


const ContactoPage = (Props) => {
    return (
    

    <div class="container">
               
        <section class="mb-4">

            
            <h2 class="h1-responsive font-weight-bold text-center my-4">Contacto</h2>
            
            <p class="text-center w-responsive mx-auto mb-5">Haz la consulta a trvès de nuestro formulario.</p>

            <div class="row">

                
                <div class="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                        
                        <div class="row">

                        
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control"/>
                                        <label for="name" class="">Nombre</label>
                                </div>
                            </div>
                           

                            
                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control"/>
                                        <label for="email" class="">mail</label>
                                </div>
                            </div>
                            

                        </div>
                       

                        
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control"/>
                                        <label for="subject" class="">Titulo</label>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div class="row">

                            
                            <div class="col-md-12">

                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                    <label for="message">consulta</label>
                                </div>

                            </div>
                        </div>
                       

                    </form>

                    <div class="text-center text-md-left">
                        <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                    <div class="status"></div>
                </div>
                
                
                
            </div>    

            </section>
    </div>
        

        
            );
}

export default ContactoPage;