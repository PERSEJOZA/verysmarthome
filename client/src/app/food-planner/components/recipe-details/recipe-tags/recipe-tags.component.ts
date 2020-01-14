import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-recipe-tags',
  templateUrl: './recipe-tags.component.html',
  styleUrls: ['./recipe-tags.component.scss']
})
export class RecipeTagsComponent implements OnInit {
  @Input() public recipeForm: FormGroup;
  @Input() public recipeTag: FormGroup;

  ngOnInit() {}

  public addTag() {
    (this.recipeForm.controls.tags as FormArray).push(this.recipeTag);
  }
}
