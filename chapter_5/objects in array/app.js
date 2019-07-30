// object literals

// const blogs = [
//   { title: 'why mac & cheese rules', likes: 30 },
//   { title: '10 things to make with marmite', likes: 50},
// ];
// console.log(blogs);
let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs : [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50},
  ],
  login: function(){
    console.log('the user logged in');
  },
  logout: function(){
    console.log('the user logged out');
  },
  logBlogs: function(){
    //console.log(this.blogs);
    console.log('this is user has written the following blogs: ');
    console.log(this.blogs.forEach(blog =>{
      console.log(blog.title, blog.likes);
    }))
  }
};
user.logBlogs();