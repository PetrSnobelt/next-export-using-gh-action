import React from 'react'
import { Alert, Illustration } from '@kiwicom/orbit-components'
import Link from "next/link"

export default () => {
  return (
    <React.Fragment>
      <Alert type="success" spaceAfter="large">
        It Works!
      </Alert>
      <Illustration name="Success" />
      <nav>
        <Link href="/dynamic-import" as={`${process.env.PREFIX}/dynamic-import`} >
          <a>Dynamic-import sample</a>
        </Link>
        <Link href="/dynamic-import" as={`${process.env.PREFIX}/react-lazy`} >
          <a>React-lazy sample</a>
        </Link>
      </nav>
    </React.Fragment>
  )
}
