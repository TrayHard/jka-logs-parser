import { publicEncrypt } from "node:crypto";
import { colorRegEx } from "./colors";
import { Player } from "./players";
const colors = require('colors');

export enum EColors {
  '^1' = 'red',
  '^2' = 'yellow',
  '^3' = 'green',
  '^4' = 'blue',
  '^5' = 'cyan',
  '^6' = 'magenta',
  '^7' = 'white',
  '^8' = 'brightMagenta',
  '^9' = 'gray',
  '^0' = 'gray',
}

export class Nicknames {
  private nicknames: string[] = [];
  private connected: string[] = [];
  private entered: string[] = [];
  private left: string[] = [];
  private players: Player[] = [];
  private renames: string[] = [];

  findPlayerByNickname(name: string): Player {
    const result = this.players.find(player => player.hasName(name));
    if (!result) throw new Error('No such player');
    else return result;
  }

  getClearNickname(name: string): string {
    const matcher = name.match(colorRegEx);
    console.log('getclear'.blue.bold);
    console.log(name);
    console.log(matcher);
    // @ts-ignore
    if (!matcher) return name;
    const isStartedWithColor = name[0] == '^';
    console.log(isStartedWithColor);
    let basicString = isStartedWithColor ? '' : matcher[1];
    console.log(basicString);
    return matcher.reduce((acc, namePart) => {
      return acc + namePart.substr(2)
    }, basicString)
  }

  parseNickname(line: string) {
    const connectMatcher = line.match(/broadcast: print \"(.*) @@@PLCONNECT\\n\"$/);
    const renameMatcher = line.match(/broadcast: print \"(.*) @@@PLRENAME (.*)\\n\"$/);
    // broadcast: print "Ang�ich^7 @@@PLRENAME ^9TMDJ ^6| ^7Ang^5w^7i4\n"
    if (connectMatcher && connectMatcher[1]) {
      const name = this.getClearNickname(connectMatcher[1]);
      console.log(name);
      if (!this.nicknames.includes(name)) {
        this.nicknames.push(name);
        this.players.push(new Player(name));
      }
    }
    if (renameMatcher && renameMatcher[2]) {
      const oldName = this.getClearNickname(renameMatcher[1]);
      const newName = this.getClearNickname(renameMatcher[2]);
      this.renames.push(`${oldName}  =>  ${newName}`);
      console.log(oldName, newName);
      if (!this.nicknames.includes(oldName)) {
        this.nicknames.push(oldName);
      } else {
        try {
          const foundPlayer = this.findPlayerByNickname(oldName);
          console.log({ foundPlayer });
          foundPlayer.addName(newName);
        } catch (error) {
          // console.error(error);
        }
      }
    }
  }

  get nicknameList() {
    return this.nicknames;
  }

  get playersList() {
    // @ts-ignore
    return this.players.reduce((acc: Player[], player: Player, index: number) => {
      return [
        ...acc,
        {
          [`player${index}`]: player.allNicknames,
        }
      ]
    }, [] as Player[]);
  }

  get renamesList() {
    return this.renames;
  }
}