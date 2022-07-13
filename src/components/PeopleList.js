import React from 'react'
import users from '../users';

class PeopleList extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       list : users
    }
  }
  
handleClick = (index) => {
  const newArray = this.state.list.splice(index,1);
  this.setState({
    newArray
  })
}

clearBtn = ()=>{
  this.setState({
    list:[]
  })
}

render(){

  return (
    
    <section>
    <p className='text-noti'>You have {this.state.list.length} notifications</p>
     {
      this.state.list.map((user,index) => (
        <div key={index} className="person">

          <div className="avatar">
                <img src={user.img}/>
            </div>
            <div className="info">
              <h1>{user.name}</h1>
              <p>{user.age} years</p>
            </div>

            
            <button className='closeBtn' onClick={()=>this.handleClick(index)} >x</button>

        </div>
      ))
     }
                  <button className='clearBtn' onClick={()=>this.clearBtn()} >Clear All</button>

    </section>
  )
}
}




export default PeopleList