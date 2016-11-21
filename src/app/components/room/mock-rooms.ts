import { Room }		 from './room';

export const ROOMS: Room[] = [
	{
		id: 1,
		locations: ['Beale Memorial Library', 'Lamont', 'Rosamond', 'Southwest', 'Frazier Park'],
		name: 'Study Room',
		price: 0

	},
	{
		id: 2,
		locations: ['Rosamond', 'Frazier Park'],
		name: 'Small Conference Room',
		price: 50
	},
	{
		id: 3,
		locations: ['Delano','Wilson','Holloway-Gonzales','Shafter','Taft','Wasco'],
		name: 'Beale Memorial Library Lake',
		price: 140
	},
	{
		id: 4,
		locations: ['Arvin','California City','Frazier Park','Kern River Valley','McFarland','Rathbun','Ridgecrest','Beale Memorial Library Tejon Room'],
		name: 'Beale Memorial Library Meeting Room',
		price: 200
	},
	{
		id: 5,
		locations: ['Lamont','Beale Memorial Library Atrium'],
		name: 'Branch Library Meeting Room',
		price: 300
	}
];