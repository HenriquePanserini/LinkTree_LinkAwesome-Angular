import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    isSearch : boolean = true;
    isMouseOver! : boolean;

    NavContainerOne! : string;
    NavContainerTwo! : string;
    LinkTitle! : string;
    btnSearch! : string;
    btnSubmit! : string;
    searchBar! : string;
    NavBar! : string;
    iconRef! : string;

    constructor() { 

    }

    iconSearch : {color:string, margin : string, padding: string} = {
        color: 'white',
        margin: '0',
        padding: '0'
    } 

    handleClickSearch() : boolean {
        return this.isSearch = !this.isSearch;
    };


    ngOnInit(): void {
        this.NavBar = 'nav-bar';
        this.NavContainerOne = 'nav-container-one';
        this.NavContainerTwo = 'nav-container-two';
        this.LinkTitle = 'link-title';
        this.btnSearch = 'btn-search';
        this.btnSubmit = 'btn-submit';
        this.searchBar ='search-bar';
        this.iconRef = 'icon-ref';
        
    }
}
