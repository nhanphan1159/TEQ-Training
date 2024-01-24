import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ children }, { className, btnheader }) {
  const classes = cx('btn', {
    [className]: className,
  });
  return <button className={classes}>{children}</button>;
}

export default Button;
