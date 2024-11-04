export interface Card {
    id?: number;
    imagee: string;
    title: string;
    description: string;
  }
export interface FeaturesProps {
    cards: Card[];
  }