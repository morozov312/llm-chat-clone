export interface IChartData {
  name: string;
  uv: number;
  pv: number;
}

export interface IChatHistoryItem {
  id: number | string;
  type: 'user-request' | 'chat-responce';
  content: string;
  chartData?: IChartData[];
}
