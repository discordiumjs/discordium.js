import { GatewayIntentBits } from 'discord-api-types/v10';

/**
 * Represents the available Gateway Intents from Discord
 */
export type GatewayIntents = keyof typeof GatewayIntentBits;

/**
 * Utility class for calculating and managing Discord Gateway Intents
 */
export default class IntentCalculator {
	/**
	 * The current intent bitfield
	 * @private
	 */
	private intents: number;

	/**
	 * Creates a new IntentCalculator instance
	 * @param intents - Initial intent bitfields
	 */
	constructor(intents: number[] = []) {
		this.intents = IntentCalculator.combine(...intents);
	}

	/**
	 * Adds one or more intents to the current bitfield
	 * @param intents - The intents to add
	 * @returns The current instance, useful for chaining
	 */
	public add(...intents: number[]): this {
		this.intents |= intents.reduce((acc, intent) => acc | intent, 0);
		return this;
	}

	/**
	 * Removes one or more intents from the current bitfield
	 * @param intents - The intents to remove
	 * @returns The current instance, useful for chaining
	 */
	public remove(...intents: number[]): this {
		this.intents &= ~intents.reduce((acc, intent) => acc | intent, 0);
		return this;
	}

	/**
	 * Checks if the current bitfield has a specific intent
	 * @param intent - The intent to check for
	 * @returns Whether the intent is present
	 */
	public has(intent: number): boolean {
		return (this.intents & intent) === intent;
	}

	/**
	 * Gets an array of intent names from the current bitfield
	 * @returns Array of intent names
	 */
	public getIntents(): GatewayIntents[] {
		return Object.entries(GatewayIntentBits)
			.filter(([_, value]) => typeof value === 'number' && this.has(value))
			.map(([key]) => key as GatewayIntents);
	}

	/**
	 * Gets the current intent bitfield
	 * @returns The current bitfield value
	 */
	public getBitField(): number {
		return this.intents;
	}

	/**
	 * Combines multiple intent bitfields into a single bitfield
	 * @param intents - The intents to combine
	 * @returns Combined bitfield value
	 */
	public static combine(...intents: number[]): number {
		return intents.reduce((acc, intent) => acc | intent, 0);
	}

	/**
	 * Converts an array of intent names to a bitfield
	 * @param intentNames - Array of intent names to convert
	 * @returns The calculated bitfield value
	 */
	public static toBitField(intentNames: GatewayIntents[]): number {
		return intentNames.reduce((acc, name) => {
			const intent = GatewayIntentBits[name];
			return typeof intent === 'number' ? acc | intent : acc;
		}, 0);
	}

	/**
	 * Converts bitfields to an array of intent names
	 * @param bitfields - The bitfields to convert
	 * @returns Array of intent names
	 */
	public static fromBitField(...bitfields: number[]): GatewayIntents[] {
		const combined = IntentCalculator.combine(...bitfields);
		return Object.entries(GatewayIntentBits)
			.filter(
				([_, value]) =>
					typeof value === 'number' && (combined & value) === value
			)
			.map(([key]) => key as GatewayIntents);
	}
}
