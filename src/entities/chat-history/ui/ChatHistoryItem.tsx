import React from 'react';
import { IChatHistoryItem } from '@/entities';
import Markdown from 'react-markdown';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { Tooltip } from 'react-tooltip';

interface IProps {
  item: IChatHistoryItem;
}

export const ChatHistoryItem = ({ item }: IProps) => {
  switch (item.type) {
    case 'chat-responce':
      return (
        <div className='flex flex-col gap-2 leading-7'>
          <span className='font-bold'>{'Chat'}</span>
          <Markdown className='leading-7 text-sm'>{item.content}</Markdown>
          {item.chartData && (
            <BarChart
              width={500}
              height={300}
              data={item.chartData as any}
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
