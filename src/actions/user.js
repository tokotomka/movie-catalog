import axios from 'axios/index';
import * as types from '../constants';

export const switchAuthOn = userName => ({
  type: types.USERS_LOGIN_SUCCESS,
  userName,
});

export const authHasError = bool => ({
  type: types.AUTH_HAS_ERROR,
  hasError: bool,
});

export const login = user => (dispatch) => {
  axios.post('http://moviescatalog.herokuapp.com:3001/movie/users/login', user)
    .then(res => dispatch(switchAuthOn(res.data.userName)))
    .catch(() => dispatch(authHasError(true)));
};

export const logout = userName => ({
  type: types.USERS_LOGOUT,
  userName,
});

export const messegeFromDbErr = bool => ({
  type: types.MESSEGE_FROM_DB_ERR,
  mesHasErr: bool,
});


export const movieIsFavorite = bool => ({
  type: types.IS_FAVORITE_MOVIE,
  isFavoriteMovie: bool,
});

export const tvIsFavorite = bool => ({
  type: types.IS_FAVORITE_TV,
  isFavoriteTv: bool,
});

export const moviesFavoriteFetchDataSuccess = moviesFavorite => ({
  type: types.MOVIE_FAVORITE_FETCH_DATA_SUCCESS,
  moviesFavorite,
});

export const tvsFavoriteFetchDataSuccess = tvsFavorite => ({
  type: types.TV_FAVORITE_FETCH_DATA_SUCCESS,
  tvsFavorite,
});

export const addToFavoriteMovies = movie => (dispatch) => {
  axios.put('http://moviescatalog.herokuapp.com:3001/movie/users/addMovie', movie)
    .then(res => dispatch(movieIsFavorite(res.data.success)))
    .catch(() => alert('Something went wrong!'));
};

export const deleteFromFavoriteMovies = movie => (dispatch) => {
  axios.put('http://moviescatalog.herokuapp.com:3001/movie/users/deleteMovie', movie)
    .then(res => dispatch(movieIsFavorite(res.data.success)))
    .catch(res => console.log(res.data));
};

export const addToFavoriteTvs = tv => (dispatch) => {
  axios.put('http://moviescatalog.herokuapp.com:3001/movie/users/addTv', tv)
    .then(res => dispatch(tvIsFavorite(res.data.success)))
    .catch(res => console.log(res.data));
};

export const deleteFromFavoriteTvs = tv => (dispatch) => {
  axios.put('http://moviescatalog.herokuapp.com:3001/movie/users/deleteTv', tv)
    .then(res => dispatch(tvIsFavorite(res.data.success)))
    .catch(res => console.log(res.data));
};

export const checkMovie = movie => (dispatch) => {
  axios.post('http://moviescatalog.herokuapp.com:3001/movie/users/checkMovie', movie)
    .then(res => dispatch(movieIsFavorite(res.data.isChecked)))
    .catch(() => dispatch(messegeFromDbErr(true)));
};

export const checkTv = tv => (dispatch) => {
  axios.post('http://localhost:3001/movie/users/checkTv', tv)
    .then(res => dispatch(tvIsFavorite(res.data.isChecked)))
    .catch(() => dispatch(messegeFromDbErr(true)));
};

export const findFavoriteMovies = userName => (dispatch) => {
  axios.post('http://moviescatalog.herokuapp.com:3001/movie/users/movies', userName)
    .then(res => dispatch(moviesFavoriteFetchDataSuccess(res.data.user[0].movies)));
};

export const findFavoriteTvs = userName => (dispatch) => {
  axios.post('http://moviescatalog.herokuapp.com:3001/movie/users/tvs', userName)
    .then(res => dispatch(tvsFavoriteFetchDataSuccess(res.data.user[0].tvs)));
};
