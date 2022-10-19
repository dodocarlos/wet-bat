import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/navbar'

export default function AuthenticatedLayout({ children }: React.PropsWithChildren) {
  return (
    <Box minH='100vh' bg={'gray.100'}>
      <Navbar />
      <Box ml={60} p='4'>
        {children}
      </Box>
    </Box>
  )
}
