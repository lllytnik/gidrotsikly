import {formSubscribe, formSubscribeTitle, formSubscribeInput, formSubscribeBtn} from '../../components/FormSubscribe/FormSubscribe.module.scss'

export const FormSubscribe = () => {
    return (
        <form className={formSubscribe} action="">
        <h4 className={formSubscribeTitle}>
        Подпишитесь на нашу расслку и узнайте о акциях быстрее
        </h4>
        <input className={formSubscribeInput} type="email" required placeholder="Введите Ваш e-mail"/>
        <button className={formSubscribeBtn}>Отправить</button>
    </form>
    );
};