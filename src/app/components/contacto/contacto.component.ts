import { Component, OnInit } from '@angular/core';
import{ gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.initParallax();
  }

  initParallax(){
    gsap.to(".backgroundContacto", {
      scrollTrigger: {
        trigger: ".backgroundContacto",
        start: "top bottom",
        scrub: true
      },
      y: 250
    });
    
    gsap.to(".moduleContacto", {
      scrollTrigger: {
        trigger: ".moduleContacto",
        start: "top bottom",
        scrub: true
      },
      y: -250
    });
  }
}
