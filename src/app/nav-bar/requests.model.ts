
export class Requests {

    public title?: string;
    public time?: string;
    public editMode?: boolean;

    constructor(contact: object) {
        Object.assign(this, Requests);
    }
}
