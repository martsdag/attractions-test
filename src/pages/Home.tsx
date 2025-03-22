import { Table } from '@/components/Table/Table';
import { Pencil, EyeSlash, Plus } from '@gravity-ui/icons';
import { Button, Icon } from '@gravity-ui/uikit';
import { useState } from 'react';

export const Home = () => {
  // show it when editing
  const [showAddButton, setShowAddButton] = useState(false);

  return (
    <div className='p-3'>
      <div className='flex items-center justify-center flex-col gap-4'>
        <div className='flex items-center justify-start gap-4 mr-auto'>
          <Button view="action" size="m" className="button" onClick={() => setShowAddButton(true)}>
            Edit mode
            <Icon data={Pencil} size={18} />
          </Button>
          {showAddButton && (
            <Button view="action" size="m" className="mr-auto button">
              <Icon data={Plus} size={18} />
            </Button>
          )}
          {showAddButton && (
            <Button view="action" size="m" className="button">
              Hide
              <Icon data={EyeSlash} size={18} />
            </Button>
          )}
        </div>
        <Table table={[]}/>
      </div>
    </div>
  );
};
