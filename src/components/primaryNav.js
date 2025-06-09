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

export default function PrimaryNav({ navigation }) {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-grimwild-green px-6 pt-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <Link href="/">
          <MadeWithMoxieLogo className="w-full fill-grimwild-yellow -rotate-2" />
        </Link>
      </div>
      <nav className="flex flex-1 flex-col">
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
                      <a
                        href={item.href}
                        className={clsx(
                          isActivePath
                            ? 'bg-grimwild-green-dark text-white'
                            : 'text-white/90',
                          'group flex w-full items-center gap-x-3 rounded-md p-4 text-left text-2xl font-semibold leading-none hover:bg-grimwild-green-dark hover:text-white transition-colors duration-150',
                        )}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Disclosure as="div" defaultOpen={isActivePath}>
                        <DisclosureButton
                          className={clsx(
                            isActivePath
                              ? 'bg-grimwild-green-dark text-white'
                              : 'text-white/90',
                            'group flex w-full items-center gap-x-3 rounded-md p-4 text-left text-2xl font-semibold leading-none hover:bg-grimwild-green-dark hover:text-white transition-colors duration-150',
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
                            <li key={subItem.name}>
                              <DisclosureButton
                                as="a"
                                href={subItem.href}
                                className={clsx(
                                  subItem.current
                                    ? 'bg-grimwild-green-dark text-white'
                                    : 'text-white/90',
                                  'block rounded-md px-4 py-1 text-lg leading-tight hover:bg-grimwild-green-dark hover:text-white transition-colors duration-150',
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
      <nav className="mt-auto text-white">
        <ul className="flex flex-row gap-x-2">
          <li>
            <a href="/licensing" className="hover:underline">
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
