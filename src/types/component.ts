export interface PartProp {
  [key: string]: string[];
}

export interface Part {
  [key: string]: PartProp;
}

export interface Parts {
  [key: string]: Part;
}
