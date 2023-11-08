import {Component, Input, NgModule} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

interface buttonConfigInterface {
  [key: string]: { icon: string; name: string }
}

const buttonConfig: buttonConfigInterface = {
  ADD: {
    icon: 'add_shopping_cart',
    name: 'Ajouter',
  },
  DEFAULT: {
    icon: '',
    name: 'default',
  },
  REMOVE: {
    icon: 'remove_shopping_cart',
    name: 'Supprimer',
  }
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonType: 'ADD' | 'DEFAULT' | 'REMOVE' = 'DEFAULT';
  protected readonly buttonConfig: buttonConfigInterface = buttonConfig;
}

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule
  ]
})
export class ButtonModule {
}
