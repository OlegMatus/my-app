// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на
// http://jsonplaceholder.typicode.com/comments
import React, {useEffect} from 'react';
import styles from '../ComponentUser/Forms.module.css'
import {useForm} from "react-hook-form";

const CreatComment = () => {
    const {
        register,
        handleSubmit
    } = useForm()

    useEffect(()=> {
        console.log('render')
    })
    const Save =(data)=>{
    fetch('http://jsonplaceholder.typicode.com/comments', {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)})
        // .then(data=> {
        //     if (!data.ok){
        //         throw Error('error')
        //     }
        // })
        .then(data=> console.log(data))
        .catch((e)=> {
            console.log(e)
        })
        console.log(data.status)
    }

    return (
        <div className={styles.wrapper2}>
            <form style={styles.formWrapp} onSubmit={handleSubmit(Save)}>
                <label>PostId:<input type="number" placeholder={'PostId'} {...register("PostId")}/></label>
                <label>Name:<input type={"text"} placeholder={'Name'} {...register("Name")}/></label>
                <label>Email:<input type="email" placeholder={'Email'} {...register("Email")}/></label>
                <label>Body:<input type="text" placeholder={'Body'} {...register("Body")}/></label>

                <input type="submit" value={'Post Comment'}/>
            </form>
        </div>
    );
};

export {CreatComment};