import { deleteContact } from "../../services";
import "./style.css";

const ContactItem = (props) => {
  const {
    id,
    full_name,
    phone_number,
    email,
    handleGetContacts,
    handleSetSelected,
  } = props;

  const handleDelete = async () => {
    await deleteContact(id);

    handleGetContacts();
  }

  return (
    <div data-cy="item-card" className="contact-item__wrapper">
      <div className="contact-item__first-row">
        <p data-cy="item-name" className="contact-item__name">
          {full_name}
        </p>
        <div className="contact-item__button-wrapper">
          <button onClick={() => handleSetSelected(id, full_name, phone_number, email)} data-cy="btn-edit" className="contact-item__button contact-item__edit-button">Edit</button>
          <button onClick={handleDelete} data-cy="btn-delete" className="contact-item__button contact-item__delete-button">Delete</button>
        </div>
      </div>
      <div className="contact-item__second-row">
        <p className="contact-item__phone-email">
          <span data-cy="item-phone">{phone_number}</span> |&nbsp;
          <span data-cy="item-email">{email}</span>
        </p>
      </div>
    </div>
  );
};

export default ContactItem;
