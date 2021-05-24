import { rest } from 'msw';
import { Users } from './fixtures';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Users));
  }),
];
