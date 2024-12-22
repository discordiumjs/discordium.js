/**
 * Discord API Error Codes
 * Contains all possible JSON error codes that the Discord API can return
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-error-codes}
 * @enum {number}
 */
export enum JSONErrorCodes {
    /** General error (0) */
    GENERAL_ERROR = 0,
    /** Unknown account (10001) */
    UNKNOWN_ACCOUNT = 10001,
    /** Unknown application (10002) */
    UNKNOWN_APPLICATION = 10002,
    /** Unknown channel (10003) */
    UNKNOWN_CHANNEL = 10003,
    /** Unknown guild (10004) */
    UNKNOWN_GUILD = 10004,
    /** Unknown integration (10005) */
    UNKNOWN_INTEGRATION = 10005,
    /** Unknown invite (10006) */
    UNKNOWN_INVITE = 10006,
    /** Unknown member (10007) */
    UNKNOWN_MEMBER = 10007,
    /** Unknown message (10008) */
    UNKNOWN_MESSAGE = 10008,
    /** Unknown permission overwrite (10009) */
    UNKNOWN_PERMISSION_OVERWRITE = 10009,
    /** Unknown provider (10010) */
    UNKNOWN_PROVIDER = 10010,
    /** Unknown role (10011) */
    UNKNOWN_ROLE = 10011,
    /** Unknown token (10012) */
    UNKNOWN_TOKEN = 10012,
    /** Unknown user (10013) */
    UNKNOWN_USER = 10013,
    /** Unknown emoji (10014) */
    UNKNOWN_EMOJI = 10014,
    /** Unknown webhook (10015) */
    UNKNOWN_WEBHOOK = 10015,
    /** Unknown webhook service (10016) */
    UNKNOWN_WEBHOOK_SERVICE = 10016,
    /** Unknown session (10020) */
    UNKNOWN_SESSION = 10020,
    /** Unknown ban (10026) */
    UNKNOWN_BAN = 10026,
    /** Unknown SKU (10027) */
    UNKNOWN_SKU = 10027,
    /** Unknown store listing (10028) */
    UNKNOWN_STORE_LISTING = 10028,
    /** Unknown entitlement (10029) */
    UNKNOWN_ENTITLEMENT = 10029,
    /** Unknown build (10030) */
    UNKNOWN_BUILD = 10030,
    /** Unknown lobby (10031) */
    UNKNOWN_LOBBY = 10031,
    /** Unknown branch (10032) */
    UNKNOWN_BRANCH = 10032,
    /** Unknown store directory layout (10033) */
    UNKNOWN_STORE_DIRECTORY_LAYOUT = 10033,
    /** Unknown redistributable (10036) */
    UNKNOWN_REDISTRIBUTABLE = 10036,
    /** Unknown gift code (10038) */
    UNKNOWN_GIFT_CODE = 10038,
    /** Unknown stream (10049) */
    UNKNOWN_STREAM = 10049,
    /** Unknown premium server subscribe cooldown (10050) */
    UNKNOWN_PREMIUM_SERVER_SUBSCRIBE_COOLDOWN = 10050,
    /** Unknown guild template (10057) */
    UNKNOWN_GUILD_TEMPLATE = 10057,
    /** Unknown discoverable server category (10059) */
    UNKNOWN_DISCOVERABLE_SERVER_CATEGORY = 10059,
    /** Unknown sticker (10060) */
    UNKNOWN_STICKER = 10060,
    /** Unknown interaction (10062) */
    UNKNOWN_INTERACTION = 10062,
    /** Unknown application command (10063) */
    UNKNOWN_APPLICATION_COMMAND = 10063,
    /** Unknown application command permissions (10066) */
    UNKNOWN_APPLICATION_COMMAND_PERMISSIONS = 10066,
    /** Unknown stage instance (10067) */
    UNKNOWN_STAGE_INSTANCE = 10067,
    /** Unknown guild member verification form (10068) */
    UNKNOWN_GUILD_MEMBER_VERIFICATION_FORM = 10068,
    /** Unknown guild welcome screen (10069) */
    UNKNOWN_GUILD_WELCOME_SCREEN = 10069,
    /** Unknown guild scheduled event (10070) */
    UNKNOWN_GUILD_SCHEDULED_EVENT = 10070,
    /** Unknown guild scheduled event user (10071) */
    UNKNOWN_GUILD_SCHEDULED_EVENT_USER = 10071,
    /** Unknown tag (10087) */
    UNKNOWN_TAG = 10087,

