
import React, {useState} from 'react';
import axios from 'axios';


const ContactoPage = (Props) => {
    
    
        const initialForm = {
            nombre: '',
            email: '',
            subject: '',
            message: ''
        }
    
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);
    
    const handleChange = e => {
        const {name=value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]:value
}));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contacto', formData);  
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }
    
    
    return (

        <div class="container">
               
            <section class="mb-4">
                <h2 class="h1-responsive font-weight-bold text-center my-4">Contacto</h2>
            
                <p class="text-center w-responsive mx-auto mb-5">Haz la consulta a trvès de nuestro formulario.</p>

                <div class="row">
           
                    <div class="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" onSubmit={handleSubmit} action="/contacto" method="POST">

                        
                            <div class="row">
             
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" value={formData.nombre} onChange={handleChange} name="nombre" class="form-control" />
                                        <label for="name" class="">Nombre</label>
                                    </div>
                                </div>
     
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" value={formData.email} onChange={handleChange} name="email" class="form-control" />
                                        <label for="email" class="">mail</label>
                                    </div>
                                </div>
                            
                            </div>
                                        
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" value={formData.titulo} onChange={handleChange} name="subject" class="form-control" />
                                        <label for="subject" class="">Titulo</label>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="row">
                                <div class="col-md-12">

                                    <div class="md-form">
                                        <textarea type="text" value={formData.mensaje} onChange={handleChange} name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">consulta</label>
                                    </div>

                                </div>
                            </div>
                       

                        </form>

                        <div class="text-center text-md-left">
                            <button><a class="btn btn-primary" type="submit">Send</a></button>
                        </div>
                        <div class="status"></div>
                    </div>
                
                
                
                </div>

            </section>
        </div>
        

        
    );
}

export default ContactoPage;