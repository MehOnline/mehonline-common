import { Character } from "./character/character.model";
import { Chat } from "./chat/chat.model";
import { Keyboard } from "./keyboard/keyboard.model";

export interface Player{
  character: Character;
  keyboard: Keyboard;
  chat: Chat;
}