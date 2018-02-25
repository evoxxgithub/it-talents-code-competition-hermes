import { Package } from './package.type';

export class Location {
  private _name: string;
  private _packageHistory: Package[];

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }
}
