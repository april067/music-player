import allSongs from './js/db.js';
import renderSongs from './js/renderSongs.js';

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const shuffleButton = document.getElementById('shuffle');

const audio = new Audio();

let userData = {
	songs: [...allSongs],
	currentSong: null,
	songCurrentTime: 0,
};

const sortSongs = () => {
	userData?.songs.sort((a, b) => {
		if (a.title < b.title) {
			return -1;
		}

		if (a.title > b.title) {
			return 1;
		}

		return 0;
	});

	return userData?.songs;
};

renderSongs(sortSongs());

const playSong = (id) => {
	const song = userData?.songs.find((song) => song.id === id);
	audio.src = song.src;
	audio.title = song.title;

	//Before playing the song, you need to make sure it starts from the beginning.
	if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
		audio.currentTime = 0;
	} else {
		audio.currentTime = userData?.songCurrentTime;
	}

	userData.currentSong = song;
	playButton.classList.add('playing');

	audio.play();
};

playButton.addEventListener('click', () => {
	if (!userData?.currentSong) {
		playSong(userData?.songs[0].id);
	} else {
		playSong(userData?.currentSong.id);
	}
});
