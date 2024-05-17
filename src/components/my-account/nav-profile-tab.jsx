import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// internal
import { userLoggedOut } from "@/redux/features/auth/authSlice";
import MyOrders from "./my-orders";

const NavProfileTab = ({ orderData }) => {
  const {user} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const router = useRouter();
  // handle logout
  const handleLogout = () => {
    dispatch(userLoggedOut());
    router.push('/')
  }
  return (
    <div className="profile__main">
      <div className="profile__main-top">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="profile__main-inner d-flex flex-wrap align-items-center">
              <div className="profile__main-content">
                <h4 className="profile__main-title">Привет, {user?.name}!</h4>
                <h4><br />Ваши заказы</h4>
                <br></br>
                <MyOrders orderData={orderData} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="profile__main-logout pt-40">
              <a onClick={handleLogout} className="cursor-pointer tp-logout-btn">
                Выйти
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavProfileTab;
