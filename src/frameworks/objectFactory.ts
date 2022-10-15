export default class ObjectFactory {
  public static create<T>(type: new () => T, props: Partial<T>): T {
    const obj = new type();
    if (props) {
      Object.assign(obj, props);
    }
    return obj;
  }
}
