/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

name1.innerHTML = 'Tay-Tay';


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

position2.innerHTML = 'Project Manager';


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

alias3.innerHTML = 'Concatenation';


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var profileElem = document.getElementsByClassName('profile');
profileElem[0].innerHTML = 'Don\'t know any lyrics.';


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

profileElem[1].innerHTML = 'Never waste energy on worries or negative thoughts, all problems are brought into existence– drop them';

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var aliasElem = document.getElementsByClassName('alias');
aliasElem[2].innerHTML = 'Coach Carter, Django, and of course Pulp Fiction';

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var newElem = document.createElement('div');
newElem.id = 'name7';
newElem.innerHTML = 'Peter Griffin';
nameParent.appendChild(newElem);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/



//Final Boss
/*9. Create your own profile.*/

