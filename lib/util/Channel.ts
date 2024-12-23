'use strict';

import { lazy } from '@discordjs/util';
import { Client } from '../client/Client';
import { ChannelType } from 'discord-api-types/v10';
import CategoryChannel from '../structures/CategoryChannel';
import DMChannel from '../structures/DMChannel';
import AnnouncementChannel from '../structures/AnnouncementChannel';
import StageChannel from '../structures/StageChannel';
import TextChannel from '../structures/TextChannel';
import ThreadChannel from '../structures/ThreadChannel';
import VoiceChannel from '../structures/VoiceChannel';
import DirectoryChannel from '../structures/DirectoryChannel';
import PartialGroupDMChannel from '../structures/PartialGroupDMChannel';
import ForumChannel from '../structures/ForumChannel';
import MediaChannel from '../structures/MediaChannel';
import DataManager from '../managers/DataManager';


class BaseChannel {
    id: string;
    name: string;
    type: string;
  
    constructor(id: string, name: string, type: string) {
      this.id = id;
      this.name = name;
      this.type = type;
    }
  
  }
  
  class ChannelDataManager extends DataManager {
      constructor(client: Client) {
        super(client, BaseChannel);
      }
  }

const channelCache = new ChannelDataManager(this);

/**
 * Extra options for creating a channel.
 * @typedef {Object} CreateChannelOptions
 */
/**
 * Creates a discord.js channel from data received from the API.
 * @param {Client} client The client
 * @param {APIChannel} data The data of the channel to create
 * @param {Guild} [guild] The guild where this channel belongs
 * @param {CreateChannelOptions} [extras] Extra information to supply for creating this channel
 * @returns {BaseChannel} Any kind of channel.
 * @ignore
 */
function createChannel(client, data, guild, { allowUnknownGuild } = {allowUnknownGuild: Boolean}) {
  let channel = channelCache.resolve(data.id);
  if (channel) return channel;

  if (!data.guild_id && !guild) {
    if ((data.recipients && data.type !== ChannelType.GroupDM) || data.type === ChannelType.DM) {
      channel = new DMChannel(client, data);
    } else if (data.type === ChannelType.GroupDM) {
      channel = new PartialGroupDMChannel(client, data);
    }
  } else {
    guild ??= client.guilds.cache.get(data.guild_id);

    if (guild || allowUnknownGuild) {
      switch (data.type) {
        case ChannelType.GuildText: {
          channel = new TextChannel(guild, data, client);
          break;
        }
        case ChannelType.GuildVoice: {
          channel = new VoiceChannel(guild, data, client);
          break;
        }
        case ChannelType.GuildCategory: {
          channel = new CategoryChannel(guild, data, client);
          break;
        }
        case ChannelType.GuildAnnouncement: {
          channel = new AnnouncementChannel(guild, data, client);
          break;
        }
        case ChannelType.GuildStageVoice: {
          channel = new StageChannel(guild, data, client);
          break;
        }
        case ChannelType.AnnouncementThread:
        case ChannelType.PublicThread:
        case ChannelType.PrivateThread: {
          channel = new ThreadChannel(guild, data, client);
          if (!allowUnknownGuild) channel.parent?.threads.set(channel.id, channel);
          break;
        }
        case ChannelType.GuildDirectory:
          channel = new DirectoryChannel(guild, data, client);
          break;
        case ChannelType.GuildForum:
          channel = new ForumChannel(guild, data, client);
          break;
        case ChannelType.GuildMedia:
          channel = new MediaChannel(guild, data, client);
          break;
      }
      if (channel && !allowUnknownGuild) guild.channels?.cache.set(channel.id, channel);
    }
  }

  //if (channel) channelCache.set(data.id, channel);
  return channel;
}

/**
 * Transforms an API guild forum tag to camel-cased guild forum tag.
 * @param {APIGuildForumTag} tag The tag to transform
 * @returns {GuildForumTag}
 * @ignore
 */
function transformAPIGuildForumTag(tag) {
  return {
    id: tag.id,
    name: tag.name,
    moderated: tag.moderated,
    emoji:
      (tag.emoji_id ?? tag.emoji_name)
        ? {
            id: tag.emoji_id,
            name: tag.emoji_name,
          }
        : null,
  };
}

/**
 * Transforms a camel-cased guild forum tag to an API guild forum tag.
 * @param {GuildForumTag} tag The tag to transform
 * @returns {APIGuildForumTag}
 * @ignore
 */
function transformGuildForumTag(tag) {
  return {
    id: tag.id,
    name: tag.name,
    moderated: tag.moderated,
    emoji_id: tag.emoji?.id ?? null,
    emoji_name: tag.emoji?.name ?? null,
  };
}

/**
 * Transforms an API guild forum default reaction object to a
 * camel-cased guild forum default reaction object.
 * @param {APIGuildForumDefaultReactionEmoji} defaultReaction The default reaction to transform
 * @returns {DefaultReactionEmoji}
 * @ignore
 */
function transformAPIGuildDefaultReaction(defaultReaction) {
  return {
    id: defaultReaction.emoji_id,
    name: defaultReaction.emoji_name,
  };
}

/**
 * Transforms a camel-cased guild forum default reaction object to an
 * API guild forum default reaction object.
 * @param {DefaultReactionEmoji} defaultReaction The default reaction to transform
 * @returns {APIGuildForumDefaultReactionEmoji}
 * @ignore
 */
function transformGuildDefaultReaction(defaultReaction) {
  return {
    emoji_id: defaultReaction.id,
    emoji_name: defaultReaction.name,
  };
}

export {
  createChannel,
  transformAPIGuildForumTag,
  transformGuildForumTag,
  transformAPIGuildDefaultReaction,
  transformGuildDefaultReaction,
};