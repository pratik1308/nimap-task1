import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile_Data:any;
  constructor(private user:UserService, private route:Router) { }

  ngOnInit(): void {
    this.user.selectData("user").subscribe(
      (res)=>{
        this.profile_Data=res;
        
      }
    )
    
  }
  //editProfile(user){
    //this.route.navigate(['/update']);
  //}

}
