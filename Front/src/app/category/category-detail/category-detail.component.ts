import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Category} from '../../shared/category.model';
import {StorageService} from '../../shared/service/storage.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  providers: [StorageService]
})
export class CategoryDetailComponent implements OnInit {
  
  cat: any = this.storageService.getCategories();
  cats: Category[] = [];
  catID: number;

  constructor(
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.catID = +params['id'];
      this.storageService.getCategory(this.catID).subscribe(
        cat => this.cat = cat);});
  }

  onEditCat(){
    
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
    
  deleteCatt(cats){
    
    this.storageService.deleteCategory(this.catID).subscribe(null);
  }

}


/* 

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css'],
  providers: [StorageService]
})
export class ArtDetailComponent implements OnInit {

  art: any = this.storageService.getArts();
  arts: Art[] = []
  artID: number

  constructor(
    // private artService: ArtService,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.artID = +params['id'];
      this.storageService.getArt(this.artID).subscribe(
          art => this.art = art);
    });
  } 

  

}
 */