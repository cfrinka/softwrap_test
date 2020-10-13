import React from 'react'
import firebase from '../firebase'



let prodRef = firebase.database().ref('contacts')
    prodRef.on('value', gotData, errData)

    function gotData(data) {
        const contacts = data.val()
        console.log(contacts)
        const keys = Object.keys(contacts)
        for (let i = 0; i < keys.length; i++){
            const k = keys[i]
            var name = contacts[k].fullName
            var age = contacts[k].age

            if (name.contains('we')){
                console.log(name, age)
            } else {
                console.log('not 30')
            }

        }
    }

    function errData(err){
        
        console.log(err)
    }



export default function Try() {
    return (
        <div>
            teste
        </div>
    )
}




