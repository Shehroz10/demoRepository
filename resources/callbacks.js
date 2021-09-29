const posts = [
    {title: 'Post One', body: 'this is post one'},
    {title: 'Post Two', body: 'this is post two'}
];

function getpost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}


function createpost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


getpost();

createpost({title: 'Post Three', body: 'This is post three'});