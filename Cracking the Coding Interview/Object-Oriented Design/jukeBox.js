// Design a musical jukebox with OOD

function Box(){
  this.cds = [];
  this.playQueue = [];
  this.currentCd = cds[0];
  this.currentSong = [this.currentCd[0]];
  this.addSongToQueue = playeQueue.push(currentSong);
  this.playSong = function(currentSong){};
};

function Cd(artist, songs) {
  this.songs = [songs];
  this.artist = artist;

};

function Song(music) {
  this.music = music;
};

function User(name){
  this.name = name;
  this.chooseCD = function() {};
  this.chooseSong = function() {};
  this.playSong = function(box) {box.playSong();}
  this.addToQueue = function(box) {box.addSongtoQueue();}
}