import { useState } from "react";
import { panel } from "./constants";

const useDesksState = () => {
  const [desks, setDesks] = useState([]);
  const addDesk = (desk) => setDesks([...desks, desk]);
  const removeDesk = (idx) => setDesks(desks.filter(({ id }) => id !== idx));
  return { desks, addDesk, removeDesk, setDesks };
};

const useNavState = (desks) => {
  const [activePanel, setActivePanel] = useState(panel.desks);
  const [activeDesk, setActiveDesk] = useState(null);

  const goToColumns = (deskId) => {
    setActiveDesk(desks.find(({ id }) => id === deskId));
    setActivePanel(panel.columns);
  };
  const goToDesks = () => setActivePanel(panel.desks);
  return { activeDesk, goToDesks, goToColumns, activePanel };
};

const useColumnsState = () => {
  const [columns, setColumns] = useState([]);
  const addColumn = (column) => setColumns([...columns, column]);
  const removeColumn = (removeId) =>
    setColumns(columns.filter(({ id }) => id !== removeId));
  return { columns, addColumn, removeColumn, setColumns };
};
const useCardsState = () => {
  const [cards, setCards] = useState([]);
  const addCard = (card) => {
    setCards([...cards, card]);
  };
  const removeCard = (removeId) => {
    setCards(cards.filter(({ id }) => id !== removeId));
  };
  return { cards, setCards, addCard, removeCard };
};
const usePopupState = () => {
  const [popout, setPopout] = useState(null);
  return { popout, setPopout };
};
export const useAppState = () => {
  const desksState = useDesksState();
  const columnsState = useColumnsState();
  const Appstate = useNavState(desksState.desks);
  const cardsState = useCardsState();
  const popoutState = usePopupState();
  return {
    ...desksState,
    ...columnsState,
    ...Appstate,
    ...cardsState,
    ...popoutState,
  };
};
