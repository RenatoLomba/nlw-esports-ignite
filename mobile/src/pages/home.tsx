import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

import logoImg from '../assets/logo-nlw-esports.svg'
import { GameCard } from '../components/game-card'
import { GAMES } from '../utils/games'

export function HomePage() {
  return (
    <Flex h="100vh" flexDir="column">
      <Flex as="header" pt="16" pb="12" justify="center">
        <Image src={logoImg} alt="Logotipo" w={214} />
      </Flex>

      <Box as="main" pl="8">
        <Box mb="5">
          <Heading fontWeight="black" fontSize="2xl">
            Encontre seu duo!
          </Heading>
          <Text as="span" color="caption.400">
            Selecione o game que deseja jogar...
          </Text>
        </Box>

        <Flex gap="6" overflowX="auto" pr="8">
          {GAMES.map((game) => (
            <GameCard
              key={game.id}
              adsCount={game.ads}
              name={game.name}
              imgSrc={game.cover}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}
