import moment from "moment";
import Vue from "vue";
 
Vue.filter('momentDate', function(value: string | Date, format = 'DD.MM.YYYY') {  
    if (!value) {
      return '';
    }
    let date = value;
    if (!(date instanceof Date)) {
      date = new Date(date);
    }    
    moment.lang("ru");
    return moment(date).format(format);
})
