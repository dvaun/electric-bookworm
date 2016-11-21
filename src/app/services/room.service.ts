import { Injectable } from '@angular/core';

import { Room } 	  from './room';
import { ROOMS } 	  from './mock-rooms';

@Injectable() export class RoomService {
	getRooms(): Promise<Room[]]> {
		return Promise.resolve(ROOMS);
	}
	getRoom(id: number): Promise<Room> {
		return this.getRooms()
			.then(rooms => rooms.find(room => room.id === id));
	}
}