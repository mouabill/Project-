import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from '../movies/movies.model';


interface IMovies {
  title: string;
  reviews: number;
  rating: string;
  genre: string;
}


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  movies: Array<Movies> = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }


  searchCart(params: string) {
    console.log('searching for: ', params);

    this.movies = this.movies.filter((items: Movies) => {
      if (params === items.title || params === items.genre || params === items.rating) {
        return true;
      } else {
        return false;
      }
    });
  }

  showModalFlex() {
    alert('Made By: Billy Moua, Borris Billings, Angel Reyes, and Xayaphone S.');
  }

}
