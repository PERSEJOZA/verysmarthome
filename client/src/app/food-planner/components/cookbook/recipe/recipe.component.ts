import {Component, Input, OnInit} from '@angular/core';
import {RecipeDb} from 'src/app/food-planner/models/recipe-db.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: RecipeDb;
  public publicRank: number;
  constructor() {}

  ngOnInit() {
    this.publicRank = this.calculatePublicRank();
  }

  private calculatePublicRank() {
    const sum = 0;
    const count = 0;
    // this.recipe.reviews.forEach(review => {
    //   // if (!!review.rank) {
    //   //   sum = sum + review.rank;
    //   //   count++;
    //   // }
    // });

    return sum / count;
  }
}
