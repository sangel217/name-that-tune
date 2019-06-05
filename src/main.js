import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { myCode } from './myCode';

$(document).ready(function(){
  
    let promise = new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = 'http://api.napster.com/v2.2/stations/decade?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4';
        request.onload = function(){
            if(this.status === 200){
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        }
        request.open("GET", url, true);
        request.send();
    });

    promise.then(function(response) {

        let body = JSON.parse(response);
        //let artist = body.tracks[0].artistName;

        $("#frame").attr("src", body.stations[0].links.genres.ids.href +'apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4');
    })



});