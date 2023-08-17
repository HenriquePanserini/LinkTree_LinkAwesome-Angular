export class CadastroLinks {
    
    instagram! : string;
    facebook! : string;
    twitter! : string;
    tiktok! : string;
    youtube! : string;
    linkedin! : string;
    links! : string[];
    email! : string;

    constructor(instagram: string, facebook: string, twitter: string, tiktok: string, linkedin : string, youtube : string, email: string) {
        this.instagram = instagram;
        this.facebook = facebook;
        this.twitter = twitter;
        this.tiktok = tiktok;
        this.youtube = youtube;
        this.linkedin = linkedin;
        this.email = email;
        this.links = [];

    }
}