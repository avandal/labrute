import { Gender, PetName } from '@labrute/prisma';
import { PETS_TOTAL_ODDS } from './brute/pets';
import { SKILLS_TOTAL_ODDS } from './brute/skills';
import { WEAPONS_TOTAL_ODDS, WeaponAnimations } from './brute/weapons';

export const FIGHTS_PER_DAY = 6;

export const ARENA_OPPONENTS_COUNT = 6;
export const ARENA_OPPONENTS_MAX_GAP = 2;

export const BRUTE_STARTING_POINTS = 11;
export const PERKS_TOTAL_ODDS = WEAPONS_TOTAL_ODDS + PETS_TOTAL_ODDS + SKILLS_TOTAL_ODDS;

export const SHIELD_BLOCK_ODDS = 0.45;
export const BARE_HANDS_TEMPO = 1.2;

export const Animations = [
  'arrive-end', 'arrive-start', 'attack', 'block', 'death', 'drink', 'eat',
  'equip', 'evade', 'grab', 'grabbed', 'hit', 'hit-0', 'hit-1', 'hit-2',
  'idle', 'launch', 'monk-loop', 'monk-start', 'prepare-throw', 'run',
  'stolen', 'steal', 'strengthen', 'throw', 'train', 'trapped-loop', 'trapped-start',
  'trash', 'win', ...WeaponAnimations,
] as const;
export type Animation = typeof Animations[number];

export const ANIMATION_ANCHORS: Record<Gender, Record<Animation, [number, number]>> = {
  male: {
    'arrive-end': [0.4354, 0.7682],
    'arrive-start': [0.4354, 0.7682],
    attack: [0, 0],
    block: [0.5183, 0.7248],
    death: [0.4749, 0.7416],
    drink: [0.4486, 0.7849],
    eat: [0.521, 0.8705],
    equip: [0.4593, 0.7407],
    evade: [0.5648, 0.9075],
    grab: [0.4134, 0.7902],
    grabbed: [0.5127, 0.7192],
    hit: [0, 0],
    'hit-0': [0.516, 0.8253],
    'hit-1': [0.4859, 0.7536],
    'hit-2': [0.4851, 0.669],
    idle: [0.4946, 0.7951],
    launch: [0.4206, 0.7859],
    'monk-loop': [0.5349, 0.7462],
    'monk-start': [0.5349, 0.7462],
    'prepare-throw': [0.6319, 0.7293],
    run: [0.5292, 0.8688],
    slash: [0.3249, 0.8274],
    stolen: [0.5138, 0.7995],
    steal: [0.4558, 0.7632],
    strengthen: [0.4292, 0.8274],
    throw: [0.3148, 0.6127],
    train: [0.4615, 0.821],
    'trapped-loop': [0.4191, 0.6905],
    'trapped-start': [0.4191, 0.6905],
    trash: [0.5189, 0.7276],
    win: [0.4851, 0.7744],
    fist: [0.348, 0.7338],
    estoc: [0.5178, 0.7592],
    whip: [0.2692, 0.8253],
  },
  female: {
    'arrive-end': [0.4833, 0.7799],
    'arrive-start': [0.4833, 0.7799],
    attack: [0, 0],
    block: [0.5069, 0.848],
    death: [0.4785, 0.7884],
    drink: [0.4921, 0.8572],
    eat: [0.5247, 0.8536],
    equip: [0.5062, 0.8565],
    evade: [0.468, 0.8756],
    grab: [0.4595, 0.848],
    grabbed: [0.5105, 0.8112],
    hit: [0.4857, 0.8805],
    'hit-0': [0, 0],
    'hit-1': [0, 0],
    'hit-2': [0, 0],
    idle: [0.5042, 0.8539],
    launch: [0.4587, 0.7707],
    'monk-loop': [0.4473, 0.7648],
    'monk-start': [0.4473, 0.7648],
    'prepare-throw': [0.4949, 0.8444],
    run: [0.4658, 0.8302],
    slash: [0.3638, 0.8239],
    stolen: [0.5069, 0.8423],
    steal: [0.4722, 0.8324],
    strengthen: [0.5296, 0.848],
    throw: [0.4346, 0.8368],
    train: [0.5041, 0.8536],
    'trapped-loop': [0.3751, 0.7226],
    'trapped-start': [0.3751, 0.7226],
    trash: [0.5265, 0.8742],
    win: [0.5062, 0.9025],
    fist: [0.4602, 0.7459],
    estoc: [0.4878, 0.8508],
    whip: [0.2064, 0.848],
  },
};

export const WEAPON_ANCHOR = {
  x: 0.1244,
  y: 0.14,
} as const;

