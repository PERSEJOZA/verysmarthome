export abstract class Recipe {
  public id: string;
  public image: string;
  public name: string;
  public shortDescription: string;
  public tags: [string];
  public reviews: [string];
  public personalRank: number;
}
