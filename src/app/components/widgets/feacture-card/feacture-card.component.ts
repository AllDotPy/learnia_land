import { Feature } from './../../../shared/models/feature';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feacture-card',
  templateUrl: './feacture-card.component.html',
  styleUrls: ['./feacture-card.component.css']
})
export class FeactureCardComponent {

    @Input()
    feature?: Feature = {
        'title': 'Astuces',
        'icon': 'assets/icons/features/astuces.svg',
        'description': "Trouvez des conseils et astuces d'utilisation et d'apprentissage avec Learnia."
    }

    constructor(){}
}
