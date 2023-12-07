import { nanoid } from 'nanoid';
import { NextRequest } from 'next/server';

import { getMockGraphData } from './getMockGraphData';

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  // convert to a single case and remove punctuation marks
  const normalizedData = data.toLowerCase().replaceAll(/[^a-zA-z0-9\s]+/g, '');

  switch (normalizedData) {
    case 'give me a snapshot of this weeks dau how does it compare to last week':
      return new Response(
        JSON.stringify({
          id: nanoid(),
          type: 'chat-responce',
          content: `**Summary:**  
              This week's Daily Active Users (DAU) have shown a notable increase of 18% compared to last week.  
              **Detailed Breakdown:**  
              - This Week: 26,000 DAU (↑18% from the previous week)
              - Last Week: 22,000 DAU  
              **Key Insights:**  
              Growth: An 18% increase in DAU compared to last week reflects a growing user base and heightened engagement.`,
          chartData: getMockGraphData(),
          tableColumnTitle: 'Pages',
        }),
      );
    case 'how engaged are our users based on average session duration compared with last week':
      return new Response(
        JSON.stringify({
          id: nanoid(),
          type: 'chat-responce',
          content: `**Summary:**  
              This week's Average Session Duration (ASD) shows a positive trend with an increase of 12% compared to last
              week.  
              **Detailed Breakdown:**  
              - This Week's ASD: 32 minutes (↑12% from last week)
              - Last Week's ASD: 28.5 minutes  
              **Key Insights:**  
              User Engagement: The increase in ASD indicates improved user engagement, with users spending more time
              in the app compared to last week.`,
          chartData: getMockGraphData(),
        }),
      );
    case 'provide an overview of this weeks iap revenue performance in comparison to the previous week':
      return new Response(
        JSON.stringify({
          id: nanoid(),
          type: 'chat-responce',
          content: `**Summary:**  
              This week's In-App Purchase (IAP) revenue shows a promising increase, up by 14% compared to the previous
              week.  
              **Detailed Breakdown:**  
              - This Week's IAP Revenue: $95,000 (↑14% from last week)
              - Last Week's IAP Revenue: $83,300  
              **Key Insights:**  
              The increase in IAP Revenue suggests that users are increasingly engaging with our in-app purchases, which is
              contributing to our revenue growth.`,
          chartData: getMockGraphData(),
        }),
      );
    case 'explain the effect of media source on dau':
      return new Response(
        JSON.stringify({
          id: nanoid(),
          type: 'chat-responce',
          content: `**Summary:**  
              Facebook and Google Ads driving the highest DAU, followed by TikTok and Organic installs. IronSource and
              Apple Search Ads, however, are lagging behind.  
              **Detailed Breakdown:**  
              - Facebook: 10,000 DAU (↑30% from the previous period)
              - Google Ads: 8,000 DAU (↑25% from the previous period)  
              - TikTok: 5,000 DAU (↑18% from the previous period)  
              - Organic: 2,000 DAU (↑10% from the previous period) 
              - IronSource: 700 DAU (↓5% from the previous period)  
              - Apple Search Ads: 300 DAU (↓10% from the previous period)  
              **Key Insights:**  
              1. Facebook and Google Ads Dominance: Both Facebook and Google Ads are dominating in driving DAU,
              indicating a solid return on ad spend (ROAS) from these platforms.  
              2. Organic and TikTok Rise: Organic installs and TikTok campaigns are also showing positive trends,
              contributing significantly to the overall DAU.  
              3. IronSource and Apple Search Ads Dip: There's a slight decrease in DAU from IronSource and Apple
              Search Ads sources, indicating a need for further optimization or strategy change.  
              `,
          chartData: getMockGraphData(),
        }),
      );
    case 'are there any other metrics that have significant changes this week':
      return new Response(
        JSON.stringify({
          id: nanoid(),
          type: 'chat-responce',
          content: `**Summary:**  
              This week, apart from the rise in Daily Active Users and Average Session Duration, other key metrics such as
              Retention Rate and User Acquisition Cost have also seen significant shifts.
              **Detailed Breakdown:**  
              - Retention Rate: 52% (↑4% from previous week)
              - User Acquisition Cost: $1.8 per user (↓10% from previous week)  
              **Key Insights:**  
              Improved Retention: There's a 4% increase in the Retention Rate compared to the previous week, suggesting
              improved user satisfaction and engagement with our app.  
              Cost Efficiency: The User Acquisition Cost has decreased by 10%, implying that our user acquisition strategies
              have become more efficient.
              `,
          chartData: getMockGraphData(),
        }),
      );
    default:
      return new Response(
        JSON.stringify({
          id: nanoid(),
          type: 'chat-responce',
          content: 'I dont know the answer to your question.',
        }),
      );
  }
};
