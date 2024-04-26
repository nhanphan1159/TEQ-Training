
import classNames from 'classnames/bind';
import styles from './Gallery.module.scss'

const cx = classNames.bind(styles)

function Gallery() {
    return <h2 className={cx}>Gallery Page</h2>;
}

export default Gallery;