import { IChartData } from '@/entities';

import styles from './Table.module.css';

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
        <tr className={styles.row}>
          {rows.map((headTitle, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <th className={styles.col} key={headTitle + index}>
              {headTitle}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((chartData, indexCol) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={indexCol} className={styles.row}>
            {Object.entries(chartData).map((chartItem, indexRow) => (
              // eslint-disable-next-line react/no-array-index-key
              <th className={styles.col} key={indexCol + indexRow}>
                {chartItem[1]}
              </th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
