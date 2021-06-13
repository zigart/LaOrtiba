import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toQuienesSomos(){
    document.getElementById("quienesSomos")?.scrollIntoView({behavior:"smooth"});
  }
  toIntegrantes(){
    document.getElementById("integrantes")?.scrollIntoView({behavior:"smooth"});
  }
  toShows(){
    document.getElementById("shows")?.scrollIntoView({behavior:"smooth"});
  }
  toContacto(){
    document.getElementById("contacto")?.scrollIntoView({behavior:"smooth"});
  }
}
