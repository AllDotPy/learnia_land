import { Component } from '@angular/core';

@Component({
  selector: 'app-waitform',
  templateUrl: './waitform.component.html',
  styleUrls: ['./waitform.component.css']
})
export class WaitformComponent {

    show_select: boolean = false
    active_country = {
        'id':'5bbf255f-2842-4bfa-b866-6c413214c6c7',
        'flag': 'https://flagcdn.com/tg.svg',
        'name': 'Togo',
        'users': '3,2k',
        'pronoun': 'au',
        'zip': '+228'
    }
    countries?: any [] = [
        {
            'id':'5bbf255f-2842-4bfa-b866-6c413214c6c7',
            'flag': 'https://flagcdn.com/tg.svg',
            'name': 'Togo',
            'users': '3,2k',
            'pronoun': 'au',
            'zip': '+228'
        },
        {
            'id':'92a7235d-a531-418b-868e-c768c07c5a9d',
            'flag': 'https://flagcdn.com/bj.svg',
            'name': 'Benin',
            'users': '1,6k',
            'pronoun': 'au',
            'zip': '+229'
        },
        {
            'id':'22808785-04e4-470e-9fba-dd6bed3c852c',
            'flag': 'https://flagcdn.com/bf.svg',
            'name': 'Burkina Faso',
            'users': '361',
            'pronoun': 'au',
            'zip': '+226'
        },
        {
            'id':'2269f021-3beb-4145-a3d0-5bc6acdaad48',
            'flag': 'https://flagcdn.com/ci.svg',
            'name': 'Côte d\'Ivoire',
            'users': '2,2k',
            'pronoun': 'en',
            'zip': '+225'
        },
        {
            'id':'077c5f01-58dc-440a-b461-539822834da4',
            'flag': 'https://flagcdn.com/cm.svg',
            'name': 'Cameroun',
            'users': '2,8k',
            'pronoun': 'au',
            'zip': '+237'
        },
        {
            'id':'13cd6b86-e73e-47c7-93ae-2f109ed120b8',
            'flag': 'https://flagcdn.com/sn.svg',
            'name': 'Sénégal',
            'users': '823',
            'pronoun': 'au',
            'zip': '+221'
        },
    ]
    constructor(){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }

    // OPEN COUNTRY SELECT
    toggleCountrySelect(){
        this.show_select = !this.show_select
    }

    // SELECT COUNRTY
    selectCountry(country:any){
        this.active_country = country
        this.toggleCountrySelect()
    }
}
