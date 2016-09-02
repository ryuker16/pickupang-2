import angular from 'angular';
import 'angular-google-maps';
import {hello} from './app/hello';
import 'angular-ui-router';
import routesConfig from './routes';

// import our re-usable components
import Components from './app/components';
// import our Common Layout related Components
import Common from './app/common';

import './index.css';

export const app = 'app';

angular
  .module(app, ['ui.router', Common, Components])
  .config(routesConfig)
  .component('app', hello)
  .name;
