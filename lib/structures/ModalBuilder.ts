import { ModalBuilder } from '@discordjs/builders';
import type { APIModalInteractionResponseCallbackData } from 'discord-api-types/v10';

import BaseBuilder from './BaseBuilder';

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
}
