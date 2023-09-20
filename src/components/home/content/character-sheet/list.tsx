import { component$ } from '@builder.io/qwik';

import type { Item } from './hooks';

export interface ListProps {
  data: Item[];
}

export const List = component$<ListProps>(({ data }) => {
  return (
    <div class="grid grid-cols-3 gap-2 md:grid-cols-5">
      {data.map(({ name, percent, color }) => (
        <div class="flex gap-1" key={name}>
          <div class="mt-2 h-4 w-1" style={{ backgroundColor: color }}></div>
          <div class="flex w-full flex-col items-center justify-center gap-0.5 p-1">
            <p class="text-sm">{name}</p>

            <p class="text-xs text-blue-700">{percent}%</p>
          </div>
        </div>
      ))}
    </div>
  );
});
