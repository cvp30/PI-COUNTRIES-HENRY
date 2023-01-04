import NextButton from '../../assets/next.png';
import PrevButton from '../../assets/prev.png';
import styles from './PaginationBar.module.css';

const PaginationBar = ({ currentPage, setPage, totalPages}) => {

    const prevPage = () => {
        if (currentPage > 1) setPage(currentPage - 1);
    }

    const nextPage = () => {
        if (currentPage < totalPages) setPage(currentPage + 1);
    }

    return (
        <div className={styles.PaginationBar}>
            <img onClick={prevPage} src={PrevButton} alt="prev" />

            <div className={styles.PagesContainer}>
                <p>Page N° {currentPage}</p>
                
            </div>

            <img onClick={nextPage} src={NextButton} alt="next" />

        </div>
    )
}

export default PaginationBar;