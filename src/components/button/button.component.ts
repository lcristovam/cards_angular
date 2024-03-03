import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { withComponentInputBinding } from '@angular/router';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {

    @Input({ required: true, alias:'buttonText'}) buttonText: string = '';
    @Input({required: true, alias: 'buttonStyle'}) buttonStyle: 'white' | 'purple' = 'white';
    @Output() buttonClickedEmitt = new EventEmitter<void>();
    @Input({alias: 'disabled'}) isDisabled: boolean = false;

    onButtonClicked(){

      this.buttonClickedEmitt.emit();


    }
}
