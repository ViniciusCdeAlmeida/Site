import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

import {Category} from '../../shared/category.model'

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  category: Category = new Category;

  ngOnInit() {
  }

  onBackPage(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  save(){}

}
