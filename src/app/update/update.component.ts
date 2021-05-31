import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import{ UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatChipInputEvent} from '@angular/material/chips';
export interface tag {
  name: string;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  userarr:any;
registerForm:FormGroup;
  msg:String="";
  urlValues: any;
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

  
  constructor(private fb:FormBuilder, private user:UserService, private route:Router, private act:ActivatedRoute) {
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
    let urlRec = this.act.snapshot.params['urlId'];
    this.urlValues=this.act.snapshot.params['urlId'];
    // console.log(urlRec);
    this.user.selectCondition("user" , urlRec).subscribe(
      (res)=>{
        console.log(res);
        this.userarr=res[0];
      }
    )
  }
  update_record(rec1,rec2,rec3,rec4,rec5,rec6,rec7,rec8,rec9,rec10){
    var obj={
      photo:rec1.value,
      firstName:rec2.value,
      lastName:rec3.value,
      email:rec4.value,
      phone:rec5.value,
      age:rec6.value,
      state:rec7.value,
      country:rec8.value,
      tags:rec9.value,
      address:rec10.value
      
    }
    console.log(obj)
    console.log(this.urlValues)
    this.user.updateData("user", obj, this.urlValues ).subscribe((res)=>
    {
      console.log(res);
    })
    this.route.navigate(['/profile']);
  }
  

}

  
  


