import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
// internal

import ErrorMsg from "../common/error-msg";
import { notifyError, notifySuccess } from "@/utils/toast";

// schema
const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  message: Yup.string().required().label("Message")
});

const ContactForm = () => {
    // react hook form
    const {register,handleSubmit,formState: { errors },reset} = useForm({
      resolver: yupResolver(schema),
    });
    // on submit
    const onSubmit = (data) => {
      if(data){
        notifySuccess('Сообщение отправлено!');
      }

      reset();
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form" className="tp-contact-form" style={{ maxWidth: '100%' }}>
      <div className="tp-contact-input-wrapper">
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("name", { required: `Введите имя!` })} name="name" id="name" type="text" placeholder="Иванов Иван" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="name">Ваше Имя</label>
          </div>
          <ErrorMsg msg={errors.name ? "Введите имя!" : ""} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("email", { required: `Укажите Email!` })} name="email" id="email" type="email" placeholder="example@mail.com" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="email">Эл. почта</label>
          </div>
          <ErrorMsg msg={errors.email ? "Укажите Email!" : ""} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <textarea {...register("message", { required: `Введите текст сообщения!` })} id="message" name="message" placeholder="Введите текст сообщения..."/>
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="message">Сообщение</label>
          </div>
          <ErrorMsg msg={errors.message ? "Введите текст сообщения!" : ""} />
        </div>
      </div>
      {/* <div className="tp-contact-suggetions mb-20">
        <div className="tp-contact-remeber">
          <input  {...register("remember", {required: `Terms and Conditions is required!`})} name="remember" id="remember" type="checkbox" />
          <label htmlFor="remember">Сохранить введенные данные.</label>
          <ErrorMsg msg={errors.remember?.message} />
        </div>
      </div> */}
      <div className="tp-contact-btn">
        <button type="submit">Отправить сообщение</button>
      </div>
    </form>
  );
};

export default ContactForm;
