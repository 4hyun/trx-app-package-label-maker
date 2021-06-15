import styled from 'styled-components'
import {defaultMessageBody, defaultMessageFooter} from "./defaultMessage"
import Text from './Text'

const Wrapper = styled.div`
  background-color: var(--HealthWarningMessageYellow);
`

const HealthWarningMessage = () => <Wrapper>
  <Text>{defaultMessageBody}</Text>
  <Text>{defaultMessageFooter}</Text>
</Wrapper>

export default HealthWarningMessage