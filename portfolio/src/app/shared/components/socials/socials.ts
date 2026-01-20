import { Component } from '@angular/core';
import { AtIcon } from '../../icons/at-icon/at-icon';
import { GithubIcon } from '../../icons/github-icon/github-icon';
import { LinkedinIcon } from '../../icons/linkedin-icon/linkedin-icon';

@Component({
  selector: 'app-socials',
  imports: [AtIcon, GithubIcon, LinkedinIcon],
  templateUrl: './socials.html',
  styleUrl: './socials.css',
})
export class Socials {

}
