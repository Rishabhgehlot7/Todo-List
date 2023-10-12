import React from 'react'

export default function Footer() {
  let footerStyle = {
    position: 'relative',
    width: '100%',
    top: '100vh'
  }
  return (
    <>
      <div className='bg-dark text-light text-center py-3' style={footerStyle}>Copyright &copy; TodosList</div>
    </>
  )
}
