import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.terminal1.caption'),
          title: i18n.t('forms.application.sitemap.terminal1.title'),
          children: [{
            link: 'i-i-s-terminal1-посад-талон-l',
            caption: i18n.t('forms.application.sitemap.terminal1.i-i-s-terminal1-посад-талон-l.caption'),
            title: i18n.t('forms.application.sitemap.terminal1.i-i-s-terminal1-посад-талон-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-terminal1-класс-билета-l',
            caption: i18n.t('forms.application.sitemap.terminal1.i-i-s-terminal1-класс-билета-l.caption'),
            title: i18n.t('forms.application.sitemap.terminal1.i-i-s-terminal1-класс-билета-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-terminal1-коды-l',
            caption: i18n.t('forms.application.sitemap.terminal1.i-i-s-terminal1-коды-l.caption'),
            title: i18n.t('forms.application.sitemap.terminal1.i-i-s-terminal1-коды-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-terminal1-рейс-l',
            caption: i18n.t('forms.application.sitemap.terminal1.i-i-s-terminal1-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.terminal1.i-i-s-terminal1-рейс-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-terminal1-пассажир-l',
            caption: i18n.t('forms.application.sitemap.terminal1.i-i-s-terminal1-пассажир-l.caption'),
            title: i18n.t('forms.application.sitemap.terminal1.i-i-s-terminal1-пассажир-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})