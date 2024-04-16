import {Component, Input} from '@angular/core';

@Component({
  selector: 'button[alte-button]',
  standalone: true,
  imports: [],
  template: `
    <ng-content/>
  `,
  host: {
    class: 'alte-button',
    '[class.alte-button--default]': 'size === "default"',
    '[class.alte-button--small]': 'size === "small"',
    '[class.alte-button--primary]': 'theme === "primary"',
    '[class.alte-button--outline]': 'theme === "outline"',
    '[class.alte-button--outline-black]': 'theme === "outline-black"',
    '[class.alte-button--link]': 'theme === "link"',
  }
})
export class ButtonComponent {
  @Input() size: 'default' | 'small' = 'default'
  @Input() theme: 'primary' | 'outline' | 'link' = 'primary'
}
