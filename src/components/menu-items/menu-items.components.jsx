import React from "react";
//withRouter is  HOC used so that there is no need of props tunneling for routing
import { withRouter } from "react-router-dom";
import "./menu-items.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

// after wraping the component with withRouter we have access of history props of react router dom,
// so that we dont have to pass props all the way from its parent components, but just use props the present component
export default withRouter(MenuItem);
