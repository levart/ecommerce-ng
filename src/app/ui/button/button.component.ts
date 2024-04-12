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
    '[class.alte-button--default]': 'size === "default"',
    '[class.alte-button--small]': 'size === "small"',
    '[class.alte-button--primary]': 'size === "primary"',
    '[class.alte-button--outline]': 'theme === "outline"',
  }
})
export class ButtonComponent {
  @Input() size: 'default' | 'small' = 'default'
  @Input() theme: 'primary' | 'outline' = 'primary'
}
