export const white = '#FFFFFF';
export const black = '#061621';

interface HueRange {
  dark3: string;
  dark2: string;
  dark1?: string;
  base: string;
  light1?: string;
  light2: string;
  light3: string;
}

export const gray: HueRange = {
  dark3: '#21313C',
  dark2: '#3D4F58',
  dark1: '#5D6C74',
  base: '#89989B',
  light1: '#B8C4C2',
  light2: '#E7EEEC',
  light3: '#F9FBFA',
} as const;

export const green: HueRange = {
  dark3: '#0B3B35',
  dark2: '#116149',
  base: '#13AA52',
  light2: '#C3E7CA',
  light3: '#E4F4E4',
} as const;

export const blue: HueRange = {
  dark3: '#0D324F',
  dark2: '#1A567E',
  base: '#007CAD',
  light2: '#C5E4F2',
  light3: '#E1F2F6',
} as const;

export const yellow: HueRange = {
  dark3: '#543E07',
  dark2: '#86681D',
  base: '#FFDD49',
  light2: '#FEF2C8',
  light3: '#FEF7E3',
} as const;

export const red: HueRange = {
  dark3: '#570B08',
  dark2: '#8F221B',
  base: '#CF4A22',
  light2: '#F9D3C5',
  light3: '#FCEBE2',
} as const;
