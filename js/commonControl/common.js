import userData from '../userData.js';
import playSong from './playSong.js';
import pauseSong from './pauseSong.js';
import playNextSong from './playNextSong.js';
import playPreviousSong from './playPreviousSong.js';
import shuffle from './shuffle.js';
import getCurrentSongIndex from '../handleControl/getCurrentSongIndex.js';
import highlightCurrentSong from '../handleControl/highlightCurrentSong.js';
import setPlayerDisplay from '../handleControl/setPlayerDisplay.js';
import setPlayButtonAccessibleText from '../handleControl/setPlayButtonAccessibleText.js';

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const shuffleButton = document.getElementById('shuffle');

const audio = new Audio();

playButton.addEventListener('click', () => {
	if (!userData?.currentSong) {
		playSong(userData?.songs[0].id);
	} else {
		playSong(userData?.currentSong.id);
	}
});
pauseButton.addEventListener('click', pauseSong);
nextButton.addEventListener('click', playNextSong);
previousButton.addEventListener('click', playPreviousSong);
shuffleButton.addEventListener('click', shuffle);
audio.addEventListener('ended', () => {
	const currentSongIndex = getCurrentSongIndex();
	const nextSongExists = userData.songs.length - 1 > currentSongIndex ? true : false;

	if (nextSongExists) {
		playNextSong();
	} else {
		userData.currentSong = null;
		userData.songCurrentTime = 0;

		pauseSong();
		highlightCurrentSong();
		setPlayerDisplay();
		setPlayButtonAccessibleText();
	}
});

/*
how to track song time? 

audio.addEventListener('timeupdate', () => {
	const showTime = () => {
		let timerId = Math.floor(audio.currentTime);
		console.log(timerId);
	};
});
*/

export { playButton, pauseButton, nextButton, previousButton, shuffleButton, audio };
