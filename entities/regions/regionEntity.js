
export default class  {
    constructor (data) {
        this.id = data.woeid;
        this.name = data.title;
        this.type = data.location_type;
        this.geo = data.latt_long;
    }

    static mutateCollection (data) {
        if (!Array.isArray(data)) {
            throw new Error('Input mutation item list is not Array');
        }

        return data.map(item => new regionEntity(item));
    }

    getId () {
        return this.id;
    }

    getName () {
        return this.name;
    }

    getType () {
        return this.type;
    }
    getCoordinates () {
        let [latt, long] = this.geo.split(',');
        return {
            latt,
            long
        };
    }
}