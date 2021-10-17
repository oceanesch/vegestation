export const SortOrder = {
  asc: 'asc',
  desc: 'desc',
} as const;

export type SortOrder = keyof typeof SortOrder;
