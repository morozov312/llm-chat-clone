export interface IChatHistoryItem {
  id: number | string;
  type: 'user-request' | 'chat-responce';
  content: string;
  chartData?: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  };
}
