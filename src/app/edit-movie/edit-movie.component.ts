import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movieId:number
  movie:Movie
  constructor( private route : ActivatedRoute, private router: Router,private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['Id'];
    console.log("Movie id received by Edit movie comp:", this.movieId);
    this.movieService.getMovieById(this.movieId).subscribe(
     
      (movieData) => { 
      console.log("Movie data fetched from Json server to view:",movieData);
      this.movie = movieData;
    }, (error)=> { console.log("error : " , error) }
    )
    
  console.log("Movie under view",this.movie);

  }

  saveEditOperation(movie:Movie) {
    this.movieService.updateMovie(this.movieId,this.movie)
    .subscribe(data => console.log(data), error => console.log(error));
    this.movie =  new Movie;
    this.router.navigate(['/courses']);

  }
  cancelEditOperation(movie:Movie){

  }
  
}