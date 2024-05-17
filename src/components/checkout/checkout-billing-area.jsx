import React from "react";
import ErrorMsg from "../common/error-msg";
import { useSelector } from "react-redux";

const CheckoutBillingArea = ({ register, errors }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="tp-checkout-bill-area">
      <h3 className="tp-checkout-bill-title">Информация для оплаты</h3>

      <div className="tp-checkout-bill-form">
        <div className="tp-checkout-bill-inner">
          <div className="row">
            <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>
                  Имя <span>*</span>
                </label>
                <input
                  {...register("firstName", {
                    required: `Введите имя!`,
                  })}
                  name="firstName"
                  id="firstName"
                  type="text"
                  placeholder="Иван"
                  defaultValue={user?.firstName}
                />
                <ErrorMsg msg={errors?.firstName?.message} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>
                  Фамилия <span>*</span>
                </label>
                <input
                  {...register("lastName", {
                    required: `Введите фамилию!`,
                  })}
                  name="lastName"
                  id="lastName"
                  type="text"
                  placeholder="Иванов"
                />
                <ErrorMsg msg={errors?.lastName?.message} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>
                  Страна <span>*</span>
                </label>
                <input
                  {...register("country", { required: `Укажите страну!` })}
                  name="country"
                  id="country"
                  type="text"
                  placeholder="Россия"
                />
                <ErrorMsg msg={errors?.lastName?.message} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>Адрес <span>*</span> </label>
                <input
                  {...register("address", { required: `Введите адрес!` })}
                  name="address"
                  id="address"
                  type="text"
                  placeholder="ул. Садовая, 45"
                />
                <ErrorMsg msg={errors?.address?.message} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>Город  <span>*</span> </label>
                <input
                  {...register("city", { required: `Укажите город!` })}
                  name="city"
                  id="city"
                  type="text"
                  placeholder="Москва"
                />
                 <ErrorMsg msg={errors?.city?.message} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>Почтовый индекс</label>
                <input
                  {...register("zipCode", { required: `Укажите почтовый индекс!` })}
                  name="zipCode"
                  id="zipCode"
                  type="text"
                  placeholder="123456"
                />
                <ErrorMsg msg={errors?.zipCode?.message} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>
                  Телефон <span>*</span>
                </label>
                <input
                  {...register("contactNo", {
                    required: `Введите номер телефона!`,
                  })}
                  name="contactNo"
                  id="contactNo"
                  type="text"
                  placeholder="+79999999999"
                />
                <ErrorMsg msg={errors?.contactNo?.message} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>
                  Email <span>*</span>
                </label>
                <input
                  {...register("email", { required: `Введите Email!` })}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="ivan123@mail.com"
                  defaultValue={user?.email}
                />
                <ErrorMsg msg={errors?.email?.message} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>Дополнительная информация (если необходимо)</label>
                <textarea
                  {...register("orderNote", { required: false })}
                  name="orderNote"
                  id="orderNote"
                  placeholder="Люблю вас!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBillingArea;
