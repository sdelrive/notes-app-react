import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Add.scss";

export default function Add({ open, setOpen }) {
  const handleOpenModal = () => {
    setOpen(!open);
  };
  return (
    <div className="add-new" onClick={handleOpenModal}>
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
}
