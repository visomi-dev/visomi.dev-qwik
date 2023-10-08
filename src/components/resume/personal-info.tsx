import { component$ } from '@builder.io/qwik';
import { DateTime } from 'luxon';
import quoteStart from '~/media/images/resume/quote-start.svg';
import quoteEnd from '~/media/images/resume/quote-end.svg';
import me from '~/media/images/resume/me.jpg';

export const MyInfo = component$(() => {
  const age = Math.floor(
    Math.abs(
      DateTime.fromFormat('1995-05-20', 'yyyy-MM-dd').diffNow('years').years,
    ),
  );

  const experience = Math.floor(
    Math.abs(
      DateTime.fromFormat('2016-06-01', 'yyyy-MM-dd').diffNow('years').years,
    ),
  );

  return (
    <div class="flex flex-col gap-2">
      <img
        class="rounded-full"
        src={me}
        alt="Michael V. S."
        width={120}
        height={120}
      />

      <div class="flex flex-col">
        <h1 class="text-3xl font-bold">Michael Villalba Sotelo</h1>

        <p class="text-sm">{age} years old</p>
      </div>

      <div class="flex flex-col">
        <h2 class="text-xl font-bold text-slate-700">Full-Stack Developer</h2>

        <p class="text-sm">{experience} years of experience</p>
      </div>
    </div>
  );
});

export const Quote = component$(() => {
  return (
    <div class="flex flex-col">
      <div class="flex items-center">
        <img
          class="p-1"
          src={quoteStart}
          alt="quote start"
          height={20}
          width={20}
        />

        <p class="p-1 text-slate-600">To Infinity and Beyond</p>

        <img
          class="p-1"
          src={quoteEnd}
          alt="quote end"
          height={20}
          width={20}
        />
      </div>

      <p class="ml-4 text-xs text-slate-500">Buzz Lightyear</p>
    </div>
  );
});
