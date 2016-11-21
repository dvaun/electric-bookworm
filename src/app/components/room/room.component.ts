import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location }	from "@angular/common";

import { Room }				 from "./room";
import { RoomService }		 from "./room.service";

@Component({
	moduleId: module.id,
	selector: 'app-room',
	styleUrls: ['room.component.css'],
	templateUrl: 'room.component.html',
	providers: [RoomService]
})
export class RoomComponent implements OnInit {
	room: Room;
	rooms: Room[];
	selectedRoom: Room;

	constructor(
		private roomService: RoomService,
		private route: ActivatedRoute,
		private location: Location
	){ }

	getRooms(): void {
		this.roomService.getRooms().then(rooms => this.rooms = rooms);
	}

	ngOnInit(): void {
		this.getRooms();
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.roomService.getRoom(id)
				.then(room => this.room = room);
		});
	}
	
	goBack(): void {
		this.location.back();
	}

	onSelect(room: Room): void {
		this.selectedRoom = room;
	}
}