    /** Bots cannot use this endpoint (20001) */
    BOTS_NOT_ALLOWED = 20001,
    /** Only bots can use this endpoint (20002) */
    ONLY_BOTS_ALLOWED = 20002,
    /** Explicit content cannot be sent to the desired recipient(s) (20009) */
    EXPLICIT_CONTENT = 20009,
    /** You are not authorized to perform this action on this application (20012) */
    UNAUTHORIZED_APPLICATION_ACTION = 20012,
    /** This action cannot be performed due to slowmode rate limit (20016) */
    SLOWMODE_RATE_LIMIT = 20016,
    /** Only the owner of this account can perform this action (20018) */
    OWNER_ONLY_ACTION = 20018,
    /** This message cannot be edited due to announcement rate limits (20022) */
    ANNOUNCEMENT_EDIT_LIMIT = 20022,
    /** Under minimum age (20024) */
    UNDER_MINIMUM_AGE = 20024,
    /** The channel you are writing has hit the write rate limit (20028) */
    WRITE_RATE_LIMIT = 20028,
    /** The write action you are performing on the server has hit the write rate limit (20029) */
    SERVER_WRITE_RATE_LIMIT = 20029,
    /** Your Stage topic, server name, server description, or channel names contain words that are not allowed (20031) */
    PROHIBITED_WORDS = 20031,
    /** Guild premium subscription level too low (20035) */
    GUILD_PREMIUM_LEVEL_TOO_LOW = 20035,

    /** Maximum number of guilds reached (100) (30001) */
    MAX_GUILDS = 30001,
    /** Maximum number of friends reached (1000) (30002) */
    MAX_FRIENDS = 30002,
    /** Maximum number of pins reached for the channel (50) (30003) */
    MAX_PINS = 30003,
    /** Maximum number of recipients reached (10) (30004) */
    MAX_RECIPIENTS = 30004,
    /** Maximum number of guild roles reached (250) (30005) */
    MAX_ROLES = 30005,
    /** Maximum number of webhooks reached (10) (30007) */
    MAX_WEBHOOKS = 30007,
    /** Maximum number of emojis reached (30008) */
    MAX_EMOJIS = 30008,
    /** Maximum number of reactions reached (20) (30010) */
    MAX_REACTIONS = 30010,
    /** Maximum number of group DMs reached (10) (30011) */
    MAX_GROUP_DMS = 30011,
    /** Maximum number of guild channels reached (500) (30013) */
    MAX_GUILD_CHANNELS = 30013,
    /** Maximum number of attachments in a message reached (10) (30015) */
    MAX_ATTACHMENTS = 30015,
    /** Maximum number of invites reached (1000) (30016) */
    MAX_INVITES = 30016,
    /** Maximum number of animated emojis reached (30018) */
    MAX_ANIMATED_EMOJIS = 30018,
    /** Maximum number of server members reached (30019) */
    MAX_SERVER_MEMBERS = 30019,
    /** Maximum number of server categories has been reached (5) (30030) */
    MAX_SERVER_CATEGORIES = 30030,
    /** Guild already has a template (30031) */
    GUILD_ALREADY_HAS_TEMPLATE = 30031,
    /** Maximum number of application commands reached (30032) */
    MAX_APPLICATION_COMMANDS = 30032,
    /** Maximum number of thread participants has been reached (1000) (30033) */
    MAX_THREAD_PARTICIPANTS = 30033,
    /** Maximum number of daily application command creates has been reached (200) (30034) */
    MAX_DAILY_APPLICATION_COMMAND_CREATES = 30034,
    /** Maximum number of bans for non-guild members has been exceeded (30035) */
    MAX_NON_MEMBER_BANS = 30035,
    /** Maximum number of bans fetches has been reached (30037) */
    MAX_BAN_FETCHES = 30037,
    /** Maximum number of uncompleted guild scheduled events reached (100) (30038) */
    MAX_UNCOMPLETED_GUILD_SCHEDULED_EVENTS = 30038,
    /** Maximum number of stickers reached (30039) */
    MAX_STICKERS = 30039,
    /** Maximum number of prune requests has been reached. Try again later (30040) */
    MAX_PRUNE_REQUESTS = 30040,
    /** Maximum number of guild widget settings updates has been reached. Try again later (30042) */
    MAX_GUILD_WIDGET_SETTINGS_UPDATES = 30042,
    /** Maximum number of edits to messages older than 1 hour reached. Try again later (30046) */
    MAX_EDITS_OLD_MESSAGES = 30046,
    /** Maximum number of pinned threads in a forum channel has been reached (30047) */
    MAX_PINNED_THREADS = 30047,
    /** Maximum number of tags in a forum channel has been reached (30048) */
    MAX_FORUM_TAGS = 30048,

