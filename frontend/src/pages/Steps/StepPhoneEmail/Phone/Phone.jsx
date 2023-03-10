import React, {useState} from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css'
import { useDispatch } from 'react-redux';
import { setOtp } from '../../../../store/authSlice'

import { sendOtp } from '../../../../http'

export default function Phone({onNext}) {

    const [phoneNumber, setPhoneNumber] = useState('')
    const dispatch = useDispatch();
    const submit = async () => {
        //server request
        if(!phoneNumber || isNaN(phoneNumber.trim())) return;
        const {data} = await sendOtp({phone : phoneNumber});
        console.log(data);

        dispatch(setOtp({
            phone: data.phone,
            hash: data.hash
        }))

        onNext();
    }

  return (
    <Card title="Enter your phone number" icon="phone">

        <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>

        <div>
            
            <div className={styles.actionButtonWrap}>
                <Button onClick={submit} text="Next"/>
            </div>

            <p className={styles.bottomPara}>
                By entering your number, you're agreeing to our Terms of Service and Privacy Policy. Thanks!
            </p>

        </div>
    </Card>

  )
}
