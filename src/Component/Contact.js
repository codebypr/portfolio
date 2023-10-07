import React from 'react'
import ImageSection from './ImageSection'
import ContactDetails from './ContactDetails'
import contact from "../MyImage/contact.jpg"
export default () => {
    return(
        <>
        <ImageSection heading="CONTACT" text="Lets have a Chat" img={contact}/>
        <ContactDetails/>
        </>
    )
}