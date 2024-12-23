import { flatten } from '../util/Util';

/**
 * Represents a data model that is identifiable by a Snowflake (i.e. Discord API data models).
 * @abstract
 */
export default abstract class Base {
  /**
   * The client that instantiated this
   * @type {Client}
   * @readonly
   */
  protected readonly client: Client;

  /**
   * Creates an instance of Base.
   * @param client - The client that instantiated this.
   */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Clones the current instance.
   * @returns A new instance that is a clone of the current instance.
   */
  protected _clone(): this {
    return Object.assign(Object.create(this), this);
  }

  /**
   * Patches the current instance with new data.
   * @param data - The data to patch the instance with.
   * @returns The patched data.
   */
  protected _patch(data: any): any {
    return data;
  }

  /**
   * Updates the current instance with new data and returns a clone.
   * @param data - The data to update the instance with.
   * @returns A new instance that is a clone of the updated instance.
   */
  protected _update(data: any): this {
    const clone = this._clone();
    this._patch(data);
    return clone;
  }

  /**
   * Converts the instance to a JSON object.
   * @param props - Additional properties to include in the JSON representation.
   * @returns The JSON representation of the instance.
   */
  public toJSON(...props: any[]): any {
    // @ts-ignore
    return flatten(this, ...props);
  }

  /**
   * Returns the primitive value of the instance.
   * @returns The id of the instance.
   */
  public valueOf(): any {
    // @ts-ignore
    return this.id;
  }
}