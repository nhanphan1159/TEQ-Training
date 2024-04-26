/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import configRoutes from '~/config/routes';
import { careers } from './carers';

import map from './IMG/Map.jpg';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { iconTabBar } from '~/asset/icon';

import { Link } from 'react-router-dom';
import Button from '~/components/Button';

import { partners } from '~/asset/partner';
import slide1 from '~/asset/img/Top (1).png';
import slide2 from '~/asset/img/Top.png';
import slide3 from '~/asset/img/MB.png';
import Carousel from 'nuka-carousel';

const cx = classNames.bind(styles);

function Home() {
  const slides = [
    {
      img: slide1,
      head: 'Mobile',
      content: 'Building Android, iOS, and MacOS apps with Kotlin, Swift, Flutter',
    },
    {
      img: slide2,
      head: 'Frontend',
      content: 'Apply new state-in-the-art Technologies including ReactJS, VueJS,',
    },
    {
      img: slide3,
      head: 'Backend',
      content: 'Design database, develop API and other backend Services',
    },
  ];
  const params = {
    wrapAround: true,
    animation: '',
    slidesToShow: 3,
    cellAlign: 'center',
    cellSpacing: 18,
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('content-inner')}>
          Elevate Your <span className={cx('business')}>Business</span> With Our Premium Solutions
          <br />
          <span>For Web - Mobile - Backend</span>
        </div>

        <div className={cx('banner')}>
          <div className={cx('banner-btn')}>
            <Button>
              <Link to={configRoutes.aboutus} className={cx('title-btn')}>
                ABOUT US
              </Link>
            </Button>
          </div>
          <div className={cx('test')}>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="326"
              viewBox="0 0 1440 326"
              fill="none"
            >
              <path
                d="M-89.668 190.652C-83.1753 192.242 12.8149 58.7683 152.567 231.412C292.32 404.055 384.411 312.056 488.883 176.467C594.326 40.607 690.698 266.971 937.962 219.739C1108.24 187.074 1270.55 -88.478 1511.64 29.4749"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="316"
              viewBox="0 0 1440 316"
              fill="none"
            >
              <path
                d="M-88.7609 187.773C-80.088 189.84 19.0531 52.1835 158.36 220.326C297.667 388.469 387.61 307.395 493.052 174.335C599.164 40.4471 693.992 251.512 943.038 204.662C1114.2 172.299 1275.63 -86.3638 1512.26 30.5872"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="305"
              viewBox="0 0 1440 305"
              fill="none"
            >
              <path
                d="M-87.7902 184.894C-76.9531 187.47 25.3389 45.5991 164.2 209.257C303.061 372.915 391.063 302.91 497.238 172.171C604.24 40.4465 697.286 236.054 948.178 189.665C1120.04 157.525 1280.77 -84.2333 1512.9 31.7157"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="295"
              viewBox="0 0 1440 295"
              fill="none"
            >
              <path
                d="M-86.9149 182.015C-73.9136 185.1 31.561 38.9985 170.008 198.188C308.456 357.377 394.58 298.377 501.471 170.055C609.396 40.4457 700.644 220.611 953.255 174.508C1126.08 142.702 1285.85 -82.1031 1513.58 32.8281"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="286"
              viewBox="0 0 1440 286"
              fill="none"
            >
              <path
                d="M-86.0078 180.135C-70.8423 183.729 37.7674 33.4139 175.737 188.087C313.707 342.76 397.969 294.923 505.576 168.908C614.425 41.4449 703.874 206.137 958.268 160.416C1131.92 128.975 1290.86 -79.0047 1514.14 34.9246"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="276"
              viewBox="0 0 1440 276"
              fill="none"
            >
              <path
                d="M-85.0848 177.256C-67.755 181.375 44.0054 26.8134 181.53 177.033C319.054 327.254 401.422 290.454 509.746 166.776C619.549 41.4601 707.168 190.631 963.28 145.355C1137.82 114.185 1295.9 -76.8585 1514.78 36.0531"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="276"
              viewBox="0 0 1440 276"
              fill="none"
            >
              <path
                d="M-85.0848 177.256C-67.755 181.375 44.0054 26.8134 181.53 177.033C319.054 327.254 401.422 290.454 509.746 166.776C619.549 41.4601 707.168 190.631 963.28 145.355C1137.82 114.185 1295.9 -76.8585 1514.78 36.0531"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="267"
              viewBox="0 0 1440 267"
              fill="none"
            >
              <path
                d="M-84.1779 175.377C-64.6679 180.005 50.2435 21.2286 187.322 166.964C324.401 312.699 404.892 286.968 513.915 165.644C624.609 42.475 710.462 176.235 968.42 131.278C1143.72 100.442 1301.01 -73.7285 1515.4 38.1653"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="259"
              viewBox="0 0 1440 259"
              fill="none"
            >
              <path
                d="M-83.2549 173.498C-61.5807 178.634 56.4815 15.6441 193.115 156.879C329.748 298.114 408.361 283.483 518.084 164.512C629.717 43.4744 713.82 161.793 973.497 117.201C1149.63 86.6671 1306.09 -70.614 1516.02 40.2938"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="251"
              viewBox="0 0 1440 251"
              fill="none"
            >
              <path
                d="M-82.3478 171.619C-58.4775 177.264 62.7196 10.0437 198.907 146.81C335.095 283.576 411.893 279.998 522.254 163.365C634.826 44.4897 717.051 147.335 978.573 103.14C1155.53 72.9243 1311.17 -67.4836 1516.66 42.4064"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="243"
              viewBox="0 0 1440 243"
              fill="none"
            >
              <path
                d="M-81.4248 169.739C-55.4222 175.894 68.9577 4.45893 204.684 136.724C340.41 268.99 415.299 276.512 526.439 162.169C639.934 45.441 720.345 132.812 983.649 89.0154C1161.43 59.07 1316.24 -64.4012 1517.28 44.4869"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="237"
              viewBox="0 0 1440 237"
              fill="none"
            >
              <path
                d="M-80.5018 168.86C-52.3349 175.539 75.1958 -0.125727 210.476 127.655C345.757 255.436 418.784 274.043 530.608 162.101C645.058 47.5993 723.655 119.433 988.726 75.9862C1167.34 46.3429 1321.24 -60.2392 1517.88 47.6311"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="231"
              viewBox="0 0 1440 231"
              fill="none"
            >
              <path
                d="M-79.5947 169.012C-49.2477 176.201 81.4339 -3.69461 216.269 119.618C351.104 242.93 422.269 272.589 534.778 162.985C650.182 50.5348 726.981 106.991 993.802 63.9092C1173.24 34.5681 1326.3 -55.1091 1518.53 51.7434"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="227"
              viewBox="0 0 1440 227"
              fill="none"
            >
              <path
                d="M-78.6718 169.086C-46.1764 176.735 87.6561 -7.31091 222.061 111.533C356.467 230.376 425.754 271.119 538.947 163.853C655.306 53.5818 730.243 94.5481 998.847 51.8643C1179.13 22.7935 1331.38 -49.9788 1519.15 55.8719"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="224"
              viewBox="0 0 1440 224"
              fill="none"
            >
              <path
                d="M-77.7646 171.206C-43.0891 179.428 93.8942 -8.91138 227.854 105.431C361.814 219.774 429.255 271.618 543.116 166.674C660.43 58.5334 733.537 84.0578 1003.96 41.7557C1185.03 13.1143 1336.47 -42.8485 1519.77 61.9844"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="222"
              viewBox="0 0 1440 222"
              fill="none"
            >
              <path
                d="M-76.8417 173.327C-40.0497 182.074 100.132 -10.5596 233.662 99.3622C367.193 209.284 432.772 272.149 547.301 169.542C665.587 63.5804 736.847 73.6152 1009.05 31.6789C1190.95 3.26015 1341.51 -35.7341 1520.43 68.0968"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="224"
              viewBox="0 0 1440 224"
              fill="none"
            >
              <path
                d="M-75.9347 178.448C-36.8671 187.703 106.354 -9.08089 239.439 96.2767C372.523 201.634 436.257 275.695 551.455 175.41C670.711 71.6112 740.125 66.1564 1014.11 24.6018C1196.84 -3.51481 1346.57 -25.6041 1521.06 77.209"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="226"
              viewBox="0 0 1440 226"
              fill="none"
            >
              <path
                d="M-75.0593 184.569C-33.8911 194.333 112.561 -6.68133 245.184 94.2075C377.807 195.096 439.71 280.273 555.592 182.263C675.803 80.6422 743.372 59.698 1019.14 18.4614C1202.79 -9.28942 1351.63 -14.4738 1521.65 87.3215"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="230"
              viewBox="0 0 1440 230"
              fill="none"
            >
              <path
                d="M-74.0886 191.69C-30.7562 201.963 118.847 -3.26574 251.024 93.0908C383.202 189.447 443.275 285.724 559.746 190.099C680.943 90.6417 746.65 54.2078 1024.2 13.4325C1208.59 -14.0957 1356.65 -2.47058 1522.29 98.4183"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="237"
              viewBox="0 0 1440 237"
              fill="none"
            >
              <path
                d="M-73.1816 200.81C-27.669 211.609 125.085 2.14966 256.816 94.0533C388.548 185.957 446.792 293.302 563.947 199.999C686.163 102.705 750.007 50.797 1029.34 10.3874C1214.55 -16.8386 1361.77 11.771 1522.91 111.563"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="244"
              viewBox="0 0 1440 244"
              fill="none"
            >
              <path
                d="M-72.2585 210.931C-24.5181 222.238 131.323 8.54888 262.609 95.9838C393.895 183.419 450.388 301.849 568.148 210.851C691.319 115.735 753.302 48.3383 1034.41 8.31034C1220.46 -18.6135 1366.85 26.8851 1523.53 125.675"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="253"
              viewBox="0 0 1440 253"
              fill="none"
            >
              <path
                d="M-71.3516 222.131C-21.5105 233.947 137.561 16.0439 268.402 98.9782C399.242 181.913 453.841 311.475 572.349 222.799C696.475 129.862 756.643 46.9594 1039.52 7.31309C1226.39 -19.3086 1371.94 43.0949 1524.18 140.899"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="262"
              viewBox="0 0 1440 262"
              fill="none"
            >
              <path
                d="M-70.4286 233.173C-18.4233 245.498 143.799 23.3799 274.194 101.83C404.589 180.279 457.374 320.958 576.55 234.588C701.646 143.845 759.906 45.4374 1044.58 6.15691C1232.27 -20.1626 1376.98 59.1458 1524.79 155.916"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="272"
              viewBox="0 0 1440 272"
              fill="none"
            >
              <path
                d="M-69.5215 244.293C-15.336 257.143 150.085 30.7791 279.987 104.76C409.888 178.741 460.907 330.583 580.656 246.44C706.818 157.876 763.2 43.9787 1049.66 5.12754C1238.17 -20.8739 1382.04 75.3236 1525.47 171.076"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="281"
              viewBox="0 0 1440 281"
              fill="none"
            >
              <path
                d="M-68.5985 255.414C-12.2488 268.757 156.275 38.1628 285.779 107.675C415.283 177.187 464.408 340.082 584.841 258.308C711.99 171.939 766.494 42.5202 1054.8 4.00301C1244.17 -21.6963 1387.17 91.4697 1526.09 186.141"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="292"
              viewBox="0 0 1440 292"
              fill="none"
            >
              <path
                d="M-67.6755 267.535C-9.17753 281.403 162.513 46.5941 291.556 111.606C420.598 176.617 467.973 350.66 589.011 271.161C717.162 187.002 769.788 42.0618 1059.81 3.98989C1249.96 -21.455 1392.18 108.584 1526.67 202.317"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="303"
              viewBox="0 0 1440 303"
              fill="none"
            >
              <path
                d="M-66.7684 279.576C-6.09028 293.968 168.751 54.9458 297.348 115.457C425.945 175.968 471.521 361.159 593.18 284.029C722.35 202.065 773.13 41.619 1064.89 3.8493C1255.85 -21.2457 1397.24 125.651 1527.29 218.365"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="313"
              viewBox="0 0 1440 313"
              fill="none"
            >
              <path
                d="M-65.8455 290.76C-3.00307 305.677 174.973 62.4246 303.141 118.451C431.308 174.477 475.006 370.816 597.349 295.897C727.522 216.143 776.376 40.1604 1069.98 2.77232C1261.79 -22.0205 1402.33 141.765 1527.92 233.494"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="325"
              viewBox="0 0 1440 325"
              fill="none"
            >
              <path
                d="M-64.9384 302.881C0.0841815 318.307 181.148 70.8241 308.933 122.414C436.719 174.003 478.619 381.395 601.519 308.749C732.71 231.222 779.67 39.7177 1075.04 2.71137C1267.59 -21.7952 1407.38 158.895 1528.58 249.606"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="336"
              viewBox="0 0 1440 336"
              fill="none"
            >
              <path
                d="M-64.0154 315.002C3.15548 330.905 187.418 79.2397 314.726 126.297C442.034 173.354 482.168 391.989 605.688 321.618C737.897 246.301 782.964 39.2436 1080.12 2.63476C1273.58 -21.5697 1412.45 175.978 1529.16 265.719"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="348"
              viewBox="0 0 1440 348"
              fill="none"
            >
              <path
                d="M-63.1084 327.123C6.24261 343.567 193.688 87.655 320.518 130.227C447.349 172.8 485.716 402.583 609.857 334.486C743.085 261.332 786.258 38.8009 1085.19 2.55787C1279.48 -21.2967 1417.51 193.156 1529.78 281.831"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="359"
              viewBox="0 0 1440 359"
              fill="none"
            >
              <path
                d="M-62.1854 339.244C9.28207 356.212 199.926 96.0545 326.311 134.158C452.696 172.262 489.265 413.193 614.043 347.259C748.289 276.411 789.568 38.2628 1090.27 2.40147C1285.39 -21.1191 1422.59 210.206 1530.42 297.944"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="371"
              viewBox="0 0 1440 371"
              fill="none"
            >
              <path
                d="M-61.2623 351.365C12.4172 368.858 206.164 104.47 332.103 138.073C458.043 171.676 492.83 423.803 618.212 360.207C753.477 291.585 792.863 37.8839 1095.35 2.38828C1291.29 -20.8938 1427.65 227.384 1531.04 314.088"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="383"
              viewBox="0 0 1440 383"
              fill="none"
            >
              <path
                d="M-60.3553 363.485C15.4884 381.472 212.402 112.885 337.896 142.004C463.39 171.122 496.378 434.413 622.381 373.059C758.68 306.711 796.157 37.5048 1100.42 2.32724C1297.19 -20.6527 1432.71 244.53 1531.68 330.184"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="395"
              viewBox="0 0 1440 395"
              fill="none"
            >
              <path
                d="M-59.4324 375.606C18.5438 394.101 218.64 121.285 343.688 145.919C468.737 170.552 499.943 445.039 626.551 385.927C763.868 321.854 799.451 36.9827 1105.5 2.20279C1303.05 -20.4272 1437.79 261.645 1532.3 346.297"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="407"
              viewBox="0 0 1440 407"
              fill="none"
            >
              <path
                d="M-58.5253 387.695C21.6628 406.779 224.878 129.668 349.481 149.817C474.084 169.967 503.508 455.665 630.72 398.827C769.072 336.98 802.745 36.5559 1110.58 2.20538C1309 -20.1702 1442.85 278.807 1532.92 362.441"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="419"
              viewBox="0 0 1440 419"
              fill="none"
            >
              <path
                d="M-57.5546 399.848C24.75 419.376 231.116 138.099 355.273 153.78C479.43 169.46 507.056 466.259 634.889 411.648C774.26 352.075 806.039 36.0656 1115.65 2.09668C1314.9 -19.9767 1447.86 295.905 1533.54 378.522"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="431"
              viewBox="0 0 1440 431"
              fill="none"
            >
              <path
                d="M-56.6952 411.968C27.8214 432.006 237.354 146.515 361.066 157.695C484.777 168.875 510.653 476.932 639.059 424.516C779.463 367.265 809.333 35.6231 1120.73 2.03587C1320.79 -19.7354 1452.99 313.02 1534.18 394.65"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="444"
              viewBox="0 0 1440 444"
              fill="none"
            >
              <path
                d="M-55.7722 424.089C30.9086 444.636 243.592 154.93 366.858 161.689C490.124 168.448 514.17 487.701 643.244 437.448C784.667 382.423 812.627 35.2282 1125.8 2.02262C1326.7 -19.4624 1458.06 330.214 1534.78 410.826"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
            <svg
              className={cx('banner-svg')}
              xmlns="http://www.w3.org/2000/svg"
              height="456"
              viewBox="0 0 1440 456"
              fill="none"
            >
              <path
                d="M-54.8492 436.21C33.9958 457.266 249.831 163.33 372.635 165.556C495.439 167.783 517.734 498.232 647.413 450.236C789.855 397.518 815.921 34.7059 1130.88 1.88208C1332.6 -19.3008 1463.12 347.312 1535.39 426.827"
                stroke="#ccc"
                stroke-width="0.47"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
          <svg
            className={cx('banner-svg', 'other')}
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="425"
            viewBox="0 0 1440 425"
            fill="none"
          >
            <g opacity="0.6">
              <path
                d="M1657.38 84.1287C1657.38 84.1287 1573.84 289.725 1432.6 311.371C1291.37 333.017 1256.85 -20.9428 1109.14 1.71494C961.436 24.3727 945.414 343.817 845.442 359.133C745.471 374.45 651.591 66.9088 564.664 80.2165C477.737 93.5241 491.205 326.295 421.66 336.868C352.116 347.442 327.947 236.993 269.512 245.935C211.077 254.878 202.068 413.331 134.7 423.648C67.3321 433.964 7.82391 220.166 -103 237.174"
                stroke="#383838"
                stroke-width="0.75"
                stroke-miterlimit="10"
              />
            </g>
          </svg>
        </div>
        <div className={cx('content2')}>
          <div> Our Solutions</div>
          <span className={cx('text')}>
            We have more than 5 years of expertise offering financial servicesolutions, <br />
            and assisting customers inapproaching circumstances flexibly and proactively.
          </span>
        </div>
        <div className={cx('content-list')}>
          <Carousel {...params}>
            {slides.map((slide) => (
              <div className={cx('content-item')}>
                <img className={cx('content-item-img')} src={slide.img} key={slide} alt="ảnh" />
                <div>
                  <h2 className={cx('content-item-header')}>{slide.head}</h2>
                  <span className={cx('content-item-text')}>{slide.content}</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className={cx('content2')}>
          <div> About Us</div>
          <span className={cx('text')}>
            Confident and passionate in our capabilities to engineer extraordinary products
          </span>
        </div>
        <div className={cx('about-us')}>
          <button className={cx('creativity', 'btn')}>
            <span className={cx('span-creativity')}>Creativity</span>
          </button>
          <button className={cx('intellect', 'btn')}>
            <span className={cx('span-intellect')}>Intellect</span>
          </button>
          <button className={cx('dedication', 'btn')}>
            <span className={cx('span-dedication')}>Dedication</span>
          </button>
        </div>

        <div className={cx('intro')}>
          <img
            className={cx('intro-img')}
            src="https://teqnological.asia/assets/static/introBackground.161ca539.webp"
            width="1423px"
            height="771px"
          />
          <img
            className={cx('intro-logo')}
            alt="TEQNOLOGICAL ASIA"
            loading="lazy"
            decoding="async"
            src="https://teqnological.asia/images/companyLogo.webp"
          />
          <button className={cx('intro-btn')}>
            <img src="https://teqnological.asia/assets/static/homeIntroPlayBtn.e2d9e630.svg" />
          </button>
        </div>
        <span> our products</span>
        <div className={cx('test')}>
          <Tabs>
            <TabList>
              {iconTabBar.map((item) => (
                <Tab>
                  <div className={cx('icon')}>
                    {item.icon}
                    <span style={{ fontSize: 16 }}>{item.textIcon}</span>
                  </div>
                </Tab>
              ))}
            </TabList>
            {iconTabBar.map((item) => (
              <TabPanel>
                <div className={cx('contenttext')}>
                  <div className={cx('contentleft')}>
                    {item.icon}
                    <span style={{ paddingRight: 24, paddingLeft: 12, fontSize: 16 }}>{item.iconTextContent}</span>
                  </div>

                  <div className={cx('mot')} />

                  <span style={{ paddingLeft: 24, fontSize: 16 }}>{item.Content}</span>
                </div>
                <img src={item.img} style={{ width: 945, height: 520 }} />
              </TabPanel>
            ))}
          </Tabs>
        </div>
        <span> our partners</span>

        <div className={cx('logopartner')}>
          {partners.map((item) => (
            <button className={cx(`${item.name}`)}>
              <img src={item.img} />
            </button>
          ))}
        </div>

        <div className={cx('hiring')}>
          <h4 style={{ fontSize: 36 }}>We Are Hiring</h4>
          <span style={{ fontSize: 24 }}>Become a part of our team and build your bright future</span>
          <div className={cx('map')}>
            <img src={map} width={643} height={480} />
            <div className={cx('carer')}>
              {careers.map((item) => (
                <a href="text" alt="text" className={cx('carer-big')}>
                  {item.icon}
                  <div className={cx('carer__right')}>
                    <h3 style={{ height: 24 }}>{item.applied}</h3>
                    <p>{item.salary}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <svg width="2" height="27" viewBox="0 0 2 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0L0.999999 27" stroke="#333333" stroke-width="1.5" stroke-dasharray="4 1" />
          </svg>
          <svg width="1029" height="155" viewBox="0 0 1029 155" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5_6969)">
              <path
                d="M0 105H1002"
                stroke="url(#paint0_linear_5_6969)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M155.14 111.42C158.862 111.42 161.88 108.402 161.88 104.68C161.88 100.958 158.862 97.9399 155.14 97.9399C151.418 97.9399 148.4 100.958 148.4 104.68C148.4 108.402 151.418 111.42 155.14 111.42Z"
                fill="#333333"
              />
              <path
                d="M388.92 111.93C392.642 111.93 395.66 108.912 395.66 105.19C395.66 101.468 392.642 98.45 388.92 98.45C385.198 98.45 382.18 101.468 382.18 105.19C382.18 108.912 385.198 111.93 388.92 111.93Z"
                fill="#333333"
              />
              <path
                d="M628.32 104.68C628.322 106.016 627.928 107.322 627.187 108.434C626.446 109.545 625.392 110.412 624.158 110.924C622.924 111.436 621.566 111.571 620.256 111.311C618.945 111.051 617.742 110.408 616.797 109.463C615.853 108.518 615.209 107.315 614.949 106.004C614.689 104.694 614.824 103.336 615.336 102.102C615.848 100.868 616.715 99.8143 617.826 99.0734C618.938 98.3324 620.244 97.938 621.58 97.9399C622.465 97.9399 623.342 98.1143 624.159 98.453C624.977 98.7917 625.72 99.2882 626.346 99.914C626.972 100.54 627.468 101.283 627.807 102.101C628.146 102.918 628.32 103.795 628.32 104.68Z"
                fill="#333333"
              />
              <path
                d="M857.91 111.7C861.632 111.7 864.65 108.682 864.65 104.96C864.65 101.238 861.632 98.22 857.91 98.22C854.188 98.22 851.17 101.238 851.17 104.96C851.17 108.682 854.188 111.7 857.91 111.7Z"
                fill="#333333"
              />
              <path d="M155 102.19V105.19" stroke="#222222" stroke-miterlimit="10" />
              <path d="M857.91 102.19V105.19" stroke="#222222" stroke-miterlimit="10" />
              <path d="M154.75 74L154.75 101" stroke="#333333" stroke-width="1.5" stroke-dasharray="4 1" />
              <path d="M389 74L389 101" stroke="#333333" stroke-width="1.5" stroke-dasharray="4 1" />
            </g>
            <path
              d="M116.992 151H114.896L119.607 137.909H121.889L126.6 151H124.503L120.802 140.287H120.7L116.992 151ZM117.344 145.874H124.145V147.536H117.344V145.874ZM128.337 154.682V141.182H130.203V142.773H130.363C130.474 142.569 130.633 142.332 130.842 142.064C131.051 141.795 131.341 141.561 131.712 141.361C132.082 141.156 132.572 141.054 133.182 141.054C133.974 141.054 134.682 141.254 135.304 141.655C135.926 142.055 136.414 142.633 136.768 143.387C137.126 144.141 137.305 145.049 137.305 146.11C137.305 147.171 137.128 148.081 136.774 148.839C136.42 149.594 135.935 150.175 135.317 150.585C134.699 150.989 133.994 151.192 133.201 151.192C132.604 151.192 132.116 151.092 131.737 150.891C131.362 150.691 131.068 150.457 130.855 150.188C130.642 149.92 130.478 149.681 130.363 149.472H130.248V154.682H128.337ZM130.209 146.091C130.209 146.781 130.31 147.386 130.51 147.906C130.71 148.426 131 148.833 131.379 149.127C131.758 149.417 132.223 149.562 132.773 149.562C133.344 149.562 133.821 149.411 134.204 149.108C134.588 148.801 134.878 148.386 135.074 147.862C135.274 147.337 135.374 146.747 135.374 146.091C135.374 145.443 135.276 144.862 135.08 144.346C134.888 143.83 134.599 143.423 134.211 143.125C133.827 142.827 133.348 142.678 132.773 142.678C132.219 142.678 131.75 142.82 131.366 143.106C130.987 143.391 130.699 143.79 130.503 144.301C130.307 144.812 130.209 145.409 130.209 146.091ZM139.446 154.682V141.182H141.312V142.773H141.472C141.583 142.569 141.743 142.332 141.952 142.064C142.16 141.795 142.45 141.561 142.821 141.361C143.192 141.156 143.682 141.054 144.291 141.054C145.084 141.054 145.791 141.254 146.413 141.655C147.035 142.055 147.523 142.633 147.877 143.387C148.235 144.141 148.414 145.049 148.414 146.11C148.414 147.171 148.237 148.081 147.883 148.839C147.53 149.594 147.044 150.175 146.426 150.585C145.808 150.989 145.103 151.192 144.31 151.192C143.714 151.192 143.226 151.092 142.847 150.891C142.472 150.691 142.177 150.457 141.964 150.188C141.751 149.92 141.587 149.681 141.472 149.472H141.357V154.682H139.446ZM141.319 146.091C141.319 146.781 141.419 147.386 141.619 147.906C141.82 148.426 142.109 148.833 142.489 149.127C142.868 149.417 143.332 149.562 143.882 149.562C144.453 149.562 144.93 149.411 145.314 149.108C145.697 148.801 145.987 148.386 146.183 147.862C146.383 147.337 146.484 146.747 146.484 146.091C146.484 145.443 146.386 144.862 146.19 144.346C145.998 143.83 145.708 143.423 145.32 143.125C144.937 142.827 144.457 142.678 143.882 142.678C143.328 142.678 142.859 142.82 142.476 143.106C142.097 143.391 141.809 143.79 141.613 144.301C141.417 144.812 141.319 145.409 141.319 146.091ZM152.467 137.909V151H150.555V137.909H152.467ZM156.246 154.682C155.96 154.682 155.7 154.658 155.466 154.612C155.232 154.569 155.057 154.522 154.942 154.471L155.402 152.905C155.752 152.999 156.063 153.039 156.335 153.026C156.608 153.013 156.849 152.911 157.058 152.719C157.271 152.528 157.458 152.214 157.62 151.78L157.857 151.128L154.264 141.182H156.31L158.796 148.801H158.899L161.385 141.182H163.437L159.391 152.31C159.203 152.822 158.965 153.254 158.675 153.608C158.385 153.966 158.04 154.234 157.639 154.413C157.239 154.592 156.774 154.682 156.246 154.682ZM181.023 142.166H179.029C178.952 141.74 178.809 141.365 178.6 141.041C178.392 140.717 178.136 140.442 177.833 140.217C177.531 139.991 177.192 139.82 176.817 139.705C176.446 139.59 176.052 139.533 175.634 139.533C174.88 139.533 174.205 139.722 173.608 140.102C173.016 140.481 172.547 141.037 172.202 141.77C171.861 142.503 171.691 143.398 171.691 144.455C171.691 145.52 171.861 146.419 172.202 147.152C172.547 147.885 173.018 148.439 173.615 148.814C174.211 149.189 174.882 149.376 175.628 149.376C176.041 149.376 176.434 149.321 176.804 149.21C177.179 149.095 177.518 148.927 177.821 148.705C178.123 148.484 178.379 148.213 178.588 147.893C178.801 147.57 178.948 147.199 179.029 146.781L181.023 146.788C180.916 147.431 180.71 148.023 180.403 148.565C180.1 149.102 179.71 149.566 179.233 149.958C178.76 150.346 178.219 150.646 177.61 150.859C177 151.072 176.335 151.179 175.615 151.179C174.482 151.179 173.472 150.911 172.585 150.374C171.699 149.832 171 149.059 170.489 148.053C169.982 147.048 169.728 145.848 169.728 144.455C169.728 143.057 169.984 141.857 170.495 140.856C171.007 139.85 171.706 139.079 172.592 138.542C173.478 138.001 174.486 137.73 175.615 137.73C176.31 137.73 176.958 137.83 177.559 138.031C178.164 138.227 178.707 138.516 179.188 138.9C179.67 139.279 180.068 139.744 180.384 140.293C180.699 140.839 180.912 141.463 181.023 142.166ZM184.531 137.909L188.174 148.571H188.321L191.965 137.909H194.1L189.389 151H187.107L182.396 137.909H184.531Z"
              fill="#222222"
            />
            <path
              d="M342.679 142.166H340.685C340.608 141.74 340.465 141.365 340.257 141.041C340.048 140.717 339.792 140.442 339.49 140.217C339.187 139.991 338.848 139.82 338.473 139.705C338.103 139.59 337.708 139.533 337.291 139.533C336.536 139.533 335.861 139.722 335.264 140.102C334.672 140.481 334.203 141.037 333.858 141.77C333.517 142.503 333.347 143.398 333.347 144.455C333.347 145.52 333.517 146.419 333.858 147.152C334.203 147.885 334.674 148.439 335.271 148.814C335.867 149.189 336.539 149.376 337.284 149.376C337.698 149.376 338.09 149.321 338.46 149.21C338.835 149.095 339.174 148.927 339.477 148.705C339.779 148.484 340.035 148.213 340.244 147.893C340.457 147.57 340.604 147.199 340.685 146.781L342.679 146.788C342.573 147.431 342.366 148.023 342.059 148.565C341.757 149.102 341.367 149.566 340.889 149.958C340.416 150.346 339.875 150.646 339.266 150.859C338.657 151.072 337.992 151.179 337.272 151.179C336.138 151.179 335.128 150.911 334.242 150.374C333.355 149.832 332.657 149.059 332.145 148.053C331.638 147.048 331.384 145.848 331.384 144.455C331.384 143.057 331.64 141.857 332.152 140.856C332.663 139.85 333.362 139.079 334.248 138.542C335.134 138.001 336.142 137.73 337.272 137.73C337.966 137.73 338.614 137.83 339.215 138.031C339.82 138.227 340.363 138.516 340.845 138.9C341.326 139.279 341.725 139.744 342.04 140.293C342.355 140.839 342.568 141.463 342.679 142.166ZM347.747 151.217C347.124 151.217 346.562 151.102 346.059 150.872C345.556 150.638 345.158 150.299 344.864 149.856C344.574 149.413 344.429 148.869 344.429 148.226C344.429 147.672 344.536 147.216 344.749 146.858C344.962 146.5 345.249 146.217 345.612 146.008C345.974 145.799 346.379 145.641 346.826 145.535C347.274 145.428 347.729 145.347 348.194 145.292C348.782 145.224 349.259 145.168 349.626 145.126C349.992 145.079 350.259 145.004 350.425 144.902C350.591 144.8 350.674 144.634 350.674 144.403V144.359C350.674 143.8 350.516 143.368 350.201 143.061C349.89 142.754 349.426 142.601 348.808 142.601C348.164 142.601 347.657 142.744 347.286 143.029C346.92 143.31 346.666 143.624 346.526 143.969L344.729 143.56C344.943 142.963 345.254 142.482 345.663 142.115C346.076 141.744 346.551 141.476 347.088 141.31C347.625 141.139 348.19 141.054 348.782 141.054C349.174 141.054 349.59 141.101 350.028 141.195C350.472 141.284 350.885 141.45 351.269 141.693C351.656 141.936 351.974 142.283 352.221 142.735C352.468 143.183 352.592 143.764 352.592 144.48V151H350.725V149.658H350.649C350.525 149.905 350.34 150.148 350.092 150.386C349.845 150.625 349.528 150.823 349.14 150.981C348.752 151.138 348.288 151.217 347.747 151.217ZM348.162 149.683C348.69 149.683 349.142 149.579 349.517 149.37C349.896 149.161 350.184 148.888 350.38 148.552C350.58 148.211 350.68 147.847 350.68 147.459V146.193C350.612 146.261 350.48 146.325 350.284 146.385C350.092 146.44 349.873 146.489 349.626 146.532C349.379 146.57 349.138 146.607 348.903 146.641C348.669 146.67 348.473 146.696 348.315 146.717C347.945 146.764 347.606 146.843 347.299 146.954C346.997 147.065 346.754 147.224 346.57 147.433C346.391 147.638 346.302 147.911 346.302 148.251C346.302 148.724 346.477 149.082 346.826 149.325C347.176 149.564 347.621 149.683 348.162 149.683ZM357.049 137.909V151H355.137V137.909H357.049ZM361.531 137.909V151H359.62V137.909H361.531ZM370.994 137.909V151H369.019V137.909H370.994ZM375.629 145.17V151H373.717V141.182H375.552V142.78H375.673C375.899 142.26 376.253 141.842 376.734 141.527C377.22 141.212 377.832 141.054 378.569 141.054C379.238 141.054 379.824 141.195 380.327 141.476C380.83 141.753 381.22 142.166 381.497 142.716C381.774 143.266 381.912 143.945 381.912 144.755V151H380.001V144.985C380.001 144.273 379.815 143.717 379.445 143.317C379.074 142.912 378.565 142.71 377.917 142.71C377.474 142.71 377.08 142.805 376.734 142.997C376.394 143.189 376.123 143.47 375.923 143.841C375.727 144.207 375.629 144.651 375.629 145.17ZM389.058 141.182V142.716H383.695V141.182H389.058ZM385.134 138.83H387.045V148.117C387.045 148.488 387.1 148.767 387.211 148.955C387.322 149.138 387.465 149.263 387.639 149.332C387.818 149.396 388.012 149.428 388.221 149.428C388.374 149.428 388.509 149.417 388.624 149.396C388.739 149.374 388.828 149.357 388.892 149.344L389.237 150.923C389.127 150.966 388.969 151.009 388.764 151.051C388.56 151.098 388.304 151.124 387.997 151.128C387.494 151.136 387.026 151.047 386.591 150.859C386.156 150.672 385.805 150.382 385.536 149.99C385.268 149.598 385.134 149.106 385.134 148.513V138.83ZM395.299 151.198C394.331 151.198 393.498 150.991 392.799 150.578C392.105 150.161 391.568 149.575 391.188 148.82C390.813 148.062 390.626 147.173 390.626 146.155C390.626 145.149 390.813 144.263 391.188 143.496C391.568 142.729 392.096 142.13 392.774 141.7C393.456 141.269 394.252 141.054 395.164 141.054C395.718 141.054 396.255 141.146 396.775 141.329C397.295 141.512 397.762 141.8 398.175 142.192C398.588 142.584 398.914 143.093 399.153 143.719C399.392 144.342 399.511 145.098 399.511 145.989V146.666H391.706V145.234H397.638C397.638 144.732 397.536 144.286 397.331 143.898C397.127 143.506 396.839 143.197 396.468 142.972C396.102 142.746 395.671 142.633 395.177 142.633C394.64 142.633 394.171 142.765 393.771 143.029C393.375 143.289 393.068 143.63 392.85 144.052C392.637 144.469 392.531 144.923 392.531 145.413V146.532C392.531 147.188 392.646 147.746 392.876 148.207C393.11 148.667 393.436 149.018 393.854 149.261C394.272 149.5 394.759 149.619 395.318 149.619C395.68 149.619 396.01 149.568 396.309 149.466C396.607 149.359 396.865 149.202 397.082 148.993C397.299 148.784 397.465 148.526 397.581 148.219L399.389 148.545C399.245 149.078 398.985 149.545 398.61 149.945C398.239 150.342 397.772 150.651 397.21 150.872C396.652 151.089 396.014 151.198 395.299 151.198ZM401.631 151V141.182H403.479V142.741H403.581C403.76 142.213 404.075 141.798 404.527 141.495C404.983 141.188 405.499 141.035 406.074 141.035C406.193 141.035 406.334 141.039 406.496 141.048C406.662 141.056 406.792 141.067 406.886 141.08V142.908C406.809 142.886 406.673 142.863 406.477 142.837C406.281 142.808 406.085 142.793 405.889 142.793C405.437 142.793 405.034 142.888 404.68 143.08C404.331 143.268 404.054 143.53 403.85 143.866C403.645 144.199 403.543 144.578 403.543 145.004V151H401.631ZM417.238 141.182L413.677 151H411.632L408.065 141.182H410.117L412.603 148.737H412.706L415.186 141.182H417.238ZM419.034 151V141.182H420.945V151H419.034ZM419.999 139.667C419.667 139.667 419.381 139.556 419.142 139.335C418.908 139.109 418.791 138.84 418.791 138.529C418.791 138.214 418.908 137.945 419.142 137.724C419.381 137.498 419.667 137.385 419.999 137.385C420.331 137.385 420.615 137.498 420.849 137.724C421.088 137.945 421.207 138.214 421.207 138.529C421.207 138.84 421.088 139.109 420.849 139.335C420.615 139.556 420.331 139.667 419.999 139.667ZM427.748 151.198C426.78 151.198 425.947 150.991 425.248 150.578C424.554 150.161 424.017 149.575 423.638 148.82C423.263 148.062 423.075 147.173 423.075 146.155C423.075 145.149 423.263 144.263 423.638 143.496C424.017 142.729 424.545 142.13 425.223 141.7C425.905 141.269 426.702 141.054 427.614 141.054C428.168 141.054 428.704 141.146 429.224 141.329C429.744 141.512 430.211 141.8 430.624 142.192C431.038 142.584 431.364 143.093 431.602 143.719C431.841 144.342 431.96 145.098 431.96 145.989V146.666H424.155V145.234H430.087C430.087 144.732 429.985 144.286 429.78 143.898C429.576 143.506 429.288 143.197 428.918 142.972C428.551 142.746 428.121 142.633 427.626 142.633C427.089 142.633 426.621 142.765 426.22 143.029C425.824 143.289 425.517 143.63 425.3 144.052C425.087 144.469 424.98 144.923 424.98 145.413V146.532C424.98 147.188 425.095 147.746 425.325 148.207C425.56 148.667 425.886 149.018 426.303 149.261C426.721 149.5 427.209 149.619 427.767 149.619C428.129 149.619 428.459 149.568 428.758 149.466C429.056 149.359 429.314 149.202 429.531 148.993C429.748 148.784 429.915 148.526 430.03 148.219L431.839 148.545C431.694 149.078 431.434 149.545 431.059 149.945C430.688 150.342 430.222 150.651 429.659 150.872C429.101 151.089 428.464 151.198 427.748 151.198ZM436.192 151L433.302 141.182H435.278L437.202 148.392H437.297L439.228 141.182H441.203L443.121 148.36H443.217L445.128 141.182H447.103L444.22 151H442.271L440.276 143.911H440.129L438.135 151H436.192Z"
              fill="#222222"
            />
            <path
              d="M555.492 151V137.909H560.158C561.172 137.909 562.014 138.084 562.683 138.433C563.356 138.783 563.859 139.266 564.191 139.884C564.524 140.498 564.69 141.207 564.69 142.013C564.69 142.814 564.522 143.519 564.185 144.129C563.853 144.734 563.35 145.205 562.677 145.541C562.008 145.878 561.166 146.046 560.152 146.046H556.617V144.346H559.973C560.612 144.346 561.132 144.254 561.532 144.071C561.937 143.888 562.233 143.621 562.421 143.272C562.608 142.923 562.702 142.503 562.702 142.013C562.702 141.518 562.606 141.09 562.415 140.728C562.227 140.366 561.931 140.089 561.526 139.897C561.125 139.701 560.599 139.603 559.947 139.603H557.467V151H555.492ZM561.954 145.094L565.189 151H562.939L559.768 145.094H561.954ZM570.953 151.198C570.032 151.198 569.229 150.987 568.543 150.565C567.857 150.143 567.324 149.553 566.945 148.795C566.566 148.036 566.376 147.15 566.376 146.136C566.376 145.117 566.566 144.227 566.945 143.464C567.324 142.701 567.857 142.109 568.543 141.687C569.229 141.265 570.032 141.054 570.953 141.054C571.873 141.054 572.676 141.265 573.362 141.687C574.049 142.109 574.581 142.701 574.96 143.464C575.34 144.227 575.529 145.117 575.529 146.136C575.529 147.15 575.34 148.036 574.96 148.795C574.581 149.553 574.049 150.143 573.362 150.565C572.676 150.987 571.873 151.198 570.953 151.198ZM570.959 149.594C571.556 149.594 572.05 149.436 572.442 149.121C572.834 148.805 573.124 148.386 573.311 147.862C573.503 147.337 573.599 146.76 573.599 146.129C573.599 145.503 573.503 144.928 573.311 144.403C573.124 143.875 572.834 143.451 572.442 143.131C572.05 142.812 571.556 142.652 570.959 142.652C570.358 142.652 569.86 142.812 569.463 143.131C569.071 143.451 568.779 143.875 568.588 144.403C568.4 144.928 568.306 145.503 568.306 146.129C568.306 146.76 568.4 147.337 568.588 147.862C568.779 148.386 569.071 148.805 569.463 149.121C569.86 149.436 570.358 149.594 570.959 149.594ZM581.798 151.198C580.878 151.198 580.075 150.987 579.389 150.565C578.703 150.143 578.17 149.553 577.791 148.795C577.411 148.036 577.222 147.15 577.222 146.136C577.222 145.117 577.411 144.227 577.791 143.464C578.17 142.701 578.703 142.109 579.389 141.687C580.075 141.265 580.878 141.054 581.798 141.054C582.719 141.054 583.522 141.265 584.208 141.687C584.894 142.109 585.427 142.701 585.806 143.464C586.185 144.227 586.375 145.117 586.375 146.136C586.375 147.15 586.185 148.036 585.806 148.795C585.427 149.553 584.894 150.143 584.208 150.565C583.522 150.987 582.719 151.198 581.798 151.198ZM581.805 149.594C582.401 149.594 582.896 149.436 583.288 149.121C583.68 148.805 583.97 148.386 584.157 147.862C584.349 147.337 584.445 146.76 584.445 146.129C584.445 145.503 584.349 144.928 584.157 144.403C583.97 143.875 583.68 143.451 583.288 143.131C582.896 142.812 582.401 142.652 581.805 142.652C581.204 142.652 580.705 142.812 580.309 143.131C579.917 143.451 579.625 143.875 579.433 144.403C579.246 144.928 579.152 145.503 579.152 146.129C579.152 146.76 579.246 147.337 579.433 147.862C579.625 148.386 579.917 148.805 580.309 149.121C580.705 149.436 581.204 149.594 581.805 149.594ZM588.508 151V141.182H590.343V142.78H590.464C590.669 142.239 591.003 141.817 591.468 141.514C591.932 141.207 592.489 141.054 593.136 141.054C593.793 141.054 594.342 141.207 594.785 141.514C595.233 141.821 595.563 142.243 595.776 142.78H595.878C596.113 142.256 596.486 141.838 596.997 141.527C597.508 141.212 598.118 141.054 598.825 141.054C599.716 141.054 600.442 141.333 601.005 141.891C601.572 142.45 601.855 143.291 601.855 144.416V151H599.944V144.595C599.944 143.93 599.763 143.449 599.4 143.151C599.038 142.852 598.606 142.703 598.103 142.703C597.481 142.703 596.997 142.895 596.652 143.278C596.307 143.658 596.134 144.146 596.134 144.742V151H594.229V144.474C594.229 143.941 594.063 143.513 593.731 143.189C593.398 142.865 592.966 142.703 592.433 142.703C592.071 142.703 591.736 142.799 591.43 142.991C591.127 143.178 590.882 143.44 590.695 143.777C590.511 144.114 590.42 144.504 590.42 144.947V151H588.508ZM611.309 137.909V151H609.334V137.909H611.309ZM615.943 145.17V151H614.032V141.182H615.866V142.78H615.988C616.214 142.26 616.567 141.842 617.049 141.527C617.535 141.212 618.146 141.054 618.883 141.054C619.552 141.054 620.138 141.195 620.641 141.476C621.144 141.753 621.534 142.166 621.811 142.716C622.088 143.266 622.226 143.945 622.226 144.755V151H620.315V144.985C620.315 144.273 620.13 143.717 619.759 143.317C619.388 142.912 618.879 142.71 618.231 142.71C617.788 142.71 617.394 142.805 617.049 142.997C616.708 143.189 616.437 143.47 616.237 143.841C616.041 144.207 615.943 144.651 615.943 145.17ZM629.373 141.182V142.716H624.01V141.182H629.373ZM625.448 138.83H627.359V148.117C627.359 148.488 627.415 148.767 627.525 148.955C627.636 149.138 627.779 149.263 627.954 149.332C628.133 149.396 628.327 149.428 628.535 149.428C628.689 149.428 628.823 149.417 628.938 149.396C629.053 149.374 629.143 149.357 629.207 149.344L629.552 150.923C629.441 150.966 629.283 151.009 629.079 151.051C628.874 151.098 628.619 151.124 628.312 151.128C627.809 151.136 627.34 151.047 626.905 150.859C626.471 150.672 626.119 150.382 625.851 149.99C625.582 149.598 625.448 149.106 625.448 148.513V138.83ZM635.613 151.198C634.646 151.198 633.813 150.991 633.114 150.578C632.419 150.161 631.882 149.575 631.503 148.82C631.128 148.062 630.94 147.173 630.94 146.155C630.94 145.149 631.128 144.263 631.503 143.496C631.882 142.729 632.411 142.13 633.088 141.7C633.77 141.269 634.567 141.054 635.479 141.054C636.033 141.054 636.57 141.146 637.09 141.329C637.609 141.512 638.076 141.8 638.489 142.192C638.903 142.584 639.229 143.093 639.467 143.719C639.706 144.342 639.825 145.098 639.825 145.989V146.666H632.021V145.234H637.953C637.953 144.732 637.85 144.286 637.646 143.898C637.441 143.506 637.153 143.197 636.783 142.972C636.416 142.746 635.986 142.633 635.492 142.633C634.955 142.633 634.486 142.765 634.085 143.029C633.689 143.289 633.382 143.63 633.165 144.052C632.952 144.469 632.845 144.923 632.845 145.413V146.532C632.845 147.188 632.96 147.746 633.19 148.207C633.425 148.667 633.751 149.018 634.168 149.261C634.586 149.5 635.074 149.619 635.632 149.619C635.994 149.619 636.325 149.568 636.623 149.466C636.921 149.359 637.179 149.202 637.396 148.993C637.614 148.784 637.78 148.526 637.895 148.219L639.704 148.545C639.559 149.078 639.299 149.545 638.924 149.945C638.553 150.342 638.087 150.651 637.524 150.872C636.966 151.089 636.329 151.198 635.613 151.198ZM641.946 151V141.182H643.793V142.741H643.896C644.074 142.213 644.39 141.798 644.842 141.495C645.297 141.188 645.813 141.035 646.388 141.035C646.508 141.035 646.648 141.039 646.81 141.048C646.976 141.056 647.106 141.067 647.2 141.08V142.908C647.123 142.886 646.987 142.863 646.791 142.837C646.595 142.808 646.399 142.793 646.203 142.793C645.751 142.793 645.349 142.888 644.995 143.08C644.646 143.268 644.369 143.53 644.164 143.866C643.959 144.199 643.857 144.578 643.857 145.004V151H641.946ZM657.552 141.182L653.992 151H651.946L648.38 141.182H650.431L652.918 148.737H653.02L655.5 141.182H657.552ZM659.348 151V141.182H661.259V151H659.348ZM660.313 139.667C659.981 139.667 659.696 139.556 659.457 139.335C659.223 139.109 659.105 138.84 659.105 138.529C659.105 138.214 659.223 137.945 659.457 137.724C659.696 137.498 659.981 137.385 660.313 137.385C660.646 137.385 660.929 137.498 661.164 137.724C661.402 137.945 661.522 138.214 661.522 138.529C661.522 138.84 661.402 139.109 661.164 139.335C660.929 139.556 660.646 139.667 660.313 139.667ZM668.062 151.198C667.095 151.198 666.262 150.991 665.563 150.578C664.868 150.161 664.331 149.575 663.952 148.82C663.577 148.062 663.39 147.173 663.39 146.155C663.39 145.149 663.577 144.263 663.952 143.496C664.331 142.729 664.86 142.13 665.537 141.7C666.219 141.269 667.016 141.054 667.928 141.054C668.482 141.054 669.019 141.146 669.539 141.329C670.059 141.512 670.525 141.8 670.939 142.192C671.352 142.584 671.678 143.093 671.917 143.719C672.155 144.342 672.275 145.098 672.275 145.989V146.666H664.47V145.234H670.402C670.402 144.732 670.299 144.286 670.095 143.898C669.89 143.506 669.603 143.197 669.232 142.972C668.866 142.746 668.435 142.633 667.941 142.633C667.404 142.633 666.935 142.765 666.535 143.029C666.138 143.289 665.831 143.63 665.614 144.052C665.401 144.469 665.294 144.923 665.294 145.413V146.532C665.294 147.188 665.41 147.746 665.64 148.207C665.874 148.667 666.2 149.018 666.618 149.261C667.035 149.5 667.523 149.619 668.081 149.619C668.444 149.619 668.774 149.568 669.072 149.466C669.37 149.359 669.628 149.202 669.846 148.993C670.063 148.784 670.229 148.526 670.344 148.219L672.153 148.545C672.008 149.078 671.748 149.545 671.373 149.945C671.003 150.342 670.536 150.651 669.973 150.872C669.415 151.089 668.778 151.198 668.062 151.198ZM676.506 151L673.617 141.182H675.592L677.516 148.392H677.612L679.542 141.182H681.517L683.435 148.36H683.531L685.442 141.182H687.417L684.535 151H682.585L680.591 143.911H680.444L678.449 151H676.506Z"
              fill="#222222"
            />
            <path
              d="M835.03 144.455C835.03 145.852 834.775 147.054 834.263 148.06C833.752 149.061 833.051 149.832 832.16 150.374C831.274 150.911 830.266 151.179 829.137 151.179C828.003 151.179 826.991 150.911 826.101 150.374C825.214 149.832 824.515 149.059 824.004 148.053C823.493 147.048 823.237 145.848 823.237 144.455C823.237 143.057 823.493 141.857 824.004 140.856C824.515 139.85 825.214 139.079 826.101 138.542C826.991 138.001 828.003 137.73 829.137 137.73C830.266 137.73 831.274 138.001 832.16 138.542C833.051 139.079 833.752 139.85 834.263 140.856C834.775 141.857 835.03 143.057 835.03 144.455ZM833.074 144.455C833.074 143.389 832.902 142.492 832.557 141.763C832.216 141.031 831.747 140.477 831.15 140.102C830.558 139.722 829.887 139.533 829.137 139.533C828.383 139.533 827.709 139.722 827.117 140.102C826.525 140.477 826.056 141.031 825.711 141.763C825.37 142.492 825.199 143.389 825.199 144.455C825.199 145.52 825.37 146.419 825.711 147.152C826.056 147.881 826.525 148.435 827.117 148.814C827.709 149.189 828.383 149.376 829.137 149.376C829.887 149.376 830.558 149.189 831.15 148.814C831.747 148.435 832.216 147.881 832.557 147.152C832.902 146.419 833.074 145.52 833.074 144.455ZM842.012 141.182V142.716H836.464V141.182H842.012ZM837.985 151V140.044C837.985 139.43 838.119 138.921 838.388 138.516C838.656 138.107 839.012 137.803 839.455 137.602C839.898 137.398 840.38 137.295 840.9 137.295C841.283 137.295 841.612 137.327 841.884 137.391C842.157 137.451 842.359 137.506 842.491 137.558L842.044 139.104C841.955 139.079 841.839 139.049 841.699 139.015C841.558 138.977 841.388 138.957 841.188 138.957C840.723 138.957 840.391 139.072 840.19 139.303C839.994 139.533 839.896 139.865 839.896 140.3V151H837.985ZM848.657 141.182V142.716H843.108V141.182H848.657ZM844.63 151V140.044C844.63 139.43 844.764 138.921 845.032 138.516C845.301 138.107 845.657 137.803 846.1 137.602C846.543 137.398 847.025 137.295 847.544 137.295C847.928 137.295 848.256 137.327 848.529 137.391C848.801 137.451 849.004 137.506 849.136 137.558L848.689 139.104C848.599 139.079 848.484 139.049 848.343 139.015C848.203 138.977 848.032 138.957 847.832 138.957C847.368 138.957 847.035 139.072 846.835 139.303C846.639 139.533 846.541 139.865 846.541 140.3V151H844.63ZM854.473 151.198C853.506 151.198 852.673 150.991 851.974 150.578C851.279 150.161 850.743 149.575 850.363 148.82C849.988 148.062 849.801 147.173 849.801 146.155C849.801 145.149 849.988 144.263 850.363 143.496C850.743 142.729 851.271 142.13 851.949 141.7C852.63 141.269 853.427 141.054 854.339 141.054C854.893 141.054 855.43 141.146 855.95 141.329C856.47 141.512 856.936 141.8 857.35 142.192C857.763 142.584 858.089 143.093 858.328 143.719C858.566 144.342 858.686 145.098 858.686 145.989V146.666H850.881V145.234H856.813C856.813 144.732 856.711 144.286 856.506 143.898C856.301 143.506 856.014 143.197 855.643 142.972C855.277 142.746 854.846 142.633 854.352 142.633C853.815 142.633 853.346 142.765 852.946 143.029C852.549 143.289 852.243 143.63 852.025 144.052C851.812 144.469 851.706 144.923 851.706 145.413V146.532C851.706 147.188 851.821 147.746 852.051 148.207C852.285 148.667 852.611 149.018 853.029 149.261C853.446 149.5 853.934 149.619 854.493 149.619C854.855 149.619 855.185 149.568 855.483 149.466C855.782 149.359 856.039 149.202 856.257 148.993C856.474 148.784 856.64 148.526 856.755 148.219L858.564 148.545C858.419 149.078 858.159 149.545 857.784 149.945C857.414 150.342 856.947 150.651 856.385 150.872C855.826 151.089 855.189 151.198 854.473 151.198ZM860.806 151V141.182H862.654V142.741H862.756C862.935 142.213 863.25 141.798 863.702 141.495C864.158 141.188 864.673 141.035 865.249 141.035C865.368 141.035 865.509 141.039 865.671 141.048C865.837 141.056 865.967 141.067 866.061 141.08V142.908C865.984 142.886 865.847 142.863 865.651 142.837C865.455 142.808 865.259 142.793 865.063 142.793C864.612 142.793 864.209 142.888 863.855 143.08C863.506 143.268 863.229 143.53 863.024 143.866C862.82 144.199 862.718 144.578 862.718 145.004V151H860.806ZM867.714 151V141.182H869.626V151H867.714ZM868.68 139.667C868.347 139.667 868.062 139.556 867.823 139.335C867.589 139.109 867.472 138.84 867.472 138.529C867.472 138.214 867.589 137.945 867.823 137.724C868.062 137.498 868.347 137.385 868.68 137.385C869.012 137.385 869.295 137.498 869.53 137.724C869.768 137.945 869.888 138.214 869.888 138.529C869.888 138.84 869.768 139.109 869.53 139.335C869.295 139.556 869.012 139.667 868.68 139.667ZM874.108 145.17V151H872.197V141.182H874.031V142.78H874.153C874.379 142.26 874.732 141.842 875.214 141.527C875.7 141.212 876.311 141.054 877.048 141.054C877.718 141.054 878.303 141.195 878.806 141.476C879.309 141.753 879.699 142.166 879.976 142.716C880.253 143.266 880.392 143.945 880.392 144.755V151H878.48V144.985C878.48 144.273 878.295 143.717 877.924 143.317C877.553 142.912 877.044 142.71 876.396 142.71C875.953 142.71 875.559 142.805 875.214 142.997C874.873 143.189 874.602 143.47 874.402 143.841C874.206 144.207 874.108 144.651 874.108 145.17ZM887.071 154.886C886.291 154.886 885.62 154.784 885.058 154.58C884.499 154.375 884.044 154.104 883.69 153.768C883.336 153.431 883.072 153.063 882.897 152.662L884.54 151.984C884.655 152.172 884.808 152.37 885 152.579C885.196 152.792 885.46 152.973 885.793 153.122C886.129 153.271 886.562 153.346 887.09 153.346C887.815 153.346 888.414 153.169 888.887 152.815C889.36 152.466 889.596 151.908 889.596 151.141V149.21H889.475C889.36 149.419 889.193 149.651 888.976 149.907C888.763 150.163 888.469 150.384 888.094 150.572C887.719 150.759 887.231 150.853 886.63 150.853C885.855 150.853 885.156 150.672 884.534 150.31C883.916 149.943 883.426 149.404 883.063 148.692C882.705 147.977 882.526 147.097 882.526 146.053C882.526 145.009 882.703 144.114 883.057 143.368C883.415 142.622 883.905 142.051 884.527 141.655C885.149 141.254 885.855 141.054 886.643 141.054C887.252 141.054 887.744 141.156 888.119 141.361C888.494 141.561 888.786 141.795 888.995 142.064C889.208 142.332 889.372 142.569 889.487 142.773H889.628V141.182H891.501V151.217C891.501 152.061 891.305 152.754 890.913 153.295C890.521 153.836 889.99 154.237 889.321 154.496C888.656 154.756 887.906 154.886 887.071 154.886ZM887.052 149.268C887.602 149.268 888.066 149.14 888.445 148.884C888.829 148.624 889.119 148.254 889.315 147.772C889.515 147.286 889.615 146.705 889.615 146.027C889.615 145.366 889.517 144.785 889.321 144.282C889.125 143.779 888.838 143.387 888.458 143.106C888.079 142.82 887.61 142.678 887.052 142.678C886.477 142.678 885.997 142.827 885.614 143.125C885.23 143.419 884.941 143.82 884.744 144.327C884.553 144.834 884.457 145.401 884.457 146.027C884.457 146.67 884.555 147.235 884.751 147.721C884.947 148.207 885.237 148.586 885.62 148.859C886.008 149.131 886.485 149.268 887.052 149.268Z"
              fill="#222222"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5_6969"
                x1="0"
                y1="106.017"
                x2="1002"
                y2="106.017"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#222222" stop-opacity="0" />
                <stop offset="0.489583" stop-color="#222222" />
                <stop offset="1" stop-color="#222222" stop-opacity="0.0520833" />
              </linearGradient>
              <clipPath id="clip0_5_6969">
                <rect width="1028.58" height="111.93" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
