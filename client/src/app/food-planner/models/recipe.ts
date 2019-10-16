import {Review} from './review';

export class Recipe {
  id: string;
  image: string;
  name: string;
  shortDescription: string;
  tags: string[];
  reviews: Review[];
  personalRank: number;
}
