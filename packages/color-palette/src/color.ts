import { colord, extend } from 'colord';
import type { HslColor, HslaColor, RgbaColor } from 'colord';
import labPlugin from 'colord/plugins/lab';

extend([labPlugin]);

export function isValidColor(color: string): boolean {
  return colord(color).isValid();
}

export function getHex(color: string): string {
  return colord(color).toHex();
}

export function getRgb(color: string): RgbaColor {
  return colord(color).toRgb();
}

export function getHsl(color: string): HslaColor {
  return colord(color).toHsl();
}

export function getDeltaE(color1: string, color2: string): number {
  return colord(color1).delta(color2);
}

export function transformHslToHex(color: HslColor): string {
  return colord(color).toHex();
}
