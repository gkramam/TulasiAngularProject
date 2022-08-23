import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl : string = "http://localhost:8080/api/v1/movies";
    constructor(private httpClient:HttpClient) {}

    getMovies(){
      console.log("productsURL" , this.baseUrl);
      return this.httpClient.get<Movie[]>(this.baseUrl);
      
     }
     getMovieById(id: number) {
      //get
      const url :string = this.baseUrl + "/" + id;
      console.log(url);
      return this.httpClient.get<Movie>(url);
    }
    createMovie(employee: Movie) {
      //post : new emp
      return this.httpClient.post(this.baseUrl, employee);
    }
    updateMovie(movieId:number, movie:any) : Observable<Object> {
      //put : update emp
      return this.httpClient.put(`${this.baseUrl}/${movieId}`, movie);
    }
    deleteDelete(id: number) {
      //post
      return this.httpClient.delete<Movie>(this.baseUrl + "/" + id);
    }

     getMoviesFrmArray():Movie[]{
      return[
        {
            movieId:1,
            movieName:'Disney Princess Enchanted Tales: Follow Your Dreams',
            movieActor:1,
            
            movieDuration:2,
            movieGerne:1,
            movieOverview:"Princess Aurora and Princess Jasmine learn valuable life lessons in two short stories.",
            movieUrl:'/assets/DisneyPrincessEnchanted.jpg',
            movieReview:4,
        },
        {
            movieId: 2,
            movieName:"Lightyear",
            movieActor:1,
            
            movieDuration:3,
            movieGerne:1,
            movieOverview:"Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.",
            movieUrl:'/assets/LightYear.jpg',
            movieReview:3
        }
      ]
    }
/*        {
            "movieId": 3,
            "movieName":"Nope",
            "movieActor":"Jordan Peele",
            "movieWriter":"Jordan Peele",
            "movieDuration":3,
            "movieGerne":"Fiction",
            "movieOverview":"Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
            "movieUrl":"/assets/Nope.jpg",
            "movieRating":5
        },
        {
            "movieId":4,
            "movieName":"Nope",
            "movieActor":"Jordan Peele",
            "movieWriter":"Jordan Peele",
            "movieDuration":3,
            "movieGerne":"Fiction",
            "movieOverview":"Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
            "movieUrl":"/assets/Nope.jpg",
            "movieRating":4
        },
        {
            "movieId":5,
            "movieName":"She Hulk",
            "movieActor":"Jessica Gao",
            "movieWriter":"Jessica Gao",
            "movieDuration":2,
            "movieGerne":"Comedy",
            "movieOverview":"Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.",
            "movieUrl":"/assets/SheHulk.jpg",
            "movieRating":5
        },
        {
            "movieId": 6,
            "movieName":"The Princess",
            "movieActor":"Le Van Kiet",
            "movieWriter":"Jake Thornton",
            "movieDuration":4,
            "movieGerne":"Fantacy",
            "movieOverview":"A beautiful, strong-willed young royal refuses to wed the cruel sociopath to whom she is betrothed and is kidnapped and locked in a remote tower of her father’s castle. With her scorned, vindictive suitor intent on taking her father’s throne, the princess must protect her family and save the kingdom.",
            "movieUrl":"/assets/ThePrincess.jpg",
            "movieRating":4
        },
        {
            "movieId": 7,
            "movieName":"Thirteen Lives",
            "movieActor":"Don MacPherson",
            "movieWriter":"Ron howard",
            "movieDuration":3,
            "movieGerne":"Drama",
            "movieOverview":"Based on the true nail-biting mission that captivated the world. Twelve boys and the coach of a Thai soccer team explore the Tham Luang cave when an unexpected rainstorm traps them in a chamber inside the mountain. Entombed behind a maze of flooded cave tunnels, they face impossible odds. A team of world-class divers navigate through miles of dangerous cave networks to discover that finding the boys is only the beginning.",
            "movieUrl":"/assets/ThirteenLives.jpg",
            "movieRating":2
        },
        {
            "movieId": 7,
            "movieName": "Thirteen Lives",
            "movieActor": "Don MacPherson",
            "movieWriter": "Ron howard",
            "movieDuration": 3,
            "movieGerne": "Drama",
            "movieOverview":"Based on the true nail-biting mission that captivated the world. Twelve boys and the coach of a Thai soccer team explore the Tham Luang cave when an unexpected rainstorm traps them in a chamber inside the mountain. Entombed behind a maze of flooded cave tunnels, they face impossible odds. A team of world-class divers navigate through miles of dangerous cave networks to discover that finding the boys is only the beginning.",
            "movieUrl":"/assets/ThirteenLives.jpg",
            "movieRating":2
        }
*/

    

  getAll() :String[]{
    return [
      '/assets/DisneyPrincessEnchanted.jpg',
      '/assets/LightYear.jpg',
      '/assets/Nope.jpg',
      '/assets/TurningRed.jpg',
      '/assets/SheHulk.jpg',
      '/assets/ThePrincess.jpg',
      '/assets/ThirteenLives.jpg',
      '/assets/Enchanto.jpg',
      '/assets/SonicTheHedgehog.jpg',
      
      '/assets/TheSeaBeast.jpg',
      '/assets/MayaTheBeeMovie.jpg',
      '/assets/DoctorStrange.jpg',
  ]
}
    
}

 /* "movieeUrl": "/assets/DoctorStrange.jpg",
    "movieeUrl":"/assets/TurningRed.jpg",
    "movieeUrl":"/assets/Enchanto.jpg",
    "movieeUrl":"/assets/SonicTheHedgehog.jpg",
    "movieeUrl":"/assets/TheSeaBeast.jpg",
    "movieeUrl":"/assets/MayaTheBeeMovie.jpg", */
