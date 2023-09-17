import { component$, useSignal } from '@builder.io/qwik';

import logotype from '~/media/images/logotype.svg';
import menu from '~/media/images/menu.svg';

import { nav } from './constants';

interface NavItem {
  label: string;
  href: string;
  color: string;
}

const navItems: NavItem[] = [
  {
    label: 'Hi 👋',
    href: nav.introduction,
    color: 'text-yellow-400',
  },
  {
    label: 'Projects 🚀',
    href: nav.projects,
    color: 'text-green-700',
  },
  {
    label: 'About me 🤔',
    href: nav.aboutMe,
    color: 'text-blue-700',
  },
  {
    label: 'Contact 📧',
    href: nav.contact,
    color: 'text-slate-700',
  },
];

export const Header = component$(() => {
  const isMenuOpen = useSignal(false);

  return (
    <header class="mx-auto flex w-full max-w-3xl justify-between p-6">
      <img
        src={logotype}
        alt="visomi personal logotype"
        width={152}
        height={40}
      />

      <div class="flex items-center justify-center md:flex-1">
        <button
          class="p-2 md:pointer-events-none md:opacity-0"
          onClick$={() => {
            isMenuOpen.value = !isMenuOpen.value;
          }}
        >
          <img src={menu} alt="hamburger menu icon" width={28} height={28} />
        </button>

        <ul
          class={[
            'fixed left-0 top-0 w-full flex-col md:relative md:flex md:flex-row md:gap-4',
            {
              hidden: !isMenuOpen.value,
              'flex before:fixed before:left-0 before:top-0 before:z-10 before:h-screen before:w-screen before:bg-black before:bg-opacity-50 md:before:hidden':
                !!isMenuOpen.value,
            },
          ]}
          onClick$={() => {
            isMenuOpen.value = false;
          }}
        >
          {navItems.map((item) => (
            <li
              key={item.href}
              class="z-20 flex w-full bg-white px-6 py-4 md:p-0"
            >
              <a
                class={[
                  'w-full px-2 py-1 text-center text-2xl md:p-0 md:text-base',
                  item.color,
                ]}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
});
