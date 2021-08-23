import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';

const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required()
})

const Nyobahook = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
    const onSubmit = data => console.log(data);
    console.log(errors);
 

    return (
        <Styles>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="First name" {...register('firstname')}  /> <br />
        <p>{errors.firstname?.message}</p>
        <input type="text" placeholder="Last name"  {...register('lastname')}  /> <br />
        <p>{errors.lastname?.message}</p>
        <input type="text" placeholder="email"  {...register('email')}   /> <br />
        <p>{errors.email?.message}</p>
      <input type="submit" />
    </form>
        </Styles>
    )
}

export default Nyobahook
const Styles = styled.div`
form{
    width: 400px;
    /* background-color: lightgray; */
    /* padding: 0 50px 0 50px; */
    padding-left: 50px;
    padding-right: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    overflow: none;
    input{
        margin-bottom: 30px;
    }
    p{
        color: red;
    }
}


`
