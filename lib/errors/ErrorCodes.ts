/**
 * Discord API Error Codes
 * Contains all possible JSON error codes that the Discord API can return
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-error-codes}
 * @enum {number}
 */
export enum JSONErrorCodes {
    /** General error (0) */
    GeneralError = 0,
    /** Unknown account (10001) */
    UnknownAccount = 10001,
    /** Unknown application (10002) */
    UnknownApplication = 10002,
    /** Unknown channel (10003) */
    UnknownChannel = 10003,
    /** Unknown guild (10004) */
    UnknownGuild = 10004,
    /** Unknown integration (10005) */
    UnknownIntegration = 10005,
    /** Unknown invite (10006) */
    UnknownInvite = 10006,
    /** Unknown member (10007) */
    UnknownMember = 10007,
    /** Unknown message (10008) */
    UnknownMessage = 10008,
    /** Unknown permission overwrite (10009) */
    UnknownPermissionOverwrite = 10009,
    /** Unknown provider (10010) */
    UnknownProvider = 10010,
    /** Unknown role (10011) */
    UnknownRole = 10011,
    /** Unknown token (10012) */
    UnknownToken = 10012,
    /** Unknown user (10013) */
    UnknownUser = 10013,
    /** Unknown emoji (10014) */
    UnknownEmoji = 10014,
    /** Unknown webhook (10015) */
    UnknownWebhook = 10015,
    /** Unknown webhook service (10016) */
    UnknownWebhookService = 10016,
    /** Unknown session (10020) */
    UnknownSession = 10020,
    /** Unknown ban (10026) */
    UnknownBan = 10026,
    /** Unknown SKU (10027) */
    UnknownSku = 10027,
    /** Unknown store listing (10028) */
    UnknownStoreListing = 10028,
    /** Unknown entitlement (10029) */
    UnknownEntitlement = 10029,
    /** Unknown build (10030) */
    UnknownBuild = 10030,
    /** Unknown lobby (10031) */
    UnknownLobby = 10031,
    /** Unknown branch (10032) */
    UnknownBranch = 10032,
    /** Unknown store directory layout (10033) */
    UnknownStoreDirectoryLayout = 10033,
    /** Unknown redistributable (10036) */
    UnknownRedistributable = 10036,
    /** Unknown gift code (10038) */
    UnknownGiftCode = 10038,
    /** Unknown stream (10049) */
    UnknownStream = 10049,
    /** Unknown premium server subscribe cooldown (10050) */
    UnknownPremiumServerSubscribeCooldown = 10050,
    /** Unknown guild template (10057) */
    UnknownGuildTemplate = 10057,
    /** Unknown discoverable server category (10059) */
    UnknownDiscoverableServerCategory = 10059,
    /** Unknown sticker (10060) */
    UnknownSticker = 10060,
    /** Unknown interaction (10062) */
    UnknownInteraction = 10062,
    /** Unknown application command (10063) */
    UnknownApplicationCommand = 10063,
    /** Unknown application command permissions (10066) */
    UnknownApplicationCommandPermissions = 10066,
    /** Unknown stage instance (10067) */
    UnknownStageInstance = 10067,
    /** Unknown guild member verification form (10068) */
    UnknownGuildMemberVerificationForm = 10068,
    /** Unknown guild welcome screen (10069) */
    UnknownGuildWelcomeScreen = 10069,
    /** Unknown guild scheduled event (10070) */
    UnknownGuildScheduledEvent = 10070,
    /** Unknown guild scheduled event user (10071) */
    UnknownGuildScheduledEventUser = 10071,
    /** Unknown tag (10087) */
    UnknownTag = 10087,

