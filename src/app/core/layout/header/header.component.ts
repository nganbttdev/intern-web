import { Component} from '@angular/core';
import { NzIconDirective} from 'ng-zorro-antd/icon';
import { NzHeaderComponent} from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzDropDownModule, NzHeaderComponent, NzIconDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}