import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { LocalNotifications } from '@ionic-native/local-notifications';

platformBrowserDynamic().bootstrapModule(AppModule);
