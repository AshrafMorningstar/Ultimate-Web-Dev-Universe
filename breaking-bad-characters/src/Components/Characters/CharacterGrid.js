/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../UI/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? 
  <Spinner />
   : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  )
}

export default CharacterGrid