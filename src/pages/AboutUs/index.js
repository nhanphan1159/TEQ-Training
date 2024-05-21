import 'react-tabs/style/react-tabs.css';

import classNames from 'classnames/bind';
import img1 from '../AboutUs/IMG/image11.png';
import styles from './About.module.scss';

import ContenTitle from '~/components/ContenTitle';

const cx = classNames.bind(styles);

function Aboutus() {
  return (
    <div className={cx('wrapper')} style={{ paddingTop: 100 }}>
      <div style={{ width: '100%', top: 0, left: 0 }}>
        <div className={cx('backgroundtop')}>
          <h3 style={{ fontSize: 36 }}>About Us</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBottom: 10,
              fontFamily: 'Inter',
              fontSize: 24,
              fontWeight: 400,
              lineHeight: 1.8,
              textAlign: 'center',
            }}
          >
            <p>We assist in creating strategies, as well as in design and development.</p>
            <p>We are values-driven and we take on work based on alignment with our values.</p>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: 392,
            backgroundColor: '#f5f5f5',
            position: 'relative',
            top: -222,
            left: 0,
            bottom: 0,
            marginBottom: -220,
          }}
        >
          <div style={{ margin: '0 180px' }}>
            <div
              style={{
                width: '100%',
                height: 372 /*display: 'flex', flexDirection: 'row', justifyContent: 'space-between' */,
              }}
            >
              <div
                style={{ margin: ' 0 40px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
              >
                <div style={{ marginTop: 72 }}>
                  <ContenTitle>OUR STORY</ContenTitle>
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
        </div>
        <div style={{ margin: '90px 220px 134px' }}>
          <ContenTitle>OUR CAPABILITIES</ContenTitle>
          <div style={{ width: '100%', height: 490, display: 'flex', flexDirection: 'column', paddingTop: 40, gap: 6 }}>
            <div style={{ width: '100%', height: 222, display: 'flex', flexDirection: 'row', gap: 6 }}>
              <div
                style={{
                  width: 540,
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#F4F4F4',
                  padding: '40px 30px',
                  borderLeft: '1px solid #222222',
                  justifyContent: 'center',
                }}
              >
                <h3 style={{ fontSize: 22 }}>Design infrastructure</h3>
                <p style={{ fontSize: 18, paddingTop: 14 }}>
                  We can operate infrastructure automation on any cloud services with Terraform. By composing
                  infrastructure as code in a Terraform file using HCL, resources can be provided from any
                  infrastructure provider.
                </p>
              </div>
              <div
                style={{
                  width: 540,
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#F4F4F4',
                  padding: '40px 30px',
                  borderLeft: '1px solid #222222',
                  justifyContent: 'center',
                }}
              >
                <h3 style={{ fontSize: 22 }}>Software development</h3>
                <p style={{ fontSize: 18, paddingTop: 14 }}>
                  One of our foremost capabilities is the ability to create custom software solutions from scratch.
                </p>
              </div>
            </div>
            <div style={{ width: '100%', height: 222, display: 'flex', flexDirection: 'row', gap: 6 }}>
              <div
                style={{
                  width: 540,
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#F4F4F4',
                  padding: '40px 30px',
                  borderLeft: '1px solid #222222',
                  justifyContent: 'center',
                }}
              >
                <h3 style={{ fontSize: 22 }}>Software Testing and Quality Assurance</h3>
                <p style={{ fontSize: 18, paddingTop: 14 }}>
                  We offer high-quality testing and assurance services to ensure the reliability, scalability and
                  security of our products.
                </p>
              </div>
              <div
                style={{
                  width: 540,
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#F4F4F4',
                  padding: '40px 30px',
                  borderLeft: '1px solid #222222',
                  justifyContent: 'center',
                }}
              >
                <h3 style={{ fontSize: 22 }}>Maintenance and Support</h3>
                <p style={{ fontSize: 18, paddingTop: 14 }}>
                  At Teqnological Asia, clients are certainly provided with consecutive maintenance and supporting
                  services to keep their software applications continue to function as intended.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContenTitle>OUR STORY</ContenTitle>
      </div>
      <p>test </p>
    </div>
  );
}

export default Aboutus;
