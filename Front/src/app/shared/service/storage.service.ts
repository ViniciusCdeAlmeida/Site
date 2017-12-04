import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Art } from '../art.model';
import { Category } from '../category.model';
import { CategoryService } from '../../category/category.service';
import { ArtService } from './art.service'

@Injectable()
export class StorageService {
  constructor(private http: Http, private artService: ArtService) {}

  private urlArt: string = "http://localhost:3000/sites";
  private urlCat: string = "http://localhost:3000/categories";
  
  // getArts(){
  //       return this.http.get(this.urlArt).map(art => art.json());
  //  }

  getArts(){
    this.http.get(this.urlArt).map((response: Response) => 
      {
        const arts: Art[] = response.json(); 
        return arts;
      }).subscribe((art: Art[]) => {this.artService.setArts(art)});
  }

  getArt(id){
        return this.http.get(this.urlArt + '/' + id)
          .map(art => art.json());
  }

  addArt(art){
    return this.http.post(this.urlArt, {'site': art})
      .map(res => res.json());
  }

  // addArt(art){
  //   return this.http.post(this.urlArt, this.artService.getArts())
  //     .map(res => res.json());
  // }

  updateArts(art){
    return this.http.put(this.urlArt + '/' + art.id,  {'site': art})
      .map(res => res.json());
  }

  deleteArt(id){
    return this.http.delete(this.urlArt + '/' + id)
      .map(res => res.json());
  }

//--------------------------------------------//

  getCategory(id){
        return this.http.get(this.urlCat + '/' + id)
          .map(category => category.json());
  }

  getCategories(){
        return this.http.get(this.urlCat)
          .map(category => category.json());
  }

  addCategory(category){
    return this.http.post(this.urlCat, {'category': category})
      .map(res => res.json());
  }

  updateCategories(category){
    return this.http.put(this.urlCat + '/' + category.id,  {'category': category})
      .map(res => res.json());
  }

  deleteCategory(id){
    return this.http.delete(this.urlCat + '/' + id)
      .map(res => res.json());
  }

}