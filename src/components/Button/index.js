import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({ primary, medium = false, large = false, children, className, small, ...passProps }) {
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    medium,
    large,
    small
  });
  return (
    <button className={classes}>
      <span className={cx('title')}>{children}</span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
