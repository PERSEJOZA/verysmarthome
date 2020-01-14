import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.scss']
})
export class RecipeIngredientsComponent implements OnInit {
  @Input() public recipeForm: FormGroup;
  @Input() public recipeIngredient: FormGroup;

  ngOnInit() {}

  public addIngredient() {
    (this.recipeForm.controls.ingredients as FormArray).push(this.recipeIngredient);
  }
}
