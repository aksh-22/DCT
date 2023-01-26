export interface gameType {
  id: string;
  name: string;
  image: string;
}

export interface gameratesItemType {
  id: string;
  game: gameType;
  price: number;
}

export interface gameRatesType {
  gamerates: Array<gameratesItemType>;
}
