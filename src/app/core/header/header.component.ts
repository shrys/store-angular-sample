import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    menuToggle = false;

    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}

    toggleMenu() {
        this.menuToggle = !this.menuToggle;
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onSaveData() {
        this.dataStorageService.storeRecipes().subscribe(
            response => {
                console.log(response.text());
            }
        );
    }

    isLoggenIn() {
        return this.authService.isAuthenticated();
    }

    onLogout() {
        this.authService.logout();
    }
}
