import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  dataa: any;
  constructor(private serv :UserService) { }

  ngOnInit(): void {
    this.serv.getUsers(1).subscribe((res: any) => {
      console.log(res);
      return this.dataa = res;
    })

  }

}
