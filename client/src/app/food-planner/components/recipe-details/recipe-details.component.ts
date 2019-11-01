import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

import {RecipeDb} from '../../models/recipe-db.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  public recipe: RecipeDb;
  public options: FormGroup;

  constructor(private route: ActivatedRoute, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data: {recipe: RecipeDb}) => {
      this.recipe = data.recipe;
      console.log(this.recipe);
    });
  }
}
