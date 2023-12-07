import { nanoid } from 'nanoid';

import { getMockGraphData } from '@/app/api/chat';

export const createChatResponce = (content: string) => ({
  id: nanoid(),
  type: 'chat-responce',
  content,
  chartData: getMockGraphData(),
});
