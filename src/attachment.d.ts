import { IVKPhoto, IVKVideo, IVKAudio, IVKDocument, IVKLink, IVKWall, IVKSticker } from '.';

type IVKSupportedAttachments = {
    photo: IVKPhoto,
    video: IVKVideo,
    audio: IVKAudio,
    doc: IVKDocument,
    link: IVKLink,
    wall: IVKWall,
    sticker: IVKSticker,
}

type IVKAttachmentObject<K extends keyof IVKSupportedAttachments> = {
    [P in K]: IVKSupportedAttachments[K];
};

export type IVKAttachment<T extends keyof IVKSupportedAttachments> = { type: T } & IVKAttachmentObject<T>;

export type IVKAttachmentList = IVKAttachment<keyof IVKSupportedAttachments>[];
