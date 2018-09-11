import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    menuToggle = false;

    constructor(private dataStorageService: DataStorageService) {}

    toggleMenu() {
        this.menuToggle = !this.menuToggle;
    }

    onSaveData() {
        this.dataStorageService.storeRecipes().subscribe(
            response => {
                console.log(response.text());
            }
        );
    }
}
