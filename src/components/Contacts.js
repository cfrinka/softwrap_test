import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import firebaseDb from '../firebase'

export default function Contacts() {

    let [contactObjects, setContactObjects] = useState({})
    let [currentId, setCurrentID] = useState('')

    useEffect(() => {
        const unsubscribe = firebaseDb.child('contacts').on('value', snapshot => {
          if (snapshot.val() != null)
            setContactObjects({
                ...snapshot.val()
            })
          })
        return unsubscribe
      }, [])

    const addOrEdit = obj => {
        if (currentId === '')
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentID('')
                }
            )
        else
            firebaseDb.child(`contacts/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentID('')
                }
            )
    }

    const onDelete = key =>{
        if(window.confirm('Tem certeza? Não será possível reverter esta ação!')){
            firebaseDb.child(`contacts/${currentId}`).remove(                
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentID('')
                }
            )
        }
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
                    <ContactForm {...({ addOrEdit, currentId, contactObjects })} />
                </div>
                <div className='col-md-7'>
                    <table className='table table-borderless border-stripped'>
                        <thead className='thead-light'>
                            <tr>
                                <th>Nome Completo</th>
                                <th>CPF</th>
                                <th>Estado Civil</th>
                                <th>Idade</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}>
                                        <td>{contactObjects[id].fullName}</td>
                                        <td>{contactObjects[id].tin}</td>
                                        <td>{contactObjects[id].civilState}</td>
                                        <td>{contactObjects[id].age}</td>
                                        <td>{contactObjects[id].city}</td>
                                        <td>{contactObjects[id].state}</td>
                                        <td>
                                            <a href='#' className='btn text-primary' onClick={() => { setCurrentID(id) }}>
                                                <i className='fas fa-pencil-alt'></i>
                                            </a>
                                            <a href='#' className='btn text-danger' onClick={() => { onDelete(id) }}>
                                                <i className='fas fa-trash-alt'></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
