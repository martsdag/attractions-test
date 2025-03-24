import { format } from 'date-fns';
import { AttractionFormModal } from '@/components/Modal/AttractionFormModal';
import { Table } from '@/components/Table/Table';
import type { TableItem } from '@/types';
import { generateGoogleMapLink } from '@/utils';
import { Pencil, EyeSlash, Plus, Person, Eye, TrashBin } from '@gravity-ui/icons';
import { Button, Icon } from '@gravity-ui/uikit';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [tableData, setTableData] = useState<TableItem[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [hideVisited, setHideVisited] = useState(false);

  const onClickSwitchMode = () => setIsEditMode(!isEditMode);
  const onCLickHideVisitedAttractions = () => setHideVisited((isVisitedHidden) => !isVisitedHidden);
  const onClickDeleteTable = () => setTableData([]);

  const addNewAttraction = (newAttraction: {
    name: string;
    description: string;
    coordinates: { lat: number; lng: number };
    location: string;
    photo: string;
    rating: string;
  }) => {
    const newAttractionWithId = {
      ...newAttraction,
      id: String(tableData.length + 1),
      createdAt: format(new Date(), 'yyyy-MM-dd HH:mm '),
      status: 'planned',
      googleMapsLink: generateGoogleMapLink(newAttraction.coordinates.lat, newAttraction.coordinates.lng),
    };

    setTableData((previousData) => [...previousData, newAttractionWithId]);

    setIsFormVisible(false);
  };

  const filteredData = hideVisited
    ? tableData.filter((item) => item.status !== 'visited')
    : tableData;

  const onCancelForm = () => {
    setIsFormVisible(false);
  };

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data: TableItem[]) => setTableData(data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className='p-3 w-[90%] mx-auto'>
      <div className='flex justify-center flex-col gap-4'>
        <div className='flex items-center justify-start gap-4'>
          <Button view="action" size="m" className="button" onClick={onClickSwitchMode}>
            {isEditMode ? 'Edit mode' : 'User mode'}
            <Icon data={isEditMode ? Pencil : Person} size={18} />
          </Button>

          {isEditMode && (
            <>
              <Button view="action" size="m" className="button" onClick={() => setIsFormVisible(true)}>
                <Icon data={Plus} size={18} />
              </Button>
              <Button view="action" size="m" className="button" onClick={onCLickHideVisitedAttractions}>
                {hideVisited ? 'Show All' : 'Hide'}
                <Icon data={hideVisited ? Eye : EyeSlash} size={18} />
              </Button>
              <Button view="action" size="m" className="button"
                onClick={onClickDeleteTable}
              >
                Delete all
                <Icon data={TrashBin} size={18} />
              </Button>
            </>
          )}
          <h1 className='flex ml-auto text-xl text-zinc-800'>
            Количество достопримечательностей: {tableData.length}
          </h1>
        </div>

        <Table table={filteredData} isEditMode={isEditMode} setTableData={setTableData} />

        {isFormVisible && <AttractionFormModal onSubmit={addNewAttraction} onCancel={onCancelForm}/>}
      </div>
    </div>
  );
};
