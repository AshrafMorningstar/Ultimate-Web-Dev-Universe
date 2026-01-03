/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import React from "react";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";
function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} id={contact.id} onDelete={onDelete} {...contact} />
      ))}
    </div>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
