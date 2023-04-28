import { observable } from 'mobx'
import React from 'react'
import homeStore from '../store/homeStore'
const {data} = homeStore
const Mycpt = () => {
  return (
    <div>Mycpt--{data.count}</div>
  )
}

export default observable(Mycpt)