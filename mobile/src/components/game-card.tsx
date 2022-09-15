import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'

type GameCardProps = {
  name: string
  adsCount: number
  imgSrc: string
}

export function GameCard({ adsCount, imgSrc, name }: GameCardProps) {
  return (
    <Link minW="240px">
      <Box position="relative" overflow="hidden" borderRadius="lg">
        <Image src={imgSrc} alt={name} w="100%" />

        <Flex
          flexDir="column"
          justify="flex-end"
          p="4"
          position="absolute"
          top="50%"
          bottom={0}
          left={0}
          right={0}
          bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)"
        >
          <Text as="strong">{name}</Text>
          <Text color="caption.300" fontSize="sm">
            {adsCount} anúncios
          </Text>
        </Flex>
      </Box>
    </Link>
  )
}
