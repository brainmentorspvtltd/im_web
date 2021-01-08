function doAjax(){
    // Post
    var options = {
        method:'POST',
        data:{}
    }
    //fetch(url,options)
    var pr = fetch('https://raw.githubusercontent.com/brainmentorspvtltd/im_web/main/myserverdata.json');
    return pr;
    //pr.then(response=>response.json().then(data=>console.log(data)).catch(e=>console.log('Invalid JSOn '))).catch(err=>console.log(err));
}