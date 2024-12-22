/**
 * Base builder class that provides common functionality for other builders
 */
export default class BaseBuilder {
	/**
	 * The internal builder instance used by this class
	 * @protected
	 */
	protected builder: any;

	/**
	 * The raw data for this builder
	 * @public
	 * @readonly
	 */
	public readonly data: any;

	/**
	 * Creates a new base builder instance
	 * @param builder - The internal builder to use
	 * @protected
	 */
	protected constructor(builder: any) {
		this.builder = builder;
		this.data = this.builder.data;
	}
}
