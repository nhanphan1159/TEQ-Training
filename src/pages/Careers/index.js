import React from 'react';

import { useScroll } from './useScroll';
import { Link } from 'react-router-dom';
import configRoutes from '~/config/routes';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import Button from '~/components/Button';
import img1 from '../AboutUs/IMG/image11.png';

import styles from './Careers.module.scss';

const cx = classNames.bind(styles);

export default function Navbar() {
  return (
    <div className={cx('wrapper')}>
      <div
        style={{
          width: '100%',
          height: 372 /*display: 'flex', flexDirection: 'row', justifyContent: 'space-between' */,
        }}
      >
        <div style={{ margin: ' 0 40px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ marginTop: 72 }}>
            <div className={cx('text')} style={{ display: 'flex' }}>
              OUR STORY
            </div>
            <div
              style={{
                fontSize: 18,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: 172,
                marginTop: 24,
              }}
            >
              <p>
                Teqnological Asia Ltd,. is a software development enterprise <br />
                established in 2017. We have delivered more than 20 applications <br />
                and services to especially, Japanese market, and other nations on <br />
                the global scale.
              </p>
              <p>
                Currently, we are playing a central role as a software development
                <br /> center for&nbsp;
                <a href="https://finatext.com/">
                  <span>Finatext Holding</span>
                </a>
                .
              </p>
            </div>
          </div>
          <img src={img1} style={{ width: 341, height: 311, marginTop: 26 }} alt="" />
        </div>
      </div>
    </div>
  );
}
