import { GatewayIntentBits } from "discord-api-types/v10";

/**
 * Types that can be received as partial data from Discord
 */
export enum GatewayPartials {
    Channel = 1 << 0,
    GuildMember = 1 << 1,
    GuildScheduledEvent = 1 << 2,
    Message = 1 << 3,
    Reaction = 1 << 4,
    ThreadMember = 1 << 5,
    User = 1 << 6
};

/**
 * Required intents for specific partial types
 */
export const PartialRequiredIntents: Record<GatewayPartials, number[]> = {
    [GatewayPartials.Message]: [GatewayIntentBits.MessageContent],
    [GatewayPartials.Channel]: [],
    [GatewayPartials.Reaction]: [GatewayIntentBits.GuildMessageReactions],
    [GatewayPartials.GuildMember]: [GatewayIntentBits.GuildMembers],
    [GatewayPartials.User]: [],
    [GatewayPartials.ThreadMember]: [GatewayIntentBits.GuildMembers],
    [GatewayPartials.GuildScheduledEvent]: []
};

/**
 * Calculator for handling Discord API Partials
 */
export class PartialCalculator {
    /**
     * The current partial bitfield
     * @private
     */
    private partials: number;

    /**
     * Creates a new PartialCalculator instance
     * @param partials - Initial partial bitfields
     */
    constructor(partials: number[] = []) {
        this.partials = partials.reduce((acc, p) => acc | p, 0);
    }

    /**
     * Adds one or more partials to the calculator
     * @param partials - The partials to add
     * @returns The current instance, useful for chaining
     */
    add(...partials: GatewayPartials[]): this {
        for (const partial of partials) {
            this.partials |= partial;
        }
        return this;
    }

    /**
     * Removes one or more partials from the calculator
     * @param partials - The partials to remove
     * @returns The current instance, useful for chaining
     */
    remove(...partials: GatewayPartials[]): this {
        for (const partial of partials) {
            this.partials &= ~partial;
        }
        return this;
    }

    /**
     * Checks if a specific partial is enabled
     * @param partial - The partial to check
     * @returns Whether the partial is enabled
     */
    has(partial: GatewayPartials): boolean {
        return (this.partials & partial) !== 0;
    }

    /**
     * Gets an array of enabled partial types
     * @returns Array of enabled partial types
     */
    getPartials(): GatewayPartials[] {
        return Object.values(GatewayPartials)
            .filter(value => typeof value === 'number')
            .map(value => value as GatewayPartials)
            .filter(partial => this.has(partial));
    }

    /**
     * Gets all required intents for the current partials
     * @returns Array of required intent bitfields
     */
    getRequiredIntents(): number[] {
        const requiredIntents = new Set<number>();
        for (const partial of this.getPartials()) {
            PartialRequiredIntents[partial].forEach(intent => requiredIntents.add(intent));
        }
        return Array.from(requiredIntents);
    }

    /**
     * Gets the current partial bitfield
     * @returns The current bitfield value
     */
    getBitfield(): number {
        return this.partials;
    }

    /**
     * Creates a calculator from an array of partial types
     * @param partials - Array of partial types
     * @returns New PartialCalculator instance
     */
    static fromPartials(...partials: GatewayPartials[]): PartialCalculator {
        const calculator = new PartialCalculator();
        calculator.add(...partials);
        return calculator;
    }

    /**
     * Converts a bitfield to an array of partial types
     * @param bitfield - The bitfield to convert
     * @returns Array of partial types
     */
    static fromBitfield(bitfield: number): GatewayPartials[] {
        return Object.values(GatewayPartials)
            .filter(value => typeof value === 'number')
            .map(value => value as GatewayPartials)
            .filter(partial => (bitfield & partial) !== 0);
    }
} 