import { Component } from "@angular/core";
import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
    selector: 'app-layout',
    imports: [ContentComponent, HeaderComponent, SidebarComponent],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
})
export class LayoutComponent{}