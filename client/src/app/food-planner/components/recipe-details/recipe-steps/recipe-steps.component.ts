import {Component, Input} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-recipe-steps',
  templateUrl: './recipe-steps.component.html',
  styleUrls: ['./recipe-steps.component.scss']
})
export class RecipeStepsComponent {
  @Input() public recipeForm: FormGroup;
  @Input() private recipeStep: FormGroup;

  public addRecipeStep() {
    (this.recipeForm.controls.steps as FormArray).push(this.recipeStep);
  }
}
