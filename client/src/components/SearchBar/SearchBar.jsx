import { useDispatch } from 'react-redux'
import { filterByName } from '../../redux/actions';
import styles from './SearchBar.module.css'



const SearchBar = () => {

    const dispatch = useDispatch();

    const handleSubmit = ( event ) => {
        event.preventDefault();

        const value = event.target.name.value;
        dispatch( filterByName(value) );
    }
    
    return (

        <form onSubmit={handleSubmit} className={styles.SearchBar}>
             <input name='name' type="text" placeholder=' ' autoComplete='off'/>
            <label >Search</label>
        </form>
    )
}

export default SearchBar;