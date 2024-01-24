import Home from '~/pages/Home';
import AboutUs from '~/pages/AboutUs';
import News from '~/pages/News';
import Gallery from '~/pages/Gallery';
import Contact from '~/pages/Contact';
import Careers from '~/pages/Careers';


export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/about-us', component: AboutUs },
  { path: '/careers', component: Careers },
  { path: '/news', component: News },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
];

export const privateRoutes = [];
