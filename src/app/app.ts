import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Home } from "./Pages/home/home";
import { MenuBar } from "./components/menu-bar/menu-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBar],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  protected readonly title = signal('angular-blog');
}