    /** Unauthorized. Provide a valid token and try again (40001) */
    UNAUTHORIZED = 40001,
    /** You need to verify your account in order to perform this action (40002) */
    ACCOUNT_VERIFICATION_REQUIRED = 40002,
    /** You are opening direct messages too fast (40003) */
    DIRECT_MESSAGES_TOO_FAST = 40003,
    /** Request entity too large. Try sending something smaller in size (40005) */
    REQUEST_ENTITY_TOO_LARGE = 40005,
    /** This feature has been temporarily disabled server-side (40006) */
    FEATURE_TEMPORARILY_DISABLED = 40006,
    /** The user is banned from this guild (40007) */
    USER_BANNED = 40007,
    /** Target user is not connected to voice (40032) */
    TARGET_USER_NOT_CONNECTED = 40032,
    /** This message has already been crossposted (40033) */
    MESSAGE_ALREADY_CROSSPOSTED = 40033,
    /** An application command with that name already exists (40041) */
    APPLICATION_COMMAND_NAME_EXISTS = 40041,

    /** Missing access (50001) */
    MISSING_ACCESS = 50001,
    /** Invalid account type (50002) */
    INVALID_ACCOUNT_TYPE = 50002,
    /** Cannot execute action on a DM channel (50003) */
    CANNOT_EXECUTE_ON_DM = 50003,
    /** Guild widget disabled (50004) */
    GUILD_WIDGET_DISABLED = 50004,
    /** Cannot edit a message authored by another user (50005) */
    CANNOT_EDIT_OTHER_USER_MESSAGE = 50005,
    /** Cannot send an empty message (50006) */
    CANNOT_SEND_EMPTY_MESSAGE = 50006,
    /** Cannot send messages to this user (50007) */
    CANNOT_MESSAGE_USER = 50007,
    /** Cannot send messages in a non-text channel (50008) */
    CANNOT_SEND_MESSAGES_IN_NON_TEXT = 50008,
    /** Channel verification level is too high for you to gain access (50009) */
    CHANNEL_VERIFICATION_LEVEL_TOO_HIGH = 50009,
    /** OAuth2 application does not have a bot (50010) */
    OAUTH2_APPLICATION_NO_BOT = 50010,
    /** OAuth2 application limit reached (50011) */
    OAUTH2_APPLICATION_LIMIT = 50011,
    /** Invalid OAuth2 state (50012) */
    INVALID_OAUTH_STATE = 50012,
    /** You lack permissions to perform that action (50013) */
    MISSING_PERMISSIONS = 50013,
    /** Invalid authentication token provided (50014) */
    INVALID_AUTH_TOKEN = 50014,
    /** Note was too long (50015) */
    NOTE_TOO_LONG = 50015,
    /** Provided too few or too many messages to delete. Must provide at least 2 and fewer than 100 messages to delete (50016) */
    INVALID_BULK_DELETE_COUNT = 50016,
    /** Invalid MFA Level (50017) */
    INVALID_MFA_LEVEL = 50017,
    /** A message can only be pinned to the channel it was sent in (50019) */
    INVALID_PIN_MESSAGE_CHANNEL = 50019,
    /** Invite code was either invalid or taken (50020) */
    INVALID_OR_TAKEN_INVITE_CODE = 50020,
    /** Cannot execute action on a system message (50021) */
    CANNOT_EXECUTE_ON_SYSTEM_MESSAGE = 50021,
    /** Cannot execute action on this channel type (50024) */
    INVALID_CHANNEL_TYPE = 50024,
    /** Invalid OAuth2 access token provided (50025) */
    INVALID_OAUTH_TOKEN = 50025,
    /** Missing required OAuth2 scope (50026) */
    MISSING_OAUTH_SCOPE = 50026,
    /** Invalid webhook token provided (50027) */
    INVALID_WEBHOOK_TOKEN = 50027,
    /** Invalid role (50028) */
    INVALID_ROLE = 50028,
    /** Invalid Recipient(s) (50033) */
    INVALID_RECIPIENTS = 50033,
    /** A message provided was too old to bulk delete (50034) */
    BULK_DELETE_MESSAGE_TOO_OLD = 50034,
    /** Invalid form body or invalid Content-Type provided (50035) */
    INVALID_FORM_BODY = 50035,
    /** An invite was accepted to a guild the application's bot is not in (50036) */
    INVITE_ACCEPTED_TO_GUILD_NOT_CONTAINING_BOT = 50036,
    /** Invalid API version provided (50041) */
    INVALID_API_VERSION = 50041,
    /** File uploaded exceeds the maximum size (50045) */
    FILE_UPLOAD_MAX_SIZE = 50045,
    /** Invalid file uploaded (50046) */
    INVALID_FILE_UPLOADED = 50046,
    /** Cannot self-redeem this gift (50054) */
    CANNOT_SELF_REDEEM_GIFT = 50054,
    /** Invalid guild (50055) */
    INVALID_GUILD = 50055,
    /** Invalid message type (50068) */
    INVALID_MESSAGE_TYPE = 50068,
    /** Payment source required to redeem gift (50070) */
    PAYMENT_SOURCE_REQUIRED = 50070,
    /** Cannot modify a system webhook (50073) */
    CANNOT_MODIFY_SYSTEM_WEBHOOK = 50073,
    /** Cannot delete a channel required for Community guilds (50074) */
    CANNOT_DELETE_COMMUNITY_REQUIRED_CHANNEL = 50074,
    /** Cannot edit stickers within a message (50080) */
    CANNOT_EDIT_MESSAGE_STICKERS = 50080,
    /** Invalid sticker sent (50081) */
    INVALID_STICKER_SENT = 50081,
    /** Tried to perform an operation on an archived thread (50083) */
    OPERATION_ON_ARCHIVED_THREAD = 50083,
    /** Invalid thread notification settings (50084) */
    INVALID_THREAD_NOTIFICATION_SETTINGS = 50084,
    /** 'before' value is earlier than the thread creation date (50085) */
    BEFORE_EARLIER_THAN_THREAD_CREATION_DATE = 50085,
    /** Community server channels must be text channels (50086) */
    COMMUNITY_SERVER_CHANNELS_MUST_BE_TEXT = 50086,
    /** This server is not available in your location (50095) */
    SERVER_NOT_AVAILABLE_IN_YOUR_LOCATION = 50095,
    /** This server needs monetization enabled in order to perform this action (50097) */
    SERVER_NEEDS_MONETIZATION_ENABLED = 50097,
    /** This server needs more boosts to perform this action (50101) */
    SERVER_NEEDS_MORE_BOOSTS = 50101,
    /** The request body contains invalid JSON (50109) */
    INVALID_JSON = 50109,

