'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import {
  Bars3Icon,
  Cog6ToothIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import bgPattern from '@/assets/images/bg-pattern.jpg';
import MadeWithMoxieLogo from '@/components/MadeWithMoxieLogo';
import Link from 'next/link';
import PrimaryNav from '@/components/primaryNav';

export default function SidebarLayout({ children, navigation }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-grimwild-green-dark/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>

            <PrimaryNav navigation={navigation} />
          </DialogPanel>
        </div>
      </Dialog>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <PrimaryNav navigation={navigation} />
      </div>

      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-grimwild-green px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="-m-2.5 p-2.5 text-grimwild-yellow lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-8" />
          </button>
          <Link href="/">
            <MadeWithMoxieLogo className="w-[150px] h-auto fill-grimwild-yellow" />
          </Link>
        </div>

        <main
          className="relative py-6 md:py-10 min-h-screen bg-grimwild-light bg-blend-multiply bg-[100%_100%] bg-repeat-y"
          style={{ backgroundImage: `url(${bgPattern.src})` }}
        >
          <div className="px-8 relative z-10">{children}</div>
        </main>
      </div>
    </div>
  );
}

SidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
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
