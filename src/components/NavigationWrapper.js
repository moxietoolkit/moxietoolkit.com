'use client';

import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import SidebarLayout from './sidebarLayout';

export default function NavigationWrapper({ navigation, children }) {
  const pathname = usePathname();

  // Helper function to set current property
  const setCurrentProperty = (items) =>
    items.map((item) => ({
      ...item,
      current: item.href === pathname,
      children: item.children ? setCurrentProperty(item.children) : undefined,
    }));

  const currentNavigation = setCurrentProperty(navigation);

  return (
    <SidebarLayout navigation={currentNavigation}>{children}</SidebarLayout>
  );
}

NavigationWrapper.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      current: PropTypes.bool,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
  children: PropTypes.node.isRequired,
};
