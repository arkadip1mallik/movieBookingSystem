import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import {authConst} from '../auth Service/authConst';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  headers:any;
  private apiUrl = 'http://10.10.10.139/api/add_movie'; 

  private moviesSubject = new BehaviorSubject<any[]>([]);
  movies$: Observable<any[]> = this.moviesSubject.asObservable();

  constructor(private http: HttpClient) {
    // const authToken = localStorage.getItem(authConst.authToken);
    // console.log(authToken);
    // this.headers.authToken;
    this.fetchMovies();
  }
  movies = [
    {
      id: '1',
      title: 'Chandu Champion',
      description:
        'This is an unbelievable tale of a man who faced one adversary after another with an undying spirit. His unwavering zeal and never-give-up attitude led to the creation of history. This is the story of Chandu Champion!',
      director: 'Kabir Khan',
      duration: '2hr 23min',
      rating: '9.2/10',
      imageUrl: 'images/chandu champion.png',
     
    },
    {
      id: '2',
      title: 'Bad Boys: Ride Or Die',
      description:
        'When their late police captain gets linked to drug cartels, wisecrackingMiami cops Mike Lowrey and Marcus Burnett embark on a dangerous mission to clear his name.',
      director: 'Adil El Arbi & Billal Fallah',
      duration: '1 hr 55min',
      rating: '7/10',
      imageUrl: 'images/badboys.jpg',
      
    },
    {
      id: '3',
      title: 'Munjya',
      description:
        " A young man's visit to his native village unveils a family secret and avengeful spirit, the Munjya, who wants to get married. Now the young manmust fight to protect himself and his love from Munjya's clutches.",
      director: 'Aditya Sarpotdar',
      duration: '2hr 3 min',
      imageUrl: 'images/munjya.jpg',
      rating: '8.2/10',
     
    },
    {
      id: '4',
      title: 'Kalki 2898 A.D.',
      description:
        ' When the world is taken over by darkness. A force will rise.',
      director: 'Nag Ashwin',
      duration: '3hr 1min',
      imageUrl: 'images/kalki.png',
      rating: '9/10',
    
    },
    {
      id: '5',
      title: 'Ajogya',
      description: "Parna's crisis-ridden family has an unexpected guest - her stay-at-homehusband Raktim's confidante - Prosen Mitra. Will Prosen usher inhappiness, or will the middle-class couple descend into further chaos?",
      director: 'Kaushik Ganguly',
      duration: '2hr 6min',
      rating: '8.2/10',
      imageUrl: 'images/ajagya.png',
     
    },
    {
      id: '6',
      title: 'Inside Out 2',
      description: "Joy, Sadness, Anger, Fear and Disgust have been running a successful operation by all accounts. However, when Anxiety shows up, they aren't sure how to feel.",
      director: 'Kelsey Mann',
      duration: '1hr 36min',
      rating: '8/10',
      imageUrl: 'images/insiout.png',
     
    },
    {
      id: '7',
      title: 'Jaat & Juliet 3',
      description:
        'A battle of wits begins as Fateh joins the police force and meets his charming boss, Pooja, sparking a romantic comedy of unexpected twists. Will Pooja fall into Fateh`s honey trap, or will Cupid`s arrow lead to real love as they embark on an important mission in this rib-tickling affair?',
      director: 'Jagdeep Sindhu',
      duration: '2 hr 17min',
      rating: '14.6K are interested',
      imageUrl: 'images/jaat.png',
     
    },
    {
      id: '8',
      title: 'Despicable Me 4',
      description:
        " Gru welcomes a new member to the family, Gru Jr., who's intent on tormenting his dad. However, their peaceful existence crashes when criminal mastermind Maxime Le Mal escapes from prison and vows revenge against Gru.",
      director: 'Chris Renaud & Patrick Delage',
      duration: 'NA',
      imageUrl: 'images/desci.png',
      rating: '25.7K are interested',
      
    },
    {
      id: '9',
      title: 'Sarfira',
      description: 'An incredible story, set in the world of startups and aviation, Sarfira will inspire the common man to dream big and to chase your dreams even if the world calls you crazy.',
      director: 'Sudha Kongara Prasad',
      duration: 'NA',
      rating: '9.1K are interested',
      imageUrl: 'images/sar.png',
      
    },
    {
      id: '10',
      title: 'Veeda',
      description: 'It is the story of a young woman who fought back, steered, and championed by the one man she believed was her saviour, who became her weapon. It is the story of a man who found himself while helping Vedaa find justice.',
      director: 'Nikkhil Advani',
      duration: 'NA',
      rating: '14.7K are interested',
      imageUrl: 'images/vee.png',
     
    },
    {
      id: '11',
      title: 'A Quiet Place',
      description: 'Discover why our world went quiet.',
      director: 'John Krasinski',
      duration: 'NA',
      rating: '15.5K are interested',
      imageUrl: 'images/quiet.jpg',
      
    },
  ];
  searchMovies(searchTerm: string): any[] {
    if (!searchTerm) {
      return [];
    }
    
    return this.movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  private fetchMovies(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      movies => this.moviesSubject.next(movies),
     
      error => console.error('Error fetching movies', error)
    );
    //  headers:this.headers,
  }

  getMovies(): Observable<any[]> {
    return this.http.get<any>(`${'http://10.10.10.139/api/get_movie'}`);
  }

  getMovieById(id: string): Observable<any> {
    return this.http.get<any>(`${'http://10.10.10.139/api/get_movie'}/${id}`);
  }

  addMovie(movie: any): Observable<any> {
    return this.http.post<any>('http://10.10.10.139/api/add_movie', movie);
  }

  updateMovie(id: string, movie: any): Observable<any> {
    return this.http.put<any>(`${'http://10.10.10.139/api/edit_movie'}/${id}`, movie);
  }

  deleteMovie(id: string): Observable<any> {
    return this.http.delete<any>(`${'http://10.10.10.139/api/del_movie'}/${id}`);
  }
}
