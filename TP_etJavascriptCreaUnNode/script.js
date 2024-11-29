/* une nécessité d'afficher un menu nouveau, un message d'erreur, une promotion ??? */
/* etudions ce qui suit ... */

function creationNode(){

    var chaine=" p !! je suis ... ton frère ! un autre p ! fils de article comme toi ...";
    var msgArct = document.getElementById('ici');

    msgErr = document.createElement('p');
    msgErr.id = "msg-err";
    msgErr.textContent = chaine;
    msgErr.style.color = "red";
    msgArct.appendChild(msgErr);

   
    document.body.style.backgroundColor = 'yellow';

}

function creationNodeRetardee(){
    setTimeout(creationNode,3000);
}


window.onload=function(){
    creationNodeRetardee();
}