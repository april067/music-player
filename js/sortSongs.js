import userData from './userData.js';

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

	// ?????????????????????

	// userData?.songs.sort((a, b) => {
	// 	a.title.localeCompare(b.title);
	// });

	return userData?.songs;
};

export default sortSongs;
