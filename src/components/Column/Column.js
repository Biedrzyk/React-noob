import React from 'react';
import styles from './List.scss';
import Column from '../Column/Column.js';

class Column extends React.Component {
    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>Ciekawe co z tego będzie!</h3>
            </section>
        )
    }
}

export default Column;