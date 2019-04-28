

export class Movies {

    public title?: string;
    public reviews?: number;
    public rating?: string;
    public genre?: string;
    public year?: number;

    constructor(contact: object) {
        Object.assign(this, Movies);
    }
}
