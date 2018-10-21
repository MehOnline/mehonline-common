import { GameAction } from "./mehonline.actions";
import { GameState } from "./mehonline.model";

export function MehOnlineReducer(state: GameState = getDefaultGameState(), action: GameAction){

  switch (action.type){

  }
}

function getDefaultGameState(): GameState{
  return {
    currentPlayer: null,
    otherPlayers: []
  }
}