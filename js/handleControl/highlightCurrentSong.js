import userData from '../userData.js';

const highlightCurrentSong = () => {
	const playlistSongElements = document.querySelectorAll('.playlist-song');
	const songToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`);

	playlistSongElements.forEach((songEl) => {
		songEl.removeAttribute('aria-current');
	});
	if (songToHighlight) {
		songToHighlight.setAttribute('aria-current', 'true');
	}
};

export default highlightCurrentSong;
