'use client'

import {useFormStatus} from 'react-dom'

function MealFormSubmit() {
    const {pending} = useFormStatus() ;
  return (
   <button disabled={pending}>
     {pending ? 'submitting...' : 'Share Meal'}
   </button>
  )
}

export default MealFormSubmit