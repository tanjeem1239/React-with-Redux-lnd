import React from 'react'
import Button from '../components/Button'

function ButtonPage() {
  return (
    <div>
        <div>
            <Button secondary outline rounder>Click me</Button>
            <Button primary outline rounder>Click me</Button>
            <Button success outline rounder>Click me</Button>
        </div>
    </div>
  )
}

export default ButtonPage