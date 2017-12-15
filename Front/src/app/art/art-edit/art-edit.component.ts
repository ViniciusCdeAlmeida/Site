import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {Response} from '@angular/http'

import { Subscription } from 'rxjs/Subscription';

import {CategoryService} from '../../category/category.service'
import { ArtService } from '../../shared/service/art.service';
import {StorageService} from '../../shared/service/storage.service'
import {Art} from '../../shared/art.model'
import {Category} from '../../shared/category.model'

@Component({
  selector: 'app-art-edit',
  templateUrl: './art-edit.component.html',
  styleUrls: ['./art-edit.component.css'],
  providers: [StorageService]
})
export class ArtEditComponent implements OnInit {
  
  id: number;
  value: number;
  editMode = false;
  artForm: FormGroup;
  art: Art = new Art;
  image: any

  @ViewChild('picture') picture: ElementRef;

  private categories: Category[] = [];

  constructor(private route: ActivatedRoute,
              private artService: ArtService,
              private router: Router,
              private storageService: StorageService,
              private categoryService: CategoryService) {
  }

  onFileChange(event){
    let reader = new FileReader();
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      // reader.readAsDataURL(file);
      // console.log(reader.result.split(',')[1])
      reader.onloadend = () => {
        // this.artForm.get('imgpath').setValue({
        //   this.image = reader.result;
        // })
        this.image = reader.result;
        this.artForm.get('picture').setValue(this.image);
        console.log(this.artForm.get('picture'))
      };
      reader.readAsDataURL(file);
      // console.log(this.artForm.get('imgpath'))
      // reader.readAsDataURL(file);
      // this.artForm.get('imgpath').setValue(file);
      // console.log(this.artForm.get('imgpath').value)    
      // console.log(this.artForm.get('picture').value)
      // let input = new FormData();
      // input.append('picture', this.artForm.get('picture').value);  
    }
  }

  upload(){
    let fileBrowser = this.picture.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append("imgpath", fileBrowser.files[0]);
      console.log(formData.get('imgpath'));

    }
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
          this.storageService.getCategories();
        }
      );
      this.categoryService.categoryChanged.subscribe(
        (cats: Category[]) => {
          this.categories = cats;
          // console.log(cats);
        });
  }

  onSubmit() {
    if (this.editMode) {
      this.artService.updateArt(this.id, this.artForm.value);
    } else {
      // console.log(this.value);
      // console.log(this.artForm.value);
      this.artService.addArt(this.artForm.value);
      // console.log(this.artForm.get('title').value);
      // console.log(this.artForm.value);
      this.storageService.addArt(this.artForm.value).
      subscribe(data => this.artForm.value);{}
    }    
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let artTitle = '';
    let artImgpath;
    let artDescription = '';
    let artCategory = '';

    // if (this.editMode) {
    //   const art = this.artService.getArt(this.id);
    //   artTitle = art.title;
    //   artImgpath = art.imgpath;
    //   artDescription = art.description;
    //   artCategory = art.category;
    // }

    this.artForm = new FormGroup({
      'title': new FormControl(artTitle, Validators.required),
      'picture': new FormControl(artImgpath, Validators.required),
      'description': new FormControl(artDescription, Validators.required),
      'category': new FormControl(artCategory, Validators.required)
    });
  }

}
