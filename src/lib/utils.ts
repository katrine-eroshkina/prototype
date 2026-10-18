import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Склейка классов Tailwind (стандартный хелпер shadcn) */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
