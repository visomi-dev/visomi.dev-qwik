import { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = ({ redirect }) => {
  throw redirect(301, '/en-US');
};
