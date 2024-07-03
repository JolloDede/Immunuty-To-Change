
export class Topic {
    id: number;
    title: string;
    goalList: string;
    insteadList: string;
    competingList: string;
    assumtionList: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.goalList = "";
        this.insteadList = "";
        this.competingList = "";
        this.assumtionList = "";
    }
}