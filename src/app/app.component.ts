import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  NgClass,
  NgStyle,
  NgIf,
  NgFor,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  DatePipe,
  LowerCasePipe,
  UpperCasePipe,
  CurrencyPipe,
  PercentPipe,
  AsyncPipe,
  JsonPipe,
} from '@angular/common';
import { AppendPipe } from './pipes/append.pipe';
import { DataService } from './services/data.service';
import { Data } from './interfaces/data';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NgClass,
    NgStyle,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    DatePipe,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    PercentPipe,
    AppendPipe,
    AsyncPipe,
    JsonPipe,
  ],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';

  // data binding
  myBTN: string = 'My Button';

  // attr binding
  isDisable: boolean = true;
  angularImage: string = 'images/angular_gradient.png';
  angularImageAlt: string = 'Angular image';

  // style binding
  bgColor: string = '#333';
  titleColor: string = 'red';
  description: string = 'font-size: 50px; color: #999';

  // class binding
  redText: string = 'abcd';

  // Functions
  counter: number = 0;

  incrementCounter() {
    this.counter++;
  }
  decrementCounter() {
    this.counter--;
  }

  // two way data binding
  inputText: string = 'Initial value';

  // classes and styles
  message: string = 'This is message';
  classes: string = 'danger text-size';

  selectedColor: string = 'green';

  // Structure Directives ｜ ngIf ngFor and ngSwitch
  // ngIf
  isLoggedIn: boolean = false;
  check: boolean = true;

  // ngFor
  nameArray: string[] = ['Dilakshan', 'Dilak', 'Dilaks'];

  // ngSwitch
  grade: string = 'C';

  // Control flow | @If @for @switch
  a: number = 1;
  b: number = 2;

  items = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' },
  ];

  // Pipes | Built-in pipes and custom pipes
  // Built-in pipes
  pipeText: string = 'Hello';
  today: number = Date.now();
  currency: number = 1.1234;

  // Dependency Injection and Services for API Calls with HttpClient
  data: string[] = [];
  posts: Data[] = [];

  user$: Observable<any>;

  userData = {
    id: 1,
    name: 'Test name',
    roles: ['Admin', 'User'],
    status: {
      active: true,
      lastLogin: new Date(2024, 9, 23),
    },
  };

  constructor(
    private dataService: DataService,
    private userService: UserService
  ) {
    this.data = this.dataService.getData();
    this.user$ = this.userService.getUser();
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe({
      next: (response: Data[]) => {
        this.posts = response;
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }
}
