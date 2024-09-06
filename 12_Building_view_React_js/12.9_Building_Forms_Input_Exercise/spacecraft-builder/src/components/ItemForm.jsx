import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./ItemForm.css";

const ItemForm = ({ onFormSubmit }) => {
  const INITIAL_DATA = {
    name: "",
    quantity: "",
    purpose: "",
    terms: "",
  };

  const [formData, setFormData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newError = {};

    if (!formData.name) newError.name = true;
    if (!formData.quantity) newError.quantity = true;
    if (!formData.purpose) newError.purpose = true;
    if (!formData.terms) newError.terms = true;

    setErrors(newError);

    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const newItem = { ...formData, id: uuid() };
      onFormSubmit(newItem);
      setFormData(INITIAL_DATA);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add an Item to the Inventory</h3>

      <div>
        <label className={errors.name ? "lberror" : ""} htmlFor="name">
          Name
        </label>
        <input
          className={errors.name ? "error" : ""}
          id="name"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label className={errors.quantity ? "lberror" : ""} htmlFor="quantity">
          Quantity
        </label>
        <input
          className={errors.quantity ? "error" : ""}
          id="quantity"
          type="number"
          name="quantity"
          value={formData.quantity}
          placeholder="Quantity"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label className={errors.purpose ? "lberror" : ""} htmlFor="purpose">
          Purpose
        </label>
        <textarea
          className={errors.purpose ? "error" : ""}
          id="purpose"
          name="purpose"
          value={formData.purpose}
          placeholder="Purpose"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <input
          className={errors.terms ? "cberror" : ""}
          id="terms"
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleInputChange}
        />
        <label className={errors.terms ? "lberror" : ""} htmlFor="terms">
          Agree to Terms
        </label>
      </div>

      <button type="submit">Add</button>
    </form>
  );
};

export default ItemForm;
