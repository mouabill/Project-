import { Component, OnInit } from '@angular/core';
import { Movies } from './movies.model';
interface IMovies {
  title: string;
  reviews: number;
  rating: string;
  genre: string;
}


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  movies: Array<Movies> = [];
  constructor() { }


  ngOnInit() {
    // this.movies = [
    //   {
    //     title: 'Avengers: End Game',
    //     reviews: 4.9,
    //     rating: 'PG-13',
    //     genre: 'Action, Thriller, Comedy'
    //   },
    //   {
    //     title: 'Shazam!',
    //     reviews: 3.5,
    //     rating: 'PG-13',
    //     genre: 'Action, Thriller, Comedy'
    //   },
    //   {
    //     title: 'US',
    //     reviews: 4.1,
    //     rating: 'R',
    //     genre: 'Horror, Thriller, Mystery'
    //   }


    // ];
  }


  delete(index: number) {
    this.movies.splice(index, 1);
    console.log('the index: ', index);
  }

  addToCart(id: string) {
    if (id === 'avengers') {
      this.movies.unshift({
        title: 'Avengers: End Game',
        reviews: 4.9,
        rating: 'PG-13',
        genre: 'Action, Thriller, Comedy'
      });
    }
    if (id === 'shaz') {
      this.movies.unshift({
        title: 'Shazam!',
        reviews: 3.5,
        rating: 'PG-13',
        genre: 'Action, Thriller, Comedy'
      });
    }
    if (id === 'us') {
      this.movies.unshift({
        title: 'US',
        reviews: 4.1,
        rating: 'R',
        genre: 'Horror, Thriller, Mystery'
      });
    }
  }

  randomMovie() {
    const rand = Math.floor(Math.random() * 3);
    console.log('your random number = ', rand);
    if (rand === 0) {
      this.movies.unshift({
        title: 'Avengers: End Game',
        reviews: 4.9,
        rating: 'PG-13',
        genre: 'Action, Thriller, Comedy'
      });
    }
    if (rand === 1) {
      this.movies.unshift({
        title: 'Shazam!',
        reviews: 3.5,
        rating: 'PG-13',
        genre: 'Action, Thriller, Comedy'
      });
    }
    if (rand === 2) {
      this.movies.unshift({
        title: 'US',
        reviews: 4.1,
        rating: 'R',
        genre: 'Horror, Thriller, Mystery'
      });

    }


  }

  searchCart(params: string) {
   console.log('searching for: ', params);

   this.movies = this.movies.filter((items: Movies) => {
    if (params === items.title) {
      return true;
    } else {
      return false;
    }
   });
  }
}