    /** Two factor is required for this operation (60003) */
    TWO_FACTOR_REQUIRED = 60003,
    /** No users with DiscordTag exist (80004) */
    NO_USERS_WITH_DISCORD_TAG = 80004,
    /** Reaction was blocked (90001) */
    REACTION_BLOCKED = 90001,
    /** API resource is currently overloaded. Try again later (130000) */
    RESOURCE_OVERLOADED = 130000,
    /** The Stage is already open (150006) */
    STAGE_ALREADY_OPEN = 150006,
    /** Cannot reply without permission to read message history (160002) */
    CANNOT_REPLY_WITHOUT_READ_MESSAGE_HISTORY = 160002,
    /** A thread has already been created for this message (160004) */
    THREAD_ALREADY_CREATED = 160004,
    /** Thread is locked (160005) */
    THREAD_LOCKED = 160005,
    /** Maximum number of active threads has been reached (160006) */
    MAX_ACTIVE_THREADS = 160006,
    /** Maximum number of active announcement threads has been reached (160007) */
    MAX_ACTIVE_ANNOUNCEMENT_THREADS = 160007,
    /** Invalid JSON for uploaded Lottie file (170001) */
    INVALID_LOTTIE_JSON = 170001,
    /** Uploaded Lotties cannot contain rasterized images such as PNG or JPEG (170002) */
    LOTTIE_CANNOT_CONTAIN_RASTERIZED_IMAGES = 170002,
    /** Sticker maximum framerate exceeded (170003) */
    STICKER_MAX_FRAMERATE_EXCEEDED = 170003,
    /** Sticker frame count exceeds maximum of 1000 frames (170004) */
    STICKER_MAX_FRAME_COUNT_EXCEEDED = 170004,
    /** Lottie animation maximum dimensions exceeded (170005) */
    LOTTIE_ANIMATION_MAX_DIMENSIONS_EXCEEDED = 170005,
    /** Sticker frame rate is either too small or too large (170006) */
    STICKER_FRAME_RATE_INVALID = 170006,
    /** Sticker animation duration exceeds maximum of 5 seconds (170007) */
    STICKER_ANIMATION_DURATION_EXCEEDED = 170007,
}

