import React from "react";
import { useDispatch } from "react-redux";
// internal
import { Filter } from "@/svg";
import NiceSelect from "@/ui/nice-select";
import {handleFilterSidebarOpen } from "@/redux/features/shop-filter-slice";

const ShopTopRight = ({selectHandleFilter}) => {
  const dispatch = useDispatch()
  return (
    <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
      <div className="tp-shop-top-select">
        <NiceSelect
          options={[
            { value: "Default Sorting", text: "По умолчанию" },
            { value: "Low to High", text: "Цена по возрастанию" },
            { value: "High to Low", text: "Цена по убыванию" },
            { value: "New Added", text: "Новинки" }
          ]}
          defaultCurrent={0}
          onChange={selectHandleFilter}
          name="Сортировать"
        />
      </div>
    </div>
  );
};

export default ShopTopRight;
