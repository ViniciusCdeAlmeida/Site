import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Art } from '../art.model';
import { Category } from '../category.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class ArtService {
  artChanged = new Subject<Art[]>();

//   private recipes: Art[] = [
//     new Recipe(
//       'Tasty Schnitzel',
//       'A super-tasty Schnitzel - just awesome!',
//       'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
//       [
//         new Ingredient('Meat', 1),
//         new Ingredient('French Fries', 20)
//       ]),
//     new Recipe('Big Fat Burger',
//       'What else you need to say?',
//       'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
//       [
//         new Ingredient('Buns', 2),
//         new Ingredient('Meat', 1)
//       ])
//   ];

private arts: Art[] =[]

//   constructor(private slService: ShoppingListService) {}

  setArts(arts: Art[]) {
    this.arts = arts;
    this.artChanged.next(this.arts.slice());
  }

  getArts() {
    return this.arts.slice();
  }

  getArt(index: number) {
    return this.arts[index];
  }

//   addIngredientsToShoppingList(ingredients: Ingredient[]) {
//     this.slService.addIngredients(ingredients);
//   }

  addArt(art: Art) {
    this.arts.push(art);
    this.artChanged.next(this.arts.slice());
  }

  updateArt(index: number, newArt: Art) {
    this.arts[index] = newArt;
    this.artChanged.next(this.arts.slice());
  }

  deleteArt(index: number) {
    this.arts.splice(index, 1);
    this.artChanged.next(this.arts.slice());
  }
}
