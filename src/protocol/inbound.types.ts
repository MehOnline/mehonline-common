import { GameAction } from '../main/action.types';

export enum InboundMessageTypes {
  Login = "login",

  MapRequestMapInfo = "requestMapInfo",
  MapDirectionMotion = "setDirectionMotion",
  MapMoveTo = "moveTo",
  MapAttack = "attack",

  ChatSendMessage = "chat:sendMessage"
}

export interface InboundMessage extends GameAction {
  type: InboundMessageTypes,
  payload: InboundMessagePayload
}

export interface InboundMessagePayload {}