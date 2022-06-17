import React from "react";

import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card__img">
        <img
          src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
          alt=""
        />
      </div>
      <div className="card__content">
        <div className="card__title">Lorem Ipsum Dolor</div>
        <div className="card__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          voluptate repellendus magni illo ea animi?
        </div>
        <div className="card__skills">
          <ul>
            <li>React</li>
            <li>HTML</li>
            <li>SASS</li>
          </ul>
        </div>
        <button href="/" className="card__button">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default Card;
