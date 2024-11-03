import tariffs from '../../data/tariffs.json';
import TariffsItem from '../TariffsItem/TariffsItem';
import style from './Tariffs.module.scss';

export default function Tariffs(){
    return (
    <div className={style.plans}>
        {tariffs.map((item, index) => {
        return <TariffsItem key = {index} {...item}/>
    })}
    </div>
    );
} 