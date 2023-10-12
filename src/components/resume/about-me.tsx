import { component$ } from '@builder.io/qwik';

export const AboutMe = component$(() => {
  return (
    <div class="flex flex-col gap-4">
      <h3 class="font-bold text-slate-900">About me</h3>

      <p>
        My true passion lies in creating software solutions that improve
        people's lives and address real-world problems. I have a constant love
        for learning and self-improvement. I'm seeking a stable position in the
        Fintech area where I can grow and contribute professionally.
      </p>

      <p>I am honest, friendly, reliable, enjoy competing, and adaptable.</p>
    </div>
  );
});
