import { useState } from "react";
import tariffs from '../../data/tariffs.json';
import TariffsItem from '../TariffsItem/TariffsItem';
import style from './Tariffs.module.scss';

export default function Tariffs() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <div className={style.plans}>
            {tariffs.map((item, index) => (
                <TariffsItem
                    key={index}
                    {...item}
                    onMouseEnter={() => setSelectedIndex(index)}
                    onMouseLeave={() => setSelectedIndex(null)}
                    isSelected={selectedIndex === index}
                />
            ))}
        </div>
    );
}