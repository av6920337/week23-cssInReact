import style from './TariffsItem.module.scss';

export default function TariffsItem({ name, price, currency, speed, traffic, bg, isSelected, onMouseEnter, onMouseLeave }) {
    return (
        <section 
            className={`${style[bg]} ${isSelected ? style.selected : ''}`} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <h3>{name}</h3>
            <div className={style.price}>{currency} {price}/мес</div>
            <div className={style.info}>{speed}</div>
            <p className={style.info}>{traffic}</p>
        </section>
    );
}