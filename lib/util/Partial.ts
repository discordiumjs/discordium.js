import { GatewayIntentBits } from 'discord-api-types/v10';

/**
 * Enum representing the types of partial data that can be received from Discord.
 */
export enum GatewayPartials {
	Channel = 1 << 0,
	GuildMember = 1 << 1,
	GuildScheduledEvent = 1 << 2,
	Message = 1 << 3,
	Reaction = 1 << 4,
	ThreadMember = 1 << 5,
	User = 1 << 6,
}

/**
 * Mapping of required intents for specific partial types.
 */
export const PartialRequiredIntents: Record<GatewayPartials, number[]> = {
	[GatewayPartials.Message]: [GatewayIntentBits.MessageContent],
	[GatewayPartials.Channel]: [],
	[GatewayPartials.Reaction]: [GatewayIntentBits.GuildMessageReactions],
	[GatewayPartials.GuildMember]: [GatewayIntentBits.GuildMembers],
	[GatewayPartials.User]: [],
	[GatewayPartials.ThreadMember]: [GatewayIntentBits.GuildMembers],
	[GatewayPartials.GuildScheduledEvent]: [],
};

/**
 * Class for managing and calculating Discord API partials.
 */
export class PartialCalculator {
	/**
	 * The current bitfield representing enabled partials.
	 * @private
	 */
	private partials: number;

	/**
	 * Initializes a new instance of PartialCalculator.
	 * @param partials - Initial bitfields representing partials.
	 */
	public constructor(partials: number[] = []) {
		// @ts-ignore
		this.partials = this.constructor.combine(...partials);
	}

	/**
	 * Adds one or more partials to the current bitfield.
	 * @param partials - The partials to add.
	 * @returns The current instance for method chaining.
	 */
	public add(...partials: GatewayPartials[]): this {
		this.partials |= partials.reduce((acc, partial) => acc | partial, 0);
		return this;
	}

	/**
	 * Removes one or more partials from the current bitfield.
	 * @param partials - The partials to remove.
	 * @returns The current instance for method chaining.
	 */
	public remove(...partials: GatewayPartials[]): this {
		this.partials &= ~partials.reduce((acc, partial) => acc | partial, 0);
		return this;
	}

	/**
	 * Checks if a specific partial is enabled.
	 * @param partial - The partial to check.
	 * @returns True if the partial is enabled, otherwise false.
	 */
	public has(partial: GatewayPartials): boolean {
		return (this.partials & partial) !== 0;
	}

	/**
	 * Retrieves an array of currently enabled partial types.
	 * @returns An array of enabled partial types.
	 */
	public getPartials(): GatewayPartials[] {
		return Object.values(GatewayPartials)
			.filter((value) => typeof value === 'number' && this.has(value))
			.map((value) => value as GatewayPartials);
	}

	/**
	 * Retrieves all required intents for the currently enabled partials.
	 * @returns An array of required intent bitfields.
	 */
	public getRequiredIntents(): number[] {
		const requiredIntents = new Set<number>();
		for (const partial of this.getPartials()) {
			PartialRequiredIntents[partial].forEach((intent) =>
				requiredIntents.add(intent)
			);
		}
		return Array.from(requiredIntents);
	}

	/**
	 * Retrieves the current partial bitfield.
	 * @returns The current bitfield value.
	 */
	public getBitField(): number {
		return this.partials;
	}

	/**
	 * Converts an array of partial types to a bitfield and returns the enabled partials
	 * @param partials - Array of partial types
	 * @returns Array of enabled partial types
	 */
	public static fromPartials(...partials: GatewayPartials[]): GatewayPartials[] {
		const bitfield = PartialCalculator.combine(...partials);
		return PartialCalculator.fromBitField(bitfield);
	}

	/**
	 * Converts a bitfield to an array of partial types.
	 * @param bitfield - The bitfield to convert.
	 * @returns An array of partial types.
	 */
	public static fromBitField(bitfield: number): GatewayPartials[] {
		return Object.values(GatewayPartials)
			.filter((value) => typeof value === 'number' && (bitfield & value) !== 0)
			.map((value) => value as GatewayPartials);
	}

	/**
	 * Combines multiple partial bitfields into a single bitfield
	 * @param partials - The partials to combine
	 * @returns Combined bitfield value
	 */
	public static combine(...partials: number[]): number {
		return partials.reduce((acc, partial) => acc | partial, 0);
	}
}
