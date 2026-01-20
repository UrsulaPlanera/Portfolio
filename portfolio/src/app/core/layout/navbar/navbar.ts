import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BriefcaseIcon } from '../../../shared/icons/briefcase-icon/briefcase-icon';
import { DashboardIcon } from '../../../shared/icons/dashboard-icon/dashboard-icon';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, BriefcaseIcon, DashboardIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
