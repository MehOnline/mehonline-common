import { GameAction } from '../main/action.types';

export enum OutboundMessageType {
  ClientError = "clientError",

  MapPlayerInfo = "playerInfo",
  MapOtherPlayers = "otherPlayers",
  MapEnemies = "enemies",
  MapEnemyUpdate = "enemyUpdate",
  MapPlayerUpdate = "playerUpdate",
  MapRemovePlayer = "removePlayer",

  ChatNewServerMessage = "chat:newServerMessage",
  ChatNewPrivateMessage = "chat:newPrivateMessage",
  ChatNewMessage = "chat:newMessage"
}

export interface OutboundMessage extends GameAction {
  type: OutboundMessageType,
  payload: OutboundMessagePayload
}

export interface OutboundMessagePayload {}