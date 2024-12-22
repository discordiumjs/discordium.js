import { DiscordiumErrorCodes } from './ErrorCodes';

export const Messages = {
	[DiscordiumErrorCodes.ClientInvalidOption]: (prop: string, must: string) =>
		`The ${prop} option must be ${must}`,
	[DiscordiumErrorCodes.ClientInvalidProvidedShards]:
		'None of the provided shards were valid.',
	[DiscordiumErrorCodes.ClientMissingIntents]:
		'Valid intents must be provided for the Client.',
	[DiscordiumErrorCodes.ClientNotReady]: (action: string) =>
		`The client needs to be logged in to ${action}.`,

	[DiscordiumErrorCodes.TokenInvalid]: 'An invalid token was provided.',
	[DiscordiumErrorCodes.TokenMissing]:
		'Request to use token, but token was unavailable to the client.',
	[DiscordiumErrorCodes.ApplicationCommandPermissionsTokenMissing]:
		'Editing application command permissions requires an OAuth2 bearer token, but none was provided.',

	[DiscordiumErrorCodes.BitFieldInvalid]: (bit: string) =>
		`Invalid bitfield flag or number: ${bit}.`,

	[DiscordiumErrorCodes.ShardingNoShards]: 'No shards have been spawned.',
	[DiscordiumErrorCodes.ShardingInProcess]: 'Shards are still being spawned.',
	[DiscordiumErrorCodes.ShardingInvalidEvalBroadcast]:
		'Script to evaluate must be a function',
	[DiscordiumErrorCodes.ShardingShardNotFound]: (id: string) =>
		`Shard ${id} could not be found.`,
	[DiscordiumErrorCodes.ShardingAlreadySpawned]: (count: number) =>
		`Already spawned ${count} shards.`,
	[DiscordiumErrorCodes.ShardingProcessExists]: (id: string) =>
		`Shard ${id} already has an active process.`,
	[DiscordiumErrorCodes.ShardingWorkerExists]: (id: string) =>
		`Shard ${id} already has an active worker.`,
	[DiscordiumErrorCodes.ShardingReadyTimeout]: (id: string) =>
		`Shard ${id}'s Client took too long to become ready.`,
	[DiscordiumErrorCodes.ShardingReadyDisconnected]: (id: string) =>
		`Shard ${id}'s Client disconnected before becoming ready.`,
	[DiscordiumErrorCodes.ShardingReadyDied]: (id: string) =>
		`Shard ${id}'s process exited before its Client became ready.`,
	[DiscordiumErrorCodes.ShardingNoChildExists]: (id: string) =>
		`Shard ${id} has no active process or worker.`,
	[DiscordiumErrorCodes.ShardingShardMiscalculation]: (
		shard: number,
		guild: string,
		count: number
	) =>
		`Calculated invalid shard ${shard} for guild ${guild} with ${count} shards.`,

	[DiscordiumErrorCodes.ColorRange]:
		'Color must be within the range 0 - 16777215 (0xFFFFFF).',
	[DiscordiumErrorCodes.ColorConvert]: (color: string) =>
		`Unable to convert "${color}" to a number.`,

	[DiscordiumErrorCodes.InviteOptionsMissingChannel]:
		'A valid guild channel must be provided when GuildScheduledEvent is EXTERNAL.',

	[DiscordiumErrorCodes.InteractionCollectorError]: (reason: string) =>
		`Collector received no interactions before ending with reason: ${reason}`,

	[DiscordiumErrorCodes.FileNotFound]: (file: string) =>
		`File could not be found: ${file}`,

	[DiscordiumErrorCodes.UserNoDMChannel]: 'No DM Channel exists!',

	[DiscordiumErrorCodes.VoiceNotStageChannel]:
		'You are only allowed to do this in stage channels.',

	[DiscordiumErrorCodes.VoiceStateNotOwn]:
		'You cannot self-deafen/mute/request to speak on VoiceStates that do not belong to the ClientUser.',
	[DiscordiumErrorCodes.VoiceStateInvalidType]: (name: string) =>
		`${name} must be a boolean.`,

	[DiscordiumErrorCodes.ReqResourceType]:
		'The resource must be a string, Buffer or a valid file stream.',

	[DiscordiumErrorCodes.MessageBulkDeleteType]:
		'The messages must be an Array, Collection, or number.',
	[DiscordiumErrorCodes.MessageContentType]:
		'Message content must be a string.',
	[DiscordiumErrorCodes.MessageNonceRequired]:
		'Message nonce is required when enforceNonce is true.',
	[DiscordiumErrorCodes.MessageNonceType]:
		'Message nonce must be an integer or a string.',

	[DiscordiumErrorCodes.BanResolveId]: (ban: boolean = false) =>
		`Couldn't resolve the user id to ${ban ? 'ban' : 'unban'}.`,
	[DiscordiumErrorCodes.FetchBanResolveId]:
		"Couldn't resolve the user id to fetch the ban.",

	[DiscordiumErrorCodes.PruneDaysType]: 'Days must be a number',

	[DiscordiumErrorCodes.GuildChannelResolve]:
		'Could not resolve channel to a guild channel.',
	[DiscordiumErrorCodes.GuildVoiceChannelResolve]:
		'Could not resolve channel to a guild voice channel.',
	[DiscordiumErrorCodes.GuildChannelOrphan]:
		'Could not find a parent to this guild channel.',
	[DiscordiumErrorCodes.GuildChannelUnowned]:
		"The fetched channel does not belong to this manager's guild.",
	[DiscordiumErrorCodes.GuildOwned]: 'Guild is owned by the client.',
	[DiscordiumErrorCodes.GuildMembersTimeout]: "Members didn't arrive in time.",
	[DiscordiumErrorCodes.GuildUncachedMe]:
		'The client user as a member of this guild is uncached.',
	[DiscordiumErrorCodes.ChannelNotCached]:
		'Could not find the channel where this message came from in the cache!',
	[DiscordiumErrorCodes.StageChannelResolve]:
		'Could not resolve channel to a stage channel.',
	[DiscordiumErrorCodes.GuildScheduledEventResolve]:
		'Could not resolve the guild scheduled event.',
	[DiscordiumErrorCodes.FetchOwnerId]: (type: string) =>
		`Couldn't resolve the ${type} ownerId to fetch the ${type} member.`,

	[DiscordiumErrorCodes.InvalidType]: (
		name: string,
		expected: string,
		an: boolean = false
	) => `Supplied ${name} is not a${an ? 'n' : ''} ${expected}.`,
	[DiscordiumErrorCodes.InvalidElement]: (
		type: string,
		name: string,
		elem: string
	) => `Supplied ${type} ${name} includes an invalid element: ${elem}`,

	[DiscordiumErrorCodes.MessageThreadParent]:
		'The message was not sent in a guild text or announcement channel',
	[DiscordiumErrorCodes.MessageExistingThread]:
		'The message already has a thread',
	[DiscordiumErrorCodes.ThreadInvitableType]: (type: string) =>
		`Invitable cannot be edited on ${type}`,
	[DiscordiumErrorCodes.NotAThreadOfParent]:
		'Provided ThreadChannelResolvable is not a thread of the parent channel.',

	[DiscordiumErrorCodes.WebhookMessage]:
		'The message was not sent by a webhook.',
	[DiscordiumErrorCodes.WebhookTokenUnavailable]:
		'This action requires a webhook token, but none is available.',
	[DiscordiumErrorCodes.WebhookURLInvalid]:
		'The provided webhook URL is not valid.',
	[DiscordiumErrorCodes.WebhookApplication]:
		'This message webhook belongs to an application and cannot be fetched.',
	[DiscordiumErrorCodes.MessageReferenceMissing]:
		'The message does not reference another message',

	[DiscordiumErrorCodes.EmojiType]:
		'Emoji must be a string or GuildEmoji/ReactionEmoji',
	[DiscordiumErrorCodes.EmojiManaged]: 'Emoji is managed and has no Author.',
	[DiscordiumErrorCodes.MissingManageGuildExpressionsPermission]: (
		guild: string
	) =>
		`Client must have Manage Guild Expressions permission in guild ${guild} to see emoji authors.`,

	[DiscordiumErrorCodes.NotGuildSticker]:
		'Sticker is a standard (non-guild) sticker and has no author.',

	[DiscordiumErrorCodes.ReactionResolveUser]:
		"Couldn't resolve the user id to remove from the reaction.",

	[DiscordiumErrorCodes.InviteResolveCode]:
		'Could not resolve the code to fetch the invite.',

	[DiscordiumErrorCodes.InviteNotFound]: 'Could not find the requested invite.',

	[DiscordiumErrorCodes.DeleteGroupDMChannel]:
		"Bots don't have access to Group DM Channels and cannot delete them",
	[DiscordiumErrorCodes.FetchGroupDMChannel]:
		"Bots don't have access to Group DM Channels and cannot fetch them",

	[DiscordiumErrorCodes.MemberFetchNonceLength]:
		'Nonce length must not exceed 32 characters.',

	[DiscordiumErrorCodes.GlobalCommandPermissions]:
		'Permissions for global commands may only be fetched or modified by providing a GuildResolvable ' +
		"or from a guild's application command manager.",
	[DiscordiumErrorCodes.GuildUncachedEntityResolve]: (type: string) =>
		`Cannot resolve ${type} from an arbitrary guild, provide an id instead`,

	[DiscordiumErrorCodes.InteractionAlreadyReplied]:
		'The reply to this interaction has already been sent or deferred.',
	[DiscordiumErrorCodes.InteractionNotReplied]:
		'The reply to this interaction has not been sent or deferred.',

	[DiscordiumErrorCodes.CommandInteractionOptionNotFound]: (name: string) =>
		`Required option "${name}" not found.`,
	[DiscordiumErrorCodes.CommandInteractionOptionType]: (
		name: string,
		type: string,
		expected: string
	) => `Option "${name}" is of type: ${type}; expected ${expected}.`,
	[DiscordiumErrorCodes.CommandInteractionOptionEmpty]: (
		name: string,
		type: string
	) =>
		`Required option "${name}" is of type: ${type}; expected a non-empty value.`,
	[DiscordiumErrorCodes.CommandInteractionOptionNoSubcommand]:
		'No subcommand specified for interaction.',
	[DiscordiumErrorCodes.CommandInteractionOptionNoSubcommandGroup]:
		'No subcommand group specified for interaction.',
	[DiscordiumErrorCodes.CommandInteractionOptionInvalidChannelType]: (
		name: string,
		type: string,
		expected: string
	) =>
		`The type of channel of the option "${name}" is: ${type}; expected ${expected}.`,
	[DiscordiumErrorCodes.AutocompleteInteractionOptionNoFocusedOption]:
		'No focused option for autocomplete interaction.',

	[DiscordiumErrorCodes.ModalSubmitInteractionFieldNotFound]: (
		customId: string
	) => `Required field with custom id "${customId}" not found.`,
	[DiscordiumErrorCodes.ModalSubmitInteractionFieldType]: (
		customId: string,
		type: string,
		expected: string
	) =>
		`Field with custom id "${customId}" is of type: ${type}; expected ${expected}.`,

	[DiscordiumErrorCodes.InvalidMissingScopes]:
		'At least one valid scope must be provided for the invite',
	[DiscordiumErrorCodes.InvalidScopesWithPermissions]:
		'Permissions cannot be set without the bot scope.',

	[DiscordiumErrorCodes.NotImplemented]: (what: string, name: string) =>
		`Method ${what} not implemented on ${name}.`,

	[DiscordiumErrorCodes.SweepFilterReturn]:
		'The return value of the sweepFilter function was not false or a Function',

	[DiscordiumErrorCodes.GuildForumMessageRequired]:
		'You must provide a message to create a guild forum thread',

	[DiscordiumErrorCodes.EntitlementCreateInvalidOwner]:
		'You must provide either a guild or a user to create an entitlement, but not both',

	[DiscordiumErrorCodes.BulkBanUsersOptionEmpty]:
		'Option "users" array or collection is empty',

	[DiscordiumErrorCodes.PollAlreadyExpired]: 'This poll has already expired.',
};
