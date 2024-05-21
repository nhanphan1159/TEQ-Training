import classNames from 'classnames/bind';

import styles from './ContenTitle.module.scss';

const cx = classNames.bind(styles);
function ContenTitle({ children }) {
  return (
    <div className={cx('text')} style={{ display: 'flex' }}>
      {children}
    </div>
  );
}

export default ContenTitle;
