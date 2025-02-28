import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(){}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.showHeaderShadow()
    }

    showHeaderShadow(){
        // SHOWS OR HIDES NAVBAR SHADOW

        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {

            if (window.scrollY > 0) {
                // progress.classList.remove('hidden')
                header?.classList.add('backdrop-blur-lg','shadow-lg');
            } else {
                // progress.classList.add('hidden')
                header?.classList.remove('backdrop-blur-lg','shadow-lg');
            }
            // progress.style.width = `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`;
        });
    }
}
