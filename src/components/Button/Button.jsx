import css from './Button.module.css';

export const Button = ({loadMore, isLoading}) => {
    return (
        <button
            className={css.button}
            type='button'
            onClick={loadMore}
        >Load more
        </button>
    )
};