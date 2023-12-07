export interface IChatHistoryItem {
  id: number | string;
  type: 'user-request';
  content: string;
}
