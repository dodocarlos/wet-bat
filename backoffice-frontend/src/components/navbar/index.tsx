import React from 'react'
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  Icon,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react'
import {
  FiHome,
  FiBell,
  FiMessageSquare,
  FiSettings,
  FiChevronDown,
  FiSearch,
} from 'react-icons/fi'
import { IconType } from 'react-icons'

interface LinkItemProps {
  title: string
  icon: IconType
}
const LinkItems: Array<LinkItemProps> = [{ title: 'Home', icon: FiHome }]

export default function SidebarWithHeader() {
  return (
    <>
      <NavBar />
      <SidebarContent />
    </>
  )
}

const SidebarContent = () => {
  return (
    <Box
      bg={'gray.300'}
      borderRight='1px'
      borderRightColor={'gray.300'}
      w={60}
      pos='fixed'
      h='full'
      pt='2'
    >
      {LinkItems.map((link) => (
        <NavItem key={link.title} icon={link.icon} title={link.title} />
      ))}
    </Box>
  )
}

interface NavItemProps {
  icon: IconType
  title: string
}
const NavItem = ({ icon, title }: NavItemProps) => {
  return (
    <Link href='#' style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        color='primary'
        fontWeight={'bold'}
        _hover={{
          bg: 'gray.200',
        }}
      >
        {icon && <Icon mr='4' fontSize='16' as={icon} />}
        {title}
      </Flex>
    </Link>
  )
}

const NavBar = () => {
  return (
    <Flex
      px={4}
      height='14'
      alignItems='center'
      bg='primary'
      color='primaryTextColor'
      borderBottomWidth='1px'
      borderBottomColor={'gray.200'}
      justifyContent={{ base: 'space-between' }}
    >
      <HStack>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          Wet Bat
        </Text>
      </HStack>

      <HStack spacing={4}>
        <InputGroup w={500} h={8} color='primaryTextColor'>
          <InputLeftElement h={8} pointerEvents='none'>
            <FiSearch color='gray' />
          </InputLeftElement>
          <Input type='text' h={8} bg='gray.300' borderColor='gray' />
        </InputGroup>
        <IconButton
          size='md'
          variant='link'
          color='primaryTextColor'
          aria-label='open notifications'
          icon={<FiBell />}
        />
        <IconButton
          size='md'
          variant='link'
          color='primaryTextColor'
          aria-label='open messages'
          icon={<FiMessageSquare />}
        />
        <IconButton
          size='md'
          variant='link'
          color='primaryTextColor'
          aria-label='open settings'
          icon={<FiSettings />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar size={'sm'} src={'https://avatars.githubusercontent.com/u/8847934?v=4'} />
                <VStack display={'flex'} alignItems='flex-start' spacing='1px' ml='2'>
                  <Text fontSize='sm'>Carlos Pegoretti</Text>
                </VStack>
                <Box display={'flex'}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList bg={'gray.300'} borderColor={'gray.400'} color={'primary'}>
              <MenuItem>Profile</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}
