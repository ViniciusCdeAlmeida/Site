import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ArtService } from '../../shared/service/art.service';

@Component({
  selector: 'app-art-edit',
  templateUrl: './art-edit.component.html',
  styleUrls: ['./art-edit.component.css']
})
export class ArtEditComponent implements OnInit {
  id: number;
  // categoryId: number;
  editMode = false;
  artForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private artService: ArtService,
              private router: Router) {
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
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.artService.updateArt(this.id, this.artForm.value);
    } else {
      this.artService.addArt(this.artForm.value);
    }
    this.onCancel();
  }

  // onAddIngredient() {
  //   (<FormArray>this.artForm.get('ingredients')).push(
  //     new FormGroup({
  //       'name': new FormControl(null, Validators.required),
  //       'amount': new FormControl(null, [
  //         Validators.required,
  //         Validators.pattern(/^[1-9]+[0-9]*$/)
  //       ])
  //     })
  //   );
  // }

  // onDeleteIngredient(index: number) {
  //   (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  // }

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
      // if (recipe['ingredients']) {
      //   for (let ingredient of recipe.ingredients) {
      //     recipeIngredients.push(
      //       new FormGroup({
      //         'name': new FormControl(ingredient.name, Validators.required),
      //         'amount': new FormControl(ingredient.amount, [
      //           Validators.required,
      //           Validators.pattern(/^[1-9]+[0-9]*$/)
      //         ])
      //       })
      //     );
      //   }
      // }
    }

    this.artForm = new FormGroup({
      'name': new FormControl(artTitle, Validators.required),
      'imagePath': new FormControl(artImagePath, Validators.required),
      'description': new FormControl(artDescription, Validators.required),
      'category': new FormControl(artCategory, Validators.required)/* ,
      'ingredients': recipeIngredients */
    });
  }

}
