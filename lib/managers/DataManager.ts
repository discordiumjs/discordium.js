import BaseManager from './BaseManager';
import {
	DiscordiumError,
	DiscordiumErrorCodes,
	JSONErrorCodes,
} from '../errors';
import type { Snowflake } from 'discord-api-types/v10';
import type { Collection } from '@discordjs/collection';

/**
 * Manages the API methods of a data model along with a collection of instances.
 * @extends {BaseManager}
 * @abstract
 */
export default abstract class DataManager extends BaseManager {
	/**
	 * The data structure belonging to this manager.
	 * @name DataManager#holds
	 * @type {Function}
	 * @private
	 * @readonly
	 */
	private readonly holds: Function;

	/**
	 * Creates an instance of DataManager.
	 * @param {Client} client - The client instance that this manager belongs to.
	 * @param {Function} holds - The data structure that this manager holds.
	 */
	public constructor(client: Client, holds: Function) {
		super(client);
		this.holds = holds;
	}

	/**
	 * The cache of items for this manager.
	 * @type {Collection}
	 * @abstract
	 * @throws {DiscordiumError} Throws an error if not implemented.
	 */
	public get cache() {
		throw new DiscordiumError(
			DiscordiumErrorCodes.NotImplemented,
			'get cache',
			this.constructor.name
		);
	}

	/**
	 * Resolves a data entry to a data Object.
	 * @param {string|Object} idOrInstance - The id or instance of something in this Manager.
	 * @returns {?Object} An instance from this Manager or null if not found.
	 */
	public resolve(idOrInstance: string | object): object | null {
		if (idOrInstance instanceof this.holds) return idOrInstance;
		if (typeof idOrInstance === 'string')
			//@ts-ignore
			return this.cache.get(idOrInstance) ?? null;
		return null;
	}

	/**
	 * Resolves a data entry to an instance id.
	 * @param {string|Object} idOrInstance - The id or instance of something in this Manager.
	 * @returns {?Snowflake} The id of the instance or null if not found.
	 */
	public resolveId(idOrInstance: string | object): Snowflake | null {
		if (idOrInstance instanceof this.holds) return idOrInstance.id;
		if (typeof idOrInstance === 'string') return idOrInstance;
		return null;
	}

	/**
	 * Returns the cache of this manager.
	 * @returns {Collection} The cache of items for this manager.
	 */
	public valueOf(): Collection {
		return this.cache;
	}
}
