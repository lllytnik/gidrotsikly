import s from './SearchBlock.module.scss';
function SearchBlock() {
    return (
        <div className={s.searchBlock}>
            <form className={s.form} action="" method="get">
                <section className={s.searchChoice}>
                    <button className={s.btnChoice} type="submit">Поиск по  номеру</button>
                    <button className={s.btnChoice} type="submit">Поиск по марке</button>
                    <button className={s.btnChoice} type="submit">Поиск по названию товара</button>
                </section>
                <section className={s.searchResult}>
                    <input className={s.inputRusult} name="s" placeholder="Введите марку" type="search" />
                    <button className={s.btnhRusult} type="submit">искать</button>
                </section>
            </form>
        </div>
    );
}
export default SearchBlock;