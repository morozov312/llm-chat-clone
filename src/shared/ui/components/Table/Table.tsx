import { IChartData } from '@/entities';

interface IProps {
  data: IChartData[];
}
export const Table = ({ data }: IProps) => {
  if (data.length === 0) {
    return null;
  }

  const rows = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr className='flex justify-between border-[1px] border-gray-20'>
          {rows.map((headTitle, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <th
              className='w-full p-3 border-[1px] border-gray-20 min-w-[250px]'
              key={headTitle + index}
            >
              {headTitle}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((chartData, indexCol) => (
          <tr className='flex  justify-between border-[1px] border-gray-20'>
            {Object.entries(chartData).map((chartItem, indexRow) => (
              // eslint-disable-next-line react/no-array-index-key
              <th
                className='w-full p-3 border-[1px] border-gray-20 min-w-[250px]'
                key={indexCol + indexRow}
              >
                {chartItem[1]}
              </th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
