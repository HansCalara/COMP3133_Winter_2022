import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root',
})
export class SpacexapiService {
  REST_API: string = 'https://api.spacexdata.com/v3/launches';

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Mission[]>(this.REST_API);
  }

  getById(id: number) {
    return this.httpClient.get<Mission[]>(`${this.REST_API}/${id}`);
  }
}
