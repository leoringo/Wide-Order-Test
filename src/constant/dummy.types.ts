export interface PerDummy {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  stock: number;
  date: Date;
}

export type DataDummyInterface = PerDummy[];
