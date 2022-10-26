import { ServiceProsClass } from "src/js/ServiceProsClass";

export default class ServiceFeatureClass extends ServiceProsClass {
  constructor(props) {
    super(props);
    this.link = props.link;
  }
}
