import { CYCLE } from './const';
import { Domain } from './Domain';

export interface ItemData {
    name: string;
    receipt: CYCLE;
    billing: CYCLE;
    description?: string;
    price: number;
    cover?: string;
}

export class Item extends Domain {
    private name: string;
    private receipt: CYCLE;
    private billing: CYCLE;
    private description: string = '';
    private price: number;
    private cover: string;

    constructor( data: ItemData ) {
        super();
        this.setter( data );
    }
}