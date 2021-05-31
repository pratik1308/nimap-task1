import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public JSONPATH = "http://localhost:3000/";

  constructor(public http:HttpClient) {
    console.log("In Service");
    console.log(this.http);
   }

getData(){}
putData(){}
postData(jsonServerKey, obj){
  var finalpath = this.JSONPATH + jsonServerKey;
  return this.http.post(finalpath,obj);
}
selectData(jsonServerKey){
  var finalpath = this.JSONPATH + jsonServerKey;
  console.log(finalpath);
  return this.http.get(finalpath);

}
selectCondition(jsonServerKey, id){
  return this.http.get(this.JSONPATH + jsonServerKey +"/"+id);
}
updateData(jsonServerKey,rec,id){
  // console.log(this.NODEURL + routename+"/"+id);
  // console.log(rec);
  
  return this.http.put(this.JSONPATH+jsonServerKey+"/"+id,rec);
}
}