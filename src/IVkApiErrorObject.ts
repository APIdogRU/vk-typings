export interface IVkApiErrorObject {
    error_code: number;
    error_msg: string;
    request_params: {
        key: string;
        value: string;
    }[];
    captcha_sid?: string;
    captcha_img?: string;
    redirect_uri?: string;
    /** Локализованное человеческое описание ошибки, бывает крайне редко */
    error_text?: string;
}
