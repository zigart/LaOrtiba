import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import{ gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";



@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.scss']
})
export class IntegrantesComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    
    this.initParallax();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag:  false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    nav: false
  }

  initParallax(){
    gsap.to(".backgroundIntegrantes", {
      scrollTrigger: {
        trigger: ".backgroundIntegrantes",
        start: "top bottom",
        scrub: true
      },
      y: 250
    });
    
    gsap.to(".moduleIntegrantes", {
      scrollTrigger: {
        trigger: ".moduleIntegrantes",
        start: "top bottom",
        scrub: true
      },
      y: -250
    });
  }

}


