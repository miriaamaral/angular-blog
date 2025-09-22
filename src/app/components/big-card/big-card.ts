import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css'
})
export class BigCard implements OnInit {

readonly photoCover = input<string>("");
readonly cardTitle = input<string>("");
readonly cardDescription = input<string>("");

readonly Id = input<string>("0");

constructor() { }

ngOnInit(): void {
}
}
