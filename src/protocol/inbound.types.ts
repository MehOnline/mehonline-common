import { GameAction } from "../main/action.types";

export enum InboundMessageTypes {
  Login = "login",

  MapRequestMapInfo = "requestMapInfo",
  MapDirectionMotion = "setDirectionMotion",
  MapMoveTo = "moveTo",
  MapAttack = "attack",

  ChatSendMessage = "chat:sendMessage",

  StatExpendPoints = "stat:expendPoints",
  StatResetAll = "stat:resetAll",

  InvListEquipment = "inv:listEquipment",
  InvListItems = "inv:listItems",
  InvMoveItem = "inv:moveItem",
  InvDropItem = "inv:dropItem",
  InvEquipItem = "inv:equipItem",
}

export interface InboundMessage extends GameAction {
  type: InboundMessageTypes;
  payload: InboundMessagePayload;
}

export interface InboundMessagePayload {
  x: number;
  y: number;
  direction: string;
  motion: string;
}
