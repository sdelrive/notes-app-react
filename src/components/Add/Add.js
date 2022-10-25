import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Add.scss";

export default function Add() {
  return (
    <div className="add-new">
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
}
