import React from "react";

const CommonBreadcrumb = ({
  title,
  subtitle,
  center = false,
  bg_clr = false,
}) => {
  return (
    <section
      className={`breadcrumb__area ${
        center ? "text-center" : ""
      } include-bg pt-95 pb-20`}
      style={{ backgroundColor: bg_clr && `#EFF1F5` }}
    >
      <div className="container">

          <div className="col-xxl-12">

              <h3 className="breadcrumb__title">{title}</h3>

          </div>

      </div>
    </section>
  );
};

export default CommonBreadcrumb;
