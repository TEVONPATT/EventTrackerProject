export class Artist {
  id: number;
  name: string;
  artStyle: string;
  birthYear: number;
  deathYear: number;
  listOfWork: string;

  constructor(
  id?: number,
  name?: string,
  artStyle?: string,
  birthYear?: number,
  deathYear?: number,
  listOfWork?: string
  ){
  this.id = id;
  this.name = name;
  this.artStyle = artStyle;
  this.birthYear = birthYear;
  this.deathYear = deathYear;
  this.listOfWork = listOfWork;
  }


}
