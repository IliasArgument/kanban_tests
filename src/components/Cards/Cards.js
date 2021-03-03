import React, { useEffect, useContext } from "react";
import { CardGrid } from "@vkontakte/vkui";
import ColumnCard from "../ColumnCard/ColumnCard";
import CardCreate from "../CardCreate/CardCreate";
import { getCards } from "../../actions/index";
import Context from "../App/context";
import "./Cards.css";

const Cards = ({ columnId }) => {
  const { cards, setCards } = useContext(Context);

  useEffect(() => {
    getCards(columnId).then(setCards);
  }, [columnId, setCards]);
  return (
    <CardGrid>
      {cards.map(({ id, name }) => (
        <ColumnCard id={id} key={id}>
          {name}
        </ColumnCard>
      ))}
      <CardCreate columnId={columnId} />
    </CardGrid>
  );
};

export default Cards;
