import styled from 'styled-components'

const Header = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const Title = styled('span')(({ theme }) => ({
  fontSize: '1.5rem',
  color: theme.palette.primary.main,
}))

export { Header, Title }
