import { Resource, component$ } from '@builder.io/qwik';

import { nav } from '../constants';

import {
  useCodingTime,
  useEditors,
  useLanguages,
} from './hooks/character-sheet';

export const CharacterSheet = component$(() => {
  const codingTime = useCodingTime();
  const languages = useLanguages();
  const editors = useEditors();

  return (
    <figure id={nav.characterSheet}>
      <figcaption>
        <h2 class="text-4xl font-bold">Character Sheet</h2>

        <p class="mt-2 text-xs">
          Approx values, provided by WakaTime, I miss some years of data because
          I miss configured the plugin. Start using it in 12th may 2018.
        </p>
      </figcaption>

      <div class="mt-4 flex flex-col gap-2">
        <div class="flex flex-col">
          <h3 class="text-2xl">Statistics</h3>
        </div>

        <div class="flex flex-col md:flex-row">
          <ul class="flex flex-col gap-2">
            <li>
              Total Coding Time:
              <Resource
                value={codingTime}
                onPending={() => <p>...</p>}
                onResolved={(time) => <p class="text-blue-700">{time.total}</p>}
              />
            </li>

            <li>
              Best Coding Day:
              <Resource
                value={codingTime}
                onPending={() => <p>...</p>}
                onResolved={(time) => (
                  <p class="text-blue-700">{time.bestDay}</p>
                )}
              />
            </li>

            <li>
              Languages:
              <Resource
                value={languages}
                onPending={() => <p>...</p>}
                onResolved={(languages) => (
                  <div class="grid grid-cols-3 gap-2 md:grid-cols-5">
                    {languages.map(({ name, percent, color }) => (
                      <div class="flex gap-1" key={name}>
                        <div
                          class="h-full w-1"
                          style={{ backgroundColor: color }}
                        ></div>

                        <div class="flex w-full flex-col items-center justify-center gap-0.5 p-1 text-sm">
                          <p>{name}</p>

                          <p>{percent}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              />
            </li>

            <li>
              Editors:
              <Resource
                value={editors}
                onPending={() => <p>...</p>}
                onResolved={(editors) => (
                  <div class="grid grid-cols-3 gap-2 md:grid-cols-5">
                    {editors.map(({ name, percent, color }) => (
                      <div class="flex gap-1" key={name}>
                        <div
                          class="h-full w-1"
                          style={{ backgroundColor: color }}
                        ></div>

                        <div class="flex w-full flex-col items-center justify-center gap-0.5 p-1 text-sm">
                          <p>{name}</p>

                          <p>{percent}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              />
            </li>
          </ul>
        </div>
      </div>
    </figure>
  );
});
