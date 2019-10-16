import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})
export class CookbookComponent implements OnInit {
  constructor() {}

  public recipes: Recipe[] = [
    {
      id: 'id1',
      image: 'geen',
      name: 'pizza Mozarella',
      shortDescription: 'very nice pizza',
      tags: ['fastfood', 'home'],
      reviews: [
        {
          id: 'string',
          reviewerUserName: 'Mikhail',
          message: 'I cooked it once',
          rank: 66
        }
      ],
      personalRank: 89
    },
    {
      id: 'id1',
      image: 'geen',
      name: 'pizza Mozarella',
      shortDescription: 'very nice pizza',
      tags: ['fastfood', 'home'],
      reviews: [
        {
          id: 'string',
          reviewerUserName: 'Mikhail',
          message: 'I cooked it once',
          rank: 66
        }
      ],
      personalRank: 89
    },
    {
      id: 'id1',
      image: 'geen',
      name: 'pizza Mozarella',
      shortDescription: 'very nice pizza',
      tags: ['fastfood', 'home'],
      reviews: [
        {
          id: 'string',
          reviewerUserName: 'Mikhail',
          message: 'I cooked it once',
          rank: 66
        }
      ],
      personalRank: 89
    },
    {
      id: 'id1',
      image: 'geen',
      name: 'pizza Mozarella',
      shortDescription: 'very nice pizza',
      tags: ['fastfood', 'home'],
      reviews: [
        {
          id: 'string',
          reviewerUserName: 'Mikhail',
          message: 'I cooked it once',
          rank: 66
        }
      ],
      personalRank: 89
    }
  ];

  ngOnInit() {}
}
