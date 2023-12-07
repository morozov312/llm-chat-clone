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
  } catch {
    console.error('chat api error');
  }
  return null;
};
