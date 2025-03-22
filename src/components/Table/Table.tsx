import type React from 'react';
import { ColumnNames, type TableItem } from '@/types';
import { generateGoogleMapLink } from '@/utils';

const columnNames = Object.values(ColumnNames);

export const Table: React.FC<{ table: TableItem[] }> = ({ table }) => (
  <div className="overflow-x-auto w-full">
    {table.length > 0 ? (
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            {columnNames.map((columnName) => (
              <th
                key={columnName}
                className="p-2 border border-zinc-600 hover:bg-zinc-300 cursor-pointer"
              >
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((item) => (
            <tr key={item.id} className="border border-zinc-600">
              <td className="p-2 border">{item.id}</td>
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">{item.description}</td>
              <td className="p-2 border">{item.createdAt}</td>
              <td className="p-2 border">{item.rating}</td>
              <td className="p-2 border">
                <img src={item.photo} alt={item.name} className="h-10 w-10 object-cover" />
              </td>
              <td className="p-2 border">{item.location}</td>
              <td className="p-2 border">
                {item.coordinates.lat}, {item.coordinates.lng}
              </td>
              <td className="p-2 border">
                <a href={generateGoogleMapLink(item.coordinates.lat, item.coordinates.lng)} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  Open Map
                </a>
              </td>
              <td className="p-2 border">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p className="text-center p-4">No data available</p>
    )}
  </div>
);
