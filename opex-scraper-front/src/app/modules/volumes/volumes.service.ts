import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IVolume } from './models/IVolume';

@Injectable({
  providedIn: 'root'
})
export class VolumesService {

  constructor(private _httpClient: HttpClient) { }

  public getVolumes(): Observable<Array<IVolume>> {
    return this._httpClient.get<Array<IVolume>>(`${environment.apiURL}/volumes`);
  }
}
