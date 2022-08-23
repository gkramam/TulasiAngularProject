import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
movies:Movie[]
  constructor(private movieService:MovieService,private router:Router) {

   }

  ngOnInit(): void {
    //fetch movies from movie repo
    //this.movies = this.movieService.getMoviesFrmArray();
    this.movieService.getMovies().subscribe(
      (movieData) => { console.log("Comp : " ,movieData); this.movies = movieData }
    );
  }
editMovie(movie:Movie){

}
deleteMovie(movie:Movie){

}
viewMovie(Id:number){
  console.log("Id being sent to movie view Comp:",Id);
  this.router.navigate(['view',Id]);
}
}
