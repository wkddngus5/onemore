import _ from 'lodash';
import Domain from './Domain';
import { Item, ItemData } from './Item';
import { CATEGORY } from './const';

export interface ServiceData {
    id: number;
    name: string;
    uri: string;
    description: string;
    category: CATEGORY;
    cover: string;
    items: ItemData[];
}

export class Service extends Domain {
    private id: number;

    private name: string;

    private uri: string;

    private description: string;

    private category: CATEGORY;

    private cover: string;

    private items: Item[];

    constructor(data: ServiceData) {
        super();
        this.setter(data);
        const { items: itemsData } = data;
        this.items = _.map(itemsData, (itemData: ItemData) => new Item(itemData));
    }
}
