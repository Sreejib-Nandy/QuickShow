import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import { Heart, PlayCircleIcon, Star,ArrowRight } from 'lucide-react';
import timeCalculate from '../lib/TimeCalculate';
import BlurCircle from '../components/BlurCircle';
import DateSelect from '../components/DateSelect';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import toast from 'react-hot-toast';

const Moviedetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovie = () => {
      const data = dummyShowsData.find((item) => item._id === id);
      if (data) {
        setShow({
          movie: data,
          datetime: dummyDateTimeData
        });
      }
    };
    getMovie();
  }, [id]);

  const handleDate = () => {
    return toast('Please choose a date')
  }

  if (!show) {
    return <Loading/>;
  }

  const { movie, datetime } = show;

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-20 py-12 mt-28 max-md:mt-15 overflow-hidden'>
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <img
          src={movie.poster_path}
          alt="Poster"
          className='rounded-xl w-[250px] h-[370px] md:w-[320px] md:h-[450px] object-cover shadow-lg'
          onError={(e) => { e.target.src = '/fallback-image.jpg'; }}
        />
        <div className="text-white relative flex flex-col gap-4 max-w-xl">
          <BlurCircle top="0px" left="50px" />
          <p className='text-xl uppercase text-primary font-medium'>English</p>
          <h1 className='text-4xl font-bold leading-snug'>{movie.title}</h1>
          <div className="flex items-center gap-2">
            <Star className='fill-primary text-primary w-5 h-5' />
            <p className='text-md text-gray-200'>
              {movie.vote_average.toFixed(1)} User Rating
            </p>
          </div>
          <p className='text-gray-300 text-sm md:text-base leading-relaxed'>
            {movie.overview}
          </p>
          <p className='text-sm text-gray-100 font-medium'>
            {timeCalculate(movie.runtime)} • {movie.genres.map(g => g.name).join(', ')} • {new Date(movie.release_date).getFullYear()}
          </p>
          <div className="flex flex-wrap gap-4 mt-4 max-md:gap-2">
            <button className="flex items-center px-5 py-2 bg-gray-700 hover:bg-gray-800 transition rounded-lg text-sm font-medium max-md:px-3">
              <PlayCircleIcon className="w-5 h-5 mr-2" />
              Watch Trailer
            </button>
            <a href="#cast" onClick={handleDate} className="px-6 pt-3 bg-primary hover:bg-primary-dull transition rounded-lg text-sm font-medium max-md:px-4">
              Buy Tickets
            </a>
            <button className="p-3 bg-gray-600 rounded-full">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <p className='text-gray-300 font-medium text-lg mt-24 mb-4 max-md:text-base max-md:mt-15'>Movie Cast</p>
      <div id="cast" className='overflow-x-auto no-scrollbar'>
        <div className="flex items-center gap-5 w-max px-1 pb-2">
          {movie.casts.slice(0, 12).map((cast, index) => (
            <div key={index} className="flex flex-col items-center text-center min-w-[80px]">
              <img
                src={cast.profile_path}
                alt={cast.name}
                className='rounded-full h-20 w-20 md:h-24 md:w-24 object-cover'
                onError={(e) => { e.target.src = '/fallback-cast.jpg'; }}
              />
              <p className='text-xs md:text-sm text-white mt-2 font-medium truncate w-20'>{cast.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      <DateSelect datetime={datetime} id={id} />
      <div className='px-6 md:px-8 lg:px-16 xl:px-20 overflow-hidden py-10 max-md:py-0'>
       <div className="relative flex items-center justify-between pt-20 pb-5 pl-10 text-lg max-md:pl-0">
        <BlurCircle top='0' right='-40px'/>
        <p className='text-gray-300 font-medium max-md:text-sm text-lg'>You May Also Like</p>
        <button onClick={()=> {navigate('/movies')}} className='group flex items-center gap-2 pr-20 max-md:pr-0 text-sm max-md:text-sm text-gray-300 cursor-pointer'>View All 
          <ArrowRight className='w-4 h-4 group-hover:translate-x-0.5 transition'/>
        </button>
       </div>
       <div className=' flex flex-wrap max-sm: justify-center gap-8 mt-8'>
         {dummyShowsData.slice(0,4).map((show) => {
           return <MovieCard key={show._id} movie={show}/> 
         })}
       </div>
       <div className='flex justify-center mt-10 max-md:mt-0'>
         <button onClick={() => {scrollTo(0,0), navigate('/movies')}} className='px-10 py-3 text-md bg-primary hover:bg-primary-dull rounded-full transtion font-medium cursor-pointer max-md:px-5 max-md:text-sm my-5'>Show more</button>
       </div>
    </div>
    </div>
  );
};

export default Moviedetails;
