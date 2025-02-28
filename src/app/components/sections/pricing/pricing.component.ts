import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {

    features: any [] = [
        {
            'title': 'ExoHub',
            'description': 'Exercices, Corrigés, Explications par IA.'
        },
        {
            'title': 'Examens',
            'description': 'antérieurs (sujets, corrigés + discussions avec IA).'
        },
        {
            'title': 'Explication ',
            'description': 'de cours par IA.'
        },
        {
            'title': 'Correction ',
            'description': 'd\'exercices par IA.'
        },
        {
            'title': 'Résumés et Traductions ',
            'description': 'de texes et de documents IA.'
        },
    ]
}
