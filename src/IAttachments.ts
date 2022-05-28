import type { IAudio } from './IAudio';
import type { IAudioMessage } from './IAudioMessage';
import type { IAudioPlaylist } from './IAudioPlaylist';
import type { IComment } from './IComment';
import type { IDocument } from './IDocument';
import type { IEvent } from './IEvent';
import type { IGift } from './IGift';
import type { ILink } from './ILink';
import type { IMarket } from './IMarket';
import type { IMarketAlbum } from './IMarketAlbum';
import type { INote } from './INote';
import type { IPhoto } from './IPhoto';
import type { IPhotoAlbum } from './IPhotoAlbum';
import type { IPodcast } from './IPodcast';
import type { IPoll } from './IPoll';
import type { IPost } from './IPost';
import type { IPrettyCards } from './IPrettyCards';
import type { ISticker } from './ISticker';
import type { IStory } from './IStory';
import type { IVideo } from './IVideo';
import type { IWikiPage } from './IWikiPage';

// https://dev.vk.com/reference/objects/attachments-wall

type IAttachmentBase<K extends string, O> = {
    type: K;
} & {
    [key in K]: O;
};

type IAttachmentPhoto = IAttachmentBase<'photo', IPhoto>;
type IAttachmentVideo = IAttachmentBase<'video', IVideo>;
type IAttachmentAudio = IAttachmentBase<'audio', IAudio>;
type IAttachmentDocument = IAttachmentBase<'doc', IDocument>;
type IAttachmentSticker = IAttachmentBase<'sticker', ISticker>;
type IAttachmentLink = IAttachmentBase<'link', ILink>;
type IAttachmentWall = IAttachmentBase<'wall', IPost>;
type IAttachmentPage = IAttachmentBase<'page', IWikiPage>;
type IAttachmentPoll = IAttachmentBase<'poll', IPoll>;
type IAttachmentAlbum = IAttachmentBase<'album', IPhotoAlbum>;
type IAttachmentNote = IAttachmentBase<'note', INote>;
type IAttachmentGift = IAttachmentBase<'gift', IGift>;
type IAttachmentWallReply = IAttachmentBase<'wall_reply', IComment & { post_id: number; owner_id: number; }>;
type IAttachmentAudioMessage = IAttachmentBase<'audio_message', IAudioMessage>;
type IAttachmentAudioPlaylist = IAttachmentBase<'audio_playlist', IAudioPlaylist>;
type IAttachmentEvent = IAttachmentBase<'event', IEvent>;
type IAttachmentPodcast = IAttachmentBase<'podcast', IPodcast>;
type IAttachmentMarket = IAttachmentBase<'market', IMarket>;
type IAttachmentMarketAlbum = IAttachmentBase<'market_album', IMarketAlbum>;
type IAttachmentPrettyCards = IAttachmentBase<'pretty_cards', IPrettyCards>;
type IAttachmentStory = IAttachmentBase<'story', IStory>;

export type IAttachment =
    | IAttachmentPhoto
    | IAttachmentVideo
    | IAttachmentAudio
    | IAttachmentDocument
    | IAttachmentSticker
    | IAttachmentLink
    | IAttachmentWall
    | IAttachmentPage
    | IAttachmentPoll
    | IAttachmentAlbum
    | IAttachmentNote
    | IAttachmentGift
    | IAttachmentWallReply
    | IAttachmentAudioMessage
    | IAttachmentAudioPlaylist
    | IAttachmentEvent
    | IAttachmentPodcast
    | IAttachmentMarket
    | IAttachmentMarketAlbum
    | IAttachmentPrettyCards
    | IAttachmentStory;

export type IAttachments = IAttachment[];

export type AttachmentName = IAttachment['type'];

export type PickAttachment<T extends AttachmentName> = IAttachment & { type: T };
