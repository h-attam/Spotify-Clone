import { renderSongs } from "./ui.js";


const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '36adc9c89cmsh9a29989a171b9afp13b519jsn97cd3c63fb9f',
    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
  }
};

//* API isteklerini yönettiğimiz class yapısı
export class API {
  constructor() {
    this.songs = [];
  }
  //* Popüler müzikleri getirir
  async getPopular() {
    const res = await fetch(url, options);
    const data = await res.json();
    //* API'den aldığımız şarkıları song dizisine aktartdık
    this.songs = data.tracks;
    //* Ekrana popüler müzikleri aktaracak fonksiyona songs dizisini parametre olarak gönderdik
    renderSongs(this.songs);
  }
  //* Arama methodu
  async searchMusic(query) {
    const res = await fetch(
      `https://spotify23.p.rapidapi.com/search?term=${query}&locale=tr-TR`,
      options
    );
    const data = await res.json();
    console.log(data);
    // Veriyi istediğimiz hale çevirme
    // song.track yerine song'a erişme
    let newData = data.tracks.hits;

    newData = newData.map((song) => ({ ...song.track }));
    this.songs = newData;
    console.log(this.songs);
    // aratılan şarkıları ekrana basma
    renderSongs(this.songs);
  }
}