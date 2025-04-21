import { Component } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { PolicyService } from 'src/app/shared/services/policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {

    content: string = '### No **content** *yet!*'
    title: string = 'Terms & Conditions'

    constructor(
        private policiesService: PolicyService,
        private navigationService: NavigationService
    ){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getPolicies()
    }

    // GET POLICIES
    getPolicies(){
        this.policiesService.retrieve().subscribe(
            {
                next: (data:any)=>{
                    this.getCurrentRouteContent(data)
                },
                error: (err:any)=>{}
            }
        )
    }

    // GET CURENT ROUTE FOR DISPLAYING THE RIGHT CONTENT
    getCurrentRouteContent(data:any){
        this.navigationService.getCurrentRoute().subscribe(
            (route:string)=>{
                console.log(route)
                if(route.includes('terms')){
                    this.content = data.terms
                    this.title = 'Terms & Conditions'
                }
                else if(route.includes('policy')){
                    this.content = data.policy
                    this.title = 'Politiques de Confidentialité'
                }
            }
        )
    }
}
