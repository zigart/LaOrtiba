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

  movileMenu(){
    let movileMenu = document.getElementById("movileMenu");
    if(movileMenu?.getAttribute("style") == "display: none;"){
      movileMenu?.setAttribute("class", "movileMenu showing");
      setTimeout(()=>{movileMenu?.setAttribute("style", "display: block;");},10);
      
    }else{
      movileMenu?.setAttribute("class", "movileMenu hidden");
      setTimeout(()=>{movileMenu?.setAttribute("style", "display: none;");},300);
    }
  }

  toQuienesSomosMovile(){
    document.getElementById("quienesSomos")?.scrollIntoView({behavior:"smooth"});
    this.movileMenu();
  }
  toIntegrantesMovile(){
    document.getElementById("integrantes")?.scrollIntoView({behavior:"smooth"});
    this.movileMenu();
  }
  toShowsMovile(){
    document.getElementById("shows")?.scrollIntoView({behavior:"smooth"});
    this.movileMenu();
  }
  toContactoMovile(){
    document.getElementById("contacto")?.scrollIntoView({behavior:"smooth"});
    this.movileMenu();
  }
}
