import React from 'react'
import { useState } from 'react'
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { getSearchValue } from '../redux/features/filter';

export const Search = () => {
  const [value,setValue]=useState('')
  const dispatch = useDispatch()
  
  const delaySearchValue = useCallback(
    debounce((str)=>{
      return dispatch(getSearchValue(str))
    },500),
  [])

  const onChangeValue = (e) => {
    setValue(e.target.value)
    delaySearchValue(e.target.value)
  }
  return (
    <div>
        <input type="text" placeholder='Искать продукты' className='search' value={value} onChange={onChangeValue}/>
    </div>
  )
}
