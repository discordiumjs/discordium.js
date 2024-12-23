import { channelLink, channelMention } from '@discordjs/formatters';
import { DiscordSnowflake } from '@sapphire/snowflake';
import { ChannelType, Routes } from 'discord-api-types/v10';
import Base from './Base';
import ChannelFlagsBitField from '../util/ChannelFlagsBitField';
import { ThreadChannelTypes } from '../util/Constants';

/**
 * Represents any channel on Discord.
 * @extends {Base}
 * @abstract
 */
export default class BaseChannel extends Base {
  /**
   * The type of the channel.
   * @type {ChannelType}
   */
  public readonly type: ChannelType;

  /**
   * The flags that are applied to the channel.
   * @type {Readonly<ChannelFlagsBitField>}
   */
  public flags: Readonly<ChannelFlagsBitField>;

  /**
   * The unique identifier for the channel.
   * @type {Snowflake}
   */
  public id!: string;

  /**
   * Creates an instance of BaseChannel.
   * @param client - The client that instantiated this channel.
   * @param data - The data for the channel.
   * @param immediatePatch - Whether to immediately patch the channel data (default: true).
   */
  public constructor(client: any, data: any, immediatePatch: boolean = true) {
    super(client);

    /**
     * The type of the channel
     * @type {ChannelType}
     */
    this.type = data.type;

    if (data && immediatePatch) this._patch(data);
  }

  /**
   * Patches the channel with new data.
   * @param data - The data to patch the channel with.
   */
  protected _patch(data: any) {
    if ('flags' in data) {
      this.flags = new ChannelFlagsBitField(data.flags).freeze();
    } else {
      this.flags ??= new ChannelFlagsBitField().freeze();
    }

    /**
     * The channel's id
     * @type {Snowflake}
     */
    this.id = data.id;
  }

  /**
   * The timestamp the channel was created at
   * @type {number}
   * @readonly
   */
  public get createdTimestamp(): number {
    return DiscordSnowflake.timestampFrom(this.id);
  }

  /**
   * The time the channel was created at
   * @type {Date}
   * @readonly
   */
  public get createdAt(): Date {
    return new Date(this.createdTimestamp);
  }

  /**
   * The URL to the channel
   * @type {string}
   * @readonly
   */
  public get url(): string {
    return this.isDMBased() ? channelLink(this.id) : channelLink(this.id, this.guildId);
  }

  /**
   * Whether this Channel is a partial
   * <info>This is always false outside of DM channels.</info>
   * @type {boolean}
   * @readonly
   */
  public get partial(): boolean {
    return false;
  }

  /**
   * When concatenated with a string, this automatically returns the channel's mention instead of the Channel object.
   * @returns {string} The mention of the channel.
   * @example
   * // Logs: Hello from <#123456789012345678>!
   * console.log(`Hello from ${channel}!`);
   */
  public toString(): string {
    return channelMention(this.id);
  }

  /**
   * Deletes this channel.
   * @returns {Promise<this>} A promise that resolves to the deleted channel.
   * @example
   * // Delete the channel
   * channel.delete()
   *   .then(console.log)
   *   .catch(console.error);
   */
  public async delete(): Promise<this> {
    await this.client.rest.delete(Routes.channel(this.id));
    return this;
  }

  /**
   * Fetches this channel.
   * @param {boolean} [force=true] Whether to skip the cache check and request the API.
   * @returns {Promise<BaseChannel>} A promise that resolves to the fetched channel.
   */
  public fetch(force: boolean = true): Promise<BaseChannel> {
    return this.client.channels.fetch(this.id, { force });
  }

  /**
   * Indicates whether this channel is a {@link ThreadChannel}.
   * @returns {boolean} True if the channel is a thread, false otherwise.
   */
  public isThread(): boolean {
    return ThreadChannelTypes.includes(this.type);
  }

  /**
   * Indicates whether this channel is {@link TextBasedChannels text-based}.
   * @returns {boolean} True if the channel is text-based, false otherwise.
   */
  public isTextBased(): boolean {
    return 'messages' in this;
  }

  /**
   * Indicates whether this channel is DM-based (either a {@link DMChannel} or a {@link PartialGroupDMChannel}).
   * @returns {boolean} True if the channel is DM-based, false otherwise.
   */
  public isDMBased(): boolean {
    return [ChannelType.DM, ChannelType.GroupDM].includes(this.type);
  }

  /**
   * Indicates whether this channel is {@link BaseGuildVoiceChannel voice-based}.
   * @returns {boolean} True if the channel is voice-based, false otherwise.
   */
  public isVoiceBased(): boolean {
    return 'bitrate' in this;
  }

  /**
   * Indicates whether this channel is {@link ThreadOnlyChannel thread-only}.
   * @returns {boolean} True if the channel is thread-only, false otherwise.
   */
  public isThreadOnly(): boolean {
    return 'availableTags' in this;
  }

  /**
   * Indicates whether this channel is sendable.
   * @returns {boolean} True if the channel is sendable, false otherwise.
   */
  public isSendable(): boolean {
    return 'send' in this;
  }

  /**
   * Converts the channel to a JSON object.
   * @param {...any} props - Additional properties to include in the JSON representation.
   * @returns {any} The JSON representation of the channel.
   */
  public toJSON(...props: any[]): any {
    return super.toJSON({ createdTimestamp: true }, ...props);
  }
}