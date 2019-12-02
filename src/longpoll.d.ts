export interface IVKLongPollResult {
    ts: number;
    updates: IVKLongPollUpdate[];
}

export enum VKLongPollFailureCode {
    HISTORY_LOST = 1,
    TS_EXPIRED = 2,
    USER_LOST = 3,
    INVALID_VERSION = 4
}

export enum VKLongPollFlags {
    ATTACHMENTS = 2,
    EXTENDED_EVENTS = 8,
    NEED_PTS = 32,
    FRIENDS_EXTRA = 64,
    RANDOM_ID = 128
}

export enum VKLongPollMessageAction {
    CHAT_TITLE_CHANGED = 1,
    CHAT_COVER_CHANGED = 2,
    ASSIGNED_NEW_ADMIN = 3,
    PINNED_MESSAGE = 4,
    USER_JOINED = 5,
    USER_LEFT = 6,
    USER_KICKED = 7,
    USER_PRIVILEGES_REMOVED = 8
}

export interface IVKLongPollFailure {
    failure: VKLongPollFailureCode;
    ts?: number;
    min_version?: number;
    max_version?: number;
}

export type IVKLongPollUpdate = IVKLongPollUpdateFlagReplace | IVKLongPollUpdateFlagSet | IVKLongPollUpdateFlagReset | IVKLongPollUpdateMessageNew | IVKLongPollUpdateReadIncoming | IVKLongPollUpdateReadOutcoming | IVKLongPollUpdateFriendOnline | IVKLongPollUpdateFriendOffline | IVKLongPollUpdateMessageDelete | IVKLongPollUpdateMessageRestore | IVKLongPollUpdateChatChanged | IVKLongPollUpdateChatUpdated | IVKLongPollUpdateUserTyping | IVKLongPollUpdateUserTypingInChat | IVKLongPollUpdateUsersTyping | IVKLongPollUpdateUsersRecordVoice | IVKLongPollUpdateUserCalling | IVKLongPollUpdateNewDialogsCount | IVKLongPollUpdateNotificationPreferencesChanged;

type IVKLongPollExtraFields = {};

export type IVKLongPollUpdateFlagReplace = [
    1,
    number, // message_id
    number, // flags
    IVKLongPollExtraFields // extra
];

export type IVKLongPollUpdateFlagSet = [
    2,
    number, // message_id
    number, // flages
    IVKLongPollExtraFields // extra
];

export type IVKLongPollUpdateFlagReset = [
    3,
    number, // message_id
    number, // flags
    IVKLongPollExtraFields // extra
];

/**
 * New message
 * 
 * $peer_id (integer) — идентификатор назначения.
 * $timestamp (integer) — время отправки сообщения в Unixtime;
 * $text (string) — текст сообщения;
 * [$attachments] (array) — вложения (если mode = 2);
 * [$random_id] (integer) — random_id, если параметр был передан в messages.send. Может содержать 0, если значение не задано.
 */
export type IVKLongPollUpdateMessageNew = [
    4, 
    number, // message_id
    number, // flags
    number, // from_id
    number, // date
    string, // title
    string, // text
    IVKLongPollExtraFieldsMessage,
    IVKLongPollAttachments
];

export type IVKLongPollUpdateReadIncoming = [
    6,
    number, // peer_id
    number  // local_id
];

export type IVKLongPollUpdateReadOutcoming = [
    7,
    number, // peer_id
    number  // local_id
];

export type IVKLongPollUpdateFriendOnline = [
    8,
    number, // user_id
    number, // extra (not null if mode=64): value & 0xff -> id platform
    number  // timestamp
];

export type IVKLongPollUpdateFriendOffline = [
    9,
    number, // user_id
    number, // extra: 0 if left, 1 if timeout
    number  // timestamp
];

export type IVKLongPollUpdateMessageDelete = [
    13,
    number, // peer_id
    number, // local_id
];

export type IVKLongPollUpdateMessageRestore = [
    14,
    number, // peer_id
    number, // local_id
];

export type IVKLongPollUpdateChatChanged = [
    51,
    number, // chat_id
    boolean // 1 if triggered by user
];

/**
 * $type_id (integer) — идентификатор типа изменения в чате:
 *   1 — Изменилось название беседы;
 *   2 — Сменилась обложка беседы;
 *   3 — Назначен новый администратор;
 *   4 — Закреплено сообщение;
 *   5 — Пользователь присоединился к беседе;
 *   6 — Пользователь покинул беседу;
 *   7 — Пользователя исключили из беседы;
 *   8 — С пользователя сняты права администратора.
 *
 * $info (integer) — дополнительная информация об изменениях в чате. Значение зависит от type_id.
 *   type_id = 1, 2 — $info = "0";
 *   type_id = 3 — $info = "admin_id";
 *   type_id = 5 — $info = "conversation_message_id";
 *   type_id = 6, 7, 8, 9 — $info = "user_id".
 */
export type IVKLongPollUpdateChatUpdated = [
    52,
    VKLongPollMessageAction, // type_id
    number, // peer_id
    number  // info
];

export type IVKLongPollUpdateUserTyping = [
    61,
    number, // user_id
    number  // flags
];

export type IVKLongPollUpdateUserTypingInChat = [
    62,
    number, // user_id
    number  // chat_id
];

export type IVKLongPollUpdateUsersTyping = [
    63,
    number[], // user_ids
    number, // peer_id
    number, // total_count
    number  // ts
];

export type IVKLongPollUpdateUsersRecordVoice = [
    64,
    number[], // user_ids
    number, // peer_id
    number, // total_count
    number  // ts
];

export type IVKLongPollUpdateUserCalling = [
    70,
    number, // user_id
    number  // call_id
];

export type IVKLongPollUpdateNewDialogsCount = [
    80,
    number, // count
    number  // 0
];

export type IVKLongPollUpdateNotificationPreferencesChanged = [
    114,
    number, // peer_id
    boolean, // sound
    number  // disabled until
];

export interface IVKLongPollExtraFieldsMessage extends Record<string, string> {
    title: string;
}

export type IVKLongPollAttachments = Record<string, string>;
