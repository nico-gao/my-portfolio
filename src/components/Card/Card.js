import React from "react";


import "./Card.scss";

const Card = ({project}) => {
  const { img, title, text, tools, link } = project;
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt="" />
      </div>
      <div className="card__content">
        <div className="card__title">{title}</div>
        <div className="card__text">
          {text}
        </div>
        <div className="card__tools">
          <ul>
            {tools.map((item)=>(
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {link && (
          <button
            onClick={() => window.open(link, "_blank")}
            className="card__button"
          >
            View Website
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
