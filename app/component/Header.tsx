'use client';

import React from 'react'
import AccountButton from './AccountButton'

function Header() {
  return (
    <header className=' flex justify-center space-x-20 flex-row cursor-pointer pt-20 text-2xl bg-sky-700 text-white align-middle pb-20'>
        <div>Logo</div>
        <div>Home</div>
        <div>Invoice</div>
        <div>History</div>
        <div><AccountButton /></div>
    </header>
  )
}

export default Header