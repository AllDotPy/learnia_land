import { Component } from '@angular/core';
import { Feature } from 'src/app/shared/models/feature';

@Component({
  selector: 'app-otherfeactures',
  templateUrl: './otherfeactures.component.html',
  styleUrls: ['./otherfeactures.component.css']
})
export class OtherfeacturesComponent {

    features?: Feature [] = [
        {
            'title': 'Matières',
            'icon': 'assets/icons/features/chimie.svg',
            'description': "Consultez ici les programmes des différentes matières de votre classe."
        },
        {
            'title': 'Exohub',
            'icon': 'assets/icons/features/chimie.svg',
            'description': "Parcourez notre bibliothèque d'exercices adaptés à votre niveau."
        },
        {
            'title': 'Collections',
            'icon': 'assets/icons/features/livres.svg',
            'description': "Retrouvez facilement vos exercices et épreuves collectés ici."
        },
        {
            'title': 'Test Surprise',
            'icon': 'assets/icons/features/quiz.svg',
            'description': "Révisez et faites vous tester par Audrey✨ votre assistante IA personnelle."
        },
        {
            'title': 'Astuces',
            'icon': 'assets/icons/features/astuces.svg',
            'description': "Trouvez des astuces et conseils d'utilisation et d'appentissage avec Learnia✨."
        },
        {
            'title': 'Paramètres',
            'icon': 'assets/icons/features/chimie.svg',
            'description': "Accédez aux paramètres de votre classe, configurez vos objectifs avec Learnia✨"
        },
        {
            'title': 'Traduction',
            'icon': 'assets/icons/features/translation.png',
            'description': "Notre IA vous fournira une traduction fidèle et précise en un instant."
        },
        {
            'title': 'Résumé',
            'icon': 'assets/icons/features/pencil.png',
            'description': "Résumez vos document, cours et textes avec Audrey✨"
        },
        {
            'title': 'Discussions',
            'icon': 'assets/icons/features/brain.png',
            'description': "Discuttez avec Audrey✨ sur des sujets qui vous intéresssnt."
        },
        {
            'title': 'Langues',
            'icon': 'assets/icons/features/language.png',
            'description': "Apprenez plus facilement de nouvelles langues aec Audrey✨"
        },
        {
            'title': 'Dictionnaire',
            'icon': 'assets/icons/features/dict.png',
            'description': "Rechercher des mots, des expressions et définitions avec Audrey"
        },
        {
            'title': 'Convertisseur',
            'icon': 'assets/icons/features/converter.png',
            'description': "Convertissez en toute simplicité n'importe quelle unité en une autre avec l'aide D'Audrey✨."
        },
    ]
}
