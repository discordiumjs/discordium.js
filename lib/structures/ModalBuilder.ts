import {
	ModalBuilder,
	type RestOrArray,
	type ModalActionRowComponentBuilder,
} from '@discordjs/builders';
import type {
	APIActionRowComponent,
	APIModalActionRowComponent,
	APIModalInteractionResponseCallbackData,
} from 'discord-api-types/v10';

import BaseBuilder from './BaseBuilder';
import ActionRow from './ActionRowBuilder';

/**
 * Represents a modal dialog component in a Discord interaction
 */
export default class Modal extends BaseBuilder {
	/**
	 * The internal modal builder instance
	 * @protected
	 */
	declare protected builder: ModalBuilder;

	/**
	 * The raw data for this modal component
	 * @public
	 * @readonly
	 */
	declare public readonly data: Partial<APIModalInteractionResponseCallbackData>;

	/**
	 * Creates a new modal instance
	 * @param options - Optional initial data for the modal
	 */
	public constructor(
		options?: Partial<APIModalInteractionResponseCallbackData>
	) {
		super(new ModalBuilder(options));
	}

	/**
	 * Methods for managing modal components
	 */
	components = {
		/**
		 * Sets the components for this modal, replacing any existing ones
		 * @param comps - The component(s) to set
		 * @returns This modal instance
		 */
		set: (
			...comps: RestOrArray<
				| ActionRow<ModalActionRowComponentBuilder>
				| APIActionRowComponent<APIModalActionRowComponent>
			>
		): this => {
			// @ts-ignore
			this.builder.setComponents(...comps);

			return this;
		},

		/**
		 * Adds one or more components to this modal
		 * @param comps - The component(s) to add
		 * @returns This modal instance
		 */
		add: (
			...comps: RestOrArray<
				| ActionRow<ModalActionRowComponentBuilder>
				| APIActionRowComponent<APIModalActionRowComponent>
			>
		): this => {
			// @ts-ignore
			this.builder.addComponents(...comps);

			return this;
		},
	};

	/**
	 * Sets the custom ID of this modal
	 * @param id - The custom ID to set
	 * @returns This modal instance
	 */
	public setId(id: string): this {
		this.builder.setCustomId(id);

		return this;
	}

  /**
   * Sets the title of this modal
   * @param title - The title to set
   * @returns This modal instance
   */
  public setTitle(title: string): this {
    this.builder.setTitle(title);

    return this;
  }

	/**
	 * Converts this modal to a JSON object
	 * @returns The JSON representation of this modal
	 */
	public json(): APIModalInteractionResponseCallbackData {
		return this.builder.toJSON();
	}
}
