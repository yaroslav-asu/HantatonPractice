export default class UserCard {
  constructor(props) {
    this.title = props.title ? props.title : "";
    this.img = props.img ? props.img : "";
    this.link = props.link ? props.link : "";
  }
}
