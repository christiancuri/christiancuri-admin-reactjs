export type TAction<T> = {
  type: string;
  data?: T;
  datas?: T[];
};

export type IReduceLiteral<S> = {
  [s: string]: () => S;
  default: () => S;
};
