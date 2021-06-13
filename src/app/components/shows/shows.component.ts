import { Component, OnInit } from '@angular/core';
import{ gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.initParallax();
  }

  initParallax(){
    gsap.to(".backgroundShows", {
      scrollTrigger: {
        trigger: ".backgroundShows",
        start: "top bottom",
        scrub: true
      },
      y: 250
    });
    
    gsap.to(".moduleShows", {
      scrollTrigger: {
        trigger: ".moduleShows",
        start: "top bottom",
        scrub: true
      },
      y: -250
    });
  }

}
