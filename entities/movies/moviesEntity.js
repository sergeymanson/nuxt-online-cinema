
export class moviesEntity {

    constructor (data) {
        this.id = data.kinopoisk_id;
        this.name = data.name;
        this.type = data.sub_type;
        this.year = data.year;
        this.iframe = data.url;
    }

    static mutateCollection (data) {
        if (!Array.isArray(data)) {
            throw new Error('Input mutation item list is not Array');
        }

        return data.map(item => new moviesEntity(item));
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

    getYear () {
        return this.year
    }

    getImage () {
        return `https://st.kp.yandex.net/images/film_iphone/iphone360_${this.getId()}.jpg`;
    }

    getUrl () {
        return '/movies/'+this.getId();
    }

    getIframe () {
        return this.iframe;
    }
}