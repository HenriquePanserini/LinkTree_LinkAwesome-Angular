import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    editingBios : boolean = false;
    rem : number = 0;

    homePerfil! : string;
    userPhoto! : string;
    userName! : string;
    linkTree! : string;
    btnAdd! : string;
    contentHome! : string;
    linksBtn! : string;

    imgPage : {useImg : string,
               instagramImg : string,
               facebookImg : string,
               twitterImg : string,
               tiktokImg : string,
               youtubeImg : string,
               linkedinImg : string,
               emailImg : string} = {
       useImg : 'https://4maos.com.br/wp-content/uploads/2022/07/f2582064395492d2a0f0d0f2baded609.jpg',
       instagramImg : '../../assets/img/instagram.png',
       facebookImg : '../../assets/img/facebook.png',
       twitterImg : '../../assets/img/twitter.png',
       tiktokImg : '../../assets/img/tiktok.png',
       youtubeImg : '../../assets/img/youtube.png',
       linkedinImg : '../../assets/img/linkedin.png',
       emailImg : '../../assets/img/email.png'
    }

    nome : string = 'Otaviano';
    sobrenome : string = 'Honorio';

    constructor() { 

    }

    CompletedName(nome : string, sobrenome : string) : string {
        return nome + ' ' + sobrenome;
    }
    
    public mb3(px : number) : string {
        this.rem = px / 16;
        return this.rem.toString() + 'rem'; 
    } 

    ngOnInit(): void {
        this.homePerfil = 'home-perfil'
        this.userPhoto = 'user-photo'
        this.userName = 'user-name'
        this.linkTree = 'link-tree'
        this.btnAdd = 'btn-add'
        this.contentHome = 'content-home'
        this.linksBtn = 'links-btn'
    }

}
