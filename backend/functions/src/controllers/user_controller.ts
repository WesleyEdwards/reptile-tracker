import {controller} from "../lib/controller"
import {
  createUser,
  deleteUser,
  getSelf,
  getUser,
  loginUser,
  queryUser,
  refreshToken
} from "../dbQueries/users"

export const usersController = controller("user", [
  {path: "/refresh", method: "post", endpointBuilder: refreshToken},
  {
    path: "/create",
    method: "post",
    endpointBuilder: createUser,
    skipAuth: true
  },
  {path: "/", method: "get", endpointBuilder: getSelf},
  {path: "/:id", method: "get", endpointBuilder: getUser},
  {path: "/query", method: "post", endpointBuilder: queryUser},
  {path: "/:id", method: "delete", endpointBuilder: deleteUser},
  {
    path: "/login",
    method: "post",
    endpointBuilder: loginUser,
    skipAuth: true
  }
])
