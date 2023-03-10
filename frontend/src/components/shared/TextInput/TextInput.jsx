import React from 'react'
import styles from './TextInput.module.css'

export default function TextInput(props) {
  return (
    <div>
        <input className={styles.input} style={{width: props.fullwidth === 'true' ? '100%' : 'inherit'}} type="text"  {...props}/>
    </div>
  )
}
