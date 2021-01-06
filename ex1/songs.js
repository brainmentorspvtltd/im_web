var songs = ['Bang Bang','Boom Boom'];
var x;
function add()
{ x=0;
for (index = 0; index < songs.length; index++) {
    if (songs[index] ==arguments[0])
    {    x=1;}

else
{x=0;
console.log("here");
 songs.push(arguments[0]);
}
}
for (index = 0; index < songs.length; index++){
 console.log(songs[index]);
}

if(x==1)
{return false;}
else
{return true;}

}