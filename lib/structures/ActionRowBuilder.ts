import {
	ActionRowBuilder,
	type RestOrArray,
	type AnyComponentBuilder,
} from '@discordjs/builders';
import type {
	APIActionRowComponent,
	APIActionRowComponentTypes,
} from 'discord-api-types/v10';

import BaseBuilder from './BaseBuilder';

/**
 * Represents a row of interactive components in a Discord message
 * @template ComponentType - The type of components this action row can contain
 */
export default class ActionRow<
	ComponentType extends AnyComponentBuilder,
> extends BaseBuilder {
	/**
	 * The internal action row builder instance
	 * @protected
	 */
	declare protected builder: ActionRowBuilder<ComponentType>;

	/**
	 * The raw data for this action row component
	 * @public
	 * @readonly
	 */
	declare public readonly data: Partial<
		APIActionRowComponent<APIActionRowComponentTypes>
	>;

	/**
	 * Creates a new action row instance
	 * @param param0 - The options for this action row
	 * @param param0.components - The components to add to this action row
	 * @param param0.data - Additional data for the action row
	 */
	public constructor(
		options?: Partial<APIActionRowComponent<APIActionRowComponentTypes>>
	) {
		super(new ActionRowBuilder<ComponentType>(options));
	}

	/**
	 * Sets the components of this action row, replacing any existing ones
	 * @param components - The component(s) to set
	 * @returns This action row instance
	 */
	public set(...components: RestOrArray<ComponentType>): this {
		this.builder.setComponents(...components);

		return this;
	}

	/**
	 * Adds one or more components to this action row
	 * @param components - The component(s) to add
	 * @returns This action row instance
	 */
	public add(...components: RestOrArray<ComponentType>): this {
		this.builder.addComponents(...components);

		return this;
	}

	/**
	 * Returns the JSON representation of this action row
	 * @returns The raw API data for this action row component
	 */
	public json(): APIActionRowComponent<ReturnType<ComponentType['toJSON']>> {
		return this.builder.toJSON();
	}
}
