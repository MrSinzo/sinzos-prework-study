
 /*Original Js code below \\\\\\*\*\*\*\**/
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for(var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}
console.log('Here are some random things about the topics that I have barely any understanding of while doing my prework')
listTopics()
console.log('Which topic should I annoy a tutor with first?')
selectTopic()
