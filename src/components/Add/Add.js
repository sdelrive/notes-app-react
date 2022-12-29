import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Add.scss";
import { useDispatch } from "react-redux";
import { openModal, toggleModal } from "../../store/ui/modalSlice";

export default function Add({ open, setOpen }) {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(toggleModal());
  };
  return (
    <div className="add-new" onClick={handleOpenModal}>
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
}
