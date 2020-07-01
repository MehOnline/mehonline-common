import { GameAction } from "../main/action.types";

export enum OutboundMessageTypes {
  ClientError = "clientError",

  MapPlayerInfo = "playerInfo",
  MapOtherPlayers = "otherPlayers",
  MapEnemies = "enemies",
  MapEnemyUpdate = "enemyUpdate",
  MapPlayerUpdate = "playerUpdate",
  MapRemovePlayer = "removePlayer",

  ChatNewServerMessage = "chat:newServerMessage",
  ChatNewPrivateMessage = "chat:newPrivateMessage",
  ChatNewMessage = "chat:newMessage",

  InvInventoryUpdated = "inv:inventoryUpdated",
}

export interface OutboundMessage extends GameAction {
  type: OutboundMessageTypes;
  payload: OutboundMessagePayload;
}

export interface OutboundMessagePayload {
  id: number;
  x: number;
  y: number;
  direction: string;
  motion: string;

  enemyType?: string;

  map?: string;
  hp?: number;
  maxHp?: number;
  mp?: number;
  maxMp?: number;
  lvl?: number;
  exp?: number;
  expToNextLvl?: number;

  attributePoints?: number;
  strength?: number;
  intellect?: number;
  agility?: number;
}
