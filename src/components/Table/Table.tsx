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
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">ID</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Name</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Description</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Date and time of addition</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Rating</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Photo</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Location</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Coordinates</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Link</th>
          <th className="p-2 border hover:bg-zinc-300 cursor-pointer border-zinc-600">Status</th>
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
