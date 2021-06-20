import styled from "styled-components"
import { defaultMessageBody, defaultMessageFooter } from "./defaultMessage"
import Text from "./Text"
import ReactMarkdown from "react-markdown"

const Wrapper = styled.div`
  background-color: var(--HealthWarningMessageYellow);
  padding: 0.5em 1em;
  & * {
    font-size: 8.5pt;
    white-space: pre-wrap;
  }
  & > p:first-child {
    margin-top: 0;
  }
  & > p:last-child {
    margin-bottom: 0;
  }
`

const TextRight = styled(Text)`
  text-align: right;
`

const HealthWarningMessage = ({ messageBody, messageFooter }) => (
  <Wrapper>
    <ReactMarkdown children={messageBody}></ReactMarkdown>
    <TextRight>{messageFooter}</TextRight>
  </Wrapper>
)

export default HealthWarningMessage

HealthWarningMessage.defaultProps = {
  messageBody: defaultMessageBody,
  messageFooter: defaultMessageFooter,
}
