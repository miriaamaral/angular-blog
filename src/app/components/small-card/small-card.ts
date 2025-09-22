import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.html',
  styleUrl: './small-card.css'
})
export class SmallCard implements OnInit  {

  @Input()
  photoCover: string="";
  @Input()
  cardTitle: string="";

  @Input()
  Id: string="0";

  constructor() { }

  ngOnInit(): void {
  }

}
