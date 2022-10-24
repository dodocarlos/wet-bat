import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { BannerImage, InfoBox, InfoContainer, InfoText, InfoValue } from './styles'

export default function Banner() {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        minHeight: '250px',
        backgroundImage: `linear-gradient(to bottom right, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
        borderRadius: theme.shape.borderRadius,
        color: '#FFF',
        boxSizing: 'border-box',
      })}
      padding={2}
    >
      <Grid container>
        <Grid item sm={4}>
          <Typography variant='h4' fontWeight='bold'>
            Welcome to <br></br>your dashboard
          </Typography>
          <Typography marginTop={3}>
            Phasellus gravida velit vel mi auctor egestas. Quisque elementum turpis eu leo semper,
            sed posuere sapien placerat. Mauris augue nisi, dictum ac rhoncus nec, iaculis vitae
            nisl. Etiam facilisis a quam eget molestie. Sed non ex vehicula, elementum eros eu,
            fermentum leo. Curabitur sagittis tristique mi, at semper nisi varius eget. Praesent sit
            amet feugiat mauris, non molestie nisi.
          </Typography>
        </Grid>
        <Grid item sm={1}></Grid>
        <Grid
          item
          sm={7}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <BannerImage src='images/banner-image.png' alt='Banner image' />
          <InfoContainer>
            <InfoBox>
              <InfoValue>101</InfoValue>
              <InfoText>
                new <br />
                leads
              </InfoText>
            </InfoBox>

            <InfoBox>
              <InfoValue>35</InfoValue>
              <InfoText>
                quotes <br />
                created
              </InfoText>
            </InfoBox>

            <InfoBox>
              <InfoValue>40</InfoValue>
              <InfoText>
                pending <br />
                orders
              </InfoText>
            </InfoBox>
          </InfoContainer>
        </Grid>
      </Grid>
    </Box>
  )
}
