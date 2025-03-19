import './globals.css';
import PropTypes from 'prop-types';
import Fathom from '../utils/fathom';
import SidebarLayout from '../components/sidebarLayout';
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
        <SidebarLayout navigation={navigation}>{children}</SidebarLayout>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
