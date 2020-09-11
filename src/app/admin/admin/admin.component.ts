import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  logOut() {
    this.auth.clear();
    this.router.navigateByUrl('/'); 
  }

  ngOnInit(): void {}
}
