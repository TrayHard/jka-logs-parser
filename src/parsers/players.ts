import { ESabers, IPlayer, TDeath, TVote } from "../models";

export class Player {
  private nicknames: string[] = [];
  private frags: number = 0;
  private died: TDeath[] = [];
  private chatMessages: string[] = [];
  private userinfos: string[] = [];
  private votes: TVote[] = [];
  private sabers: ESabers[] = [];

  constructor(name: string) {
    this.nicknames.push(name);
  }

  hasName(name: string): boolean {
    return this.nicknames.includes(name);
  }

  addName(name: string) {
    if (this.nicknames.includes(name)) throw new Error('Nickname already exists');
    else this.nicknames.push(name);
  }

  get allNicknames(): string[] {
    return this.nicknames //.join('     ||||||||      ');
  }
}