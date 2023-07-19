export interface IPushSettings {
    peer_id?: number;
    disabled_until?: number;
    disabled_forever: boolean;
    no_sound: boolean;
    disabled_mentions?: boolean;
    disabled_mass_mentions?: boolean;
}
