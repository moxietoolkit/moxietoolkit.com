import './globals.css';
import PropTypes from 'prop-types';
import Fathom from '../utils/fathom';
import NavigationWrapper from '../components/NavigationWrapper';
import { getNavigation } from '../components/navigation';

export const metadata = {
  title: 'Moxie Toolkit',
  description: "Rules and more for games 'Made with Moxie'",
};

export default async function RootLayout({ children }) {
  const navigation = await getNavigation();

  return (
    <html lang="en" className="h-full">
      <body className="antialiased bg-grimwild-light text-grimwild-dark h-full">
        <Fathom />
        <NavigationWrapper navigation={navigation}>
          {children}
        </NavigationWrapper>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
