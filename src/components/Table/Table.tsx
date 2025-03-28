import type React from 'react';
import { ColumnNames, type Attraction, type TableItem } from '@/types';
import { generateGoogleMapLink } from '@/utils';
import { Button, Icon } from '@gravity-ui/uikit';
import { Pencil, TrashBin } from '@gravity-ui/icons';
import { useState } from 'react';
import { AttractionFormModal } from '@/components/Modal/AttractionFormModal';

export const Table: React.FC<{
  table: TableItem[],
  isEditMode: boolean,
  setTableData: React.Dispatch<React.SetStateAction<TableItem[]>> }> = ({ table, isEditMode, setTableData }) => {

  const columnNames = Object.values(ColumnNames).filter((column) => isEditMode || column !== ColumnNames.Actions);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState<TableItem | null>(null);

  const onClickEdit = (attraction: TableItem) => {
    setSelectedAttraction(attraction);
    setIsFormVisible(true);
  };

  const onClickDelete = (id: string) => {
    setTableData((previousTableData) => previousTableData.filter((item) => item.id !== id));
  };

  const onCancelForm = () => {
    setSelectedAttraction(null);
    setIsFormVisible(false);
  };

  const submitUpdatedAttraction = (attraction: Attraction) => {
    setTableData((previousTableData)=> previousTableData.map((item)=> item.id === selectedAttraction?.id
      ? { ...item, ...attraction, id:item.id, createdAt: item.createdAt } : item));
    onCancelForm();
  };

  return (
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
                  <a href={item.photo} target='_blank'>
                    <img src={item.photo} alt={item.name} className="h-10 w-10 object-cover" />
                  </a>
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

                {isEditMode && (
                  <td className="p-2 flex justify-evenly gap-2">
                    <Button className="button" view="normal" size="s" onClick={() => onClickEdit(item)}>
                      <Icon data={Pencil} size={18} />
                    </Button>
                    <Button className="button" view="normal" size="s" onClick={() => onClickDelete(item.id)}>
                      <Icon data={TrashBin} size={18} />
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center p-4">No data available</p>
      )}
      {isFormVisible && (
        <AttractionFormModal
          attraction={selectedAttraction
            ? { ...selectedAttraction, status: selectedAttraction.status as 'visited' | 'planned' }
            : undefined}
          onSubmit={submitUpdatedAttraction}
          isOpen={isFormVisible}
          setIsOpen={setIsFormVisible}
        />
      )}
    </div>
  );
};
