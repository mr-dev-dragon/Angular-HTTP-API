import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
data2: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  )
  { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) =>
    {  console.log(` Id : ${params.get('uuid')!}`);
      this.userService.getUser(params.get('uuid')!).subscribe((res:any )=>
      {
        console.log(res);
      return this.data2 = res;
      }
      )
    }
    )
  }

}
