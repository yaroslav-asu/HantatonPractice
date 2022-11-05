export default class User {
  constructor(props) {
    this.email = props.email ? props.email : "";
    this.password1 = "";
    this.password2 = "";
    this.photoUrl = props.photoUrl ? props.photoUrl : "";
    this.firstName = props.firstName ? props.firstName : "";
    this.lastName = props.lastName ? props.lastName : "";
  }

  static register() {

  }

  login() {

  }

  logout() {

  }

  changeName(newName) {
  }

  changeSurname(newSurname) {

  }

  changePassword(newPassword1, newPassword2) {

  }

  changePhoto(newPhotoUrl) {

  }

}
