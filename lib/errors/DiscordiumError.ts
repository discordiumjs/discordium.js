import { JSONErrorCodes } from './ErrorCodes';
import { Messages } from './Messages';

/**
 * Creates a custom error class that extends a base error class with Discordium-specific functionality
 * @param Base - The base error class to extend
 * @returns A new error class extending the base class with Discordium error handling
 */
export function makeDiscordiumError(Base) {
	return class DiscordiumError extends Base {
		/**
		 * Creates a new DiscordiumError instance
		 * @param code - The error code from JSONErrorCodes
		 * @param args - Additional arguments to format the error message
		 */
		constructor(code: number, ...args: unknown[]) {
			super(message(code, args));
			this.code = code;
			Error.captureStackTrace?.(this, DiscordiumError);
		}

		/**
		 * Gets the formatted name of this error including the error code
		 * @returns The error name with code
		 */
		get name() {
			return `${super.name} [${this.code}]`;
		}
	};
}

/**
 * Formats an error message using a code and optional arguments
 * @param code - The error code from JSONErrorCodes
 * @param args - Optional arguments to format into the message
 * @returns The formatted error message string
 * @throws {Error} If the code is invalid or has no associated message
 */
export function message(code: JSONErrorCodes, args: unknown[]): string {
	if (!(code in JSONErrorCodes))
		throw new Error('Error code must be a valid DiscordiumErrorCodes');
	const msg = Messages[code];
	if (!msg) throw new Error(`No message associated with error code: ${code}.`);
  // @ts-ignore
	if (typeof msg === 'function') return msg(...args);
	if (!args?.length) return msg;
	return msg.replace(/%s/g, () => args.shift() as string);
}
