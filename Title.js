import React,{Component} from 'react';
 const TITLES=[
    'A SOFtware Enginner',
    'a music lover',
    'an enthusiastic learner',
    'an adventure seeker'
 ];
 class Title extends Component{
    state={ titleIndex:0};
     render()
     {
         const title=TITLES[this.state.titleIndex];
          return (
            <p>I am {title}</p>
          )
     }
 }
  export default Title;