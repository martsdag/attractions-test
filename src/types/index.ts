export enum Status {
  Planned = 'Planned',
  Seen = 'Seen',
}

export enum ColumnNames {
  Id = 'Id',
  Name = 'Name',
  Description = 'Description',
  CreatedAt = 'Created at',
  Rating = 'Rating',
  Photo = 'Photo',
  Location = 'Location',
  Coordinates = 'Coordinates',
  Link = 'Link',
  Status = 'Status',
  Actions = 'Actions',
}

export interface TableItem {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  rating: string;
  photo: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsLink: string;
  status: string;
}

export interface Attraction {
  name: string;
  description: string;
  coordinates: { lat: number; lng: number };
  location: string;
  photo: string;
  rating: string;
}
