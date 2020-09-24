import React, { useState, useEffect } from 'react'

export default function ContactForm() {
    const initialFieldValues = {
        fullName: '',
        age: '',
        civilState: '',
        tin: '',
        city: '',
        state: ''
    }

var [values,setValues] = useState(initialFieldValues)

    return (
        <form autoComplete='off'>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fas fa-user'></i>
                    </div>
                </div>
                <input className='form-control' placeholder='Nome Completo' name='fullName' value= {values.fullName} />
            </div>
        </form>
    )
}
