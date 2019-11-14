import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private logoutService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.logoutService.logOut();
    this.router.navigate(['/login']);
  }

}