/**
 * Discord RPC Error Codes
 * Contains all possible RPC error codes that can occur during Remote Procedure Calls
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-error-codes}
 * @enum {number}
 */
export enum RPCErrorCodes {
    /** An unknown error occurred (1000) */
    UNKNOWN_ERROR = 1000,
    /** Invalid payload (4000) */
    INVALID_PAYLOAD = 4000,
    /** Invalid command (4002) */
    INVALID_COMMAND = 4002,
    /** Invalid guild (4003) */
    INVALID_GUILD = 4003,
    /** Invalid event (4004) */
    INVALID_EVENT = 4004,
    /** Invalid channel (4005) */
    INVALID_CHANNEL = 4005,
    /** Invalid permissions (4006) */
    INVALID_PERMISSIONS = 4006,
    /** Invalid client ID (4007) */
    INVALID_CLIENT_ID = 4007,
    /** Invalid origin (4008) */
    INVALID_ORIGIN = 4008,
    /** Invalid token (4009) */
    INVALID_TOKEN = 4009,
    /** Invalid user (4010) */
    INVALID_USER = 4010,
    /** OAuth2 error (5000) */
    OAUTH2_ERROR = 5000,
    /** Select channel timed out (5001) */
    SELECT_CHANNEL_TIMED_OUT = 5001,
    /** Get guild timed out (5002) */
    GET_GUILD_TIMED_OUT = 5002,
    /** Select voice force required (5003) */
    SELECT_VOICE_FORCE_REQUIRED = 5003,
    /** Capture shortcut already listening (5004) */
    CAPTURE_SHORTCUT_ALREADY_LISTENING = 5004,
}
