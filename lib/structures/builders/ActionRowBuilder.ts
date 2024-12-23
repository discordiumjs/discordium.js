import {
	ActionRowBuilder,
	type RestOrArray,
	type AnyComponentBuilder,
} from '@discordjs/builders';
import type {
	APIActionRowComponent,
	APIActionRowComponentTypes,
} from 'discord-api-types/v10';
import { isJSONEncodable } from '@discordjs/util';

import BaseBuilder from './BaseBuilder';

/**
 * Represents a row of interactive components in a Discord message.
 * @template ComponentType - The type of components this action row can contain.
 */
export default class ActionRow<
	ComponentType extends AnyComponentBuilder,
> extends BaseBuilder {
	/**
	 * The internal action row builder instance.
	 * @protected
	 */
	declare protected builder: ActionRowBuilder<ComponentType>;

	/**
	 * The raw data for this action row component.
	 * @public
	 * @readonly
	 */
	declare public readonly data: Partial<
		APIActionRowComponent<APIActionRowComponentTypes>
	>;

	/**
	 * Creates a new action row instance.
	 * @param options - The options for this action row.
	 * @param options.components - The components to add to this action row.
	 * @param options.data - Additional data for the action row.
	 */
	public constructor(
		options?: Partial<APIActionRowComponent<APIActionRowComponentTypes>>
	) {
		super(new ActionRowBuilder<ComponentType>(options));
	}

	/**
	 * Represents the components of this action row.
	 * @type {Object}
	 * @property {function(...components: RestOrArray<ComponentType>): this} set -
	 * Sets the components of this action row, replacing any existing ones.
	 * @property {function(...components: RestOrArray<ComponentType>): this} add -
	 * Adds one or more components to this action row.
	 * @property {function(): APIActionRowComponentTypes[]} fetch -
	 * Fetches the current components of this action row.
	 */
	public components: object = {
		/**
		 * Sets the components of this action row, replacing any existing ones.
		 * @param components - The component(s) to set.
		 * @returns This action row instance.
		 */
		set: (...components: RestOrArray<ComponentType>): this => {
			this.builder.setComponents(...components);

			return this;
		},
		/**
		 * Adds one or more components to this action row.
		 * @param components - The component(s) to add.
		 * @returns This action row instance.
		 */
		add: (...components: RestOrArray<ComponentType>): this => {
			this.builder.addComponents(...components);

			return this;
		},
		/**
		 * Fetches the current components of this action row.
		 * @returns An array of currently set components.
		 */
		fetch: (): APIActionRowComponentTypes[] => {
			return this.data.components ?? [];
		},
	};

	/**
	 * Returns the JSON representation of this action row.
	 * @returns The raw API data for this action row component.
	 */
	public json(): APIActionRowComponent<ReturnType<ComponentType['toJSON']>> {
		return this.builder.toJSON();
	}

	/**
	 * Creates a new action row builder from JSON data.
	 * @param other - The other data to create the action row from.
	 * @returns A new instance of ActionRow.
	 */
	static from<T extends AnyComponentBuilder>(
		other: ActionRow<T> | APIActionRowComponent<APIActionRowComponentTypes>
	): ActionRow<T> {
		// @ts-ignore
		return new this(isJSONEncodable(other) ? other.toJSON() : other);
	}
}
