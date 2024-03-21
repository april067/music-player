import allSongs from './js/db.js';
import userData from './js/userData.js';
import { playSong, pauseSong, playNextSong, playPreviousSong } from './js/controlSong.js';
import renderSongs from './js/renderSongs.js';
import sortSongs from './js/sortSongs.js';
import setPlayerDisplay from './js/handleControl/setPlayerDisplay.js';
import deleteSong from './js/commonControl/deleteSong.js';

renderSongs(sortSongs());

/*
Module creates a scope to avoid name collisions.
Or you can expose your function to the window object, that is not recommended.

window._playSong = playSong;


?????
document.querySelector('.playlist-song__info').addEventListener('click', playSong);
*/
window._playSong = playSong;
window._deleteSong = deleteSong;
