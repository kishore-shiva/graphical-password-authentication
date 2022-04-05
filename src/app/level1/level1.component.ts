import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {

  a:string = 'red';
  b:string = 'blue';
  c:string = 'green';
  d:string = 'yellow';

  selectedColor:string = "none";
  error:string = "";
  imageCount:number = 1;
  imageSequence:string = "3124";
  selectedImages:string = "";
  randomImageNumber:number = Math.floor(Math.random() * 3)+1;
  cat:string = '../../assets/cat'+this.randomImageNumber+'.png';
  flower:string = '../../assets/flower'+this.randomImageNumber+'.png';
  mouse:string = '../../assets/mouse'+this.randomImageNumber+'.png';
  dog:string = '../../assets/dog'+this.randomImageNumber+'.png';
  constructor() { }

  ngOnInit(): void {

    // //database is defined as key: database and users details are in the "users" list as JSON
    // localStorage.setItem("database", JSON.stringify({"users": [{
    //   "username": "john",
    //   "password": "john",
    //   "level1color": "red"
    // }]}))

    let a = 'primary';

    console.log(localStorage.getItem("database"))
  }

  changeSelectedColor(a:string){
    this.selectedColor = a;
  }

  login(username:string){
    console.log(username);
    var users = JSON.parse(JSON.stringify(localStorage.getItem('database')));
    var registered_users = (JSON.parse(users).users);
    console.log(registered_users);

   let loginVerified = false;

    for(let i in registered_users){
      if(registered_users[i].username === username && this.selectedImages === this.imageSequence){
        console.log("login success");
        loginVerified = true;
      }
    }

    if(!loginVerified){ this.error = "***invalid username or password***"; }
  }

  clickThis(imageNumber: number){
    console.log("clicked :",imageNumber);
    this.selectedImages += ""+imageNumber;
  }

  clear(){
    this.selectedImages = "";
  }

}
