export interface IChatHistoryItem {
  id: number | string;
  type: 'user-request';
  content: string;
  chartData?: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  };
}
