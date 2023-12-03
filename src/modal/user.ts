export enum Role {
    ADMIN="admin",
    USER="user",
    
}

export interface User {
    id:number,
    name:string,
    role:Role,
    email?:string
}