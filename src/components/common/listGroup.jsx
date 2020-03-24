import React from "react";
import PropTypes from "prop-types";

const ListGroup = props => {
  const { genres, textProperty, valueProperty } = props;
  if (genres.length === 0)
    return (
      <ul className="list-group">
        <li className="list-group-item">All Genres</li>
      </ul>
    );
  return (
    <ul className="list-group">
      <li className="list-group-item">All Genres</li>
      {genres.map(genre => (
        <li key={genre[valueProperty]} className="list-group-item">
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};
ListGroup.propTypes = {
  genres: PropTypes.array
};

export default ListGroup;
