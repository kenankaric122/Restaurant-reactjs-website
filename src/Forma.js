import React from 'react';
import { useForm } from 'react-hook-form';
import './Forma.css'
import image from './images/naslov1.svg';

export default function Forma() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className="formica">
    <form onSubmit={handleSubmit(onSubmit)} className="forma">
      <img src={image} alt="image" width="640" height="305" className="slikica"></img>
      <input type="text" placeholder="Ime" {...register("Ime", {required: true, maxLength: 80})} />
      <input type="tel" placeholder="Telefon" {...register("Telefon", {required: true, maxLength: 12})} />
      <input className="inputnap" type="text" placeholder="Napomena" {...register("Napomena", {required: true})} />
      <input type="datetime-local" placeholder="Datum" {...register("Datum", {required: true})} />

      <input type="submit" />
    </form>
    </div>
  );
}