export const WEAPON_ANIMATIONS: Record<Gender, Record<Animation, ({
  anchor: [number, number];
  rotation: number;
  behind?: boolean;
} | null)[]>> = {
  male: {
    'arrive-end': [],
    'arrive-start': [],
    attack: [],
    block: [
      { anchor: [19.2, -17.5], rotation: -14.7 },
      { anchor: [17.8, -17.5], rotation: -21.5 },
      { anchor: [13.1, -18.3], rotation: -42.3 },
      { anchor: [7.3, -19.2], rotation: -69.3 },
      { anchor: [7.3, -19.2], rotation: -69.3 },
      { anchor: [7.3, -19.2], rotation: -69.3 },
      { anchor: [7.3, -19.2], rotation: -69.3 },
      { anchor: [7.3, -19.2], rotation: -69.3 },
      { anchor: [7.3, -19.2], rotation: -69.3 },
      { anchor: [7.3, -19.2], rotation: -69.3 },
      { anchor: [7.3, -19.2], rotation: -69.3 },
      { anchor: [7.5, -18.5], rotation: -63.5 },
      { anchor: [9.1, -18.7], rotation: -56.7 },
      { anchor: [10.8, -18], rotation: -51.7 },
      { anchor: [11.3, -18], rotation: -45 },
      { anchor: [12.6, -17.8], rotation: -41.3 },
      { anchor: [13.6, -17.8], rotation: -37.7 },
      { anchor: [15.2, -17.8], rotation: -32.3 },
      { anchor: [15.9, -18], rotation: -28.7 },
      { anchor: [16.9, -17.8], rotation: -24.2 },
      { anchor: [17.8, -17.5], rotation: -21.1 },
      { anchor: [18.5, -17.5], rotation: -17 },
      { anchor: [19.2, -17.8], rotation: -14.7 },
    ],
    death: [
      { anchor: [16.6, -11.9], rotation: -13.8 },
      { anchor: [16.6, -11.9], rotation: -13.8 },
      { anchor: [16.6, -11.9], rotation: -13.8 },
      { anchor: [16.6, -11.9], rotation: -13.8 },
      { anchor: [16.6, -11.7], rotation: -13.8 },
      { anchor: [16.9, -11.7], rotation: -13.8 },
      { anchor: [17.1, -12.2], rotation: -13.8 },
      { anchor: [17.4, -12.2], rotation: -13.8 },
      { anchor: [17.1, -11.1], rotation: -13.8 },
      { anchor: [17.6, -10.9], rotation: -13.8 },
      { anchor: [17.8, -11], rotation: -13.8 },
      { anchor: [18.1, -9.9], rotation: -13.8 },
      { anchor: [19.2, -10.6], rotation: -13.8 },
      { anchor: [20, -11.7], rotation: -13.8 },
      { anchor: [20.7, -12.8], rotation: -13.8 },
      { anchor: [21.9, -14.2], rotation: -13.8 },
      { anchor: [21.9, -13], rotation: -13.8 },
      { anchor: [22.1, -11.5], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
      { anchor: [22.1, -9.4], rotation: -13.8, behind: true },
    ],
    drink: [
      { anchor: [19, -21.1], rotation: -14.3 },
      { anchor: [18.3, -21.8], rotation: -14.3 },
      { anchor: [16.9, -21.6], rotation: -14.3 },
      { anchor: [15.9, -20.9], rotation: -16.5 },
      { anchor: [13.1, -19.4], rotation: -16.5, behind: true },
      { anchor: [13.3, -19.4], rotation: -16.5, behind: true },
      { anchor: [13.3, -19.4], rotation: -16.5, behind: true },
      { anchor: [13.3, -19.4], rotation: -16.5, behind: true },
      { anchor: [13.6, -19], rotation: -16.5, behind: true },
      { anchor: [13.6, -19], rotation: -16.5, behind: true },
      { anchor: [13.1, -19], rotation: -16.5, behind: true },
      { anchor: [13.1, -19], rotation: -16.5, behind: true },
      { anchor: [12.6, -19], rotation: -16.5, behind: true },
      { anchor: [12.4, -19.4], rotation: -16.5, behind: true },
      { anchor: [12.4, -19.4], rotation: -16.5, behind: true },
      { anchor: [12.4, -19.4], rotation: -16.5, behind: true },
      { anchor: [12.4, -19.4], rotation: -16.5, behind: true },
      { anchor: [12.4, -19.4], rotation: -16.5, behind: true },
      { anchor: [11.3, -20.9], rotation: -19.7, behind: true },
      { anchor: [10.8, -21.6], rotation: -25.6, behind: true },
      { anchor: [9.6, -23], rotation: -31, behind: true },
      { anchor: [10.1, -23], rotation: -32.3, behind: true },
      { anchor: [10.1, -23.3], rotation: -32.8, behind: true },
      { anchor: [10.1, -23.3], rotation: -32.8, behind: true },
      { anchor: [10.5, -24.2], rotation: -35.9, behind: true },
      { anchor: [9.9, -23.5], rotation: -35.9, behind: true },
      { anchor: [9.9, -23.5], rotation: -34.1, behind: true },
      { anchor: [9.9, -23.5], rotation: -32.3, behind: true },
      { anchor: [9.9, -23.5], rotation: -31, behind: true },
      { anchor: [9.9, -23.5], rotation: -28.7, behind: true },
      { anchor: [10.1, -23], rotation: -32.3, behind: true },
      { anchor: [10.1, -23.3], rotation: -32.8, behind: true },
      { anchor: [10.1, -23.3], rotation: -32.8, behind: true },
      { anchor: [10.5, -24.2], rotation: -35.9, behind: true },
      { anchor: [9.9, -23.5], rotation: -35.9, behind: true },
      { anchor: [9.9, -23.5], rotation: -34.1, behind: true },
      { anchor: [9.9, -23.5], rotation: -32.3, behind: true },
      { anchor: [9.9, -23.5], rotation: -31, behind: true },
      { anchor: [9.9, -23.5], rotation: -28.7, behind: true },
      { anchor: [10.1, -23], rotation: -32.3, behind: true },
      { anchor: [10.1, -23.3], rotation: -32.8, behind: true },
      { anchor: [10.1, -23.3], rotation: -32.8, behind: true },
      { anchor: [10.5, -24.2], rotation: -35.9, behind: true },
      { anchor: [9.9, -23.5], rotation: -35.9, behind: true },
      { anchor: [9.9, -23.5], rotation: -34.1, behind: true },
      { anchor: [9.9, -23.5], rotation: -32.3, behind: true },
      { anchor: [9.9, -23.5], rotation: -31, behind: true },
      { anchor: [9.9, -23.5], rotation: -28.7, behind: true },
    ],
    eat: [
      { anchor: [18.5, -23.3], rotation: -14.7 },
      { anchor: [17.1, -17.1], rotation: -31 },
      { anchor: [15.2, -11.2], rotation: -45.4 },
      { anchor: [14, -5.7], rotation: -54.9 },
      { anchor: [12.6, -6.8], rotation: -54.9 },
      { anchor: [11.9, -9.2], rotation: -54.9 },
      { anchor: [10.8, -10.4], rotation: -54.9 },
      { anchor: [10, -11.9], rotation: -54.9 },
      { anchor: [11.1, -10.7], rotation: -54.9 },
      { anchor: [11.5, -9], rotation: -54.9 },
      { anchor: [12.4, -7.1], rotation: -54.9 },
      { anchor: [13.8, -5.9], rotation: -54.9 },
      { anchor: [13.8, -5.9], rotation: -54.9 },
      { anchor: [13.8, -5.9], rotation: -54.9 },
      { anchor: [13.8, -5.9], rotation: -54.9 },
      { anchor: [13.8, -5.9], rotation: -54.9 },
    ],
    equip: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      { anchor: [18.1, -53.7], rotation: -94.6 },
      { anchor: [18.5, -51.6], rotation: -88.3 },
      { anchor: [19.2, -45.2], rotation: -79.7 },
      { anchor: [20, -35.4], rotation: -55.3 },
      { anchor: [19.2, -25.4], rotation: -35 },
      { anchor: [18.8, -19.4], rotation: -18.3 },
      { anchor: [18.8, -17.8], rotation: -15.2 },
    ],
    evade: [
      { anchor: [20, -50.2], rotation: -66.6 },
    ],
    grab: [
      { anchor: [8.2, -24.9], rotation: -56.2, behind: true },
      { anchor: [8, -24.7], rotation: -56.2, behind: true },
      { anchor: [8, -24.7], rotation: -56.2, behind: true },
      { anchor: [8, -23.5], rotation: -56.2, behind: true },
      { anchor: [8, -22.3], rotation: -56.2, behind: true },
      { anchor: [8, -23.3], rotation: -56.2, behind: true },
      { anchor: [8, -24], rotation: -56.2, behind: true },
      { anchor: [8, -25.2], rotation: -56.2, behind: true },
    ],
    grabbed: [
      { anchor: [19.5, -17.5], rotation: -14.7 },
      { anchor: [19.2, -17.5], rotation: -20.6 },
      { anchor: [15.9, -18.5], rotation: -46.8 },
      { anchor: [9.6, -19], rotation: -86, behind: true },
      { anchor: [9.6, -19], rotation: -84.2, behind: true },
      { anchor: [9.9, -19], rotation: -84.2, behind: true },
      { anchor: [10.6, -19], rotation: -81, behind: true },
      { anchor: [11, -17.8], rotation: -77, behind: true },
    ],
    hit: [],
    'hit-0': [
      { anchor: [18.5, -20.9], rotation: -28.7 },
      { anchor: [17.4, -26.1], rotation: -54.9 },
      { anchor: [14.3, -31.8], rotation: -80.6 },
      { anchor: [10.5, -33.3], rotation: -84.7 },
      { anchor: [7.3, -34.4], rotation: -88.3 },
      { anchor: [6.6, -34.9], rotation: -88.7 },
      { anchor: [5.9, -34.7], rotation: -88.3 },
      { anchor: [5.4, -34.9], rotation: -88.3 },
      { anchor: [4.7, -34.9], rotation: -88.3 },
      { anchor: [4.7, -35.7], rotation: -88.3 },
      { anchor: [4.2, -35.4], rotation: -88.3 },
      { anchor: [9.4, -24.9], rotation: -62.6 },
      { anchor: [14.7, -14.4], rotation: -29.2 },
      { anchor: [14.7, -14.4], rotation: -29.2 },
      { anchor: [14.7, -14.4], rotation: -29.2 },
    ],
    'hit-1': [
      { anchor: [17.1, -18.0], rotation: -12.9 },
      { anchor: [12.4, -18.5], rotation: -17.0 },
      { anchor: [4.7, -19.4], rotation: -24.7 },
      { anchor: [5.4, -19.4], rotation: -24.7 },
      { anchor: [6.6, -19.2], rotation: -23.2 },
      { anchor: [8.0, -19.2], rotation: -21.5 },
      { anchor: [9.9, -18.3], rotation: -21.5 },
      { anchor: [12.4, -18.3], rotation: -18.3 },
      { anchor: [15.7, -18.0], rotation: -17.0 },
      { anchor: [19.0, -17.3], rotation: -14.7 },
    ],
    'hit-2': [
      { anchor: [17.1, -19.2], rotation: -11.6 },
      { anchor: [11.0, -20.2], rotation: -4.9 },
      { anchor: [0.5, -21.4], rotation: 4.1, behind: true },
      { anchor: [-1.5, -20.2], rotation: 9.5, behind: true },
      { anchor: [-5, -20.2], rotation: 26.7, behind: true },
      { anchor: [-7.9, -17.1], rotation: 45.1, behind: true },
      { anchor: [-6.5, -17.8], rotation: 38.4, behind: true },
      { anchor: [-6.5, -17.8], rotation: 37, behind: true },
      { anchor: [-4.6, -17.5], rotation: 34.8, behind: true },
      { anchor: [-2.2, -17.8], rotation: 27.2, behind: true },
      { anchor: [0.7, -17.8], rotation: 23.1, behind: true },
      { anchor: [4, -18.3], rotation: 15.1, behind: true },
      { anchor: [8.7, -18.7], rotation: 5.9 },
      { anchor: [13.1, -18.7], rotation: -2.7 },
      { anchor: [18.5, -19.2], rotation: -13.4 },
    ],
    idle: [
      { anchor: [17.8, -18.9], rotation: -15.2 },
      { anchor: [17.8, -18.9], rotation: -15.2 },
      { anchor: [17.8, -18.9], rotation: -15.2 },
      { anchor: [17.8, -18.9], rotation: -15.2 },
      { anchor: [17.6, -19], rotation: -15.2 },
      { anchor: [17.8, -19], rotation: -15.2 },
      { anchor: [17.8, -19], rotation: -15.2 },
      { anchor: [17.8, -19], rotation: -15.2 },
      { anchor: [17.8, -19], rotation: -15.2 },
      { anchor: [17.8, -19], rotation: -15.2 },
      { anchor: [17.8, -19], rotation: -15.2 },
      { anchor: [17.8, -19], rotation: -15.2 },
      { anchor: [17.8, -19], rotation: -15.2 },
      { anchor: [16.9, -19.5], rotation: -15.2 },
      { anchor: [16.9, -19.5], rotation: -15.2 },
      { anchor: [16.9, -19.5], rotation: -15.2 },
      { anchor: [16.9, -19.5], rotation: -15.2 },
      { anchor: [16.9, -19.5], rotation: -15.2 },
      { anchor: [16.9, -19.5], rotation: -15.2 },
      { anchor: [16.9, -19.5], rotation: -15.2 },
      { anchor: [16.6, -19.7], rotation: -15.2 },
      { anchor: [16.6, -19.7], rotation: -15.2 },
      { anchor: [16.6, -19.7], rotation: -15.2 },
      { anchor: [16.6, -19.7], rotation: -15.2 },
      { anchor: [16.6, -19.7], rotation: -15.2 },
      { anchor: [16.6, -19.7], rotation: -15.2 },
      { anchor: [16.9, -19.7], rotation: -15.2 },
      { anchor: [17.2, -19.7], rotation: -15.2 },
      { anchor: [17.4, -19.7], rotation: -15.2 },
      { anchor: [17.6, -19.7], rotation: -15.2 },
      { anchor: [17.6, -19.7], rotation: -15.2 },
      { anchor: [17.9, -20], rotation: -15.2 },
      { anchor: [18.2, -20], rotation: -15.2 },
      { anchor: [18.4, -19.6], rotation: -15.2 },
      { anchor: [18.6, -19.6], rotation: -15.2 },
      { anchor: [18.6, -19.6], rotation: -15.2 },
      { anchor: [18.6, -19.6], rotation: -15.2 },
      { anchor: [18.6, -19.4], rotation: -15.2 },
      { anchor: [18.8, -19.4], rotation: -15.2 },
    ],
    launch: [
      { anchor: [18.5, -22.5], rotation: -15.6 },
      { anchor: [16.9, -22.5], rotation: -15.6 },
      { anchor: [14, -22.8], rotation: -15.6 },
      { anchor: [9.6, -24.2], rotation: -15.6, behind: true },
      { anchor: [9.6, -24.2], rotation: -15.6, behind: true },
      { anchor: [9.6, -24.2], rotation: -15.6, behind: true },
      { anchor: [9.1, -24.2], rotation: -15.6, behind: true },
      { anchor: [8.7, -24.2], rotation: -15.6, behind: true },
      { anchor: [8, -24.2], rotation: -15.6, behind: true },
      { anchor: [8.9, -24.2], rotation: -15.6, behind: true },
      { anchor: [9.4, -24.2], rotation: -15.6, behind: true },
      { anchor: [10.5, -24.2], rotation: -15.6, behind: true },
      { anchor: [12.4, -23.7], rotation: -15.6 },
      { anchor: [14.3, -23.7], rotation: -15.6 },
      { anchor: [16.4, -23.7], rotation: -15.6 },
      { anchor: [18.5, -23], rotation: -15.6 },
    ],
    'monk-loop': [
      { anchor: [18.5, -33], rotation: -19.7 },
      { anchor: [18.3, -33], rotation: -19.7 },
      { anchor: [18.1, -33], rotation: -19.7 },
      { anchor: [18.1, -33], rotation: -19.7 },
      { anchor: [17.9, -33], rotation: -19.7 },
      { anchor: [17.7, -33], rotation: -19.7 },
      { anchor: [17.6, -33], rotation: -19.7 },
      { anchor: [17.6, -33], rotation: -19.7 },
      { anchor: [17.6, -33], rotation: -19.7 },
      { anchor: [17.6, -33], rotation: -19.7 },
      { anchor: [17.6, -33], rotation: -19.7 },
      { anchor: [17.6, -33], rotation: -19.7 },
      { anchor: [17.4, -33.3], rotation: -19.7 },
      { anchor: [17.4, -33.3], rotation: -19.7 },
      { anchor: [17.3, -33.3], rotation: -19.7 },
      { anchor: [17.0, -33.3], rotation: -19.7 },
      { anchor: [16.6, -33.3], rotation: -19.7 },
      { anchor: [16.6, -33.3], rotation: -19.7 },
      { anchor: [16.6, -33.3], rotation: -19.7 },
      { anchor: [16.4, -33.3], rotation: -19.7 },
      { anchor: [16.4, -33.3], rotation: -19.7 },
      { anchor: [16.4, -33.3], rotation: -19.7 },
      { anchor: [16.2, -33.3], rotation: -19.7 },
      { anchor: [16.1, -33.3], rotation: -19.7 },
      { anchor: [15.9, -33.3], rotation: -19.7 },
      { anchor: [15.9, -33.3], rotation: -19.7 },
      { anchor: [15.8, -33.3], rotation: -19.7 },
      { anchor: [15.7, -33.3], rotation: -19.7 },
      { anchor: [15.9, -33.3], rotation: -19.2 },
      { anchor: [15.9, -33.3], rotation: -19.2 },
      { anchor: [15.9, -33.3], rotation: -19.2 },
      { anchor: [16.2, -33.3], rotation: -19.2 },
      { anchor: [16.2, -33.3], rotation: -19.2 },
      { anchor: [16.9, -33.3], rotation: -19.2 },
      { anchor: [16.9, -33.3], rotation: -19.2 },
      { anchor: [16.9, -33.3], rotation: -19.2 },
      { anchor: [16.9, -33.3], rotation: -19.2 },
      { anchor: [16.9, -33.3], rotation: -19.2 },
      { anchor: [17.4, -33.3], rotation: -19.2 },
      { anchor: [17.4, -33.3], rotation: -19.2 },
      { anchor: [17.4, -33.3], rotation: -19.2 },
      { anchor: [17.8, -33.3], rotation: -19.2 },
      { anchor: [17.8, -33.3], rotation: -19.2 },
      { anchor: [18.1, -33.3], rotation: -19.2 },
      { anchor: [18.3, -33.3], rotation: -19.2 },
      { anchor: [18.3, -33.3], rotation: -19.2 },
      { anchor: [18.3, -33.3], rotation: -19.2 },
      { anchor: [18.8, -33.3], rotation: -19.2 },
      { anchor: [18.8, -33.3], rotation: -19.2 },
      { anchor: [18.8, -33.3], rotation: -19.2 },
      { anchor: [18.8, -33.3], rotation: -19.2 },
      { anchor: [18.8, -33.3], rotation: -19.2 },
      { anchor: [18.8, -33.3], rotation: -19.2 },
      { anchor: [18.8, -33.3], rotation: -19.2 },
      { anchor: [18.8, -33.3], rotation: -19.2 },
      { anchor: [18.8, -33.3], rotation: -19.2 },
      { anchor: [18.8, -33.3], rotation: -19.2 },
    ],
    'monk-start': [
      { anchor: [18.5, -18.7], rotation: -14.7 },
      { anchor: [18.5, -20.9], rotation: -13.8 },
      { anchor: [18.5, -23.5], rotation: -16.1 },
      { anchor: [18.5, -25.9], rotation: -17 },
      { anchor: [18.5, -28.5], rotation: -17.9 },
      { anchor: [18.5, -30.4], rotation: -18.3 },
    ],
    'prepare-throw': [
      { anchor: [8.9, -29.4], rotation: -88.3, behind: true },
      { anchor: [6.6, -30.9], rotation: -104.9, behind: true },
      { anchor: [6.6, -30.9], rotation: -122.2, behind: true },
      { anchor: [3.5, -34.2], rotation: -143.6, behind: true },
      { anchor: [-4.3, -37.8], rotation: -158.6, behind: true },
      { anchor: [-13.6, -41.8], rotation: -174.6, behind: true },
      { anchor: [-17.6, -41.1], rotation: 177, behind: true },
      { anchor: [-20.7, -41.1], rotation: 164.3, behind: true },
      { anchor: [-24.1, -40.6], rotation: 155.2, behind: true },
      { anchor: [-26.7, -40.4], rotation: 144.4, behind: true },
      { anchor: [-28.1, -40.2], rotation: 140.7, behind: true },
      { anchor: [-29.3, -40.4], rotation: 135.3, behind: true },
      { anchor: [-29.6, -39.9], rotation: 135.3, behind: true },
    ],
    run: [
      { anchor: [-13.1, -29.4], rotation: 52.7 },
      { anchor: [0.2, -19.4], rotation: 6.8 },
      { anchor: [15, -21.4], rotation: -10.3 },
      { anchor: [27.1, -22.8], rotation: -31 },
      { anchor: [10.8, -17.5], rotation: -121.8 },
      { anchor: [1.2, -17.1], rotation: -43.6 },
      { anchor: [-12.9, -23.5], rotation: 52.3 },
    ],
    slash: [
      { anchor: [7, -24.9], rotation: -45.9, behind: true },
      { anchor: [2.1, -33.5], rotation: -67.5, behind: true },
      { anchor: [-8.3, -37.3], rotation: -81.5, behind: true },
      { anchor: [16.9, -25.9], rotation: -61.2, behind: true },
      { anchor: [45.3, -16.6], rotation: -27.4, behind: true },
      { anchor: [22.1, -2.6], rotation: 47.8, behind: true },
      { anchor: [11.8, 0.3], rotation: 69.8, behind: true },
      { anchor: [0.9, -3.3], rotation: 93.6, behind: true },
      { anchor: [-9.5, -8.5], rotation: 120.4, behind: true },
      { anchor: [-2.7, -9.2], rotation: 82.3, behind: true },
      { anchor: [5.6, -11.9], rotation: 32.6, behind: true },
      { anchor: [19, -16.6], rotation: -13.8 },
    ],
    stolen: [
      { anchor: [19.5, -17.3], rotation: -13.8 },
      { anchor: [21.9, -17.3], rotation: -27.4 },
      { anchor: [26.6, -19], rotation: -68.4 },
      { anchor: [27.3, -23.7], rotation: -79.7 },
      { anchor: [28.3, -29.7], rotation: -95 },
      { anchor: [28.3, -35.9], rotation: -109 },
      { anchor: [27.5, -37.3], rotation: -109 },
      { anchor: [25.9, -38], rotation: -106.7 },
      { anchor: [24.7, -39.4], rotation: -106.3 },
      { anchor: [23, -40.4], rotation: -104.5 },
      { anchor: [21.6, -41.6], rotation: -104 },
      { anchor: [19.7, -42.8], rotation: -109 },
      { anchor: [17.8, -44], rotation: -116.8 },
      { anchor: [15.9, -45.4], rotation: -125.4 },
      { anchor: [18.1, -43.5], rotation: -113.2 },
      { anchor: [20.7, -40.6], rotation: -102.6 },
      { anchor: [19.5, -42.5], rotation: -109 },
      { anchor: [18.1, -44.2], rotation: -116.4 },
      { anchor: [15.9, -45.4], rotation: -124.9 },
      { anchor: [17.4, -44], rotation: -117.3 },
      { anchor: [19.2, -42.5], rotation: -110 },
      { anchor: [20.7, -41.1], rotation: -103.5 },
      { anchor: [19.2, -42.5], rotation: -110.5 },
      { anchor: [17.6, -44], rotation: -115.5 },
      { anchor: [15.9, -45.6], rotation: -124.9 },
    ],
    steal: [
      { anchor: [15.2, -19.4], rotation: -14.3 },
      { anchor: [15.2, -18.3], rotation: -14.3 },
      { anchor: [15.2, -16.1], rotation: -14.3 },
      { anchor: [19, -17.1], rotation: -28.7 },
      { anchor: [23.3, -19.4], rotation: -40.9 },
      { anchor: [29.7, -21.8], rotation: -60.7, behind: true },
      { anchor: [29.7, -21.6], rotation: -56.7, behind: true },
      { anchor: [28.5, -21.8], rotation: -54.4, behind: true },
      { anchor: [27.3, -21.6], rotation: -53.1 },
      { anchor: [26.4, -21.1], rotation: -49.9 },
      { anchor: [25.2, -20.9], rotation: -46.3 },
      { anchor: [24.5, -22.8], rotation: -49.9 },
      { anchor: [23.8, -23.7], rotation: -56.2 },
      { anchor: [22.6, -25.6], rotation: -63.9 },
      { anchor: [24, -23.5], rotation: -58.5 },
      { anchor: [25.2, -21.1], rotation: -47.2 },
      { anchor: [24, -22.8], rotation: -48.1 },
      { anchor: [23.3, -24.2], rotation: -54 },
      { anchor: [22.6, -25.6], rotation: -62.1 },
      { anchor: [23.3, -24], rotation: -58 },
      { anchor: [24, -22.5], rotation: -53.5 },
      { anchor: [25.2, -21.4], rotation: -46.3 },
      { anchor: [24.5, -22.3], rotation: -50.4 },
      { anchor: [23.8, -24.2], rotation: -57.6 },
      { anchor: [23, -25.6], rotation: -61.6 },
    ],
    strengthen: [
      { anchor: [19.2, -22.5], rotation: -14.7 },
      { anchor: [19.2, -23.3], rotation: -19.2 },
      { anchor: [18.1, -27.1], rotation: -28.3 },
      { anchor: [16.6, -33], rotation: -46.3 },
      { anchor: [13.8, -41.6], rotation: -74.7 },
      { anchor: [8.9, -52.8], rotation: -108.5 },
      { anchor: [8.9, -53.5], rotation: -109.5 },
      { anchor: [8.9, -53.5], rotation: -110.6 },
      { anchor: [8.9, -53.5], rotation: -111.4 },
      { anchor: [8.9, -53.5], rotation: -111.9 },
      { anchor: [8, -54.7], rotation: -112.7 },
      { anchor: [8, -55.2], rotation: -114.6 },
      { anchor: [8, -56.1], rotation: -115 },
      { anchor: [7.5, -56.1], rotation: -116.8 },
      { anchor: [7, -56.6], rotation: -117.3 },
      { anchor: [7, -56.6], rotation: -117.7 },
      { anchor: [12.8, -49.2], rotation: -95.9 },
      { anchor: [17.8, -38.5], rotation: -70.7 },
      { anchor: [24.2, -26.4], rotation: -30.5, behind: true },
      { anchor: [24.2, -26.4], rotation: -30.5, behind: true },
      { anchor: [23.3, -25.6], rotation: -30.5, behind: true },
      { anchor: [23.3, -25.6], rotation: -30.5, behind: true },
      { anchor: [23.3, -26.1], rotation: -30.5, behind: true },
      { anchor: [23.3, -27.3], rotation: -30.5, behind: true },
      { anchor: [23.3, -26.8], rotation: -30.5, behind: true },
    ],
    throw: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    train: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    'trapped-loop': [
      { anchor: [19.2, -23.7], rotation: -115 },
      { anchor: [19.2, -23.7], rotation: -115 },
      { anchor: [19.2, -23.7], rotation: -115 },
      { anchor: [19.2, -23.7], rotation: -115 },
      { anchor: [19.2, -23.7], rotation: -115 },
      { anchor: [19.2, -23.7], rotation: -115 },
      { anchor: [19.2, -23.7], rotation: -115 },
      { anchor: [19.2, -23.7], rotation: -115 },
      { anchor: [19.2, -23.7], rotation: -115 },
      { anchor: [19.2, -23.7], rotation: -115 },
      { anchor: [19.2, -23.7], rotation: -115 },
      { anchor: [19.2, -23.7], rotation: -115 },
      { anchor: [19.2, -23.7], rotation: -115 },
      { anchor: [20, -25.4], rotation: -115 },
      { anchor: [21.4, -26.4], rotation: -113.6 },
      { anchor: [23.3, -28], rotation: -113.6 },
      { anchor: [20.4, -26.4], rotation: -113.6 },
      { anchor: [17.8, -24.9], rotation: -113.6 },
      { anchor: [15.9, -23.3], rotation: -113.6 },
      { anchor: [17.4, -23.7], rotation: -113.6 },
      { anchor: [18.8, -23.5], rotation: -112.4 },
      { anchor: [19.2, -24], rotation: -112.4 },
      { anchor: [20.4, -24.9], rotation: -112.4 },
      { anchor: [21.1, -25.9], rotation: -112.4 },
      { anchor: [21.9, -26.4], rotation: -112.4 },
      { anchor: [22.8, -27.1], rotation: -112.4 },
      { anchor: [23.3, -28], rotation: -113.6 },
      { anchor: [20.9, -26.4], rotation: -113.6 },
      { anchor: [17.8, -24.9], rotation: -113.6 },
      { anchor: [15.9, -23.3], rotation: -113.6 },
      { anchor: [17.4, -23.3], rotation: -113.6 },
      { anchor: [19, -23.3], rotation: -113.6 },
    ],
    'trapped-start': [
      { anchor: [18.5, -23.3], rotation: -17 },
      { anchor: [18.5, -23.3], rotation: -20.1 },
      { anchor: [18.8, -22.8], rotation: -34.6 },
      { anchor: [17.6, -22.8], rotation: -51.3 },
      { anchor: [17.6, -23.7], rotation: -86 },
      { anchor: [14.3, -23.7], rotation: -119.9 },
      { anchor: [15.5, -23.7], rotation: -119.9 },
      { anchor: [17.6, -23.3], rotation: -114.1 },
      { anchor: [20.4, -23.5], rotation: -110.9 },
      { anchor: [19.7, -23.5], rotation: -112.7 },
      { anchor: [19.2, -23.7], rotation: -112.7 },
    ],
    trash: [
      { anchor: [16.4, -18.3], rotation: -22.4 },
      { anchor: [6.3, -23.7], rotation: -42.7, behind: true },
      { anchor: [-11.9, -37.1], rotation: -78.8, behind: true },
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    win: [
      { anchor: [18.5, -23], rotation: -15.6 },
      { anchor: [18.5, -23], rotation: -15.6 },
      { anchor: [18.5, -23], rotation: -15.6 },
      { anchor: [18.5, -23.5], rotation: -15.6 },
      { anchor: [18.5, -23.5], rotation: -14.7 },
      { anchor: [17.8, -23.5], rotation: -14.3 },
      { anchor: [17.6, -23.5], rotation: -14.3 },
      { anchor: [17.1, -23.5], rotation: -14.3 },
      { anchor: [16.4, -23.3], rotation: -14.3 },
      { anchor: [15.5, -23.3], rotation: -14.3 },
      { anchor: [14.7, -23], rotation: -11.8 },
      { anchor: [14.5, -22.8], rotation: -11.3 },
      { anchor: [13.3, -22.8], rotation: -9.3 },
      { anchor: [12.6, -22.3], rotation: -9.3 },
      { anchor: [11.5, -22.5], rotation: -7.6 },
      { anchor: [10.5, -22.1], rotation: -7.6 },
      { anchor: [9.4, -22.1], rotation: -6.2 },
      { anchor: [7.7, -22.1], rotation: -4.9 },
      { anchor: [7.7, -22.1], rotation: -6.7 },
      { anchor: [7.7, -22.1], rotation: -6.9 },
      { anchor: [7.7, -22.1], rotation: -5.8 },
      { anchor: [8.7, -22.5], rotation: -5.8 },
      { anchor: [8.7, -22.5], rotation: -7.1 },
      { anchor: [8.7, -22.5], rotation: -6.7 },
      { anchor: [8.7, -23.5], rotation: -9.8 },
      { anchor: [8.4, -23.7], rotation: -11.1 },
      { anchor: [8.7, -23.7], rotation: -11.8 },
      { anchor: [8.7, -24.4], rotation: -12 },
      { anchor: [8.7, -24.4], rotation: -11.6 },
      { anchor: [8.7, -24.4], rotation: -11.0 },
      { anchor: [8.7, -23.5], rotation: -10.7 },
      { anchor: [8.2, -23.3], rotation: -9.8 },
      { anchor: [8, -23.5], rotation: -6.7 },
      { anchor: [8, -23], rotation: -6.7 },
      { anchor: [8, -23], rotation: -6.7 },
      { anchor: [8, -22.8], rotation: -6.2 },
      { anchor: [7.7, -22.1], rotation: -6.2 },
      { anchor: [7.3, -21.6], rotation: -6.2 },
      { anchor: [7.3, -21.6], rotation: -6.2 },
      { anchor: [6.6, -20.2], rotation: -6.2 },
      { anchor: [5.9, -20.2], rotation: -6.2 },
      { anchor: [5.6, -19.4], rotation: -6.2 },
      { anchor: [4.7, -18.7], rotation: -6.2 },
      { anchor: [5.4, -19.4], rotation: -6.2 },
      { anchor: [5.9, -21.1], rotation: -10.3 },
      { anchor: [6.3, -23.5], rotation: -17 },
      { anchor: [8, -27.5], rotation: -28.7 },
      { anchor: [9.8, -33], rotation: -42.7 },
      { anchor: [11, -39], rotation: -57.1 },
      { anchor: [11.3, -43.7], rotation: -74.3 },
      { anchor: [11.3, -47.8], rotation: -87.8 },
      { anchor: [11.5, -51.1], rotation: -92.8 },
      { anchor: [11.9, -53.7], rotation: -98.6 },
      { anchor: [11.9, -54.9], rotation: -101.3 },
      { anchor: [11.9, -55.4], rotation: -102.6 },
    ],
    fist: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    estoc: [
      { anchor: [7.7, -20.9], rotation: -38.6 },
      { anchor: [4.7, -26.4], rotation: -49.5 },
      { anchor: [15.5, -20.4], rotation: -38.6 },
      { anchor: [30.4, -18], rotation: -30.1 },
      { anchor: [44.1, -16.4], rotation: -17.9 },
      { anchor: [42.7, -16.4], rotation: -17.9 },
      { anchor: [39.2, -16.4], rotation: -17.9 },
      { anchor: [33, -16.4], rotation: -16.1 },
      { anchor: [25.9, -17.1], rotation: -16.5 },
      { anchor: [18.8, -17.5], rotation: -14.3 },
    ],
    whip: [
      { anchor: [5.9, -35.2], rotation: -87.4, behind: true },
      { anchor: [-11.3, -52.1], rotation: 172.9, behind: true },
      { anchor: [-2.4, -35.4], rotation: 135.3 },
      { anchor: [12.4, -12.1], rotation: 76.5 },
      { anchor: [12.4, -12.1], rotation: 76.5 },
      { anchor: [12.4, -12.1], rotation: 76.5 },
      { anchor: [12.4, -12.1], rotation: 76.5 },
      { anchor: [12.4, -12.1], rotation: 76.5 },
      { anchor: [13.1, -14.2], rotation: 68 },
      { anchor: [13.1, -14], rotation: 56.3 },
      { anchor: [15.5, -16.4], rotation: 36.2 },
      { anchor: [16.6, -17.5], rotation: 13.3 },
      { anchor: [18.1, -20.4], rotation: -3.1 },
      { anchor: [19, -23], rotation: -14.3 },
    ],
  },
  female: {
    'arrive-end': [],
    'arrive-start': [],
    attack: [],
    block: [],
    death: [],
    drink: [],
    eat: [],
    equip: [],
    evade: [],
    grab: [],
    grabbed: [],
    hit: [],
    'hit-0': [],
    'hit-1': [],
    'hit-2': [],
    idle: [
      { anchor: [-2, -41.6], rotation: -13.7, behind: true },
      { anchor: [-2.4, -41.6], rotation: -13.7, behind: true },
      { anchor: [-2.4, -41.6], rotation: -13.7, behind: true },
      { anchor: [-2.8, -41.6], rotation: -13.7, behind: true },
      { anchor: [-2.8, -41.6], rotation: -13.7, behind: true },
      { anchor: [-3.2, -42], rotation: -13.7, behind: true },
      { anchor: [-3.2, -42], rotation: -13.7, behind: true },
      { anchor: [-3.4, -42.2], rotation: -13.7, behind: true },
      { anchor: [-3.2, -42.2], rotation: -13.7, behind: true },
      { anchor: [-3.2, -42.4], rotation: -13.7, behind: true },
      { anchor: [-3.2, -42.4], rotation: -13.7, behind: true },
      { anchor: [-3.2, -42.4], rotation: -13.7, behind: true },
      { anchor: [-3.2, -42.2], rotation: -13.7, behind: true },
      { anchor: [-3.0, -42.4], rotation: -13.7, behind: true },
      { anchor: [-3.0, -42.2], rotation: -13.7, behind: true },
      { anchor: [-2.8, -42.2], rotation: -13.7, behind: true },
      { anchor: [-2.6, -42.0], rotation: -13.7, behind: true },
      { anchor: [-2.6, -42.0], rotation: -13.7, behind: true },
      { anchor: [-2.6, -42.0], rotation: -13.7, behind: true },
      { anchor: [-2.4, -42.0], rotation: -13.7, behind: true },
      { anchor: [-2.2, -42.8], rotation: -13.7, behind: true },
      { anchor: [-2, -41.6], rotation: -13.7, behind: true },
      { anchor: [-2, -41.6], rotation: -13.7, behind: true },
      { anchor: [-2, -41.6], rotation: -13.7, behind: true },
      { anchor: [-2, -41.6], rotation: -13.7, behind: true },
      { anchor: [-2, -41.6], rotation: -13.7, behind: true },
      { anchor: [-2, -41.6], rotation: -13.7, behind: true },
      { anchor: [-2, -41.6], rotation: -13.7, behind: true },
      { anchor: [-2, -41.6], rotation: -13.7, behind: true },
      { anchor: [-2, -41.6], rotation: -13.7, behind: true },
      { anchor: [-2, -41.6], rotation: -13.7, behind: true },
    ],
    launch: [],
    'monk-loop': [],
    'monk-start': [],
    'prepare-throw': [],
    run: [],
    slash: [],
    stolen: [],
    steal: [],
    strengthen: [],
    throw: [],
    train: [],
    'trapped-loop': [],
    'trapped-start': [],
    trash: [],
    win: [],
    fist: [],
    estoc: [],
    whip: [],
  },
};

export const BruteRankings = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0] as const;
export type BruteRanking = typeof BruteRankings[number];

export const GLOBAL_TOURNAMENT_START_HOUR = 11;

export interface Perk {
  name: 'pet' | 'skill' | 'weapon';
  odds: number;
}

export const PERK_ODDS: Perk[] = [
  { name: 'pet', odds: PETS_TOTAL_ODDS },
  { name: 'skill', odds: SKILLS_TOTAL_ODDS },
  { name: 'weapon', odds: WEAPONS_TOTAL_ODDS },
];

export const NEW_BRUTE_BASE_COST = 500;

export const FIGHTER_HEIGHT = {
  brute: 80,
  [PetName.bear]: 130,
  [PetName.panther]: 60,
  dog: 40,
} as const;
export const FIGHTER_WIDTH = {
  brute: 50,
  [PetName.bear]: 120,
  [PetName.panther]: 90,
  dog: 60,
} as const;