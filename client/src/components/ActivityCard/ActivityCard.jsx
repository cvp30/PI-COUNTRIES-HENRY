import Winter from '../../assets/seasons/winter.png';
import Autunm from '../../assets/seasons/autumn.png';
import Summner from '../../assets/seasons/summer.png';
import Spring from '../../assets/seasons/spring.png';

import styles from './ActivityCard.module.css';

const durationIcon = 'https://cdn-icons-png.flaticon.com/512/2738/2738236.png';

const ActivityCard = ({ name, difficulty, duration, season}) => {
    

    const seasons = {
        'Winter'    : Winter,
        'Autumn'    : Autunm,
        'Summner'   : Summner,
        'Spring'    : Spring
    };
    const value = difficulty * 20;

    const style = { width: `${value}%`, }

    return (
        <div className={styles.ActivityCard}>

            <div className={styles.lines}></div>

            <div className={styles.Info}>

                <h1>{name}</h1>

                <div className={styles.Items}>
                    <p>difficulty:</p>
                    <div className={styles.barContainer}>
                        <p style={style} className={styles.bar}></p>
                    </div>
                </div>

                <div className={styles.Items}>
                    <img src={durationIcon} alt="" />
                    <p>{duration} days</p>
                </div>

                <div className={styles.Items}>
                    <img src={seasons[`${season}`]} alt="" />
                    <p>{season}</p>
                </div>

            </div>


        </div>
    )
}

export default ActivityCard;