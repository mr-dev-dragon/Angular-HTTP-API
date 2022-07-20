import { User } from './../../interface/user';

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
  user: User;

  mode:'edit' | 'locked' = 'locked';
    ButtonText: 'save' | 'edit' = 'edit';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  )
  { }

  ngOnInit(): void {
    this.user = (<User>(this.activatedRoute.snapshot.data['resolvedResponse'].results[0]));

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
    if(mode === 'edit') {
      // Logic to update the user on the back end
      console.log('Updating using on the back end');
    }
  }

}