    /** Bots cannot use this endpoint (20001) */
    BotsNotAllowed = 20001,
    /** Only bots can use this endpoint (20002) */
    OnlyBotsAllowed = 20002,
    /** Explicit content cannot be sent to the desired recipient(s) (20009) */
    ExplicitContent = 20009,
    /** You are not authorized to perform this action on this application (20012) */
    UnauthorizedApplicationAction = 20012,
    /** This action cannot be performed due to slowmode rate limit (20016) */
    SlowmodeRateLimit = 20016,
    /** Only the owner of this account can perform this action (20018) */
    OwnerOnlyAction = 20018,
    /** This message cannot be edited due to announcement rate limits (20022) */
    AnnouncementEditLimit = 20022,
    /** Under minimum age (20024) */
    UnderMinimumAge = 20024,
    /** The channel you are writing has hit the write rate limit (20028) */
    WriteRateLimit = 20028,
    /** The write action you are performing on the server has hit the write rate limit (20029) */
    ServerWriteRateLimit = 20029,
    /** Your Stage topic, server name, server description, or channel names contain words that are not allowed (20031) */
    ProhibitedWords = 20031,
    /** Guild premium subscription level too low (20035) */
    GuildPremiumLevelTooLow = 20035,

    /** Maximum number of guilds reached (100) (30001) */
    MaxGuilds = 30001,
    /** Maximum number of friends reached (1000) (30002) */
    MaxFriends = 30002,
    /** Maximum number of pins reached for the channel (50) (30003) */
    MaxPins = 30003,
    /** Maximum number of recipients reached (10) (30004) */
    MaxRecipients = 30004,
    /** Maximum number of guild roles reached (250) (30005) */
    MaxRoles = 30005,
    /** Maximum number of webhooks reached (10) (30007) */
    MaxWebhooks = 30007,
    /** Maximum number of emojis reached (30008) */
    MaxEmojis = 30008,
    /** Maximum number of reactions reached (20) (30010) */
    MaxReactions = 30010,
    /** Maximum number of group DMs reached (10) (30011) */
    MaxGroupDms = 30011,
    /** Maximum number of guild channels reached (500) (30013) */
    MaxGuildChannels = 30013,
    /** Maximum number of attachments in a message reached (10) (30015) */
    MaxAttachments = 30015,
    /** Maximum number of invites reached (1000) (30016) */
    MaxInvites = 30016,
    /** Maximum number of animated emojis reached (30018) */
    MaxAnimatedEmojis = 30018,
    /** Maximum number of server members reached (30019) */
    MaxServerMembers = 30019,
    /** Maximum number of server categories has been reached (5) (30030) */
    MaxServerCategories = 30030,
    /** Guild already has a template (30031) */
    GuildAlreadyHasTemplate = 30031,
    /** Maximum number of application commands reached (30032) */
    MaxApplicationCommands = 30032,
    /** Maximum number of thread participants has been reached (1000) (30033) */
    MaxThreadParticipants = 30033,
    /** Maximum number of daily application command creates has been reached (200) (30034) */
    MaxDailyApplicationCommandCreates = 30034,
    /** Maximum number of bans for non-guild members has been exceeded (30035) */
    MaxNonMemberBans = 30035,
    /** Maximum number of bans fetches has been reached (30037) */
    MaxBanFetches = 30037,
    /** Maximum number of uncompleted guild scheduled events reached (100) (30038) */
    MaxUncompletedGuildScheduledEvents = 30038,
    /** Maximum number of stickers reached (30039) */
    MaxStickers = 30039,
    /** Maximum number of prune requests has been reached. Try again later (30040) */
    MaxPruneRequests = 30040,
    /** Maximum number of guild widget settings updates has been reached. Try again later (30042) */
    MaxGuildWidgetSettingsUpdates = 30042,
    /** Maximum number of edits to messages older than 1 hour reached. Try again later (30046) */
    MaxEditsOldMessages = 30046,
    /** Maximum number of pinned threads in a forum channel has been reached (30047) */
    MaxPinnedThreads = 30047,
    /** Maximum number of tags in a forum channel has been reached (30048) */
    MaxForumTags = 30048,

