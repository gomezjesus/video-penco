import React from "react";
import PropTypes from "prop-types";

const ListGroup = props => {
  const {
    genres,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedGenre
  } = props;
  if (genres.length === 0)
    return (
      <ul className="list-group">
        <li className="list-group-item">All Genres</li>
      </ul>
    );
  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          onClick={() => onItemSelect(genre)}
          key={genre[valueProperty]}
          className={
            genre === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
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
