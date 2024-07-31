import { FC } from 'react';
import './_table.scss';

export interface TableData {
  category: string;
  permanent: string;
  situational: string;
  temporary: string;
}

interface TableProps {
  caption: string;
  data: TableData[];
}

const Table: FC<TableProps> = ({ caption, data }) => (
  <div className="table-container">
    <table>
      <caption className="visibility-hidden">{caption}</caption>
      <thead>
        <tr>
          <th scope="col">Category</th>
          <th>Permanent</th>
          <th>Temporary</th>
          <th>Situational</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <th scope="row">{row.category}</th>
            <td>{row.permanent}</td>
            <td>{row.temporary}</td>
            <td>{row.situational}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
