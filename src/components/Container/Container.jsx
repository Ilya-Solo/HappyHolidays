import style from './Container.module.css'

const Container = (props) => (
    <div className={style.container}>{props.children}</div>
);
export default Container;