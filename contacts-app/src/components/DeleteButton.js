/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import React from "react";
import PropTypes from "prop-types";
import { FiXCircle } from "react-icons/fi";
function DeleteButton({ id, onDelete }) {
    return (
        <button className="contact-item__delete" onClick={() => onDelete(id)}>
            <FiXCircle />
        </button>
    );
}
DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};
export default DeleteButton;
