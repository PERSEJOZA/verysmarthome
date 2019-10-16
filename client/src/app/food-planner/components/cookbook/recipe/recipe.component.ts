import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from 'src/app/food-planner/models/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  public publicRank: number;
  constructor() {}

  ngOnInit() {
    this.publicRank = this.calculatePublicRank();
  }

  private calculatePublicRank() {
    let sum = 0;
    let count = 0;
    this.recipe.reviews.forEach(review => {
      if (!!review.rank) {
        sum = sum + review.rank;
        count++;
      }
    });

    return sum / count;
  }
}
