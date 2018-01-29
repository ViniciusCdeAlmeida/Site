import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { Subscription } from 'rxjs/Subscription';

import {StorageService} from '../../shared/service/storage.service';
import {Category} from '../../shared/category.model';
import {CategoryService} from '../category.service';
import { InterconnectService } from '../../shared/service/interconnect.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [StorageService, InterconnectService]
})

export class CategoryListComponent implements OnInit, OnDestroy {

  categories: Category[] = [];
  subscription: Subscription;
  selectedCat: any

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private storageService: StorageService,
    private categoryService: CategoryService,
    private interconnectService: InterconnectService
  ) { /* this.header.selectedStream.subscribe((selected: string) => {this.selectedCat;console.log(this.selectedCat)}) */ 
  // this.router=router;
  // this.interconnectService = interconnectService;
  // console.log('cone called');
  // this.selectedCat = interconnectService.getData();
}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.storageService.getCategories()});
    this.categoryService.categoryChanged.subscribe(
      (cats: Category[]) => {this.categories = cats;});
    this.onNewCategory()
    // this.header.test1.subscribe((catSelected: string) => {catSelected = this.selectedCat})
    // this.categories = this.categoryService.getCategories();
  }

  onNewCategory() {
    // this.header.selected.subscribe((data:string)=>{data = this.selectedCat})
    // console.log(this.selectedCat)
    // this.header.test = this.selectedCat
    this.interconnectService.selectedStream.subscribe((data) => {data = this.selectedCat;console.log(this.selectedCat)})
    console.log(this.selectedCat)
    // this.router.navigate(['new'], {relativeTo: this.route});
    
  }

  // send(){
  //   this.header.selected.subscribe((data:string)=>{data = this.selectedCat})
  // }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
