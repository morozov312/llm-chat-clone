import { IChartData } from '@/entities';

interface IProps {
  data: IChartData[];
  tableColumnTitle?: string;
}
export const Table = ({ data }: IProps) => {
  if (data.length === 0) {
    return null;
  }

  const rows = Object.keys(data[0]);

  return (
    <table className='w-full'>
      <thead>
        <tr className='w-full'>
          {rows.map((headTitle, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <th key={headTitle + index}>{headTitle}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
};
