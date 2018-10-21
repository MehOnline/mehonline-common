import { Player } from "../player/player.model";

export interface GameState {
  currentPlayer: Player,
  otherPlayers: Player[]
}

export interface Store {
  dispatch(params: any): any;
}