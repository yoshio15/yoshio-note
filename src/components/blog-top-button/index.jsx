import React from 'react'

import { Link } from 'gatsby'

export const BlogTopButton = () => (
  <div
    style={{
      marginTop: `30px`,
      textAlign: `end`
    }}
  >
    <Link to={'/'}>ブログトップへ戻る{' >>'}</Link>
  </div>
)