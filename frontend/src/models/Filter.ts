export class Filter{
    active: boolean = false;
    name: string = 'FILTER';
    
    constructor(name: string, active:boolean){
        this.active = active;
        this.name = name;
    }
    
}