import { useResource$ } from '@builder.io/qwik';

export interface Item {
  name: string;
  percent: number;
  color: string;
}

export function useCodingTime() {
  return useResource$<{
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
}

export function useLanguages() {
  return useResource$<
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
        data: Item[];
      };

      const others = data.find(({ name }) => name === 'Other');

      const result = data
        .filter(({ percent, name }) => percent >= 0.11 && name !== 'Other')
        .map(({ name, percent, color }) => ({
          name,
          percent,
          color,
        }));

      const total = result.reduce((acc, { percent }) => acc + percent, 0);
      const missing = 100 - total;

      if (missing > 0) {
        result.push({
          name: 'Others',
          percent: parseFloat((missing + (others?.percent ?? 0)).toFixed(2)),
          color: '#000000',
        });
      }

      return result;
    } catch (error) {
      console.error(error);

      return [];
    }
  });
}

export function useEditors() {
  return useResource$<
    {
      name: string;
      percent: number;
      color: string;
    }[]
  >(async () => {
    try {
      const response = await fetch(
        'https://wakatime.com/share/@visomi/218f13c6-5146-41b9-bf03-ed156c0e8612.json',
      );

      const { data } = (await response.json()) as {
        data: Item[];
      };

      const result = data
        .filter(({ percent }) => percent >= 0.11)
        .map(({ name, percent, color }) => ({
          name,
          percent,
          color,
        }));

      const total = result.reduce((acc, { percent }) => acc + percent, 0);
      const missing = 100 - total;

      if (missing > 0) {
        result.push({
          name: 'Others',
          percent: parseFloat(missing.toFixed(2)),
          color: '#000000',
        });
      }

      return result;
    } catch (error) {
      console.error(error);

      return [];
    }
  });
}

export function useOperatingSystems() {
  return useResource$<Item[]>(async () => {
    try {
      const response = await fetch(
        'https://wakatime.com/share/@visomi/467e4a57-ae28-4918-911b-3ed72a033567.json',
      );

      const { data } = (await response.json()) as {
        data: Item[];
      };

      return data;
    } catch (error) {
      console.error(error);

      return [];
    }
  });
}

export function useCategories() {
  return useResource$<Item[]>(async () => {
    try {
      const response = await fetch(
        'https://wakatime.com/share/@visomi/e1000b57-c2b6-419c-90c4-edc855c05878.json',
      );

      const { data } = (await response.json()) as {
        data: Item[];
      };

      return data;
    } catch (error) {
      console.error(error);

      return [];
    }
  });
}
