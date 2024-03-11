// CompraCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { Carrito } from "./Carrito";

const ComprarCard = ({ id, description, image_url, tags }) => {
  return (
    <div className="rounded w-[250px] flex flex-col items-center bg-gray-600 p-5">
      <figure className="w-full">
        <img className="object-cover" src={image_url} alt={description} />
      </figure>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <div className="flex justify-end items-center">
        <Carrito id={id} />
      </div>
    </div>
  );
};

ComprarCard.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ComprarCard;
