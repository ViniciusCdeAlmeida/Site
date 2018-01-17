import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import {StorageService} from '../../shared/service/storage.service'
import {Category} from '../../shared/category.model'

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
  providers:[StorageService]
})
export class CategoryEditComponent implements OnInit {

  id: number;
  editMode = false;
  categoryForm: FormGroup;

  category: Category = new Category;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private storageService: StorageService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();});
    }

  onBackPage(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  save(){

    if (this.editMode) {
        this.storageService.updateLocalCategory(this.id, this.categoryForm.value);
      } else {
        this.storageService.addLocalCategory(this.categoryForm.value);
        this.storageService.addCategory(this.categoryForm.value).subscribe(data => this.categoryForm.value);{}
      }
      this.onBackPage();
  }

  private initForm() {
    let categoryTitle = '';
    let catId: number;;

    if (this.editMode) {
      const category = this.storageService.getLocalCategory(this.id);
      categoryTitle = category[0].title;
      catId = category[0].id
    }

    this.categoryForm = new FormGroup({
      'title': new FormControl(categoryTitle, Validators.required),
      'id': new FormControl(catId, Validators.required)
    });
  }



}
