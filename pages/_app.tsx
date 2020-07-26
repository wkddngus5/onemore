import '../styles/index.css';
import './search.css';
import '../components/ServiceList.css';
import '../components/CategoryNavigation.css';
import '../layout/Header.css';
import '../layout/Menu.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}