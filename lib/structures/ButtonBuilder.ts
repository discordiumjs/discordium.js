import { ButtonBuilder } from '@discordjs/builders';
import {
	APIButtonComponent,
	APIMessageComponentEmoji,
	ButtonStyle,
	Snowflake,
} from 'discord-api-types/v10';

import BaseBuilder from './BaseBuilder';

/**
 * Represents an interactive button component in a Discord message
 */
export default class Button extends BaseBuilder {
	/**
	 * The internal button builder instance
	 * @protected
	 */
	declare protected builder: ButtonBuilder;

	/**
	 * The raw data for this button component
	 * @public
	 * @readonly
	 */
	declare public readonly data: Partial<APIButtonComponent>;

	/**
	 * Creates a new button instance
	 * @param data - Optional initial data for the button
	 */
	public constructor(data?: Partial<APIButtonComponent>) {
		super(new ButtonBuilder(data));
	}

	/**
	 * Whether this button is currently disabled
	 * @returns True if the button is disabled, false otherwise
	 */
	public get isDisabled(): boolean {
		return Boolean(this.data?.disabled);
	}

	/**
	 * Sets the custom ID of this button
	 * @param id - The custom ID to set
	 * @returns This button instance
	 */
	public setId(id: string): this {
		this.builder.setCustomId(id);

		return this;
	}

	/**
	 * Sets whether this button is disabled
	 * @param status - Whether to disable the button
	 * @returns This button instance
	 */
	public setDisabled(status: boolean): this {
		this.builder.setDisabled(status);

		return this;
	}

	/**
	 * Sets the emoji displayed on this button
	 * @param emoji - The emoji to display
	 * @returns This button instance
	 */
	public setEmoji(emoji: APIMessageComponentEmoji): this {
		this.builder.setEmoji(emoji);

		return this;
	}

	/**
	 * Sets the text label of this button
	 * @param label - The label text to display
	 * @returns This button instance
	 */
	public setLabel(label: string): this {
		this.builder.setLabel(label);

		return this;
	}

	/**
	 * Sets the style of this button
	 * @param style - The button style to use
	 * @returns This button instance
	 */
	public setStyle(style: ButtonStyle): this {
		this.builder.setStyle(style);

		return this;
	}

	/**
	 * Sets the URL that this button links to
	 * @param url - The URL to link to
	 * @returns This button instance
	 */
	public setURL(url: URL | string): this {
		this.builder.setURL(url instanceof URL ? url.toString() : url);

		return this;
	}

	/**
	 * Sets the SKU ID for this button
	 * @param id - The SKU ID to set
	 * @returns This button instance
	 */
	public setSKU(id: Snowflake): this {
		this.builder.setSKUId(id);

		return this;
	}

	/**
	 * Returns the JSON representation of this button
	 * @returns The raw API data for this button component
	 */
	public json(): APIButtonComponent {
		return this.builder.toJSON();
	}
}
