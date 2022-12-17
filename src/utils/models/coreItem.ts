import { TypeItem } from './itemType';
class CoreType {
  id;
  link;
  title;
  type;

  constructor(id: string, link: string, title: string, type: TypeItem) {
    this.id = id;
    this.link = link;
    this.title = title;
    this.type = type;
  }
}

export default CoreType;
