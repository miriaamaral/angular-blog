import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css'
})
export class BigCard implements OnInit {

readonly photoCover = input<string>("");
readonly cardTitle = input<string>("");
readonly cardDescription = input<string>("");

constructor() { }

ngOnInit(): void {
}
}
