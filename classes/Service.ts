import _ from 'lodash';

export default class Service {
    private id: string;
    private name: string;
    private uri: string;
    private description: string;
    private category: string;
    private cover: string;

    constructor({ id, name, uri, description, category, cover }) {
        this.id = id;
        this.name = name;
        this.uri = uri;
        this.description = description;
        this.category = category;
        this.cover = cover;
    }
}
