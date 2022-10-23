import { Box } from '@mui/system'
import styled from 'styled-components'

const BannerImage = styled('img')`
  max-height: 200px;
  max-width: 400px;
`
const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 10px;
  width: 400px;
`

const InfoBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const InfoValue = styled('span')`
  font-size: 2.6rem;
  color: #f0cf85;
  font-weight: bold;
`

const InfoText = styled('span')`
  margin-left: 5px;
  line-height: 1.2;
  text-align: left;
  text-transform: uppercase;
`

export { BannerImage, InfoContainer, InfoBox, InfoValue, InfoText }
