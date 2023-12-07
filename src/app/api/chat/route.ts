import { NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getMockGraphData } from './getMockGraphData';

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  // convert to a single case and remove punctuation marks
  const normalizedData = data.toLowerCase().replaceAll(/[^a-zA-z0-9\s]+/g, '');

  switch (normalizedData) {
    case 'give me a snapshot of this weeks dau how does it compare to last week':
      return new Response(
        JSON.stringify({
          id: uuidv4(),
          type: 'chat-responce',
          content: `**Summary:**  
              This week's Daily Active Users (DAU) have shown a notable increase of 18% compared to last week.  
              **Detailed Breakdown:**  
              - This Week: 26,000 DAU (↑18% from the previous week)
              - Last Week: 22,000 DAU  
              **Key Insights:**  
              Growth: An 18% increase in DAU compared to last week reflects a growing user base and heightened engagement.`,
          chartData: getMockGraphData(),
        }),
      );
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
          id: uuidv4(),
          type: 'chat-responce',
          content: 'I dont know the answer to your question',
        }),
      );
  }
};
