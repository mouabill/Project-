import { Component, OnInit } from '@angular/core';
import { Movies } from './movies.model';
import { Likes } from './movies.like';
import { isListLikeIterable } from '@angular/core/src/change_detection/change_detection_util';
import { all } from 'q';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToastService } from '../toast/toast.service';



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

  aboutText = 'Created';
  likes: Array<Likes> = [];
  movies: Array<Movies> = [];
  constructor(private toastService: ToastService) { }


  ngOnInit() {
    // this.movies = [
    //   {
    //     title: 'Avengers: End Game',
    //     reviews: 4.9,
    //     rating: 'PG-13',
    //     genre: 'Action',
    //     year: 2019,
    //   },
    //   {
    //     title: 'Shazam!',
    //     reviews: 3.5,
    //     rating: 'PG-13',
    //     genre: 'Action',
    //     year: 2019,
    //   },
    //   {
    //     title: 'US',
    //     reviews: 4.1,
    //     rating: 'R',
    //     genre: 'Horror',
    //     year: 2019
    //   },
    //   {
    //     title: 'Dumbo',
    //     reviews: 3.2,
    //     rating: 'PG',
    //     genre: 'Fantasy',
    //     year: 2019,
    //   },
    //   {
    //     title: 'Bohemian Rhapsody',
    //     reviews: 4.2,
    //     rating: 'PG-13',
    //     genre: 'Drama',
    //     year: 2019
    //   },
    //   {
    //     title: 'Bumblebee',
    //     reviews: 3.8,
    //     rating: 'PG-13',
    //     genre: 'Action',
    //     year: 2018
    //   },
    //   {
    //     title: 'Halloween',
    //     reviews: 3.7,
    //     rating: 'R',
    //     genre: 'Horror',
    //     year: 2018
    //   },
    //   {
    //     title: 'Alita: Battle Angel',
    //     reviews: 4,
    //     rating: 'PG-13',
    //     genre: 'Action',
    //     year: 2019
    //   },
    //   {
    //     title: 'Ready Player One',
    //     reviews: 4.4,
    //     rating: 'PG-13',
    //     genre: 'Action',
    //     year: 2018
    //   },
    //   {
    //     title: 'Pet Semetary',
    //     reviews: 3.5,
    //     rating: 'R',
    //     genre: 'Horror',
    //     year: 2019
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
        genre: 'Action',
        year: 2019
      });
      this.toastService.showToasts('success', 4000, 'Added Avengers: End Game to Watch Cart');
    }
    if (id === 'shaz') {
      this.movies.unshift({
        title: 'Shazam!',
        reviews: 3.5,
        rating: 'PG-13',
        genre: 'Action',
        year: 2019
      });
      this.toastService.showToasts('success', 4000, 'Added Shazam! to Watch Cart');
    }
    if (id === 'us') {
      this.movies.unshift({
        title: 'US',
        reviews: 4.1,
        rating: 'R',
        genre: 'Horror',
        year: 2019
      });
      this.toastService.showToasts('success', 4000, 'Added US to Watch Cart');
    }
    if (id === 'dumbo') {
      this.movies.unshift({
        title: 'Dumbo',
        reviews: 3.2,
        rating: 'PG',
        genre: 'Fantasy',
        year: 2019
      });
      this.toastService.showToasts('success', 4000, 'Added Dumbo to Watch Cart');
    }
    if (id === 'bohemian') {
      this.movies.unshift({
        title: 'Bohemian Rhapsody',
        reviews: 4.2,
        rating: 'PG-13',
        genre: 'Drama',
        year: 2018
      });
      this.toastService.showToasts('success', 4000, 'Added Bohemian Rhapsody to Watch Cart');
    }
    if (id === 'bee') {
      this.movies.unshift({
        title: 'Bumblebee',
        reviews: 3.8,
        rating: 'PG-13',
        genre: 'Action',
        year: 2018
      });
      this.toastService.showToasts('success', 4000, 'Added Bumblebee to Watch Cart');
    }
    if (id === 'halloween') {
      this.movies.unshift({
        title: 'Halloween',
        reviews: 3.7,
        rating: 'R',
        genre: 'Horror',
        year: 2018
      });
      this.toastService.showToasts('success', 4000, 'Added Halloween to Watch Cart');
    }
    if (id === 'alita') {
      this.movies.unshift({
        title: 'Alita: Battle Angel',
        reviews: 4,
        rating: 'PG-13',
        genre: 'Action',
        year: 2019
      });
      this.toastService.showToasts('success', 4000, 'Added Alita: Battle Angel to Watch Cart');
    }
    if (id === 'player') {
      this.movies.unshift({
        title: 'Ready Player One',
        reviews: 4.4,
        rating: 'PG-13',
        genre: 'Action',
        year: 2018
      });
      this.toastService.showToasts('success', 4000, 'Added Ready Player One to Watch Cart');
    }
    if (id === 'pet') {
      this.movies.unshift({
        title: 'Pet Semetary',
        reviews: 3.5,
        rating: 'R',
        genre: 'Horror',
        year: 2019
      });
      this.toastService.showToasts('success', 4000, 'Added Pet Semetary to Watch Cart');
    }



  }

  randomMovie() {
    const rand = Math.floor(Math.random() * 10);
    console.log('your random number = ', rand);
    if (rand === 0) {
      this.movies.unshift({
        title: 'Avengers: End Game',
        reviews: 4.9,
        rating: 'PG-13',
        genre: 'Action',
        year: 2019
      });
      this.toastService.showToasts('success', 2000, 'Added Avengers: End Game to Watch Cart');
    }
    if (rand === 1) {
      this.movies.unshift({
        title: 'Shazam!',
        reviews: 3.5,
        rating: 'PG-13',
        genre: 'Action',
        year: 2019
      });
      this.toastService.showToasts('success', 2000, 'Added Shazam! to Watch Cart');
    }
    if (rand === 2) {
      this.movies.unshift({
        title: 'US',
        reviews: 4.1,
        rating: 'R',
        genre: 'Horror',
        year: 2019
      });
      this.toastService.showToasts('success', 2000, 'Added US to Watch Cart');
    }
    if (rand === 3) {
      this.movies.unshift({
        title: 'Dumbo',
        reviews: 3.2,
        rating: 'PG',
        genre: 'Fantasy',
        year: 2019
      });
      this.toastService.showToasts('success', 2000, 'Added Dumbo to Watch Cart');
    }
    if (rand === 4) {
      this.movies.unshift({
        title: 'Bohemian Rhapsody',
        reviews: 4.2,
        rating: 'PG-13',
        genre: 'Drama',
        year: 2018
      });
      this.toastService.showToasts('success', 2000, 'Added Bohemian Rhapsody to Watch Cart');
    }
    if (rand === 5) {
      this.movies.unshift({
        title: 'Bumblebee',
        reviews: 3.8,
        rating: 'PG-13',
        genre: 'Action',
        year: 2018
      });
      this.toastService.showToasts('success', 2000, 'Added Bumblebee to Watch Cart');
    }
    if (rand === 6) {
      this.movies.unshift({
        title: 'Halloween',
        reviews: 3.7,
        rating: 'R',
        genre: 'Horror',
        year: 2018
      });
      this.toastService.showToasts('success', 2000, 'Added Halloween to Watch Cart');
    }
    if (rand === 7) {
      this.movies.unshift({
        title: 'Alita: Battle Angel',
        reviews: 4,
        rating: 'PG-13',
        genre: 'Action',
        year: 2019
      });
      this.toastService.showToasts('success', 2000, 'Added Alita: Battle Angel to Watch Cart');
    }
    if (rand === 8) {
      this.movies.unshift({
        title: 'Ready Player One',
        reviews: 4.4,
        rating: 'PG-13',
        genre: 'Action',
        year: 2018
      });
      this.toastService.showToasts('success', 2000, 'Added Ready Player One to Watch Cart');
    }
    if (rand === 9) {
      this.movies.unshift({
        title: 'Pet Semetary',
        reviews: 3.5,
        rating: 'R',
        genre: 'Horror',
        year: 2019
      });
      this.toastService.showToasts('success', 2000, 'Added Pet Semetary to Watch Cart');


    }


  }

  genreFilter() {
    console.log('you did it!');
  }

  sortBy(movies: Array<Movies>) {
this.movies.sort((a: Movies, b: Movies) => {
  return a.year > b.year ? -1 : 1;
});
  }

  sortByAZ(movies: Array<Movies>) {
    this.movies.sort((a: Movies, b: Movies) => {
      return a.title > b.title ? 1 : -1;
    });
  }

  sortByReviews(movies: Array<Movies>) {
    this.movies.sort((a: Movies, b: Movies) => {
      return a.reviews > b.reviews ? -1 : 1;
    });
  }

  openInput(params: string) {
    // this.toastService.showToasts();
    console.log('searching for: ', params);
    if (params === undefined) {
      this.toastService.showToasts('danger', 4000, 'Must enter movie title!');
      // this.toastService.showToasts('info', 4000, 'Thank you for submiting movie request for: ' + params);

    } else {
      this.toastService.showToasts('info', 4000, 'Thank you for submiting movie request for: ' + params);
    }
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

  deleteAllFromCart(index: number) {
    this.movies.splice(index, 10000000000000000000000000);
  }

  addAllMovies() {
    this.movies.unshift({
      title: 'Avengers: End Game',
      reviews: 4.9,
      rating: 'PG-13',
      genre: 'Action',
      year: 2019,
    },
      {
        title: 'Shazam!',
        reviews: 3.5,
        rating: 'PG-13',
        genre: 'Action',
        year: 2019,
      },
      {
        title: 'US',
        reviews: 4.1,
        rating: 'R',
        genre: 'Horror',
        year: 2019
      },
      {
        title: 'Dumbo',
        reviews: 3.2,
        rating: 'PG',
        genre: 'Fantasy',
        year: 2019,
      },
      {
        title: 'Bohemian Rhapsody',
        reviews: 4.2,
        rating: 'PG-13',
        genre: 'Drama',
        year: 2019
      },
      {
        title: 'Bumblebee',
        reviews: 3.8,
        rating: 'PG-13',
        genre: 'Action',
        year: 2018
      },
      {
        title: 'Halloween',
        reviews: 3.7,
        rating: 'R',
        genre: 'Horror',
        year: 2018
      },
      {
        title: 'Alita: Battle Angel',
        reviews: 4,
        rating: 'PG-13',
        genre: 'Action',
        year: 2019
      },
      {
        title: 'Ready Player One',
        reviews: 4.4,
        rating: 'PG-13',
        genre: 'Action',
        year: 2018
      },
      {
        title: 'Pet Semetary',
        reviews: 3.5,
        rating: 'R',
        genre: 'Horror',
        year: 2019
      });
  }



}

