import React from "react";
import Link from "next/link";
// internal
import LoginForm from "../forms/login-form";
import LoginShapes from "./login-shapes";
import GoogleSignUp from "./google-sign-up";

const LoginArea = () => {

  return (
    <>
      <section className="tp-login-area pb-140 p-relative z-index-1 fix">
        <div className="container pt-80">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="tp-login-wrapper">
                <div className="tp-login-top text-center mb-30">
                  <h3 className="tp-login-title">Вход в аккаунт</h3>
                  <p>
                    Нет аккаунта?{" "}
                    <span>
                      <Link href="/register">Создайте бесплатный аккаунт</Link>
                    </span>
                  </p>
                </div>
                <div className="tp-login-option">
                  <div className="tp-login-social mb-10 d-flex flex-wrap align-items-center justify-content-center">
                    <div className="tp-login-option-item has-google">
                      <GoogleSignUp/>
                    </div>
                  </div>
                  <div className="tp-login-mail text-center mb-40">
                    <p>
                      или войдите с помощью <a href="#">Email</a>
                    </p>
                  </div>
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginArea;
