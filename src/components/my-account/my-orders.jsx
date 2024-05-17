import dayjs from "dayjs";
import 'dayjs/locale/ru';
import Link from "next/link";
import React from "react";

dayjs.locale('ru');

const MyOrders = ({ orderData }) => {
  const order_items = orderData?.orders;
  return (
    <div className="profile__ticket table-responsive">
      {!order_items ||
        (order_items?.length === 0 && (
          <div
            style={{ height: "210px" }}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="text-center">
              <i
                style={{ fontSize: "30px" }}
                className="fa-solid fa-cart-circle-xmark"
              ></i>
              <p>Список заказов пуст!</p>
            </div>
          </div>
        ))}
      {order_items && order_items?.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID Заказа</th>
              <th scope="col">Дата заказа</th>
              <th scope="col">Статус</th>
              <th scope="col">Квитанция</th>
            </tr>
          </thead>
          <tbody>
            {order_items.map((item, i) => (
              <tr key={i}>
                <th scope="row">#{item._id.substring(20, 25)}</th>
                <td data-info="title">
                  {dayjs(item.createdAt).format("D MMMM YYYY г.")}
                </td>
                <td className="status processing">
                  В обработке
                </td>
                <td>
                  <Link href={`/order/${item._id}`} className="tp-logout-btn">
                    Открыть
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyOrders;
