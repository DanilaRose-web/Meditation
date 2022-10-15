export default class Events<T> {
  private _listeners: Function[] = new Array<Function>();
  addListener(handler: Function) {
    if (this._listeners.indexOf(handler) === -1) {
      this._listeners.push(handler);
    }
  }
  removeListener(handler: Function) {
    const idx = this._listeners.indexOf(handler);
    if (idx !== -1) {
      this._listeners.splice(idx, 1);
    }
  }
  emit(value: T) {
    this._listeners.forEach(list => list(value));
  }
}
