

export class Movies {

    public title?: string;
    public reviews?: number;
    public rating?: string;
    public genre?: string;

    constructor(contact: object) {
        Object.assign(this, Movies);
    }
}
