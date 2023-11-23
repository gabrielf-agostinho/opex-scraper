import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { VolumesService } from '../volumes.service';
import { IVolume } from '../models/IVolume';

@Component({
  selector: 'app-volumes-list',
  templateUrl: './volumes-list.component.html',
  styleUrls: ['./volumes-list.component.scss']
})
export class VolumesListComponent implements OnInit {
  public volumes: IVolume[] = [];

  constructor(private _volumesService: VolumesService) { }

  public ngOnInit(): void {
    this._getVolumes();
  }

  private _getVolumes(): void {
    this._volumesService.getVolumes().pipe(first()).subscribe({
      next: (volumes) => this.volumes = volumes,
      error: (err) => console.error(err)
    });
  }

  public ler(link: string): void {
    console.log(link);
  }
}
