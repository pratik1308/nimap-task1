import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import{ UserService} from '../user.service';
import {Router} from '@angular/router';
import {MatChipInputEvent} from '@angular/material/chips';
export interface tag {
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  registerForm:FormGroup;
  msg:String="";
  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(100);
    }

    return value;
  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: tag[] = [
    {name: 'cricket'},
    
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  
  constructor(private fb:FormBuilder, private user:UserService, private route:Router) {
    console.log("right");
    console.log(this.user);
   }
  url="/assets/images/download.png"
  selectFile(event){
    if(event.target.files){
      var render=new FileReader()
      render.readAsDataURL(event.target.files[0])
      render.onload=(event:any)=>{
        this.url=event.target.result
      }
    }
  }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      photo:['', Validators.required,],
      firstName:['',[ Validators.required,Validators.minLength(2),Validators.maxLength(20), Validators.pattern(/^[A-Z]+/)]],
      lastName:['', Validators.required],
      email:['', Validators.required],
      phone:['', Validators.required],
      age:['', Validators.required],
      state:['', Validators.required],
      country:['', Validators.required],
      tags:['', Validators.required],
      address:['', Validators.required]
    })
  }
  registerData(formrec){
   // console.log(formrec);
    //console.log(formrec.value);
    this.user.postData("user" , formrec.value).subscribe(
      (res)=>{
        this.msg = "user added";
        console.log(res);
        this.route.navigate(['/profile']);
      },
      (error)=>{

      }
    )
  }
}
