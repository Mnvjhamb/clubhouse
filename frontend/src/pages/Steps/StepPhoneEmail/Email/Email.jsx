import React, {useState} from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css'

export default function Email({onNext}) {

    const [email, setEmail] = useState('')
  return (
    <Card title="Enter your email id" icon="email-emoji">

        <TextInput value={email} onChange={(e) => setEmail(e.target.value)}/>

        <div>
            
            <div className={styles.actionButtonWrap}>
                <Button onClick={onNext} text="Next"/>
            </div>

            <p className={styles.bottomPara}>
                By entering your email, you're agreeing to our Terms of Service and Privacy Policy. Thanks!
            </p>

        </div>
    </Card>

  )
}
