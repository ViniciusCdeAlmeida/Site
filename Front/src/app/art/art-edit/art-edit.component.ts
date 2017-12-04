import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {Response} from '@angular/http'

import { Subscription } from 'rxjs/Subscription';

import { ArtService } from '../../shared/service/art.service';

import {StorageService} from '../../shared/service/storage.service'

import {Art} from '../../shared/art.model'

@Component({
  selector: 'app-art-edit',
  templateUrl: './art-edit.component.html',
  styleUrls: ['./art-edit.component.css'],
  providers: [StorageService]
})
export class ArtEditComponent implements OnInit {
  
  id: number;
  editMode = false;
  artForm: FormGroup;

  art: Art = new Art;

  constructor(private route: ActivatedRoute,
              private artService: ArtService,
              private router: Router,
              private storageService: StorageService) {
  }

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

  onSubmit() {
    if (this.editMode) {
      this.artService.updateArt(this.id, this.artForm.value);
    } else {
      this.artService.addArt(this.artForm.value);
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
    let artImagePath = '';
    let artDescription = '';
    let artCategory = '';

    if (this.editMode) {
      const art = this.artService.getArt(this.id);
      artTitle = art.title;
      artImagePath = art.imgpath;
      artDescription = art.description;
      artCategory = art.category;
         }

    this.artForm = new FormGroup({
      'title': new FormControl(artTitle, Validators.required),
      'imgpath': new FormControl(artImagePath, Validators.required),
      'description': new FormControl(artDescription, Validators.required),
      'category': new FormControl(artCategory, Validators.required)
    });
  }

}
