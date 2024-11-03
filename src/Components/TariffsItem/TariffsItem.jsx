import style from './TariffsItem.module.scss';

export default function TariffsItem({name, price,currency, speed, traffic, bg}) {
    return <section className={style[bg]}>
    <h3>{name}</h3>
    <div className={style.price}>{currency} {price}/мес</div>
    <div className={style.info}>{speed}</div>
    <p className={style.info}>{traffic}</p>
    </section>

}
