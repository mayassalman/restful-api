import { Role, User } from "../modal/user";

export const users:User[] = [
  {
    "id": 1,
    "name": "mayas",
    "role": Role.ADMIN,
    "email": "mayassalman@gmail.com"
  },
  {
    "id": 2,
    "name": "rasha",
    "role": Role.USER,
    "email": "rashahassan@gmail.com"
  },
  {
    "id": 3,
    "name": "julie",
    "role": Role.ADMIN,
    "email": "juliesalman@gmail.com"
  }
]