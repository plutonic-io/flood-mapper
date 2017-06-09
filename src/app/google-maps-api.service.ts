
import { Injectable } from '@angular/core';

const googleMapsApiUrl = 'https://maps.googleapis.com/maps/api/js?key={api_key}&callback=onGoogleMapsApiLoaded';

@Injectable()
export class GoogleMapsApiService {
    private static promise;

    public static load(api_key:string) {
        // First time 'load' is called?
        if (!this.promise) {

            // Make promise to load
            this.promise = new Promise( resolve => {

                // Set callback for when google maps is loaded.
                window['onGoogleMapsApiLoaded'] = (ev) => {
                    resolve('Google Maps API loaded');
                };

                let node = document.createElement('script');
                node.src = googleMapsApiUrl.replace('{api_key}',api_key);
                node.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(node);
            });
        }

        // Always return promise. When 'load' is called many times, the promise is already resolved.
        return this.promise;
    }
}