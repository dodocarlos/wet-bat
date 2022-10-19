import React from 'react'

import { Box, Divider, Flex, HStack, Icon, IconButton, Text, Tooltip } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'
import { FiMaximize2, FiRefreshCw } from 'react-icons/fi'

type Props = {
  icon: IconType
  title: string
}

export default function Card({ icon, title }: Props) {
  return (
    <Box h='300px' w='400px' bg='white' borderRadius='lg'>
      <Flex direction='column'>
        <Flex px={4} py={2} direction='row' justifyContent='space-between'>
          <HStack>
            <Icon as={icon} color='secondary' />
            <Text color='primary' fontSize='lg'>
              {title}
            </Text>
          </HStack>
          <HStack spacing={0}>
            <Tooltip label='Refresh data' bg='gray.400' openDelay={300}>
              <IconButton aria-label='refresh data' variant='link'>
                <Icon as={FiRefreshCw} color='gray' />
              </IconButton>
            </Tooltip>
            <Tooltip label='Toggle fullscreen' bg='gray.400' openDelay={300}>
              <IconButton aria-label='toggle fullscreen' variant='link'>
                <Icon as={FiMaximize2} color='gray' />
              </IconButton>
            </Tooltip>
          </HStack>
        </Flex>
        <Divider />
      </Flex>
    </Box>
  )
}
