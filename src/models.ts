
export interface IPlayer {
  nicknames: string[],
  frags: number,
  died: TDeath[],
  chatMessages: string[],
  userinfos: string[],
  votes: TVote[],
  sabers: ESabers[],
}

export enum ESabers {
  'SINGLE' = 'SINGLE',
  'STAFF' = 'STAFF',
  'DUALS' = 'DUALS',
}

export type TVote = {
  isPassed: boolean,
  type: EVoteType,
  value: string,
}

export enum EVoteType {
  'FRAGLIMIT' = 'FRAGLIMIT',
  'TIMELIMIT' = 'TIMELIMIT',
  'OTHER' = 'OTHER',
}

export type TDeath = {
  reason: EDeathReason,
  killer?: string,
}

export enum EDeathReason {
  // popular
  'MOD_SABER' = 'MOD_SABER',
  'MOD_SUICIDE' = 'MOD_SUICIDE',
  'MOD_FALLING' = 'MOD_FALLING',
  'MOD_TRIGGER_HURT' = 'MOD_TRIGGER_HURT',
  //
  'MOD_UNKNOWN' = 'MOD_UNKNOWN',
  // weapons
  'MOD_BRYAR' = 'MOD_BRYAR',
  'MOD_BRYAR_ALT' = 'MOD_BRYAR_ALT',
  'MOD_BLASTER' = 'MOD_BLASTER',
  'MOD_BLASTER_ALT' = 'MOD_BLASTER_ALT',
  'MOD_DISRUPTOR' = 'MOD_DISRUPTOR',
  'MOD_SNIPER' = 'MOD_SNIPER',
  'MOD_BOWCASTER' = 'MOD_BOWCASTER',
  'MOD_BOWCASTER_ALT' = 'MOD_BOWCASTER_ALT',
  'MOD_REPEATER' = 'MOD_REPEATER',
  'MOD_REPEATER_ALT' = 'MOD_REPEATER_ALT',
  'MOD_DEMP2' = 'MOD_DEMP2',
  'MOD_DEMP2_ALT' = 'MOD_DEMP2_ALT',
  'MOD_FLECHETTE' = 'MOD_FLECHETTE',
  'MOD_FLECHETTE_ALT' = 'MOD_FLECHETTE_ALT',
  'MOD_ROCKET' = 'MOD_ROCKET',
  'MOD_ROCKET_ALT' = 'MOD_ROCKET_ALT',
  'MOD_THERMAL' = 'MOD_THERMAL',
  'MOD_THERMAL_ALT' = 'MOD_THERMAL_ALT',
  'MOD_DETPACK' = 'MOD_DETPACK',
  'MOD_LASERTRIP' = 'MOD_LASERTRIP',
  'MOD_LASERTRIP_ALT' = 'MOD_LASERTRIP_ALT',
  'MOD_MELEE' = 'MOD_MELEE',
  'MOD_SEEKER' = 'MOD_SEEKER',
  'MOD_FORCE_GRIP' = 'MOD_FORCE_GRIP',
  'MOD_EMPLACED' = 'MODEMPLACED',
  // world / generic
  'MOD_ELECTROCUTE' = 'MOD_ELECTROCUTE',
  'MOD_EXPLOSIVE' = 'MOD_EXPLOSIVE',
  'MOD_EXPLOSIVE_SPLASH' = 'MOD_EXPLOSIVE_SPLASH',
  'MOD_KNOCKOUT' = 'MOD_KNOCKOUT',
  'MOD_ENERGY' = 'MOD_ENERGY',
  'MOD_ENERGY_SPLASH' = 'MOD_ENERGY_SPLASH',
  'MOD_WATER' = 'MOD_WATER',
  'MOD_SLIME' = 'MOD_SLIME',
  'MOD_LAVA' = 'MOD_LAVA',
  'MOD_CRUSH' = 'MOD_CRUSH',
  'MOD_IMPACT' = 'MOD_IMPACT',
  'NUM_MODS' = 'NUM_MODS',
}

// export type TRound = {

// }

export type TLogObject = {
  players: IPlayer[],
  timesVisited: number,
  highlighted: string[],
  // rounds: TRound[],
  restarts: number,
}