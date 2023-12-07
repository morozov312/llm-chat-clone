import Markdown from 'react-markdown';
import { Tooltip } from 'react-tooltip';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';

import { Table } from '@/shared/ui';

import { IChatHistoryItem } from '@/entities';

interface IProps {
  item: IChatHistoryItem;
}

export const ChatHistoryItem = ({ item }: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartData = item?.chartData as any;
  switch (item.type) {
    case 'chat-responce':
      return (
        <div className='flex flex-col gap-2 leading-7'>
          <span className='font-bold'>{'Chat'}</span>
          <Markdown className='text-sm leading-7'>{item.content}</Markdown>
          {item.chartData && (
            <div>
              <BarChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                  top: 30,
                  right: 30,
                  left: 70,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='pv' fill='#8884d8' />
                <Bar dataKey='uv' fill='#82ca9d' />
              </BarChart>
              <div>
                <Table data={item.chartData} />
              </div>
            </div>
          )}
        </div>
      );
    case 'user-request':
      return (
        <div className='flex flex-col gap-2'>
          <span className='font-bold'>{'You'}</span>
          <span className='text-sm'>{item.content}</span>
        </div>
      );
    default:
      return null;
  }
};
