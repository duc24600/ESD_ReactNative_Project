class AuthHeader{
    'Authorization' : string;
    'Host' : string;
    'Content-Length' : number;
    'Content-Type' : string;

    constructor(credentials : string){
        this.Authorization = credentials;
        this.Host = '10.4.18.42:13081';
    }

    setContentLength(length : number) : void{
        this["Content-Length"] = length;
    }

    setContentType() : void{
        this["Content-Type"] = "application/json";
    }
}