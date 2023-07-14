// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на
// http://jsonplaceholder.typicode.com/users
import React, {useEffect, useRef} from 'react';
import styles from './Forms.module.css'
import {logDOM} from "@testing-library/react";


const CreatUser = () => {
    const nameRef = useRef('');
    const userNameRef = useRef('');
    const emailRef = useRef('');


    useEffect(() => {
        console.log('render')
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value, userNameRef.current.value, emailRef.current.value)

        fetch('http://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: nameRef.current.value,
                username: userNameRef.current.value,
                email: emailRef.current.value
            })
        }).then(resp => resp.json()).then((data) => console.log(data)).catch(e => {
            console.log(e)
        })
    };

    return (
        <div className={styles.wrapper}>
            <form className={styles.formWrapper} onSubmit={handleSubmit}>
                <label>
                    Name:
                    <br/>
                    <input type="text" ref={nameRef}/>
                </label>
                <label>
                    UserName:
                    <br/>
                    <input type="text" ref={userNameRef}/>
                </label>
                <label>
                    Email:
                    <br/>
                    <input type="email" ref={emailRef}/>
                </label>
                <input type="submit" value="Creat User"/>
            </form>
        </div>
    );
};

export {CreatUser};