import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import {settings} from '../../data/dataStore';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
        image: PropTypes.node,
    }
    static defaultProps = {
        description: settings.defaultListDescription,
    }
    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} image={this.props.image}>
                </Hero>
                <div className={styles.description}>
                    {this.props.description}
                </div>
                <div className={styles.columns}>
                    <Column colTitle={'ZZ Top'} />
                    <Column colTitle={'MC Hammer'} />
                    <Column colTitle={'Simon Webbe'} />
                </div>
            </section>
        )
    }
}

export default List;