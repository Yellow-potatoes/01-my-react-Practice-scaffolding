import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import MyNavLink from '@/components/MyNavLink'
import Message from '../Message'
import News from '../News'


export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>我是Home</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news" replace >News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message" replace >Message</MyNavLink>
            </li>
          </ul>
         <Switch>
           <Route path="/home/news" component={News}/>
           <Route path="/home/message" component={Message} />
           <Redirect to="/home/news" />
         </Switch>
        </div>
      </div>
    )
  }
}
