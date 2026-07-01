import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import MadeWithMoxieLogo from '@/components/MadeWithMoxieLogo';
import Link from 'next/link';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const interactiveFocusClass =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grimwild-yellow';

function isExternalHref(href) {
  return href.startsWith('http://') || href.startsWith('https://');
}

function NavLink({ href, current, className, children }) {
  const linkClassName = clsx(className, interactiveFocusClass);

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        {...(current ? { 'aria-current': 'page' } : {})}
      >
        {children}
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className={linkClassName}
      {...(current ? { 'aria-current': 'page' } : {})}
    >
      {children}
    </a>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  current: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

NavLink.defaultProps = {
  current: false,
  className: '',
};

export default function PrimaryNav({ navigation }) {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-grimwild-green px-6 pt-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <Link
          href="/"
          aria-label="Moxie Toolkit home"
          className={interactiveFocusClass}
        >
          <MadeWithMoxieLogo
            className="w-full fill-grimwild-yellow -rotate-2"
            decorative
          />
        </Link>
      </div>
      <nav className="flex flex-1 flex-col" aria-label="Primary">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul className="-mx-2">
              {navigation.map((item) => {
                const isActivePath =
                  item.current ||
                  (item.children &&
                    item.children.some((child) => child.current));
                return (
                  <li key={item.name}>
                    {!item.children ? (
                      <NavLink
                        href={item.href}
                        current={item.current}
                        className={clsx(
                          isActivePath
                            ? 'bg-grimwild-green-dark text-white'
                            : 'text-white/90',
                          'group flex w-full items-center gap-x-3 rounded-md p-4 text-left text-2xl font-semibold leading-none hover:bg-grimwild-green-dark hover:text-white transition-colors duration-150',
                        )}
                      >
                        {item.name}
                      </NavLink>
                    ) : (
                      <Disclosure as="div" defaultOpen={isActivePath}>
                        <DisclosureButton
                          className={clsx(
                            isActivePath
                              ? 'bg-grimwild-green-dark text-white'
                              : 'text-white/90',
                            'group flex w-full items-center gap-x-3 rounded-md p-4 text-left text-2xl font-semibold leading-none hover:bg-grimwild-green-dark hover:text-white transition-colors duration-150',
                            interactiveFocusClass,
                          )}
                        >
                          {item.name}
                          <ChevronRightIcon
                            aria-hidden="true"
                            className="size-5 shrink-0 text-grimwild-yellow group-data-open:rotate-90 
                                  transition-all duration-150 group-data-open:text-grimwild-yellow"
                          />
                        </DisclosureButton>
                        <DisclosurePanel as="ul" className="mt-1 px-2">
                          {item.children.map((subItem) => (
                            <li key={`${item.href}-${subItem.href}`}>
                              <DisclosureButton
                                as="a"
                                href={subItem.href}
                                aria-current={
                                  subItem.current ? 'page' : undefined
                                }
                                className={clsx(
                                  subItem.current
                                    ? 'bg-grimwild-green-dark text-white'
                                    : 'text-white/90',
                                  'block rounded-md px-4 py-1 text-lg leading-tight hover:bg-grimwild-green-dark hover:text-white transition-colors duration-150',
                                  interactiveFocusClass,
                                )}
                              >
                                {subItem.name}
                              </DisclosureButton>
                            </li>
                          ))}
                        </DisclosurePanel>
                      </Disclosure>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
      <nav className="mt-auto text-white" aria-label="Footer">
        <ul className="flex flex-row gap-x-2">
          <li>
            <a
              href="/contact"
              className={clsx('hover:underline', interactiveFocusClass)}
            >
              <span>Contact Us</span>
            </a>
          </li>
          <li>
            <a
              href="/licensing"
              className={clsx('hover:underline', interactiveFocusClass)}
            >
              <span>Licensing</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

PrimaryNav.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
      current: PropTypes.bool,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
};
