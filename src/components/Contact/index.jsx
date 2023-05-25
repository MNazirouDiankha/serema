import { ReactComponent as Mail } from 'assets/icons/mail.svg'
import { ReactComponent as Phone } from 'assets/icons/phone.svg'
import styled from 'styled-components'

const ContactStyle = styled.div`
  margin-top: 19px;
  span {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    margin-left: 23px;
  }
`

function Contact() {
  return (
    <>
      <ContactStyle>
        <Mail />
        <span>seremagroupe@gmail.com</span>
      </ContactStyle>
      <ContactStyle>
        <Phone />
        <span>+221 77 098 95 97</span>
      </ContactStyle>
    </>
  )
}

export default Contact
