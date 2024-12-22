/**
 * Manages the API methods of a data model.
 * @abstract
 */
export default abstract class BaseManager {
	/**
	 * The client that instantiated this Manager
	 * @name BaseManager#client
	 * @protected
	 * @readonly
	 */
	protected readonly client: any;

	/**
	 * Creates a new BaseManager instance
	 * @param client - The client that instantiates this Manager
	 */
	public constructor(client: any) {
		this.client = client;
	}
}
