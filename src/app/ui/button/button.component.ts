import {Component, Input} from '@angular/core';

@Component({
  selector: 'alte-button',
  standalone: true,
  imports: [],
  template: `
    <ng-content/>
  `,
  host: {
    class: 'alte-button',
    '[class.alte-button--primary]': 'theme === "primary"',
    '[class.alte-button--outline]': 'theme === "outline"',
  }
})
export class ButtonComponent {
  @Input() theme: 'primary' | 'outline' = 'primary'
}
