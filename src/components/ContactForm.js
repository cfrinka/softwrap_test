import React, { useState, useEffect } from 'react'

export default function ContactForm(props) {
    const initialFieldValues = {
        fullName: '',
        tin: '',
        civilState: '',
        age: '',
        city: '',
        state: ''
    }

    let [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId === '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        let { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values)
    }

    return (
        <form autoComplete='off' onSubmit={handleFormSubmit}>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fas fa-user'></i>
                    </div>
                </div>
                <input className='form-control' placeholder='Nome Completo' name='fullName' value={values.fullName} onChange={handleInputChange} />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i class="fas fa-id-card"></i>
                    </div>
                </div>
                <input className='form-control' placeholder='CPF' name='tin' value={values.tin} onChange={handleInputChange} />
            </div>
            <div className='form-row'>
                <div className='form-group input-group col-md-7'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>
                            <i class="fas fa-people-arrows"></i>
                        </div>
                    </div>
                    <input className='form-control' placeholder='Estado Civil' name='civilState' value={values.civilState} onChange={handleInputChange} />
                </div>
                <div className='form-group input-group col-md-5'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>
                            <i class="fas fa-sort-numeric-up-alt"></i>
                        </div>
                    </div>
                    <input className='form-control' placeholder='Idade' name='age' value={values.age} onChange={handleInputChange} />
                </div>
            </div>
            <div className='form-row'>
                <div className='form-group input-group col-md-7'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>
                            <i class="fas fa-city"></i>
                        </div>
                    </div>
                    <input className='form-control' placeholder='Cidade' name='city' value={values.city} onChange={handleInputChange} />
                </div>
                <div className='form-group input-group col-md-5'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>
                            <i class="fas fa-map-pin"></i>
                        </div>
                    </div>
                    <input className='form-control' placeholder='Estado' name='state' value={values.state} onChange={handleInputChange} />
                    <div className='form-group'>
                    </div>
                </div>
                <input type='submit' value={props.currentId === '' ? 'Salvar' : 'Atualizar'} className='btn btn-primary btn-block' />
            </div>
        </form>
    )
}
