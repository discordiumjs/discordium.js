
/**
 * Base class providing core functionality for data objects
 */
class Base {
    public client: any;
    public id?: string;

    /**
     * Creates an instance of Base
     * @param client - The client instance
     */
    public constructor(client: any) {
        this.client = client;
    }

    /**
     * Creates a clone of the current instance
     * @returns A clone of the current instance
     * @private
     */
    private _clone() {
        return Object.assign(Object.create(this), this);
    }

    /**
     * Processes the data before updating
     * @param data - The data to process
     * @returns The processed data
     * @private
     */
    private _patch(data: any) {
        return data;
    }

    /**
     * Updates the instance with new data
     * @param data - The data to update with
     * @returns A new instance with updated data
     * @private
     */
    private _update(data: any) {
        const clone = this._clone();
        clone._patch(data);
        return clone;
    }

    /**
     * Updates the instance from complete data
     * @param data - The complete data to update from
     * @returns A new instance with updated data
     * @private
     */
    private _updateFromData(data: any) {
        return this._update(data);
    }

    /**
     * Updates the instance from partial data
     * @param partial - The partial data to update from
     * @returns A new instance with updated data
     * @private
     */
    private _updateFromPartial(partial: any) {
        return this._update(partial);
    }

    /**
     * Converts the instance to a JSON string
     * @param props - Additional properties to pass to JSON.stringify
     * @returns JSON string representation of the instance
     * @private
     */
    private toJSON(...props: any) {
        return JSON.stringify(this, ...props);
    }

    /**
     * Gets the id of the instance
     * @returns The instance id
     */
    public get valueOf() {
        return this.id;
    }
}

export { Base };
