import React, { ElementType, PropsWithChildren } from 'react'

import { Box, Divider, Stack, IconButton, SvgIcon, Tooltip } from '@mui/material'
import { Refresh, Fullscreen } from '@mui/icons-material'

import { Header, Title } from './styles'

type Props = {
  title: string
  icon: ElementType
  showRefreshButton?: boolean
}

export default function Card({
  icon,
  title,
  children,
  showRefreshButton = true,
}: PropsWithChildren<Props>) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        backgroundColor: '#fff',
      }}
    >
      <Header>
        <Stack direction='row' spacing={1}>
          <SvgIcon component={icon} sx={(theme) => ({ color: theme.palette.secondary.main })} />
          <Title>{title}</Title>
        </Stack>
        <Stack direction='row' spacing={1}>
          {showRefreshButton && (
            <Tooltip title='Refresh data'>
              <IconButton>
                <Refresh />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title='Toggle fullscreen'>
            <IconButton>
              <Fullscreen />
            </IconButton>
          </Tooltip>
        </Stack>
      </Header>
      <Divider />
      <Box
        sx={{
          padding: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
