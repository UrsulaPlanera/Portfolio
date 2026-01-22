import { Component } from '@angular/core';
import { WithoutData } from "../../shared/components/without-data/without-data";
import { AngularIcon } from "../../shared/icons/angular-icon/angular-icon";
import { RobotIcon } from "../../shared/icons/robot-icon/robot-icon";

@Component({
  selector: 'app-projects',
  imports: [WithoutData, AngularIcon, RobotIcon],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

}
