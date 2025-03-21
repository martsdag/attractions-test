import type React from 'react';

interface Table {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  rating: number;
  photo: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsLink: string;
  status: 'planned' | 'visited';
}

export const Table: React.FC<{ table: Table[] }> = ({ table }) => (
  <div className="overflow-x-auto w-full">
    <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Идентификатор</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Название</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Описание</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Дата и время добавления</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Рейтинг</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Фото</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Местоположение</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Координаты</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Ссылка</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Статус</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border border-zinc-600">123</td>
          <td className="p-2 border border-zinc-600">Example Name</td>
          <td className="p-2 border border-zinc-600">Description here</td>
          <td className="p-2 border border-zinc-600">2025-03-21</td>
          <td className="p-2 border border-zinc-600">5</td>
          <td className="p-2 border border-zinc-600">Image</td>
          <td className="p-2 border border-zinc-600">Location</td>
          <td className="p-2 border border-zinc-600">Lat, Lng</td>
          <td className="p-2 border border-zinc-600">Link</td>
          <td className="p-2 border border-zinc-600">Visited</td>
        </tr>
      </tbody>
    </table>
  </div>
);
