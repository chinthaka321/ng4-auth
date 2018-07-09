import { Injectable } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{
  
  constructor(
    private router:Router,
    private authService:AuthService) { }

  canActivate(route, state:RouterStateSnapshot) {
    if(this.authService.isLoggedIn()) return true; 

    this.router.navigate(['/login'], {queryParams:{returnUrl: state.url }});
    return false;
  }

}
