import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  console.log(req);
  return new Response(JSON.stringify({ foo: 'bar' }));
};
