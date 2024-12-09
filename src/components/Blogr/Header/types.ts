export type TNavRawItem = {
  label: string;
  action: VoidFunction;
};

export type TNavItem = TNavRawItem & {
  subItems: TNavRawItem[];
};
