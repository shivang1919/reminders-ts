export default class Reminder {
    id: number;
    isComplete: boolean
    constructor(public title: string){
        // set the id
        // iscomplete = false
        this.id = Date.now();
        this.isComplete = false
    }
}