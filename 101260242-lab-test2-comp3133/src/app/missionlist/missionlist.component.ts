import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  missionList: Mission[] = [];

  constructor(private spaceApiService: SpacexapiService) {}

  ngOnInit(): void {
    this.spaceApiService.getAll().subscribe((res) => {
      this.missionList = res;
    });
  }
}
