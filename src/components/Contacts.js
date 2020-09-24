import React from 'react'
import ContactForm from './ContactForm'
import firebaseDb from '../firebase'

export default function Contacts() {

    const addOrEdit = obj =>{
        firebaseDb.child('contacts').push(
            obj,
            err =>{
                if(err)
                console.log(err)
            }
        )

    }
    return (
        <>
            <div class='jumbotron jumbotron-fluid'>
                <div class='container'>
                    <h1 class='display-4 text-center' >Registro de Usuários</h1>
                    <p class='lead text-center'>Use o formulário à esquerda para criar um novo contato ou editar um contato existente.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-5'>
                    <ContactForm addOrEdit={addOrEdit}/>
                </div>
                <div className='col-md-7'>
                    <div> List of Contacts</div>
                </div>
            </div>
        </>
    )
}
