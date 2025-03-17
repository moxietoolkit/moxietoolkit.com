import './globals.css';
import PropTypes from 'prop-types';
import Fathom from './utils/fathom';
import SidebarLayout from './components/sidebarLayout';

export const metadata = {
  title: 'Moxie Toolkit',
  description: "Rules and more for games 'Made with Moxie'",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="antialiased bg-grimwild-light text-grimwild-dark h-full">
        <Fathom />
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
