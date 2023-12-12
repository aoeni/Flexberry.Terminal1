import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-terminal1-класс-билета-l');
  this.route('i-i-s-terminal1-класс-билета-e',
  { path: 'i-i-s-terminal1-класс-билета-e/:id' });
  this.route('i-i-s-terminal1-класс-билета-e.new',
  { path: 'i-i-s-terminal1-класс-билета-e/new' });
  this.route('i-i-s-terminal1-коды-l');
  this.route('i-i-s-terminal1-коды-e',
  { path: 'i-i-s-terminal1-коды-e/:id' });
  this.route('i-i-s-terminal1-коды-e.new',
  { path: 'i-i-s-terminal1-коды-e/new' });
  this.route('i-i-s-terminal1-пассажир-l');
  this.route('i-i-s-terminal1-пассажир-e',
  { path: 'i-i-s-terminal1-пассажир-e/:id' });
  this.route('i-i-s-terminal1-пассажир-e.new',
  { path: 'i-i-s-terminal1-пассажир-e/new' });
  this.route('i-i-s-terminal1-посад-талон-l');
  this.route('i-i-s-terminal1-посад-талон-e',
  { path: 'i-i-s-terminal1-посад-талон-e/:id' });
  this.route('i-i-s-terminal1-посад-талон-e.new',
  { path: 'i-i-s-terminal1-посад-талон-e/new' });
  this.route('i-i-s-terminal1-рейс-l');
  this.route('i-i-s-terminal1-рейс-e',
  { path: 'i-i-s-terminal1-рейс-e/:id' });
  this.route('i-i-s-terminal1-рейс-e.new',
  { path: 'i-i-s-terminal1-рейс-e/new' });
});

export default Router;
