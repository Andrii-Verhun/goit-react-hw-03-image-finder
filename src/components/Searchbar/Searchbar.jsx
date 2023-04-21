import React from 'react';
import { ReactComponent as Search } from '../../image/search.svg';

import css from './Searchbar.module.css';

export const Searchbar = () => {
    return (
        <header className={css.searchbar}>
            <form className={css.form}>
                <button type="submit" className={css.button}>
                </button>
                    <img
                        className={css['button-label']}
                        src="../image/search.svg"
                        alt=""
                        // width={20}
                    />
                    <Search className={css['button-label']} width={20}/>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};