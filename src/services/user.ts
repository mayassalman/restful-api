import { User } from "../modal/user"
import { users } from "../mock/users"


export function getAllUsers(){
    return users
}

export function addUser(user:User) {
    users.push(user)
}

export function getUser(id:number){
  const user=  users.find((user)=>user.id==id)
  
    return user

}