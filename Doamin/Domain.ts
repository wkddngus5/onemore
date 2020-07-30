import _ from 'lodash';
import moment from 'moment';

export default abstract class Domain {
    private _id?: string;

    getter(keys: string[]): any {
        const result: object = {};
        // eslint-disable-next-line no-restricted-syntax
        for (const key of keys) {
            result[key] = this[key];
        }
        return result;
    }

    setter(data?: object): void {
        _.forEach(data, (value, key) => {
            if (_.includes(key, 'At') && !_.isEmpty(value)) {
                _.set(this, key, moment(value));
            } else {
                _.set(this, key, value);
            }
        });
    }

    is(_id: string): boolean {
        return this._id === _id;
    }

    isNew(): boolean {
        return !(this._id && this._id !== '');
    }

    clone<T>(): T {
        const copy = new (this.constructor as { new (): T })();
        (<any>Object).assign(copy, this);
        return copy;
    }

    toJson(): object {
        const json = {};
        // eslint-disable-next-line no-restricted-syntax
        for (const key of Object.keys(this)) {
            const value: any = this[key];
            if (value instanceof Domain) {
                json[key] = value.toJson();
                break;
            }
            json[key] = value;
        }
        return json;
    }
}
