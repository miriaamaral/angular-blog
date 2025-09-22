import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.html',
  styleUrl: './content.css'
})

export class Content {
  photoCover: string = "https://wallpapers.com/images/hd/iron-man-technology-1943-x-1103-wallpaper-kmc4uq7cjmlsf6eb.jpg"
  contentTitle: string = "MULTIVERSO DA NOTÍCIA"
  contentDescription: string ="blablablablabalblalablal"
}
