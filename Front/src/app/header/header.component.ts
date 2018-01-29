import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { AuthGuard } from "../user/guards/user.guard";
import { Category } from '../shared/category.model'
import { CategoryService } from '../category/category.service'
import { Subject } from 'rxjs/Subject';
import { StorageService } from '../shared/service/storage.service'
// import { SharedService } from '../shared/service/interconnect.service'
import { InterconnectService } from '../shared/service/interconnect.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [StorageService, InterconnectService]
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private guard: AuthGuard,
    private categoryService: CategoryService,
    private storageService: StorageService,
    private interconnectService: InterconnectService
  ) { /* this.interconnectService.selectedStream.subscribe((data:string) => {console.log(data)}) */ 
  // this.interconnectService = interconnectService;
  // this.router = router;    
}

  categories: Category[] = [];

  test:string

  ngOnInit() {
    this.storageService.getCategories();
    this.categoryService.categoryChanged.subscribe(
      (cats: Category[]) => {
        this.categories = cats;
      });
  }

  selectedCat(args){
    this.interconnectService.interconnectionStream(args)
    /* console.log(args)
    this.interconnectService.selected.subscribe(data => {
      data = args;
      console.log(args)
    }); */
    // console.log(args);
    // this.interconnectService.saveData(args); 
    // console.log('str');
    // this.router.navigate(['/ComponentTwo']);
    // this.selected.next(args)
    
    // console.log(args)
    // console.log(this.selected)
    // this.test = args
  }

}
