import { Component } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {

    contacts: any [] = [
        {
            'icon': 'hgi-stroke hgi-mail-01',
            'title': 'Email',
            'value': 'contact.learnia@alldotpy.com'
        },
        {
            'icon': 'hgi-stroke hgi-telephone',
            'title': 'Téléphone',
            'value': '+228 98490524'
        },
        {
            'icon': 'hgi-stroke hgi-map-pin',
            'title': 'Adresse',
            'value': '125 Rue képui Casablanca, Lomé'
        },
    ]
}
