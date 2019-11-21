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
      <Link href="/dynamic-import" as={`${process.env.PREFIX}/dynamic-import`} >
        <a>Dynamic-import sample</a>
      </Link>
    </React.Fragment>
  )
}
