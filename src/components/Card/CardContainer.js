import { connect } from 'react-redux';
import Card from './Card';

export const getCardsForColumn = ({ cards }, columnId) => cards.filter(cards => cards.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Card);