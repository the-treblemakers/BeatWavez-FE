export const getAllSongs = async () => {
    const res = await fetch('https://beatwavez-dev.herokuapp.com/api/v1/songs/');
    const json = await res.json();

    const string = json.stringify();
    return string;
};
