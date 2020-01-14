import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

import {RecipeDb} from '../../models/recipe-db.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}
  public recipe: RecipeDb;
  public recipeForm: FormGroup;
  public editModeFormGroup: FormGroup;

  public recipeStep: FormGroup = this.fb.group({
    name: ['', Validators.required],
    message: ['']
  });
  public recipeSteps: FormGroup = this.fb.group({
    name: ['', Validators.required],
    message: [''],
    image: ['']
  });
  public recipeIngredient: FormGroup = this.fb.group({
    name: ['', Validators.required],
    mg: [''],
    ml: [''],
    pieces: ['']
  });
  public recipeIngredients: FormGroup = this.fb.group({
    name: ['', Validators.required],
    mg: [''],
    ml: [''],
    pieces: ['']
  });
  public recipeTag: FormGroup = this.fb.group({
    name: ['']
  });
  public recipeTags: FormGroup = this.fb.group({
    name: ['']
  });

  ngOnInit() {
    this.route.data.subscribe((data: {recipe: RecipeDb}) => {
      this.recipe = data.recipe;
    });
    this.setEditMoeForm();
    this.setRecipeForm();
  }

  public saveRecipe() {
    this.recipe = new RecipeDb(
      this.recipe._id,
      this.recipe._rev,
      this.recipeForm.value.name,
      this.recipeForm.value.image,
      this.recipeForm.value.shortDescription,
      this.recipeForm.value.timeToCook,
      this.recipeForm.value.minNumberOfPeople,
      this.recipeForm.value.tags,
      this.recipeForm.value.ingredients,
      this.recipeForm.value.steps
    );

    console.log(this.recipe);
  }

  public toggleEditMode() {
    if (!this.editModeFormGroup.value.enabled) {
      this.recipeForm.enable();
    } else {
      this.recipeForm.disable();
    }
  }

  private setRecipeForm(): void {
    this.recipeForm = this.fb.group({
      name: [this.recipe.name, Validators.required],
      image: [''],
      shortDescription: [this.recipe.shortDescription, Validators.maxLength(300)],
      timeToCook: [this.recipe.timeToCook],
      minNumberOfPeople: [this.recipe.minNumberOfPeople],
      tags: this.fb.array([this.recipeTag]),
      ingredients: this.fb.array([this.recipeIngredient]),
      steps: this.fb.array([this.recipeStep])
    });

    this.recipeForm.disable();
  }

  private setEditMoeForm(): void {
    this.editModeFormGroup = this.fb.group({
      enabled: [false]
    });
  }
}
