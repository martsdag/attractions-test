import type { Attraction } from '@/types';
import { Xmark } from '@gravity-ui/icons';
import { Button, Icon, TextInput } from '@gravity-ui/uikit';
import React, { useEffect, useState } from 'react';

interface AttractionFormModalProps {
  attraction?: Attraction;
  onSubmit: (attraction: Attraction) => void
  onCancel: () => void
};

export const AttractionFormModal: React.FC<AttractionFormModalProps> = ({ attraction, onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState('');
  const [rating, setRating] = useState('');

  useEffect(()=> {
    if (attraction) {
      setName(attraction.name);
      setDescription(attraction.description);
      setCoordinates(attraction.coordinates);
      setLocation(attraction.location);
      setPhoto(attraction.photo);
      setRating(attraction.rating);
    } else {
      setName('');
      setDescription('');
      setCoordinates({ lat: 0, lng: 0 });
      setLocation('');
      setPhoto('');
      setRating('');
    }
  }, [attraction]);

  const onClickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, coordinates, location, photo, rating });
  };

  const updateCoordinates = (e: React.ChangeEvent<HTMLInputElement>, axis: 'lat' | 'lng') => {
    const value = e.target.value;
    const newCoordinate = value ? parseFloat(value) : 0;

    setCoordinates((previousCoordinates) => ({ ...previousCoordinates, [axis]: newCoordinate }));
  };

  return (
    <dialog className='fixed inset-0 flex flex-col gap-4 p-4 border border-gray-500 rounded-lg w-lg overflow-x-hidden outline-[0.125rem] outline-transparent outline-offset-[0.125rem] bg-white m-auto'>
      <form className='flex flex-col h-full w-full form-scroll gap-4' onSubmit={onClickSubmit}>
        <Button view="action" size="xs" className="button ml-auto" onClick={onCancel}>
          <Icon data={Xmark} size={18} />
        </Button>
        <TextInput
          label="Name:"
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Description:"
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextInput
          label="Rating:"
          type='number'
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <TextInput
          label="Latitude:"
          type='number'
          value={coordinates.lat.toString()}
          onChange={(e) => updateCoordinates(e, 'lat')}
        />
        <TextInput
          label="Longitude:"
          type='number'
          value={coordinates.lng.toString()}
          onChange={(e) => updateCoordinates(e, 'lng')}
        />
        <TextInput
          label="Location:"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextInput
          label="Photo URL:"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <Button type="submit" view="action" className='button' size="m">{attraction ? 'Update' : 'Add'}</Button>
        <Button view="normal" size="m" onClick={onCancel}>Cancel</Button>
      </form>
    </dialog>
  );
};
