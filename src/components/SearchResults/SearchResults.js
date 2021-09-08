import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {
  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  /*addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
          },
        ],
      }
    ));
  }*/

  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>

        <div className={styles.creator}>
        </div>
      </section>
    );
  }
}

export default SearchResults;