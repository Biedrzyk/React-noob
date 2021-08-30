import { connect } from 'react-redux';
import Column from './Column';
import { getCardsForList, createActionAddCard} from 'e:/Kodilla/React-noob/redux/cardsRedux';

//export const getCardsForColumn = ({ cards }, columnId) => cards.filter(cards => cards.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);