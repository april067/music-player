import allSongs from './db.js';

let userData = {
	songs: [...allSongs],
	currentSong: null,
	songCurrentTime: 0,
};

export default userData;
