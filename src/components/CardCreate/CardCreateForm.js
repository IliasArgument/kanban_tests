import React from "react";
import { Icon24Add } from "@vkontakte/icons";
import { Button, Card, FormLayout, Input, Div } from "@vkontakte/vkui";
import { useCreateForm } from "../CreateForm/hook";
import "./CardCreateForm.css";

const CardCreateForm = ({ onSubmit }) => {
  const {
    name,
    status,
    setFormMode,
    reset,
    submit,
    onChangeInput,
    isButtonMode,
  } = useCreateForm({ onSubmit });

  if (isButtonMode) {
    return (
      <Button
        mode="outline"
        className="btn_add"
        onClick={setFormMode}
        before={<Icon24Add />}
        size="l"
      >
        Добавить карточку
      </Button>
    );
  }

  return (
    <Card mode="outline" className="CardForm">
      <FormLayout className="Forms" onSubmit={submit}>
        <Input
          status={status}
          className="inpt"
          autoFocus
          value={name}
          onChange={onChangeInput}
          placeholder="Введите название карточки"
        />
        <Div>
          <Button className="Card_add" mode="commerce" onClick={submit}>
            Создать карточку
          </Button>
          <Button mode="destructive" onClick={reset}>
            Отменить
          </Button>
        </Div>
      </FormLayout>
    </Card>
  );
};

export default CardCreateForm;
