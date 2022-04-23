import React from 'react'
import Header from './Header'

export type BasicLayoutProps = {
  children: any
}

const BasicLayout = (props: BasicLayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold underline">Hello world!</h1>
      {props.children}
    </>
  )
}

export default BasicLayout
