import { Response } from './../../interface/response';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  response : Response;
  dataa: any;
  constructor(private serv :UserService) { }

  ngOnInit(): void {
    this.serv.getUsers().subscribe((res: any) => {
      console.log(res);
      this.response = res;
      return this.dataa = res;
    })

  }

}
