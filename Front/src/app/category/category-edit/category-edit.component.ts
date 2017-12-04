import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {StorageService} from '../../shared/service/storage.service'
import {Category} from '../../shared/category.model'
import {CategoryService} from '../category.service'

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  id: number;
  editMode = false;
  categoryForm: FormGroup;

  category: Category = new Category;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private storageService: StorageService) { }

  ngOnInit() {

    this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
          }
        );
  }

  onBackPage(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  save(){

    if (this.editMode) {
        this.categoryService.updateCategory(this.id, this.categoryForm.value);
      } else {
        this.categoryService.addCategory(this.categoryForm.value);
        console.log(this.categoryForm.value);
        this.storageService.addCategory(this.categoryForm.value).
        subscribe(data => this.categoryForm.value);{}
      }
      this.onBackPage();
  }

  private initForm() {
    let categoryTitle = '';

    if (this.editMode) {
      const category = this.categoryService.getCategory(this.id);
      categoryTitle = category.title;
    }

    this.categoryForm = new FormGroup({
      'title': new FormControl(categoryTitle, Validators.required)
    });
  }



}
