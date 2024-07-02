import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from '../services/Movie Service/movie.service';
import { FormsModule, NgModel } from '@angular/forms';


interface Movie {
  id:string;
  title: string;
  description:string;
  director:string;
  duration:string;
  rating: string;
  imageUrl: string;
}


@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink,FormsModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent{
  title = 'movie-app';
  featuredMovie: Movie = {
    id:'4',
    title: 'Kalki 2898 A.D.',
    description:'When the world is taken over by darkness. A force will rise.',
    director:'Nag Ashwin',
    duration:'3hr 1min',
    rating: '9/10',
    
    imageUrl: 'images/kalk.png'
  };
  searchTerm: string = '';
  searchResults: Movie[] = [];
  selectedMovie: Movie | null = null;
  searchMovies(): void {
    this.searchResults = this.movieService.searchMovies(this.searchTerm);
    this.selectedMovie = null;
  }

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
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
     
    }
  ]

  movie = [
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
  constructor(private router: Router,private movieService: MovieService) {}
  toggleDetails(movie: any) {
    this.router.navigate(['/movie:id']);
  }
}

export const moviesData = [
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
    title: 'Kalki 2898 AD',
    description:
      ' When the world is taken over by darkness. A force will rise.',
    director: 'Nag Ashwin',
    duration: '3hr 1min',
    imageUrl: 'images/kalki.png',
    rating: '779.2k are interested',
    
  },
  {
    id: '5',
    title: 'Ajogya',
    description: "Parna's crisis-ridden family has an unexpected guest - her stay-at-homehusband Raktim's confidante - Prosen Mitra. Will Prosen usher inhappiness, or will the middle-class couple descend into further chaos?",
    director: 'Kaushik Ganguly',
    duration: '2hr 6min',
    rating: '8.2/10',
    imageUrl: 'images/ajogyo.png',
  }, 
  {
    id: '6',
    title: 'Inside Out 2',
    description: "Joy, Sadness, Anger, Fear and Disgust have been running a successful operation by all accounts. However, when Anxiety shows up, they aren't sure how to feel.",
    director: 'Kelsey Mann',
    duration: '1hr 36min',
    rating: '8/10',
    imageUrl: 'images/inside out2.jpg',
    
  },
  {
    id: '12',
    title: 'A Strange By The Hill',
    description: "Mahi, A passionate young traveller, meets Angad, a young, charismatic teacher, in the beautiful hills of Manali. Instant sparks fly between them, leading to a passionate night of intimacy. But the fateful night soon unravels into a series of unforeseen incidents where Mahi finds herself trapped.",
    director: 'Munindar Kumar',
    duration: '1hr 40min',
    rating: '5/10',
    imageUrl: 'images/strange.jpg',
   
  },
  {
    id: '13',
    title: 'JNU : Jahangir National University',
    description: "An one educational university break the nation?",
     director: 'Vinay Sharma',
    duration: '2hr 32min',
    rating: '6.4/10',
    imageUrl: 'images/jnu.jpg',
  
  },
  {
    id: '14',
    title: 'Rockstar',
    description: "A Delhi boy resents the fact that he has no pain in his life. He has realized that all great Musicians have had a painful life. In order to get his heart broken, he proposes to the most sought-after girl in Delhi University. The story of `Rockstar` is the seven years of the boy`s life and relationship with the girl at the end of which he does become a huge musical star, but his heart also gets broken.",
    director: 'Imtiaz Ali',
    duration: '2hr 40min',
    rating: '9.3/10',
    imageUrl: 'images/rock.png',

  },
];
export const movieDatas = [
  {
    id: '7',
    title: 'Jaat & Juliet 3',
    description:
      'A battle of wits begins as Fateh joins the police force and meets his charming boss, Pooja, sparking a romantic comedy of unexpected twists. Will Pooja fall into Fateh`s honey trap, or will Cupid`s arrow lead to real love as they embark on an important mission in this rib-tickling affair?',
    director: 'Jagdeep Sindhu',
    duration: '2 hr 17min',
    rating: '14.6k are interested',
    imageUrl: 'images/jaat.png',
    releasing:'28th June, 2024',
  },
  {
    id: '8',
    title: 'Despicable Me 4',
    description:
      " Gru welcomes a new member to the family, Gru Jr., who's intent on tormenting his dad. However, their peaceful existence crashes when criminal mastermind Maxime Le Mal escapes from prison and vows revenge against Gru.",
    director: 'Chris Renaud & Patrick Delage',
    duration: 'NA',
    imageUrl: 'images/Despicable.jpg',
    rating: '25.7k are interested',
    releasing:'3rd July, 2024',
   
  },
  {
    id: '9',
    title: 'Sarfira',
    description: 'An incredible story, set in the world of startups and aviation, Sarfira will inspire the common man to dream big and to chase your dreams even if the world calls you crazy.',
    director: 'Sudha Kongara Prasad',
    duration: 'NA',
    rating: '9.1K are interested',
    imageUrl: 'images/Sarfira.jpg',
    releasing:'12th July, 2024',
   
  },
 {
  id: '10',
  title: 'Veeda',
  description: 'It is the story of a young woman who fought back, steered, and championed by the one man she believed was her saviour, who became her weapon. It is the story of a man who found himself while helping Vedaa find justice.',
  director: 'Nikkhil Advani',
  duration: 'NA',
  rating: '14.7K are interested',
  imageUrl: 'images/vedaa.png',
  releasing:'12th July, 2024',
  
},
{
  id: '11',
  title: 'A Quiet Place - Day One',
  description: 'Discover why our world went quiet.',
  director: 'John Krasinski',
  duration: 'NA',
  rating: '15.5K are interested',
  imageUrl: 'images/quiet.jpg',
  releasing:'28th June, 2024',
 
},
{
  id: '15',
  title: 'Accident or Conspiracy: Godhra',
  description: 'A student whose parents died in the Gujarat riots who receives an assignment on the same topic at his university. During his research, he meets everyone associated with the commission and tries to uncover various other aspects.',
  director: 'M. K. Shivaaksh',
  duration: 'NA',
  rating: '2.4K are interested',
  imageUrl: 'images/godhra.png',
  releasing:'12th July, 2024',
  
},
];
