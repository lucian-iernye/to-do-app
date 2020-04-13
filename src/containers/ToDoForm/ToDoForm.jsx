import React from "react";
import styles from "./ToDoForm.module.scss";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

const ToDoForm = () => {
  const { description, startDate, dueDate, image, btnSubmit } = props;

  return (
    <>
      <InputField
        type="text"
        placeholder="What to do?"
        handleInput={description}
      />
      <InputField
        type="text"
        placeholder="When to do?"
        handleInput={startDate}
      />
      <InputField type="text" placeholder="Due date:" handleInput={dueDate} />
      <InputField type="text" placeholder="Image URL" handleInput={image} />
      <Button text="Add" isPrimary={true} handleClick={btnSubmit} />
    </>
  );
};

export default ToDoForm;
