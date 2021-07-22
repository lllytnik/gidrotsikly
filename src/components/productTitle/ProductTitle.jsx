import s from './ProductTitle.module.scss';

export const ProductTitle = (props) => {
  return (
    <a className={s.linkTitle} href="#!">
      {props.title}
    </a>
  );
};
