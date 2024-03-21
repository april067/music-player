import userData from './userData.js';
import renderSongs from './renderSongs.js';
import getCurrentSongIndex from './handleControl/getCurrentSongIndex.js';
import highlightCurrentSong from './handleControl/highlightCurrentSong.js';
import setPlayButtonAccessibleText from './handleControl/setPlayButtonAccessibleText.js';
import setPlayerDisplay from './handleControl/setPlayerDisplay.js';

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const shuffleButton = document.getElementById('shuffle');

const audio = new Audio();

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
	highlightCurrentSong();
	setPlayerDisplay();
	setPlayButtonAccessibleText();
};

const pauseSong = () => {
	userData.songCurrentTime = audio.currentTime;
	playButton.classList.remove('playing');

	audio.pause();
};

const playNextSong = () => {
	if (userData?.currentSong === null) {
		playSong(userData?.songs[0].id);
	} else {
		const currentSongIndex = getCurrentSongIndex();
		const nextSong = userData?.songs[currentSongIndex + 1];

		// console.log(currentSongIndex);
		// console.log(userData?.songs[currentSongIndex].title);
		// console.log(userData?.currentSong);

		playSong(nextSong.id);
	}
};

const playPreviousSong = () => {
	if (userData?.currentSong === null) {
		return;
	} else {
		const currentSongIndex = getCurrentSongIndex();
		const previousSong = userData.songs[currentSongIndex - 1];

		playSong(previousSong.id);
	}
};

const shuffle = () => {
	userData?.songs.sort(() => Math.random() - 0.5);
	userData.currentSong = null;
	userData.songCurrentTime = 0;

	renderSongs(userData?.songs);
	pauseSong();
	setPlayerDisplay();
	setPlayButtonAccessibleText();
};

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

export { playSong, pauseSong, playNextSong, playPreviousSong };

// refactoring
// destruction userData !!!!!
//const firstSong = userData?.songs[0]
// index.js for controlSingsFunctions and separate folder for them
