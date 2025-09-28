import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className="text-3xl">
            there was a problem.
        </h2>
        <p>
            couldnt find the page you were looking for
        </p>
        <p>
            Go Back to the <Link href="/">Dashboard</Link> page
        </p>
    </main>
  )
}
