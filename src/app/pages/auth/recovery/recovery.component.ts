import { Component } from '@angular/core';
import {AuthHeadComponent} from "../auth-head/auth-head.component";

@Component({
  selector: 'alte-recovery',
  standalone: true,
    imports: [
        AuthHeadComponent
    ],
  templateUrl: './recovery.component.html',
  styleUrls: [ '../auth.style.scss','./recovery.component.scss']
})
export class RecoveryComponent {

}
