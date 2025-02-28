import { Component } from '@angular/core';
import { PolicyService } from 'src/app/shared/services/policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {

    content: string = '### No **content** *yet!*'

    constructor(
        private policiesService: PolicyService
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
                    this.content = data.text
                },
                error: (err:any)=>{}
            }
        )
    }
}
