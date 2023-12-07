import { IChatHistoryItem } from '@/entities';

export const sendMessage = async (
  message: string,
): Promise<IChatHistoryItem | null> => {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify(message),
    });
    return await res.json();
  } catch (e: any) {
    console.error('chat api error', e.message);
  }
  return null;
};
