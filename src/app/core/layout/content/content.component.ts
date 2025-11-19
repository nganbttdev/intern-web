import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NzLayoutModule } from "ng-zorro-antd/layout";

@Component({
    selector: 'app-content',
    imports: [CommonModule, RouterOutlet, NzLayoutModule],
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
    standalone: true,
})
export class ContentComponent {}