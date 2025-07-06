'use client'

import Link from 'next/link'

export default function NotFound() {

    return (
        <div className='flex-1 flex flex-col gap-8 items-center justify-center'>
            <h1 className='text-3xl'>404 - Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}