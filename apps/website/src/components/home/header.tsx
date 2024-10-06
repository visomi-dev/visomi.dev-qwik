import { component$, getLocale, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { i18n } from '@visomi/commons';

import logotype from '~/assets/images/logotype.svg';
import menu from '~/assets/images/menu.svg';

import { nav } from './constants';

interface NavItem {
  label: string;
  href: string;
  color: string;
}

const navItems: NavItem[] = [
  {
    label: $localize`:@@homeHeaderIntroduction:Hi`,
    href: `/#${nav.introduction}`,
    color: 'text-yellow-500',
  },
  {
    label: $localize`:@@homeHeaderAboutMe:About Me`,
    href: `/#${nav.aboutMe}`,
    color: 'text-blue-700',
  },
  {
    label: $localize`:@@homeHeaderProjects:Projects`,
    href: `/#${nav.projects}`,
    color: 'text-green-700',
  },
  {
    label: $localize`:@@homeHeaderCharacterSheet:CS`,
    href: `/#${nav.characterSheet}`,
    color: 'text-red-500',
  },
  {
    label: $localize`:@@homeHeaderContact:Contact`,
    href: `/#${nav.contact}`,
    color: 'text-slate-700',
  },
  {
    label: $localize`:@@homeHeaderResume:Resume`,
    href: $localize`:@@homeHeaderResumeLink:/resume`,
    color: 'text-indigo-600',
  },
];

export const Header = component$(() => {
  const locale = getLocale(i18n.DEFAULT_LOCALE);

  const isMenuOpen = useSignal(false);

  return (
    <header class="fixed top-0 z-10 w-full items-center justify-between bg-white p-6">
      <nav class="mx-auto flex max-w-2xl justify-between">
        <img
          src={logotype}
          alt={$localize`:@@homeHeaderLogoAlt:visomi personal logotype`}
          width={152}
          height={40}
        />

        <div class="flex items-center justify-end md:flex-1">
          <button
            class="md:pointer-events-none md:opacity-0"
            onClick$={() => {
              isMenuOpen.value = !isMenuOpen.value;
            }}
          >
            <img
              src={menu}
              alt={$localize`:@@homeHeaderMenuIconAlt:hamburger menu icon`}
              width={36}
              height={36}
            />
          </button>

          <ul
            class={[
              'fixed left-0 top-0 z-40 w-full flex-col overflow-hidden transition-all duration-500 md:relative md:flex md:max-h-screen md:w-fit md:flex-row md:gap-4',
              {
                'max-h-0': !isMenuOpen.value,
                'flex max-h-screen before:fixed before:left-0 before:top-0 before:z-10 before:h-screen before:w-screen before:bg-black before:bg-opacity-50 md:before:hidden':
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
                class="z-20 flex w-full bg-white px-6 py-4 md:w-fit md:p-0"
              >
                <Link
                  class={[
                    'w-full px-2 py-1 text-center text-2xl md:p-0 md:text-base',
                    item.color,
                  ]}
                  href={`/${locale}` + item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
});