    /** Unauthorized. Provide a valid token and try again (40001) */
    Unauthorized = 40001,
    /** You need to verify your account in order to perform this action (40002) */
    AccountVerificationRequired = 40002,
    /** You are opening direct messages too fast (40003) */
    DirectMessagesTooFast = 40003,
    /** Request entity too large. Try sending something smaller in size (40005) */
    RequestEntityTooLarge = 40005,
    /** This feature has been temporarily disabled server-side (40006) */
    FeatureTemporarilyDisabled = 40006,
    /** The user is banned from this guild (40007) */
    UserBanned = 40007,
    /** Target user is not connected to voice (40032) */
    TargetUserNotConnected = 40032,
    /** This message has already been crossposted (40033) */
    MessageAlreadyCrossposted = 40033,
    /** An application command with that name already exists (40041) */
    ApplicationCommandNameExists = 40041,

    /** Missing access (50001) */
    MissingAccess = 50001,
    /** Invalid account type (50002) */
    InvalidAccountType = 50002,
    /** Cannot execute action on a DM channel (50003) */
    CannotExecuteOnDm = 50003,
    /** Guild widget disabled (50004) */
    GuildWidgetDisabled = 50004,
    /** Cannot edit a message authored by another user (50005) */
    CannotEditOtherUserMessage = 50005,
    /** Cannot send an empty message (50006) */
    CannotSendEmptyMessage = 50006,
    /** Cannot send messages to this user (50007) */
    CannotMessageUser = 50007,
    /** Cannot send messages in a non-text channel (50008) */
    CannotSendMessagesInNonText = 50008,
    /** Channel verification level is too high for you to gain access (50009) */
    ChannelVerificationLevelTooHigh = 50009,
    /** OAuth2 application does not have a bot (50010) */
    Oauth2ApplicationNoBot = 50010,
    /** OAuth2 application limit reached (50011) */
    Oauth2ApplicationLimit = 50011,
    /** Invalid OAuth2 state (50012) */
    InvalidOauthState = 50012,
    /** You lack permissions to perform that action (50013) */
    MissingPermissions = 50013,
    /** Invalid authentication token provided (50014) */
    InvalidAuthToken = 50014,
    /** Note was too long (50015) */
    NoteTooLong = 50015,
    /** Provided too few or too many messages to delete. Must provide at least 2 and fewer than 100 messages to delete (50016) */
    InvalidBulkDeleteCount = 50016,
    /** Invalid MFA Level (50017) */
    InvalidMfaLevel = 50017,
    /** A message can only be pinned to the channel it was sent in (50019) */
    InvalidPinMessageChannel = 50019,
    /** Invite code was either invalid or taken (50020) */
    InvalidOrTakenInviteCode = 50020,
    /** Cannot execute action on a system message (50021) */
    CannotExecuteOnSystemMessage = 50021,
    /** Cannot execute action on this channel type (50024) */
    InvalidChannelType = 50024,
    /** Invalid OAuth2 access token provided (50025) */
    InvalidOauthToken = 50025,
    /** Missing required OAuth2 scope (50026) */
    MissingOauthScope = 50026,
    /** Invalid webhook token provided (50027) */
    InvalidWebhookToken = 50027,
    /** Invalid role (50028) */
    InvalidRole = 50028,
    /** Invalid Recipient(s) (50033) */
    InvalidRecipients = 50033,
    /** A message provided was too old to bulk delete (50034) */
    BulkDeleteMessageTooOld = 50034,
    /** Invalid form body or invalid Content-Type provided (50035) */
    InvalidFormBody = 50035,
    /** An invite was accepted to a guild the application's bot is not in (50036) */
    InviteAcceptedToGuildNotContainingBot = 50036,
    /** Invalid API version provided (50041) */
    InvalidApiVersion = 50041,
    /** File uploaded exceeds the maximum size (50045) */
    FileUploadMaxSize = 50045,
    /** Invalid file uploaded (50046) */
    InvalidFileUploaded = 50046,
    /** Cannot self-redeem this gift (50054) */
    CannotSelfRedeemGift = 50054,
    /** Invalid guild (50055) */
    InvalidGuild = 50055,
    /** Invalid message type (50068) */
    InvalidMessageType = 50068,
    /** Payment source required to redeem gift (50070) */
    PaymentSourceRequired = 50070,
    /** Cannot modify a system webhook (50073) */
    CannotModifySystemWebhook = 50073,
    /** Cannot delete a channel required for Community guilds (50074) */
    CannotDeleteCommunityRequiredChannel = 50074,
    /** Cannot edit stickers within a message (50080) */
    CannotEditMessageStickers = 50080,
    /** Invalid sticker sent (50081) */
    InvalidStickerSent = 50081,
    /** Tried to perform an operation on an archived thread (50083) */
    OperationOnArchivedThread = 50083,
    /** Invalid thread notification settings (50084) */
    InvalidThreadNotificationSettings = 50084,
    /** 'before' value is earlier than the thread creation date (50085) */
    BeforeEarlierThanThreadCreationDate = 50085,
    /** Community server channels must be text channels (50086) */
    CommunityServerChannelsMustBeText = 50086,
    /** This server is not available in your location (50095) */
    ServerNotAvailableInYourLocation = 50095,
    /** This server needs monetization enabled in order to perform this action (50097) */
    ServerNeedsMonetizationEnabled = 50097,
    /** This server needs more boosts to perform this action (50101) */
    ServerNeedsMoreBoosts = 50101,
    /** The request body contains invalid JSON (50109) */
    InvalidJson = 50109,

