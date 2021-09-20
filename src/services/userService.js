import $api from "../http";

export default class UserServices {
  static fetchUsers() {
    return $api.get("/users");
  }
}
