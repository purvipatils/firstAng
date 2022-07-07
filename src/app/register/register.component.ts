import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private userService: UserService){}

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
       this.userService.registerUser(f.value).subscribe(() => {
      this.router.navigate(['/login']);
    });

    
  }

}
