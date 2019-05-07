import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Video } from './videos';
@Component({
    selector: 'videos',
	templateUrl: './app/videos/videos.template.html'
})
export class VideosComponent {
    user: any;

    videos = [
        new Video('https://www.youtube-nocookie.com/embed/nUsHePihYO4',
        'WARNING: THIS VIDEO WILL CHANGE YOUR LIFE! The speakers are Eric Thomas, Les Brown and Ray Lewi NZ Aesthetics'),
        new Video ('https://www.youtube-nocookie.com/embed/KSTKheVpEq4',
        'Subscribe for more motivational videos: http://bit.ly/2fNveap Music: Say Something (instrumental version) Marys song Speakers:Elliott Hulse Stephen Fry Nick Vujicic Sadhguru Shay Carl'),
        new Video ('https://www.youtube-nocookie.com/embed/7iaLQZ73ujQ',
        'Speaker - Tyrese Gibson https://www.instagram.com/tyrese/ I do not own any copyrights, all rights go to their respective owners.')
    ];

    
    constructor(private _authenticationService:
        AuthenticationService) {
		//this.user = _authenticationService.user;
		this.user = _authenticationService.getLoggedInUser();
    }


}