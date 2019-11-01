export interface ISongsState {
  artists: IArtist[];
}

export interface IArtist {
  name: String;
  songs?: ISong[];
}

export interface ISong {
  name: String;
  year: Number;
  paragraphs: IParagraphs;
}

export interface IParagraphs {
  japanese: String[],
  romanji: String[],
  translation: String[],
}