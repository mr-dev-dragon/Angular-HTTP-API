import { environment } from './../environments/environment.prod';

import { Component, OnInit } from '@angular/core';
import { observable, Subscriber } from 'rxjs';
// import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers(): void {
    this.usersService.getusers().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('done')
    );


    type HttpResponse = { code: Number, data: String };
    const abserv = new Observable<HttpResponse>(subscriber => {
      console.log;{ 'inside subscribar...'; };
      subscriber.next({ code: 200, data: 'thisis data 1 ...' });
      subscriber.next({ code: 200, data: 'thisis data 2...' });
      subscriber.next({ code: 200, data: 'thisis data 3 ...' });
      subscriber.next({ code: 200, data: 'thisis data 4 ...' });
      subscriber.next({ code: 200, data: 'thisis data 5 ...' });
      // subscriber.error({ code: 500, data: 'oopss ..........' });
      setTimeout(() => {
        subscriber.next({ code: 200, data: 'this is data more data....' });
        subscriber.complete();
      }, 10 * 1000);
      console.log('subscriber is dane emitiig .. ')
    });

   abserv.subscribe({
     next(response: HttpResponse) {
       console.log('got response:', response);
     },
     error(error: any) {
       console.log('domething wrong accurred:', error);
     },
     complete() {
       console.log('done');
     },
   });

    }
}
