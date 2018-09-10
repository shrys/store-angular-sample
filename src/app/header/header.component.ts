import { Component } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    menuToggle = false;

    toggleMenu() {
        this.menuToggle = !this.menuToggle;
    }
}
