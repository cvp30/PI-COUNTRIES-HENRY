import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postAxios } from '../../lib/axios';
import { validate } from '../../utils';
import styles from './ActivityForm.module.css';

const ActivityForm = () => {
    const navigate = useNavigate();

    const countries = useSelector(state => state.allCountries);

    const [errors, setErrors] = useState({});
    const [activity, setActivity] = useState({
        name: '',
        difficulty: 0,
        duration: 0,
        season: 'Summer',
        idCountries: []
    });

    const handleChange = (event) => {

        let name = event.target.name;
        let value = event.target.value;

        if (name === 'idCountries') {
            setActivity({
                ...activity,
                [name]: event.target.checked ? [...activity[name], value] : activity[name].filter(val => val !== value),
            })
        }
        else {
            setActivity({
                ...activity,
                [name]: value
            })
        }

        console.log(activity)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!Object.keys(errors).length) alert(await postAxios('http://localhost:3001/activities', activity));
        else {
            alert("error!!!");
        }
        navigate('/home');
    }

    useEffect(() => {
        setErrors(validate(activity));
    }, [activity]);

    return (
        <div className={styles.Activity}>

            <form onChange={handleChange} onSubmit={handleSubmit}>
                <h1>Create Activity</h1>
                <div className={styles.Item}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" defaultValue={activity.name} autoComplete='off'/>
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>

                <div  className={styles.Item}>
                    <label htmlFor="difficulty">Difficulty:</label>
                    <input type="range" name="difficulty" min='0' max='5' defaultValue={activity.difficulty} />
                    {errors.difficulty && <p className={styles.error}>{errors.difficulty}</p>}
                </div>

                <div className={styles.Group}>
                    <div  className={styles.Item}>
                        <label htmlFor="duration">Duration(days):</label>
                        <input type="number" name="duration" min='0' defaultValue={activity.duration} />
                        {errors.duration && <p className={styles.error}>{errors.duration}</p>}
                    </div>

                    <div className={styles.Item}>
                    <label htmlFor="season">Season:</label>
                        <select name="season" defaultValue={activity.season}>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                    </div>

                </div>


                <div className={styles.ItemList}>
                    <p>Countries:</p>
                    <div className={styles.countriesList}>
                        {
                            countries.map(country => {
                                return (
                                    <div className={styles.checkboxCountry} key={country.id}>
                                        <label>
                                            <input type="checkbox" name="idCountries" value={country.id} />
                                            {country.name}
                                        </label>
                                    </div>
                                )
                            })
                        }
                        {errors.idCountries && <p className={styles.error}>{errors.idCountries}</p>}
                    </div>
                    {errors.idCountries && <p className={styles.error}>{errors.idCountries}</p>}
                </div>

                <input type="submit" value="Create Activity" />


            </form>
        </div>
    )
}


export default ActivityForm;