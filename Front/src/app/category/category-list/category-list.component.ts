import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { Subscription } from 'rxjs/Subscription';
import {StorageService} from '../../shared/service/storage.service';
import {Category} from '../../shared/category.model';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [StorageService]
})

export class CategoryListComponent implements OnInit {

  private categories: Category[] = [];
  subscription: Subscription;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private storageService: StorageService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.storageService.getCategories().subscribe(
      (data) => {this.categories = data});
    });
  }

  onNewCategory() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
