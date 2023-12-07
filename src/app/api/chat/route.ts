import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const normalizeData = data.promptInput
    .toLowerCase()
    .replaceAll(/[^a-zA-z0-9\s]+/, '');

  switch (normalizeData) {
    case 'give me a snapshot of this weeks dau how does it compare to last week':
      return '1';
    case 'how engaged are our users based on average session duration compared with last week':
      return '2';
    case 'provide an overview of this weeks iap revenue performance in comparison to the previous week':
      return '3';
    case 'explain the effect of media source on dau':
      return '4';
    case 'are there any other metrics that have significant changes this week':
      return '5';
    default:
      return new Response(
        JSON.stringify({
          summary: "I don't know the answer to your question.",
        }),
      );
  }
};
