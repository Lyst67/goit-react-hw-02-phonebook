import { nanoid } from "nanoid"

export const Contacts = ({ options, title }) => {
   
    const {contacts} = options
    // console.log({ name })
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {contacts.map(contact => {
                    return (
                    <li key={nanoid()}>
                         <p>{contact.name}</p>
                    </li>
                
                
                    )
                })}
            
            </ul>
        </>
       
    )
}