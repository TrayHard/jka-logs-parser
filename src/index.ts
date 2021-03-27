import fs from 'fs';
import readline from 'readline';
import stream from 'stream';

import { IPlayer } from './models';
import { Nicknames } from './parsers/nicknames';
import { deepLog } from './utils/utils';

const filePath = './assets/17-Mar-2021.log';

const instream = fs.createReadStream(filePath);
const outstream = new stream();

// @ts-ignore
const rl = readline.createInterface(instream, outstream);

const parsers = {
  nicknames: new Nicknames(),
}

rl.on('line', (line) => {
  parsers.nicknames.parseNickname(line);
})

rl.on('close', () => {
  deepLog({
    nicknames: parsers.nicknames.nicknameList,
    players: parsers.nicknames.playersList,
    renames: parsers.nicknames.renamesList
  });
})
