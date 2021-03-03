import { useState } from "react";
import "./CreateForm.css";

const modes = {
  button: "button",
  form: "form",
};
const statuses = {
  error: "error",
  default: "default",
};

export const useCreateForm = ({ onSubmit }) => {
  const [mode, setMode] = useState(modes.button);
  const [status, setStatus] = useState(statuses.default);
  const [name, setName] = useState("");

  const onChangeInput = (event) => {
    setName(event.target.value);
  };

  const isButtonMode = mode === modes.button;

  const reset = () => {
    setMode(modes.button);
    setStatus(statuses.default);
    setName("");
  };

  const submit = (event) => {
    if (event) {
      event.preventDefault();
    }

    if (!name.trim().length) {
      setStatus(statuses.error);
      return;
    }
    onSubmit(name).then(reset);
  };
  const setFormMode = () => {
    setMode(modes.form);
  };
  const setButtonMode = () => {
    setMode(modes.button);
  };

  return {
    mode,
    name,
    status,
    setFormMode,
    setButtonMode,
    reset,
    submit,
    onChangeInput,
    isButtonMode,
  };
};
