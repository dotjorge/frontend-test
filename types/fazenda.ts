export interface Fazenda {
  version: string;
  box_name: string;
  data: FazendaDataItem[];
}

export type FazendaData = FazendaDataItem[];

export interface FazendaDataItem {
  __id: string;
  timestamp: number;
  name: string;
  description: string;
  picture: string;
  positive?: number | string;
  negative?: number | string;
  age?: number;
}