    /** Two factor is required for this operation (60003) */
    TwoFactorRequired = 60003,
    /** No users with DiscordTag exist (80004) */
    NoUsersWithDiscordTag = 80004,
    /** Reaction was blocked (90001) */
    ReactionBlocked = 90001,
    /** API resource is currently overloaded. Try again later (130000) */
    ResourceOverloaded = 130000,
    /** The Stage is already open (150006) */
    StageAlreadyOpen = 150006,
    /** Cannot reply without permission to read message history (160002) */
    CannotReplyWithoutReadMessageHistory = 160002,
    /** A thread has already been created for this message (160004) */
    ThreadAlreadyCreated = 160004,
    /** Thread is locked (160005) */
    ThreadLocked = 160005,
    /** Maximum number of active threads has been reached (160006) */
    MaxActiveThreads = 160006,
    /** Maximum number of active announcement threads has been reached (160007) */
    MaxActiveAnnouncementThreads = 160007,
    /** Invalid JSON for uploaded Lottie file (170001) */
    InvalidLottieJson = 170001,
    /** Uploaded Lotties cannot contain rasterized images such as PNG or JPEG (170002) */
    LottieCannotContainRasterizedImages = 170002,
    /** Sticker maximum framerate exceeded (170003) */
    StickerMaxFramerateExceeded = 170003,
    /** Sticker frame count exceeds maximum of 1000 frames (170004) */
    StickerMaxFrameCountExceeded = 170004,
    /** Lottie animation maximum dimensions exceeded (170005) */
    LottieAnimationMaxDimensionsExceeded = 170005,
    /** Sticker frame rate is either too small or too large (170006) */
    StickerFrameRateInvalid = 170006,
    /** Sticker animation duration exceeds maximum of 5 seconds (170007) */
    StickerAnimationDurationExceeded = 170007,
}

/**
 * Discord RPC Error Codes
 * Contains all possible RPC error codes that can occur during Remote Procedure Calls
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-error-codes}
 * @enum {number}
 */
export enum RPCErrorCodes {
    /** An unknown error occurred (1000) */
    UnknownError = 1000,
    /** Invalid payload (4000) */
    InvalidPayload = 4000,
    /** Invalid command (4002) */
    InvalidCommand = 4002,
    /** Invalid guild (4003) */
    InvalidGuild = 4003,
    /** Invalid event (4004) */
    InvalidEvent = 4004,
    /** Invalid channel (4005) */
    InvalidChannel = 4005,
    /** Invalid permissions (4006) */
    InvalidPermissions = 4006,
    /** Invalid client ID (4007) */
    InvalidClientId = 4007,
    /** Invalid origin (4008) */
    InvalidOrigin = 4008,
    /** Invalid token (4009) */
    InvalidToken = 4009,
    /** Invalid user (4010) */
    InvalidUser = 4010,
    /** OAuth2 error (5000) */
    Oauth2Error = 5000,
    /** Select channel timed out (5001) */
    SelectChannelTimedOut = 5001,
    /** Get guild timed out (5002) */
    GetGuildTimedOut = 5002,
    /** Select voice force required (5003) */
    SelectVoiceForceRequired = 5003,
    /** Capture shortcut already listening (5004) */
    CaptureShortcutAlreadyListening = 5004,
}

