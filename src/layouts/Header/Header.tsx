import { Magnifier } from '@gravity-ui/icons';
import { Button, Icon, TextInput } from '@gravity-ui/uikit';

export const Header = () => (
  <header className="border-b border-solid border-zinc-300 bg-white py-3 w-[90%] mx-auto">
    <div className="flex items-center justify-center px-4 gap-4">
      <TextInput type='search' placeholder="Search" size="m" className='search-input max-w-1/3' />
      <Button size='m' className='button'>
        <Icon data={Magnifier} size={18} />
      </Button>
    </div>
  </header>
);
