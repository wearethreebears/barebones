export interface ClassProps {
  [key: string]: {
    type: any;
    default: string;
  };
}

export interface SharedProps {
  [key: string]: {
    required?: boolean;
    type: any;
    default?: string;
  };
}

export type Props = Readonly<
  {
    [x: string]: unknown;
  } & Record<string, unknown> & {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [x: string]: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [x: number]: any;
    }
>;
