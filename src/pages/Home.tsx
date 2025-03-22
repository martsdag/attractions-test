import { AddAttractionModal } from '@/components/Forms/AddAttractionModal';
import { Table } from '@/components/Table/Table';
import type { TableItem } from '@/types';
import { generateGoogleMapLink } from '@/utils';
import { Pencil, EyeSlash, Plus, Person, Eye } from '@gravity-ui/icons';
import { Button, Icon } from '@gravity-ui/uikit';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [tableData, setTableData] = useState<TableItem[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [hideVisited, setHideVisited] = useState(false);

  const onClickSwitchMode = () => setIsEditMode(!isEditMode);
  const onCLickHideVisitedAttractions = () => setHideVisited((isVisitedHidden) => !isVisitedHidden);

  const addNewAttraction = (newAttraction: {
    name: string;
    description: string;
    coordinates: { lat: number; lng: number };
    location: string;
    photo: string;
    status: string;
    rating: string;
  }) => {
    const newAttractionWithId = {
      ...newAttraction,
      id: String(tableData.length + 1),
      createdAt: new Date().toISOString().split('T')[0] || '',
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
      <div className='flex items-center justify-center flex-col gap-4'>
        <div className='flex items-center justify-start gap-4 mr-auto '>
          <Button view="action" size="m" className="button" onClick={onClickSwitchMode}>
            {isEditMode ? 'Edit mode' : 'User mode'}
            <Icon data={isEditMode ? Pencil : Person} size={18} />
          </Button>

          {isEditMode && (
            <>
              <Button view="action" size="m" className="mr-auto button" onClick={() => setIsFormVisible(true)}>
                <Icon data={Plus} size={18} />
              </Button>
              <Button view="action" size="m" className="button" onClick={onCLickHideVisitedAttractions}>
                {hideVisited ? 'Show All' : 'Hide'}
                <Icon data={hideVisited ? Eye : EyeSlash} size={18} />
              </Button>
            </>
          )}
        </div>

        <Table table={filteredData} />

        {isFormVisible && <AddAttractionModal onSubmit={addNewAttraction} onCancel={onCancelForm}/>}
      </div>
    </div>
  );
};
