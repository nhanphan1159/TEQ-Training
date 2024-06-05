import classNames from 'classnames/bind';

import styles from './CareersDetail.module.scss';
import ScrollToTop from '~/hook/scrollToTop';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import ContenTitle from '~/components/ContenTitle';
import { useState, useRef } from 'react';
import Validator from '~/hook/Validation/Validator';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function CareersDetail() {
  const navigate = useNavigate();
  ScrollToTop();
  const [file, setFile] = useState('');
  const inputFile = useRef(null);

  const handleFileUpload = (e) => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;

      var parts = filename.split('.');
      const fileType = parts[parts.length - 1];
      console.log(filename, fileType); //ex: zip, rar, jpg, svg etc.
      setFile(files[0]);
      return filename;
    }
  };
  const onButtonClick = () => {
    inputFile.current.click();
  };

  Validator.isRequired = function (selector, min) {
    return {
      selector,
      test: function (value) {
        return value.trim().length >= min ? undefined : true;
      },
    };
  };
  Validator.isEmail = function (selector) {
    return {
      selector,
      test: function (value) {
        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return email.test(value) ? undefined : true;
      },
    };
  };

  Validator.isPhone = function (selector) {
    return {
      selector,
      test: function (value) {
        var phone = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/g;
        return phone.test(value) ? undefined : true;
      },
    };
  };

  Validator({
    form: '#form-01',
    rules: [
      Validator.isRequired('#name', 15),
      Validator.isEmail('#email'),
      Validator.isPhone('#phone'),

      Validator.isRequired('#mess', 40),
      Validator.isRequired('#github', 10),
      Validator.isRequired('#linkedin', 10),
      Validator.isRequired('#url-potolio', 10),
      Validator.isRequired('#url-http', 10),
    ],
  });
  return (
    <div className={cx('wrapper')}>
      <section className={cx('top')}>
        <div className={cx('btnback')} onClick={() => navigate(-1)} alt="back">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.6667 10.8333L6.45837 10.8333L10.8334 15.2083L10.2834 15.8333L4.8667 10.4166L10.2834 4.99992L10.8334 5.62492L6.45837 9.99992L16.6667 9.99992L16.6667 10.8333Z"
              fill="black"
            />
          </svg>
          <p>
            Back to <strong>Careers</strong>
          </p>
        </div>
        <div className={cx('banner__top')}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: 46, margin: '24px auto 28px' }}>Back-end Developer (Golang)</h1>
            <div className={cx('dl-r')} style={{ gap: 42, marginBottom: 42 }}>
              <div className={cx('dl-r')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.7065 15.9651C18.2343 15.6133 18.8534 15.4145 19.492 15.3918C20.1307 15.3691 20.7629 15.5233 21.3155 15.8367C21.8682 16.1502 22.3186 16.6099 22.6147 17.1628C22.9109 17.7157 23.0406 18.3392 22.9889 18.9611C21.6352 19.423 20.1974 19.6027 18.7682 19.4887C18.7638 18.2403 18.3956 17.0179 17.7065 15.9662C17.0949 15.0298 16.2513 14.259 15.2536 13.7254C14.2559 13.1917 13.1365 12.9123 11.9988 12.913C10.8614 12.9125 9.74219 13.1919 8.74472 13.7256C7.74726 14.2593 6.90376 15.0299 6.29226 15.9662M18.7671 19.4876L18.7682 19.5217C18.7682 19.7696 18.7547 20.0141 18.7265 20.2553C16.6791 21.402 14.3592 22.0037 11.9988 22C9.55058 22 7.25238 21.3655 5.27121 20.2553C5.2422 20.0004 5.22827 19.7441 5.22946 19.4876M5.22946 19.4876C3.80071 19.6057 2.36366 19.4267 1.01102 18.9622C0.959514 18.3405 1.08931 17.7172 1.3854 17.1645C1.68148 16.6118 2.13176 16.1522 2.68418 15.8388C3.2366 15.5254 3.86859 15.3711 4.50708 15.3936C5.14557 15.4162 5.76448 15.6147 6.29226 15.9662M5.22946 19.4876C5.23352 18.2393 5.60361 17.018 6.29226 15.9662M15.3835 6.30434C15.3835 7.18071 15.0269 8.02119 14.3922 8.64087C13.7574 9.26055 12.8965 9.60869 11.9988 9.60869C11.1012 9.60869 10.2403 9.26055 9.6055 8.64087C8.97075 8.02119 8.61415 7.18071 8.61415 6.30434C8.61415 5.42798 8.97075 4.58751 9.6055 3.96782C10.2403 3.34814 11.1012 3 11.9988 3C12.8965 3 13.7574 3.34814 14.3922 3.96782C15.0269 4.58751 15.3835 5.42798 15.3835 6.30434ZM22.1529 9.60869C22.1529 9.93414 22.0872 10.2564 21.9597 10.5571C21.8321 10.8578 21.6451 11.131 21.4094 11.3611C21.1737 11.5912 20.8938 11.7738 20.5858 11.8983C20.2778 12.0228 19.9477 12.0869 19.6144 12.0869C19.281 12.0869 18.9509 12.0228 18.6429 11.8983C18.3349 11.7738 18.0551 11.5912 17.8194 11.3611C17.5837 11.131 17.3967 10.8578 17.2691 10.5571C17.1415 10.2564 17.0759 9.93414 17.0759 9.60869C17.0759 8.95141 17.3433 8.32106 17.8194 7.8563C18.2954 7.39153 18.9411 7.13043 19.6144 7.13043C20.2876 7.13043 20.9333 7.39153 21.4094 7.8563C21.8854 8.32106 22.1529 8.95141 22.1529 9.60869ZM6.92181 9.60869C6.92181 9.93414 6.85615 10.2564 6.72858 10.5571C6.601 10.8578 6.41402 11.131 6.17829 11.3611C5.94257 11.5912 5.66273 11.7738 5.35474 11.8983C5.04675 12.0228 4.71666 12.0869 4.38329 12.0869C4.04993 12.0869 3.71983 12.0228 3.41185 11.8983C3.10386 11.7738 2.82401 11.5912 2.58829 11.3611C2.35257 11.131 2.16558 10.8578 2.03801 10.5571C1.91044 10.2564 1.84478 9.93414 1.84478 9.60869C1.84478 8.95141 2.11223 8.32106 2.58829 7.8563C3.06436 7.39153 3.71004 7.13043 4.38329 7.13043C5.05655 7.13043 5.70223 7.39153 6.17829 7.8563C6.65436 8.32106 6.92181 8.95141 6.92181 9.60869Z"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p style={{ marginLeft: 12, fontSize: 14 }}>Engineering</p>
              </div>
              <div className={cx('dl-r')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_6_141247)">
                    <path
                      d="M7 14C7 14.2652 6.89464 14.5196 6.70711 14.7071C6.51957 14.8946 6.26522 15 6 15H5C4.73478 15 4.48043 14.8946 4.29289 14.7071C4.10536 14.5196 4 14.2652 4 14C4 13.7348 4.10536 13.4804 4.29289 13.2929C4.48043 13.1054 4.73478 13 5 13H6C6.26522 13 6.51957 13.1054 6.70711 13.2929C6.89464 13.4804 7 13.7348 7 14ZM11 13H10C9.73478 13 9.48043 13.1054 9.29289 13.2929C9.10536 13.4804 9 13.7348 9 14C9 14.2652 9.10536 14.5196 9.29289 14.7071C9.48043 14.8946 9.73478 15 10 15H11C11.2652 15 11.5196 14.8946 11.7071 14.7071C11.8946 14.5196 12 14.2652 12 14C12 13.7348 11.8946 13.4804 11.7071 13.2929C11.5196 13.1054 11.2652 13 11 13ZM6 17H5C4.73478 17 4.48043 17.1054 4.29289 17.2929C4.10536 17.4804 4 17.7348 4 18C4 18.2652 4.10536 18.5196 4.29289 18.7071C4.48043 18.8946 4.73478 19 5 19H6C6.26522 19 6.51957 18.8946 6.70711 18.7071C6.89464 18.5196 7 18.2652 7 18C7 17.7348 6.89464 17.4804 6.70711 17.2929C6.51957 17.1054 6.26522 17 6 17ZM11 17H10C9.73478 17 9.48043 17.1054 9.29289 17.2929C9.10536 17.4804 9 17.7348 9 18C9 18.2652 9.10536 18.5196 9.29289 18.7071C9.48043 18.8946 9.73478 19 10 19H11C11.2652 19 11.5196 18.8946 11.7071 18.7071C11.8946 18.5196 12 18.2652 12 18C12 17.7348 11.8946 17.4804 11.7071 17.2929C11.5196 17.1054 11.2652 17 11 17ZM6 5H5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6C4 6.26522 4.10536 6.51957 4.29289 6.70711C4.48043 6.89464 4.73478 7 5 7H6C6.26522 7 6.51957 6.89464 6.70711 6.70711C6.89464 6.51957 7 6.26522 7 6C7 5.73478 6.89464 5.48043 6.70711 5.29289C6.51957 5.10536 6.26522 5 6 5ZM11 5H10C9.73478 5 9.48043 5.10536 9.29289 5.29289C9.10536 5.48043 9 5.73478 9 6C9 6.26522 9.10536 6.51957 9.29289 6.70711C9.48043 6.89464 9.73478 7 10 7H11C11.2652 7 11.5196 6.89464 11.7071 6.70711C11.8946 6.51957 12 6.26522 12 6C12 5.73478 11.8946 5.48043 11.7071 5.29289C11.5196 5.10536 11.2652 5 11 5ZM6 9H5C4.73478 9 4.48043 9.10536 4.29289 9.29289C4.10536 9.48043 4 9.73478 4 10C4 10.2652 4.10536 10.5196 4.29289 10.7071C4.48043 10.8946 4.73478 11 5 11H6C6.26522 11 6.51957 10.8946 6.70711 10.7071C6.89464 10.5196 7 10.2652 7 10C7 9.73478 6.89464 9.48043 6.70711 9.29289C6.51957 9.10536 6.26522 9 6 9ZM11 9H10C9.73478 9 9.48043 9.10536 9.29289 9.29289C9.10536 9.48043 9 9.73478 9 10C9 10.2652 9.10536 10.5196 9.29289 10.7071C9.48043 10.8946 9.73478 11 10 11H11C11.2652 11 11.5196 10.8946 11.7071 10.7071C11.8946 10.5196 12 10.2652 12 10C12 9.73478 11.8946 9.48043 11.7071 9.29289C11.5196 9.10536 11.2652 9 11 9ZM24 10V19C23.9984 20.3256 23.4711 21.5964 22.5338 22.5338C21.5964 23.4711 20.3256 23.9984 19 24H5C3.67441 23.9984 2.40356 23.4711 1.46622 22.5338C0.528882 21.5964 0.00158786 20.3256 0 19L0 5C0.00158786 3.67441 0.528882 2.40356 1.46622 1.46622C2.40356 0.528882 3.67441 0.00158786 5 0L11 0C12.3256 0.00158786 13.5964 0.528882 14.5338 1.46622C15.4711 2.40356 15.9984 3.67441 16 5H19C20.3256 5.00159 21.5964 5.52888 22.5338 6.46622C23.4711 7.40356 23.9984 8.67441 24 10ZM5 22H14V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22ZM22 10C22 9.20435 21.6839 8.44129 21.1213 7.87868C20.5587 7.31607 19.7956 7 19 7H16V22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V10ZM19 13C18.8022 13 18.6089 13.0586 18.4444 13.1685C18.28 13.2784 18.1518 13.4346 18.0761 13.6173C18.0004 13.8 17.9806 14.0011 18.0192 14.1951C18.0578 14.3891 18.153 14.5673 18.2929 14.7071C18.4327 14.847 18.6109 14.9422 18.8049 14.9808C18.9989 15.0194 19.2 14.9996 19.3827 14.9239C19.5654 14.8482 19.7216 14.72 19.8315 14.5556C19.9414 14.3911 20 14.1978 20 14C20 13.7348 19.8946 13.4804 19.7071 13.2929C19.5196 13.1054 19.2652 13 19 13ZM19 17C18.8022 17 18.6089 17.0586 18.4444 17.1685C18.28 17.2784 18.1518 17.4346 18.0761 17.6173C18.0004 17.8 17.9806 18.0011 18.0192 18.1951C18.0578 18.3891 18.153 18.5673 18.2929 18.7071C18.4327 18.847 18.6109 18.9422 18.8049 18.9808C18.9989 19.0194 19.2 18.9996 19.3827 18.9239C19.5654 18.8482 19.7216 18.72 19.8315 18.5556C19.9414 18.3911 20 18.1978 20 18C20 17.7348 19.8946 17.4804 19.7071 17.2929C19.5196 17.1054 19.2652 17 19 17ZM19 9C18.8022 9 18.6089 9.05865 18.4444 9.16853C18.28 9.27841 18.1518 9.43459 18.0761 9.61732C18.0004 9.80004 17.9806 10.0011 18.0192 10.1951C18.0578 10.3891 18.153 10.5673 18.2929 10.7071C18.4327 10.847 18.6109 10.9422 18.8049 10.9808C18.9989 11.0194 19.2 10.9996 19.3827 10.9239C19.5654 10.8482 19.7216 10.72 19.8315 10.5556C19.9414 10.3911 20 10.1978 20 10C20 9.73478 19.8946 9.48043 19.7071 9.29289C19.5196 9.10536 19.2652 9 19 9Z"
                      fill="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_141247">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p style={{ marginLeft: 12, fontSize: 14 }}>Onsite</p>
              </div>
              <div className={cx('dl-r')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_6_141252)">
                    <path
                      d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92893C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.7612C17.6541 3.51808 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C21.9971 14.6513 20.9426 17.1931 19.0679 19.0679C17.1931 20.9426 14.6513 21.9971 12 22Z"
                      fill="#333333"
                    />
                    <path
                      d="M11.9999 6C11.7347 6 11.4804 6.10536 11.2928 6.29289C11.1053 6.48043 10.9999 6.73478 10.9999 7V11.325L7.62895 13.437C7.40351 13.5778 7.24326 13.8024 7.18343 14.0614C7.12361 14.3204 7.16912 14.5926 7.30995 14.818C7.45078 15.0434 7.67539 15.2037 7.93438 15.2635C8.19337 15.3233 8.46551 15.2778 8.69095 15.137L12.5309 12.737C12.676 12.6461 12.7953 12.5195 12.8775 12.3692C12.9596 12.219 13.0018 12.0502 12.9999 11.879V7C12.9999 6.73478 12.8946 6.48043 12.7071 6.29289C12.5195 6.10536 12.2652 6 11.9999 6Z"
                      fill="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_141252">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p style={{ marginLeft: 12, fontSize: 14 }}>Full Time</p>
              </div>
              <div className={cx('dl-r')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_6_141261)">
                    <path
                      d="M17 24H7.00498C6.4267 23.9997 5.85531 23.8744 5.32993 23.6328C4.80454 23.3912 4.33757 23.0389 3.96098 22.6C3.58969 22.1707 3.31553 21.6663 3.15726 21.1212C2.99899 20.5762 2.96035 20.0034 3.04398 19.442C3.58089 16.5175 5.14095 13.8795 7.44498 12C5.14092 10.1199 3.58119 7.48109 3.04498 4.556C2.96152 3.99502 3.00015 3.42262 3.15824 2.87794C3.31633 2.33326 3.59015 1.82913 3.96098 1.4C4.33757 0.961146 4.80454 0.608844 5.32993 0.36721C5.85531 0.125575 6.4267 0.000313842 7.00498 0L17 0C17.5782 0.000512143 18.1496 0.125862 18.6749 0.367483C19.2003 0.609104 19.6673 0.9613 20.044 1.4C20.4149 1.82895 20.6889 2.33285 20.8473 2.87732C21.0057 3.42179 21.0448 3.99403 20.962 4.555C20.4203 7.48095 18.8571 10.1194 16.551 12C18.8557 13.8822 20.4172 16.5217 20.957 19.448C21.0399 20.0091 21.0008 20.5815 20.8424 21.1262C20.684 21.6708 20.4099 22.1749 20.039 22.604C19.6624 23.0413 19.1961 23.3924 18.6717 23.6333C18.1473 23.8742 17.5771 23.9993 17 24ZM17 2H7.00498C6.71492 1.99982 6.42823 2.06227 6.16452 2.18308C5.9008 2.30389 5.66628 2.48022 5.47698 2.7C5.29214 2.91043 5.15554 3.15874 5.07677 3.42753C4.998 3.69632 4.97896 3.97908 5.02098 4.256C5.39698 6.756 6.94498 9.096 9.62098 11.213C9.73923 11.3066 9.83476 11.4258 9.90043 11.5615C9.96611 11.6973 10.0002 11.8462 10.0002 11.997C10.0002 12.1478 9.96611 12.2967 9.90043 12.4325C9.83476 12.5682 9.73923 12.6874 9.62098 12.781C6.94498 14.9 5.39998 17.242 5.02098 19.741C4.9785 20.0184 4.99732 20.3017 5.0761 20.5711C5.15488 20.8404 5.29172 21.0892 5.47698 21.3C5.66628 21.5198 5.9008 21.6961 6.16452 21.8169C6.42823 21.9377 6.71492 22.0002 7.00498 22H17C17.2901 22.0002 17.5768 21.9378 17.8405 21.817C18.1042 21.6962 18.3387 21.5198 18.528 21.3C18.7128 21.0899 18.8494 20.842 18.9281 20.5735C19.0069 20.3051 19.026 20.0226 18.984 19.746C18.611 17.259 17.064 14.917 14.384 12.784C14.2665 12.6903 14.1716 12.5714 14.1064 12.436C14.0411 12.3006 14.0073 12.1523 14.0073 12.002C14.0073 11.8517 14.0411 11.7034 14.1064 11.568C14.1716 11.4326 14.2665 11.3137 14.384 11.22C17.065 9.087 18.612 6.745 18.984 4.257C19.0258 3.97955 19.0062 3.69629 18.9266 3.42725C18.8469 3.1582 18.7091 2.90994 18.523 2.7C18.3343 2.4808 18.1006 2.30482 17.8378 2.18403C17.575 2.06324 17.2892 2.00047 17 2ZM15.681 20H8.31798C8.15436 19.9999 7.99326 19.9597 7.8488 19.8829C7.70434 19.806 7.58095 19.6949 7.48944 19.5593C7.39793 19.4236 7.3411 19.2676 7.32393 19.1049C7.30676 18.9422 7.32979 18.7777 7.39098 18.626C8.17406 16.9351 9.36719 15.4666 10.862 14.354L11.38 13.942C11.5569 13.8012 11.7764 13.7246 12.0025 13.7246C12.2286 13.7246 12.448 13.8012 12.625 13.942L13.134 14.348C14.6267 15.465 15.8198 16.934 16.607 18.624C16.6686 18.7758 16.6919 18.9403 16.675 19.1033C16.6581 19.2662 16.6014 19.4224 16.51 19.5583C16.4185 19.6942 16.2951 19.8055 16.1506 19.8826C16.006 19.9596 15.8448 19.9999 15.681 20ZM10.034 18H13.962C13.3914 17.2563 12.7326 16.5847 12 16C11.2641 16.5824 10.6037 17.2543 10.034 18Z"
                      fill="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_141261">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p style={{ marginLeft: 12, fontSize: 14 }}>30/09/2023</p>
              </div>
            </div>
            <Button medium>APPLY NOW</Button>
          </div>
        </div>
      </section>
      <section className={cx('infojob')}>
        <div className={cx('pd-t-b-30-12')}>
          <ContenTitle>
            <h5>JOB DESCRIPTION</h5>
          </ContenTitle>
        </div>
        <p className={cx('size-linefont')}>
          Have the chance to work with talented developers, following high-standard software development practices.
          <br /> Be trained and worked on complex systems using cutting-edge technology-based frameworks.
          <br />
          Your key responsibilities:
          <ul className={cx('listyle-mg-l')}>
            <li>Support the development team to develop the application using ReactJS.</li>
            <li>Other tasks assignedby the leader.</li>
          </ul>
        </p>
        <div className={cx('pd-t-b-30-12')}>
          <ContenTitle>
            <h5>REQUIREMENTS</h5>
          </ContenTitle>
        </div>
        <p className={cx('size-linefont')}>
          General:
          <ul className={cx('listyle-mg-l')}>
            <li>4th year/ new graduate students majoring in Computer Science/ Software Engineering/ related fields.</li>
            <li>Be READY to work full-time.</li>
          </ul>
          Skills/experience skills:
          <ul className={cx('listyle-mg-l')}>
            <li>
              Know React JS, or (Redux, Redux-Saga,Webpack,Babel or VueJS, VueX) (Including university/ part-time
              projects).
            </li>
            <li>Know UI/UX, and JavaScript frameworks.</li>
          </ul>
        </p>
        <div className={cx('pd-t-b-30-12')}>
          <ContenTitle>
            <h5>WHY YOU'LL LOVE WORKING HERE</h5>
          </ContenTitle>
        </div>
        <h5 className={cx('pd-b')}>Compensation and benefits:</h5>
        <p className={cx('size-linefont')}>
          <ul className={cx('listyle-mg-l')}>
            <li>Attractive salary and benefits (Salary review - 2 times/year).</li>
            <li>Insurance contribution equal to 100% of salary. Year-end bonus.</li>
            <li>Annual health check for all employees.</li>
            <li>MacBook or personal laptop provided.</li>
          </ul>
        </p>
        <h5 className={cx('pd-b', 'pd-t')}>Spiritual life:</h5>
        <p className={cx('size-linefont')}>
          <ul className={cx('listyle-mg-l')}>
            <li>
              Working from Monday - Friday and the last Saturday of the month, working hours 8:30 - 17:30 (8 hours/day),
              public holidays according to state regulations.
            </li>
            <li>Floors 3 - 5, Waseco Building, No. 10 Pho Quang, Ward 02, Tan Binh District, Ho Chi Minh City.</li>
          </ul>
        </p>

        <div className={cx('pd-t-b-30-12')}>
          <ContenTitle>
            <h5>CONTACT</h5>
          </ContenTitle>
        </div>
        <p className={cx('size-linefont', 'pd-b:34px')}>
          If you are interested in this position, please email your resume/CV to email:
          <Link to="mailto:recruit@teqnological.asia">mailto:recruit@teqnological.asia</Link>
        </p>
      </section>
      <section className={cx('aplly')}>
        <h2>Submit Your Application</h2>
        <form className={cx('form-input')} name="form-01" id="form-01" method="POST" >
          <input className={cx('input')} placeholder="Ngyen Van A" name="name" id="name" />
          <input className={cx('input')} placeholder="youremail@gmail.com" name="email" id="email" />
          <input className={cx('input')} placeholder="(+84) 936 456 789" name="phone" id="phone" />
          <div style={{ width: '100%' }}>
            <input style={{ display: 'none' }} ref={inputFile} onChange={handleFileUpload} type="file" />
            <buton
              style={{
                width: 164,
                height: 50,
                border: '1px solid #C6C6C6',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderRadius: 4,
                cursor: 'pointer',
              }}
              onClick={onButtonClick}
            >
              <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.84399 16.5V18.75C2.84399 19.3467 3.06871 19.919 3.46872 20.341C3.86873 20.7629 4.41125 21 4.97694 21H17.7746C18.3403 21 18.8828 20.7629 19.2829 20.341C19.6829 19.919 19.9076 19.3467 19.9076 18.75V16.5M7.10989 7.5L11.3758 3M11.3758 3L15.6417 7.5M11.3758 3V16.5"
                  stroke="#222222"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span style={{ fontSize: 14 }}>Add Résume</span>
            </buton>
            <p style={{ fontSize: 14, paddingTop: 8 }}>Resume should be a PDF under 10MB.</p>
          </div>
          <textarea
            type="text"
            placeholder="Your Message"
            name="mess"
            id="mess"
            style={{
              width: 660,
              height: 184,
              padding: '12px',
              borderRadius: 4,
              border: '1px solid #ccc',
              margin: '26px s0',
            }}
          />
          <div style={{ borderTop: '1px solid #ccc', paddingTop: 14, fontSize: 14, width: '100%' }}>
            Optionally, include links to your social media profiles.
          </div>
          <div
            style={{ width: '100%', display: 'flex', flexDirection: 'row', borderRadius: 4, border: '1px solid #ccc' }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '16.94px',
                textAlign: 'center',
                color: '#888888',
                width: 125,
                height: 37,
                display: 'flex',
              }}
            >
              <p style={{ margin: 'auto' }}>linkedin.com/in/</p>
            </div>
            <input
              style={{ width: '100%', padding: 10, borderLeft: '1px solid #ccc' }}
              placeholder="handle"
              name="linkedin"
              id="linkedin"
            />
          </div>
          <div
            style={{ width: '100%', display: 'flex', flexDirection: 'row', borderRadius: 4, border: '1px solid #ccc' }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '16.94px',
                textAlign: 'center',
                color: '#888888',
                width: 100,
                height: 37,
                display: 'flex',
              }}
            >
              <p style={{ margin: 'auto' }}>github.com/</p>
            </div>
            <input
              id="github"
              style={{ width: '100%', padding: 10, borderLeft: '1px solid #ccc' }}
              placeholder="handle"
              name="github"
            />
          </div>
          <div
            style={{ width: '100%', display: 'flex', flexDirection: 'row', borderRadius: 4, border: '1px solid #ccc' }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '16.94px',
                textAlign: 'center',
                color: '#888888',
                width: 69,
                height: 37,
                display: 'flex',
              }}
            >
              <p style={{ margin: 'auto' }}>https://</p>
            </div>
            <input
              style={{ width: '100%', padding: 10, borderLeft: '1px solid #ccc' }}
              placeholder="potfolio.com"
              name="url-potolio"
              id="url-potolio"
            />
          </div>
          <div
            style={{ width: '100%', display: 'flex', flexDirection: 'row', borderRadius: 4, border: '1px solid #ccc' }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '16.94px',
                textAlign: 'center',
                color: '#888888',
                width: 69,
                height: 37,
                display: 'flex',
              }}
            >
              <p style={{ margin: 'auto' }}>https://</p>
            </div>
            <input
              style={{ width: '100%', padding: 10, borderLeft: '1px solid #ccc' }}
              placeholder="other-site.com"
              name="url-http"
              id="url-http"
            />
          </div>
          <div style={{ width: 100, height: 45, marginTop: 8 }} onSubmit={(e) => e.preventDefault()}>
            <Button medium>APPLY</Button>
          </div>
        </form>
      </section>
    </div>
  );
}
