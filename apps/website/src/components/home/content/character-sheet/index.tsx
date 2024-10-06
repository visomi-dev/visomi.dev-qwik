import { Resource, component$ } from '@builder.io/qwik';

import { nav } from '../../constants';

import { List } from './list';

import {
  useCategories,
  useCodingTime,
  useEditors,
  useLanguages,
  useOperatingSystems,
} from './hooks';

export const CharacterSheet = component$(() => {
  const codingTime = useCodingTime();
  const languages = useLanguages();
  const editors = useEditors();
  const sos = useOperatingSystems();
  const categories = useCategories();

  return (
    <figure id={nav.characterSheet}>
      <figcaption>
        <h2 class="text-4xl font-bold capitalize">
          {$localize`:@@homeContentCSTitle:Character Sheet`}
        </h2>

        <p class="mt-2 text-xs">
          {$localize`:@@homeContentCSDesc:Approx values, provided by WakaTime, I miss some years of data because I miss configured the plugin. Start using it in 12th may 2018.`}
        </p>
      </figcaption>

      <div class="mt-4 flex flex-col gap-2">
        <div class="flex flex-col">
          <h3 class="text-2xl capitalize">
            {$localize`:@@homeContentCSStatsTitle:Statistics`}
          </h3>
        </div>

        <div class="flex flex-col md:flex-row">
          <ul class="flex flex-col gap-2">
            <li>
              <span class="capitalize">
                {$localize`:@@homeContentCSStatsTCT:Total Coding Time:`}
              </span>

              <Resource
                value={codingTime}
                onPending={() => <p>...</p>}
                onResolved={(time) => <p class="text-blue-700">{time.total}</p>}
              />

              <hr class="my-2" />
            </li>

            <li>
              <span class="capitalize">
                {$localize`:@@homeContentCSStatsBCD:Best Coding Day:`}
              </span>

              <Resource
                value={codingTime}
                onPending={() => <p>...</p>}
                onResolved={(time) => (
                  <p class="text-blue-700">{time.bestDay}</p>
                )}
              />

              <hr class="my-2" />
            </li>

            <li>
              <span class="capitalize">
                {$localize`:@@homeContentCSStatsLang:Languages:`}
              </span>

              <Resource
                value={languages}
                onPending={() => <p>...</p>}
                onResolved={(languages) => <List data={languages} />}
              />

              <hr class="my-2" />
            </li>

            <li>
              <span class="capitalize">
                {$localize`:@@homeContentCSStatsEditors:Editors:`}
              </span>

              <Resource
                value={editors}
                onPending={() => <p>...</p>}
                onResolved={(editors) => <List data={editors} />}
              />

              <hr class="my-2" />
            </li>

            <li>
              <span class="capitalize">
                {$localize`:@@homeContentCSStatsOS:Operating Systems:`}
              </span>

              <Resource
                value={sos}
                onPending={() => <p>...</p>}
                onResolved={(sos) => <List data={sos} />}
              />

              <hr class="my-2" />
            </li>

            <li>
              <span class="capitalize">
                {$localize`:@@homeContentCSStatsCategories:Categories:`}
              </span>

              <Resource
                value={categories}
                onPending={() => <p>...</p>}
                onResolved={(categories) => <List data={categories} />}
              />
            </li>
          </ul>
        </div>
      </div>
    </figure>
  );
});
