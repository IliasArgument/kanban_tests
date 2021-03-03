import React, { useState } from "react";
import { Icon24Add } from "@vkontakte/icons";
import { Button, Card, FormLayout, Input, Div } from "@vkontakte/vkui";
import "./CreateForm.css";

const modes = {
  button: "button",
  form: "form",
};
const statuses = {
  error: "error",
  default: "default",
};

const CreateForm = ({ onSubmit, placeholder, actionTitle }) => {
  const [mode, setMode] = useState(modes.button);
  const [setStatus] = useState(statuses.default);
  const [name, setName] = useState("");

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

  if (mode === modes.button) {
    return (
      <Button
        mode="outline"
        className="btn_add"
        onClick={() => setMode(modes.form)}
        before={<Icon24Add />}
        size="l"
      >
        Добавить
      </Button>
    );
  }

  return (
    <Card mode="outline" className="CardForm">
      <FormLayout className="Forms" onSubmit={submit}>
        <Input
          className="inpt"
          autoFocus
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={placeholder}
        />
        <Div>
          <Button mode="outline" style={{ margin: "20px" }} onClick={submit}>
            {actionTitle}
          </Button>
          <Button mode="destructive" onClick={reset}>
            Отменить
          </Button>
        </Div>
      </FormLayout>
    </Card>
  );
};

export default CreateForm;
