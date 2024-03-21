import userData from '../userData.js';
import allSongs from '../db.js';
import renderSongs from '../renderSongs.js';
import sortSongs from '../sortSongs.js';
import highlightCurrentSong from '../handleControl/highlightCurrentSong.js';
import setPlayButtonAccessibleText from '../handleControl/setPlayButtonAccessibleText.js';

const playlistSongs = document.getElementById('playlist-songs');

const deleteSong = (id) => {
	if (userData?.currentSong?.id === id) {
		userData.currentSong = null;
		userData.songCurrentTime = 0;
		pauseSong();
		setPlayerDisplay();
	}

	userData.songs = userData?.songs.filter((song) => song.id !== id);

	renderSongs(userData?.songs);
	highlightCurrentSong();
	setPlayButtonAccessibleText();

	if (userData?.songs.length === 0) {
		const resetButton = document.createElement('button');
		const resetText = document.createTextNode('Reset Playlist');

		resetButton.id = 'reset';
		resetButton.ariaLabel = 'Reset playlist';
		resetButton.appendChild(resetText);
		playlistSongs.appendChild(resetButton);

		resetButton.addEventListener('click', () => {
			userData.songs = [...allSongs];

			renderSongs(sortSongs());
			setPlayButtonAccessibleText();
			resetButton.remove();
		});
	}
};

export default deleteSong;
