import { Component, OnInit } from '@angular/core';
import{ gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    gsap.registerPlugin(ScrollTrigger);
    
    this.initParallax();

  }

  initParallax(){
    gsap.to(".backgroundQuienesSomos", {
      scrollTrigger: {
        trigger: ".backgroundQuienesSomos",
        start: "top bottom",
        scrub: true
      },
      y: 250
    });
    
    gsap.to(".moduleQuienesSomos", {
      scrollTrigger: {
        trigger: ".moduleQuienesSomos",
        start: "top bottom",
        scrub: true
      },
      duration: 0.5,
      y: -250
    });
  }

}
