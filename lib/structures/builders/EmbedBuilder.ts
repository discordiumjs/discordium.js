import {
	EmbedBuilder,
	type RGBTuple,
	type EmbedAuthorOptions,
	type RestOrArray,
	type EmbedFooterOptions,
} from '@discordjs/builders';
import type { APIEmbed, APIEmbedField } from 'discord-api-types/v10';

import BaseBuilder from './BaseBuilder';

/**
 * Represents an embed message component in a Discord message
 */
export default class Embed extends BaseBuilder {
	/**
	 * The internal embed builder instance
	 * @protected
	 */
	declare protected builder: EmbedBuilder;

	/**
	 * The raw data for this embed component
	 * @public
	 * @readonly
	 */
	declare public readonly data: APIEmbed;

	/**
	 * Creates a new embed instance
	 * @param data - Optional initial data for the embed
	 */
	public constructor(data?: APIEmbed) {
		// @ts-ignore
		super(new EmbedBuilder(data));
	}

	/**
	 * Methods for managing embed fields
	 */
	fields = {
		/**
		 * Sets the fields for this embed, replacing any existing fields
		 * @param fields - The fields to set
		 * @returns This embed instance
		 */
		set: (fields: RestOrArray<APIEmbedField>): this => {
			this.builder.setFields(...Embed.fieldFixer(fields));

			return this;
		},

		/**
		 * Adds fields to this embed
		 * @param fields - The fields to add
		 * @returns This embed instance
		 */
		add: (fields: RestOrArray<APIEmbedField>): this => {
			this.builder.addFields(...Embed.fieldFixer(fields));

			return this;
		},
		/**
		 * Fetches the fields of this embed.
		 * @returns An array of embed fields, or an empty array if none exist.
		 */
		fetch: (): APIEmbedField[] => {
			return this.data?.fields ?? [];
		}
	};

	/**
	 * Sets the author of this embed
	 * @param options - The author options
	 * @returns This embed instance
	 */
	public setAuthor(options: EmbedAuthorOptions): this {
		this.builder.setAuthor(options);

		return this;
	}

	/**
	 * Sets the color of this embed
	 * @param color - The color to set, as an RGB tuple or number
	 * @returns This embed instance
	 */
	public setColor(color: RGBTuple | number): this {
		this.builder.setColor(color);

		return this;
	}

	/**
	 * Sets the description of this embed
	 * @param desc - The description text
	 * @returns This embed instance
	 */
	public setDescription(desc: string): this {
		this.builder.setDescription(desc);

		return this;
	}

	/**
	 * Sets the footer of this embed
	 * @param footer - The footer options
	 * @returns This embed instance
	 */
	public setFooter(footer: EmbedFooterOptions): this {
		this.builder.setFooter(footer);

		return this;
	}

	/**
	 * Sets the image of this embed
	 * @param url - The URL of the image
	 * @returns This embed instance
	 */
	public setImage(url: URL | string): this {
		this.builder.setImage(url instanceof URL ? url.toString() : url);

		return this;
	}

	/**
	 * Sets the thumbnail of this embed
	 * @param url - The URL of the thumbnail
	 * @returns This embed instance
	 */
	public setThumbnail(url: URL | string): this {
		this.builder.setThumbnail(url instanceof URL ? url.toString() : url);

		return this;
	}

	/**
	 * Sets the timestamp of this embed
	 * @param timestamp - The timestamp to set
	 * @returns This embed instance
	 */
	public setTimestamp(timestamp?: Date | number): this {
		this.builder.setTimestamp(timestamp);

		return this;
	}

	/**
	 * Sets the title of this embed
	 * @param title - The title text
	 * @returns This embed instance
	 */
	public setTitle(title: string): this {
		this.builder.setTitle(title);

		return this;
	}

	/**
	 * Sets the URL of this embed
	 * @param url - The URL to set
	 * @returns This embed instance
	 */
	public setURL(url: URL | string): this {
		this.builder.setURL(url instanceof URL ? url.toString() : url);

		return this;
	}

	/**
	 * Converts this embed to a JSON object
	 * @returns The JSON representation of this embed
	 */
	public json(): APIEmbed {
		return this.builder.toJSON();
	}

	/**
	 * Processes and fixes embed field data
	 * @param fields - The fields to process
	 * @returns An array of processed embed fields
	 */
	static fieldFixer(fields: RestOrArray<APIEmbedField>): APIEmbedField[] {
		const fixed: APIEmbedField[] = [];

		for (const entry of fields) {
			if (entry && Array.isArray(entry)) return this.fieldFixer(entry);

			let data: APIEmbedField = {
				name: entry?.name,
				value: String(entry?.value),
				inline: Boolean(entry?.inline),
			};

			fixed.push(data);
		}

		return fixed;
	}
}
