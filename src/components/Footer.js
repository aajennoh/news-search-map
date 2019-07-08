import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Link from '@material-ui/core/Link';

export default function Footer() {
    return (
        <div>
            <BottomNavigation>
                <Link href='https://newsapi.org'> 
                    Powered by News API
                </Link>
            </BottomNavigation>
        </div>
    )
}