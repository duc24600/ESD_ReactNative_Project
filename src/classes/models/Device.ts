class Device {
    id : string;
    name : string;
    status : string;
    type : string;
    subtype : string;

    constructor(id : string, name : string, status : string, subtype : string, type : string){
        this.id = id;
        this.name = name;
        this.status = status;
        this.subtype = subtype;
        this.type = type;
    };

}