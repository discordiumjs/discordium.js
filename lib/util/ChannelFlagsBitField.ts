import { ChannelFlags } from 'discord-api-types/v10';
import BitField from './BitField';

/**
 * Data structure that makes it easy to interact with a {@link BaseChannel#flags} bitfield.
 * @extends {BitField}
 */
export default class ChannelFlagsBitField extends BitField {
  /**
   * Numeric guild channel flags.
   * @type {typeof ChannelFlags}
   */
  static Flags: typeof ChannelFlags = ChannelFlags;
}