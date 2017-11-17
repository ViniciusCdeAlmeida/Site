// https://casaart-800a8.firebaseio.com/

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { ArtService } from './art.service';
import { Art } from '../art.model';
import { Category } from '../category.model';

@Injectable()
export class StorageService {
  constructor(private http: Http, private artService: ArtService) {}

  storeArts() {
    return this.http.put('https://casaart-800a8.firebaseio.com/arts.json', 
    this.artService.getArts());
  }

  getArts() {
    this.http.get('https://casaart-800a8.firebaseio.com/arts.json')
      .map(
        (response: Response) => {
          const arts: Art[] = response.json();
          for (let art of arts) {
            if (!art['ingredients']) {
              art['ingredients'] = [];
            }
          }
          return arts;
        }
      )
      .subscribe(
        (arts: Art[]) => {
          this.artService.setArts(arts);
        }
      );
  }
}
