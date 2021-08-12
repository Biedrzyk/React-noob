import React from 'react';
import styles from './Column.scss';
import Column from '../Column/Column.js';

class Column extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
        colTitle: PropTypes.node,
    }
    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>Ciekawe co z tego będzie!</h3>
            </section>
        )
    }
}

export default Column;