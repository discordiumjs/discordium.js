import { DiscordiumRangeError, DiscordiumErrorCodes } from '../errors';
import { BitField as SapphireBitField } from '@sapphire/bitfield';

// Not Implemented
// Not Implemented
// Not Implemented
// Not Implemented

/**
 * A class representing a bitfield, providing methods to manipulate and query bit flags.
 */
export default class BitField<F extends Record<string, number> | Record<string, bigint>> extends SapphireBitField<F> {
	constructor() {
    super();
	}
}