const keys = [
    'ClientInvalidOption',
    'ClientInvalidProvidedShards',
    'ClientMissingIntents',
    'ClientNotReady',
  
    'TokenInvalid',
    'TokenMissing',
    'ApplicationCommandPermissionsTokenMissing',
  
    'BitFieldInvalid',
  
    'ShardingNoShards',
    'ShardingInProcess',
    'ShardingInvalidEvalBroadcast',
    'ShardingShardNotFound',
    'ShardingAlreadySpawned',
    'ShardingProcessExists',
    'ShardingWorkerExists',
    'ShardingReadyTimeout',
    'ShardingReadyDisconnected',
    'ShardingReadyDied',
    'ShardingNoChildExists',
    'ShardingShardMiscalculation',
  
    'ColorRange',
    'ColorConvert',
  
    'InviteOptionsMissingChannel',
  
    'InteractionCollectorError',
  
    'FileNotFound',
  
    'UserNoDMChannel',
  
    'VoiceNotStageChannel',
  
    'VoiceStateNotOwn',
    'VoiceStateInvalidType',
  
    'ReqResourceType',
  
    'MessageBulkDeleteType',
    'MessageContentType',
    'MessageNonceRequired',
    'MessageNonceType',
  
    'BanResolveId',
    'FetchBanResolveId',
  
    'PruneDaysType',
  
    'GuildChannelResolve',
    'GuildVoiceChannelResolve',
    'GuildChannelOrphan',
    'GuildChannelUnowned',
    'GuildOwned',
    'GuildMembersTimeout',
    'GuildUncachedMe',
    'ChannelNotCached',
    'StageChannelResolve',
    'GuildScheduledEventResolve',
    'FetchOwnerId',
  
    'InvalidType',
    'InvalidElement',
  
    'MessageThreadParent',
    'MessageExistingThread',
    'ThreadInvitableType',
    'NotAThreadOfParent',
  
    'WebhookMessage',
    'WebhookTokenUnavailable',
    'WebhookURLInvalid',
    'WebhookApplication',
    'MessageReferenceMissing',
  
    'EmojiType',
    'EmojiManaged',
    'MissingManageGuildExpressionsPermission',
  
    'NotGuildSticker',
  
    'ReactionResolveUser',
  
    'InviteResolveCode',
  
    'InviteNotFound',
  
    'DeleteGroupDMChannel',
    'FetchGroupDMChannel',
  
    'MemberFetchNonceLength',
  
    'GlobalCommandPermissions',
    'GuildUncachedEntityResolve',
  
    'InteractionAlreadyReplied',
    'InteractionNotReplied',
  
    'CommandInteractionOptionNotFound',
    'CommandInteractionOptionType',
    'CommandInteractionOptionEmpty',
    'CommandInteractionOptionNoSubcommand',
    'CommandInteractionOptionNoSubcommandGroup',
    'CommandInteractionOptionInvalidChannelType',
    'AutocompleteInteractionOptionNoFocusedOption',
  
    'ModalSubmitInteractionFieldNotFound',
    'ModalSubmitInteractionFieldType',
  
    'InvalidMissingScopes',
    'InvalidScopesWithPermissions',
  
    'NotImplemented',
  
    'SweepFilterReturn',
  
    'GuildForumMessageRequired',
  
    'EntitlementCreateInvalidOwner',
  
    'BulkBanUsersOptionEmpty',
  
    'PollAlreadyExpired',
  ];

  export const DiscordiumErrorCodes = Object.fromEntries(keys.map((key) => [key, key]));