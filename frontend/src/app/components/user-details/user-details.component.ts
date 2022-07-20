import { Response } from './../../interface/response';
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
  response: Response;
  mode:'edit' | 'locked' = 'locked';
    ButtonText: 'save' | 'edit' = 'edit';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  )
  { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((params: ParamMap) =>
    // {  console.log(` Id : ${params.get('uuid')!}`);
    //   this.userService.getUser(params.get('uuid')!).subscribe((res:any )=>
    //   {
    //     console.log(res);
    //   return this.data2 = res;
    //   }
    //   )
    // }
    // )
  }
  changeMode(mode: 'edit' | 'locked'): void {
    this.mode = this.mode === 'locked' ? 'edit' : 'locked';
    this.ButtonText = this.ButtonText === 'edit' ? 'save' : 'edit';
  }

}
