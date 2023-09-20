import { Resource, component$, useResource$ } from '@builder.io/qwik';

import { nav } from '../constants';

export const CharacterSheet = component$(() => {
  const codingTime = useResource$<{
    total: string;
    bestDay: string;
  }>(async () => {
    try {
      const response = await fetch(
        'https://wakatime.com/share/@visomi/3a77752c-e065-4e64-9bde-78945bdb2d8f.json',
      );

      const { data } = await response.json();

      return {
        total: data?.grand_total?.human_readable_total_including_other_language,
        bestDay: `${data?.best_day?.date} / ${data?.best_day?.text}`,
      };
    } catch (error) {
      console.error(error);

      return {
        total: '...',
        bestDay: '...',
      };
    }
  });

  const languages = useResource$<
    {
      name: string;
      percent: number;
      color: string;
    }[]
  >(async () => {
    try {
      const response = await fetch(
        'https://wakatime.com/share/@visomi/73ed1619-ca1e-4d2f-8c06-48a531a3f20b.json',
      );

      const { data } = (await response.json()) as {
        data: {
          name: string;
          percent: number;
          color: string;
        }[];
      };

      return data.map(({ name, percent, color }) => ({
        name,
        percent,
        color,
      }));
    } catch (error) {
      console.error(error);

      return [];
    }
  });

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
              Languajes:
              <Resource
                value={languages}
                onPending={() => <p>...</p>}
                onResolved={(languages) => (
                  <div class="flex gap-2">
                    {languages.map(({ name, percent, color }) => (
                      <div class="flex flex-col gap-1" key={name}>
                        <div class="flex justify-between">
                          <p>{name}</p>

                          <p>{percent}%</p>
                        </div>

                        <div
                          class="h-2"
                          style={{ backgroundColor: color }}
                        ></div>
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
