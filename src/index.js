import { showTime } from './script/time-and-greeting';
import { getWeather } from './script/weather';
import { getQuote } from  './script/quotes';
import { playOrPause } from './script/audio';
import { hideSettings } from "./script/settings";
import { hideOrShowTime } from "./script/hide-elements";
import { showImageCollection } from "./script/img-collection";
import { hideTodo } from "./script/todo-list";
import { checkedEn } from "./script/language";

showTime();
getWeather();
getQuote();
hideSettings();
showImageCollection();
hideTodo();
