import './globals.css';
import PropTypes from 'prop-types';
import Script from 'next/script';
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
        <Script id="plausible-init" strategy="beforeInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
        <Script
          src="https://analytics.amazingrando.com/js/pa-4Pbg8_RzpyxsrQMaor1u7.js"
          strategy="afterInteractive"
          fetchPriority="low"
        />
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
