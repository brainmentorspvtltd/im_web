

var obj = (function (){
     console.log('IIFE');
    var songs = ['Bang Bang','Boom Boom'];
    //var songs = [{title:'',singer:''},{},{}];

    var addSong = function(songName){
        /*
        for(let i =0 ; i<songs.length; i++){
            if(songs[i]==songName){
                console.log('This Song is Already Exist So Cant Add It');
                return ;
            }

        }*/
        /*
        if(searchSong(songName)){
            console.log('This Song is Already Exist So Cant Add It')
        }
        else{
        songs.push(songName);
        console.log('Song Added....');
        }*/
        return searchSong(songName)?'This Song is Already Exist So Cant Add It':songs.push(songName);
    }
    var searchSong = songName => songs.find(song=>song==songName)?true:false;
    // var searchSong = function(songName){
    //     // for(let i =0 ; i<songs.length; i++){
    //     //     if(songs[i]==songName){
    //     //         console.log('This Song is Already Exist So Cant Add It');
    //     //         return true;
    //     //     }

    //     // }
    //     // return false;
    // }
    var printSong = ()=> songs.forEach(song=>console.log(song));
    // var  printSong = function(){
    //     songs.forEach(song=>console.log(song));
    //     // for(let i =0 ; i<songs.length; i++){
    //     //     console.log(songs[i]);
    //     // }
    // }
    //return [addSong, searchSong, printSong];
    //return {"add":addSong, "search":searchSong, "print":printSong};
    return {addSong, searchSong, printSong};
})();
