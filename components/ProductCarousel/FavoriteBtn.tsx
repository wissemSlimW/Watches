'use client'
import { Heart } from '@/assets/svg'
import React, { useState } from 'react'

export const FavoriteBtn = () => {
    const [color, setColor] = useState('black')
    return (
        <Heart onClick={() => setColor('red-500')} className={`[&>path]:fill-${color}`} />
    )
}
