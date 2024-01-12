import React from "react";
import "./css/headermenu.scss";
function HeaderMenu() {
  return (
    <div className="header">
      <div className="userimg">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQte5fcMOTmjtpS_mbhx8pSttA5Oy0OmCwfgA&usqp=CAU"
          alt="no user"
        />
      </div>
      <div className="icons">
        <i className="bi bi-megaphone-fill"></i>
        <i className="bi bi-people-fill"></i>
        <i className="bi bi-chat"></i>
        <i className="bi bi-three-dots-vertical"></i>
      </div>
    </div>
  );
}

export default HeaderMenu;
