import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

// import Link from 'data-prefetch-link'

function Index(props) {
  return (
    <div>
      <h2>{props.project} has {props.stars} ⭐️</h2>
      <Link href="?">
        <a>nextjs</a>
      </Link>
      {` | `}
      <Link href="?project=developit/preact">
        <a>preact</a>
      </Link>
      {` | `}
      <Link prefetch withData href="?project=kiwicom/orbit-components"><a>Some dynamic page</a></Link>
      {` | `}
      <Link href="?project=styled-components/styled-components" prefetch>
        <a>styled-components</a>
      </Link>

      <hr />
      <a href="?project=styled-components/styled-components">styled-components</a>
    </div>
  )
}

Index.getInitialProps = async ({query: {project = "zeit/next.js"}} ) => {
  const res = await fetch(`https://api.github.com/repos/${project}`)
  const json = await res.json() // better use it inside try .. catch
  return { project, stars: json.stargazers_count }
}

export default Index