import { ArtistService } from './../../artist.service';
import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artists: Artist[] = [];
  selected: Artist = null;
  editArtist: Artist = null;
  constructor(
    private artistService: ArtistService,
  ) { }

  onSubmit() {
    this.artists.push(this.newArtist);
    this.newArtist = new Artist();
  }
  newArtist: Artist = new Artist();

  ngOnInit(): void {
    this.loadArtist();
  }

  generateId() {
    return this.artists[this.artists.length - 1].id + 1;
  }

  setEditArtist() {
    this.editArtist = Object.assign({}, this.selected);
  }

  // getNumberOfArtists(): number{
  //   return this.artistService.(this.artists, false).length;
  //   // return this.todos.length;
  // }

  displayArtist(artist: Artist): void{
    this.selected = artist;
  }

  displayTable(): void {
    this.selected = null;
  }

  loadArtist(): void{
    this.artistService.index().subscribe(
      (artists) =>{
        this.artists = artists;
        console.log('ArtistComponent.loadArtist(): artists retrieved');
      },
      (err) =>{
        console.error('ArtistComponent.loadArtist(): retrieve failed');
        console.error(err);
      }
    )
  }

  addArtist(artist: Artist): void{
    this.artistService.create(artist).subscribe(
      pass => {
        this.newArtist = new Artist();
        this.loadArtist();
      },
      fail => {
        console.error('ArtistComponent.addArtist(): error adding artist');
        console.error(fail);
      }
    )
  }

  updateArtist(artist: Artist){
    console.log(artist);

    this.artistService.update(artist).subscribe(
      pass => {
        this.newArtist = new Artist();
        this.loadArtist();
      },
      fail => {
        console.error('ArtistComponent.updateArtist(): error updating artist');
        console.error(fail);
      }
    )
  }

  deleteArtist(id: number): void{
    this.artistService.destroy(id).subscribe(
      pass => {
        this.loadArtist();
      },
      fail => {
        console.error('ArtistComponent.deleteArtist(): error deleting artist');
        console.error(fail);
      }
    )
  }





}


// artistId: number,
    // name: string,
    // artStyle: string,
    // birthYear: number,
    // deathYear: number,
    // listOfWork: string,) {
    //   this.artistId = artistId;
    //   this.name = name;
    //   this.artStyle = artStyle;
    //   this.birthYear = birthYear;
    //   this.deathYear = deathYear;
    //   this.listOfWork = listOfWork; }
