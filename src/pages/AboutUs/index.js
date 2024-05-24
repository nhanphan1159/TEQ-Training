import 'react-tabs/style/react-tabs.css';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import classNames from 'classnames/bind';

import img1 from '../AboutUs/IMG/image11.png';
import styles from './About.module.scss';
import Project from './IMG/Group 73.png';

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
          <div style={{ margin: '0 177px' }}>
            <div
              style={{
                width: '100%',
                height: 372 /*display: 'flex', flexDirection: 'row', justifyContent: 'space-between' */,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
        <div style={{ margin: '90px 177px 134px' }}>
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
                <div style={{ width: '100%', height: '108', backgroundColor: '#F9F9F9' }}>Design infrastructure</div>
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
                <h3 style={{ fontSize: 22, backgroundColor: '#F9F9F9' }}>Software development</h3>
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
                <h3 style={{ fontSize: 22, backgroundColor: '#F9F9F9' }}>Software Testing and Quality Assurance</h3>
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
                <h3 style={{ fontSize: 22, backgroundColor: '#F9F9F9' }}>Maintenance and Support</h3>
                <p style={{ fontSize: 18, paddingTop: 14 }}>
                  At Teqnological Asia, clients are certainly provided with consecutive maintenance and supporting
                  services to keep their software applications continue to function as intended.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: '70px 177px 0', height: 1242, backgroundColor: '#F5F5F5' }}>
          <ContenTitle>OUR TEAMS</ContenTitle>
          <div
            style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 40, gap: 6 }}
          >
            <div style={{ width: '100%', height: 469, display: 'flex', flexDirection: 'row', gap: 6 }}>
              <div
                style={{
                  width: 540,
                  height: 469,
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: '1px solid #222222',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '108',
                    backgroundColor: '#F9F9F9',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    padding: '24px 133px 24px 32px',
                  }}
                >
                  <h3 style={{ fontSize: 22 }}>Project Team</h3>
                  <p style={{ fontSize: 18 }}>Guarantee all projects would be success</p>
                </div>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#B6B6B6', display: 'flex' }}>
                  <img
                    src={Project}
                    alt=""
                    style={{
                      width: 378.15,
                      height: 269.9,
                      fontSize: 18,
                      paddingTop: 14,
                      margin: 'auto',
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  height: 469,
                  width: 540,
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: '1px solid #222222',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '108',
                    backgroundColor: '#F9F9F9',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    padding: '24px 133px 24px 32px',
                  }}
                >
                  <h3 style={{ fontSize: 22 }}>Project Team</h3>
                  <p style={{ fontSize: 18 }}>Guarantee all projects would be success</p>
                </div>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#B6B6B6', display: 'flex' }}>
                  <img
                    src={Project}
                    alt=""
                    style={{
                      width: 378.15,
                      height: 269.9,
                      fontSize: 18,
                      paddingTop: 14,
                      margin: 'auto',
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ width: '100%', height: 469, display: 'flex', flexDirection: 'row', gap: 6 }}>
              <div
                style={{
                  height: 469,
                  width: 540,
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: '1px solid #222222',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '108',
                    backgroundColor: '#F9F9F9',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    padding: '24px 133px 24px 32px',
                  }}
                >
                  <h3 style={{ fontSize: 22 }}>Project Team</h3>
                  <p style={{ fontSize: 18 }}>Guarantee all projects would be success</p>
                </div>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#B6B6B6', display: 'flex' }}>
                  <img
                    src={Project}
                    alt=""
                    style={{
                      width: 378.15,
                      height: 269.9,
                      fontSize: 18,
                      paddingTop: 14,
                      margin: 'auto',
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  height: 469,
                  width: 540,
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: '1px solid #222222',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '108',
                    backgroundColor: '#F9F9F9',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    padding: '24px 133px 24px 32px',
                  }}
                >
                  <h3 style={{ fontSize: 22 }}>Project Team</h3>
                  <p style={{ fontSize: 18 }}>Guarantee all projects would be success</p>
                </div>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#B6B6B6', display: 'flex' }}>
                  <img
                    src={Project}
                    alt=""
                    style={{
                      width: 378.15,
                      height: 269.9,
                      fontSize: 18,
                      paddingTop: 14,
                      margin: 'auto',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: '70px 177px 86px' }}>
          <ContenTitle>OUR PROFILE</ContenTitle>
          <table style={{ fontSize: '16px', width: '100%', paddingTop: 34 }}>
            <tr className={cx('height-55')}>
              <td className={cx('background-table')}>
                <h3 className={cx('padding-table')}>Company Name</h3>
              </td>
              <td className={cx('background-table')}>
                <p className={cx('padding-table')}>Teqnological Asia Ltd.</p>
              </td>
            </tr>
            <tr>
              <td className={cx('background-table')}>
                <h3 className={cx('padding-table')}>Representative</h3>
              </td>
              <td className={cx('background-table')}>
                <p className={cx('padding-table')}>Le Hoai Nam</p>
              </td>
            </tr>
            <tr>
              <td className={cx('background-table')}>
                <h3 className={cx('padding-table')}>Head Office</h3>
              </td>
              <td className={cx('background-table')}>
                <p className={cx('padding-table')}>
                  No. 301, Floor 3, Block B, Waseco Plaza, 10 Pho Quang, Ward 2, Tan Binh, Ho Chi Minh City, Vietnam
                </p>
              </td>
            </tr>
            <tr>
              <td className={cx('background-table')}>
                <h3 className={cx('padding-table')}>Phone Number</h3>
              </td>
              <td className={cx('background-table')}>
                <p className={cx('padding-table')}>(+84) 335 3335 88</p>
              </td>
            </tr>
            <tr>
              <td className={cx('background-table')}>
                <h3 className={cx('padding-table')}>Email</h3>
              </td>
              <td className={cx('background-table')}>
                <a className={cx('padding-table', 'mail')} href="mailto:contact@teqnological.asia">
                  contact@teqnological.asia
                </a>
              </td>
            </tr>
            <tr>
              <td className={cx('background-table')}>
                <h3 className={cx('padding-table')}>Established</h3>
              </td>
              <td className={cx('background-table')}>
                <p className={cx('padding-table')}>October 26, 2017</p>
              </td>
            </tr>
            <tr>
              <td className={cx('background-table')}>
                <h3 className={cx('padding-table')}>Capital</h3>
              </td>
              <td className={cx('background-table')}>
                <p className={cx('padding-table')}>$100,000</p>
              </td>
            </tr>
            <tr>
              <td className={cx('background-table')}>
                <h3 className={cx('padding-table')}>Employees (2023)</h3>
              </td>
              <td className={cx('background-table')}>
                <p className={cx('padding-table')}>83</p>
              </td>
            </tr>
          </table>
        </div>
        <div style={{ padding: '100px 35px 122px' }}>
          <APIProvider apiKey={'AIzaSyDFHiUp9foYZ9DIalseK7mTOQQzR8jhzr8'}>
            <Map
              style={{ width: '100%', height: 677 }}
              defaultCenter={{ lat: 22.54992, lng: 0 }}
              defaultZoom={3}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
            />
          </APIProvider>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
