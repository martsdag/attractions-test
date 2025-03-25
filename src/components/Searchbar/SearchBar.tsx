import { Magnifier } from '@gravity-ui/icons';
import { Button, Icon, TextInput } from '@gravity-ui/uikit';

export const SearchBar = ({ onChange }) => (
  <div className="flex items-center gap-2 justify-center w-full">
    <TextInput
      type="search"
      placeholder="Search"
      size="m"
      className="search-input max-w-1/3"
      onChange={onChange}
    />
    <Button size="m" className="button">
      <Icon data={Magnifier} size={18} />
    </Button>
  </div>
);
