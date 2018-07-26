import 'jquery-ui/themes/base/all.css';
import 'nouislider/distribute/nouislider.css';
import 'select2/dist/css/select2.css';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';

import 'jquery-bar-rating/dist/themes/css-stars.css';
import 'jquery-bar-rating/dist/themes/fontawesome-stars.css';

import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker.js';
import 'select2/dist/js/select2.js';
import 'jquery-bar-rating';

import * as widgets from 'surveyjs-widgets';

export const configureWidgets = (survey) => {
  widgets.icheck(survey, $);
  widgets.select2(survey, $);
  widgets.inputmask(survey);
  widgets.jquerybarrating(survey, $);
  widgets.jqueryuidatepicker(survey, $);
  widgets.nouislider(survey);
  widgets.select2tagbox(survey, $);
  widgets.signaturepad(survey);
  widgets.sortablejs(survey);
  widgets.ckeditor(survey);
  widgets.autocomplete(survey, $);
  widgets.bootstrapslider(survey);
};
