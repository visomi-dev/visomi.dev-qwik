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

  return (
    <div class="flex flex-col gap-2">
      <img
        class="rounded-full"
        src={me}
        alt="Michael V. S."
        width={120}
        height={120}
      />

      <h1 class="text-3xl font-bold">Michael V. S.</h1>
      <p>{age} years old</p>

      <h2 class="title-accent text-2xl font-bold">Full-Stack Developer</h2>
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

        <p class="p-1 text-[#47516B]">To Infinity and Beyond</p>

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
