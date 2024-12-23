import type { Stream } from 'stream';
import { basename } from '../../util/Util';

import BaseBuilder from './BaseBuilder';
import { isJSONEncodable } from '@discordjs/util';

interface AttachmentData {
	attachment?: Buffer | Stream;
	name?: string;
	description?: string;
}

/**
 * Represents an attachment builder.
 * This class is responsible for constructing attachment objects
 * with properties such as file, name, and description.
 */
export default class Attachment extends BaseBuilder {
	/**
	 * A placeholder for the builder, currently set to null.
	 * @protected
	 */
	declare protected builder: null;

	/**
	 * The data associated with the attachment, including the file,
	 * name, and description.
	 * @public
	 * @readonly
	 */
	declare public readonly data: AttachmentData;

	/**
	 * Creates an instance of Attachment.
	 * @param {AttachmentData} [data] Extra data for the attachment.
	 */
	public constructor(data?: AttachmentData) {
		super();
		this.data = data ?? {};
	}

	/**
	 * Sets the description of this attachment.
	 * @param {string} description The description of the file.
	 * @returns {this} This attachment instance for method chaining.
	 */
	public setDescription(description: string): this {
		this.data.description = description;
		return this;
	}

	/**
	 * Sets the file of this attachment.
	 * @param {Buffer | Stream} attachment The file to attach.
	 * @returns {this} This attachment instance for method chaining.
	 */
	public setFile(attachment: Buffer | Stream): this {
		this.data.attachment = attachment;
		return this;
	}

	/**
	 * Sets the name of this attachment.
	 * @param {string} name The name of the file.
	 * @returns {this} This attachment instance for method chaining.
	 */
	public setName(name: string): this {
		this.data.name = name;
		return this;
	}

	/**
	 * Sets whether this attachment is a spoiler.
	 * @param {boolean} [spoiler=true] Whether the attachment should be marked as a spoiler.
	 * @returns {this} This attachment instance for method chaining.
	 */
	public setSpoiler(spoiler: boolean = true): this {
		if (spoiler === this.spoiler) return this;

		if (!spoiler) {
			while (this.spoiler) {
				this.data.name = this.data.name!.slice('SPOILER_'.length);
			}
			return this;
		}
		this.data.name = `SPOILER_${this.data.name}`;
		return this;
	}

	/**
	 * Whether or not this attachment has been marked as a spoiler.
	 * @type {boolean}
	 * @readonly
	 */
	public get spoiler(): boolean {
		return basename(this.data.name!).startsWith('SPOILER_');
	}

	/**
	 * Returns the JSON representation of the attachment data.
	 * @returns {AttachmentData} The attachment data.
	 */
	public json(): AttachmentData {
		return this.data;
	}

	/**
	 * Makes a new builder instance from a preexisting attachment structure.
	 * @param {Attachment | AttachmentData} other The builder to construct a new instance from.
	 * @returns {Attachment} A new instance of Attachment.
	 */
	static from(other: Attachment | AttachmentData): Attachment {
		// @ts-ignore
		return new this.constructor(isJSONEncodable(other) ? other.toJSON() : other);
	}
}
