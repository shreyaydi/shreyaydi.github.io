fetch("https://api.github.com/users/shreyaydi")
        .then(response => response.json())
        .then(function(data){
        console.log(data);

        document.getElementById('profileImage').src= data['avatar_url'];
        document.getElementById('fullName').textContent= data['name'];
        document.getElementById('githubLink').href= data['html_url'];

    })

// create an element
const createNode = function(elem) {
  return document.createElement(elem);
};

// append an element to parent
const appendNode = function(parent, elem){
  parent.appendChild(elem);
}

// List Element
const ul = document.querySelector('#repos');

// GitHub API URL
const url = 'https://api.github.com/users/shreyaydi/repos';


// make the API call
fetch(url)
  .then(res => res.json())
  .then(data => {
      // iterate over users
      data.map((user) => {
          // create the elements
          let li = createNode('li'),
              span = createNode('span'),
              anchor = createNode('a');
          span.innerText = user.name;
          anchor.href = repos.html_url; // create link to each repos
          // append all elements
          appendNode(li, span);
          appendNode(ul, li);
          appendNode(span, anchor);
      });
  }).catch(err => {
      console.error('Error: ', err);
  });
  window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;
  
    if(window.innerWidth>991){
      if(docScrollTop>100){
        document.querySelector("header").classList.add("fixed");
      }
      else{
        document.querySelector("header").classList.remove("fixed");
      }
    }  
  } 

