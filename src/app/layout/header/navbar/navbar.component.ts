import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from 'aws-amplify';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout() {
    Auth.signOut({global: true}).then( data => {
      this.router.navigate(['/auth']);
    }).catch(err => console.log(err));
  }
}
