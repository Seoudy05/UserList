import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './components/users/users';

@Component({
  selector: 'app-root',
  imports: [Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UserList');
}
