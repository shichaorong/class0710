import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import MessageDetail from '../message-detail';

class Message extends Component {
  state = {
    messages: []
  }
  
  componentDidMount () {
    //模拟发送请求
    setTimeout(() => {
      //获取数据
      const messages = [
        {id: 1, content: 'message001'},
        {id: 3, content: 'message003'},
        {id: 5, content: 'message005'}
      ];
      //更新状态
      this.setState({messages})
    }, 1000)
  }
  
  render () {
    const {messages} = this.state;
    return (
      <div>
        <ul>
          {
            messages.map((message, index) => (
              <li key={index}>
                <Link to={`/home/message/${message.id}`}>{message.content}</Link>
              </li>))
          }
        </ul>
        <Route path="/home/message/:id" component={MessageDetail}/>
      </div>
    )
  }
}

export default Message;