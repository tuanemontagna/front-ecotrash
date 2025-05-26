"use client";
import { Box, Flex, Text, Button, SimpleGrid, VStack, Icon, Image } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle, FaAward } from "react-icons/fa";
import { FaHouseCircleCheck, FaLocationDot } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { BsAwardFill } from "react-icons/bs";

export default function Home() {
  return (
    <Flex
      minH="100vh"
      bg="#a8d995"
      direction="column"
      align="center"
      justify="space-between"
      py={4}
    >
      {/* Título */}
      <Image
        src="images/ecotrash.png"
        alt="Logo"
        sizes="30px"
        m={8}
      />

      {/* Imagem do Reciclável */}
      <Image
        src="images/logo.png"
        alt="Reciclagem"
        boxSize="250px"
        mt={2}
      />

      {/* Botões principais */}
      <Box
        bg="#48742c"
        borderRadius="2xl"
        boxShadow="lg"
        p={6}
        mt={4}
        mb={4}
        w="90%"
        maxW="340px"
      >
        <SimpleGrid columns={2} spacing={6}>
          <VStack spacing={2}>
            <Button
              variant="ghost"
              borderRadius="full"
              boxSize="56px"
              bg="#d9d9d9"
              _hover={{ bg: "#c0c0c0" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={0}
              mb={1}
            >
              <Icon as={FaLocationDot} boxSize={7} color="#48742c" />
            </Button>
            <Text fontSize="sm" color="#d9d9d9" fontWeight="medium" textAlign="center">
              Pontos de<br />coleta
            </Text>
          </VStack>
          <VStack spacing={2}>
            <Button
              variant="ghost"
              borderRadius="full"
              boxSize="56px"
              bg="#d9d9d9"
              _hover={{ bg: "#c0c0c0" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={0}
              mb={1}
            >
              <Icon as={FaHouseCircleCheck} boxSize={7} color="#48742c" />
            </Button>
            <Text fontSize="sm" color="#d9d9d9" fontWeight="medium" textAlign="center">
              Agendar<br />coleta
            </Text>
          </VStack>
          <VStack spacing={2}>
            <Button
              variant="ghost"
              borderRadius="full"
              boxSize="56px"
              bg="#d9d9d9"
              _hover={{ bg: "#c0c0c0" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={0}
              mb={1}
            >
              <Icon as={GrArticle} boxSize={7} color="#48742c" />
            </Button>
            <Text fontSize="sm" color="#d9d9d9" fontWeight="medium" textAlign="center">
              Informações
            </Text>
          </VStack>
          <VStack spacing={2}>
            <Button
              variant="ghost"
              borderRadius="full"
              boxSize="56px"
              bg="#d9d9d9"
              _hover={{ bg: "#c0c0c0" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={0}
              mb={1}
            >
              <Icon as={BsAwardFill} boxSize={7} color="#48742c" />
            </Button>
            <Text fontSize="sm" color="#d9d9d9" fontWeight="medium" textAlign="center">
              Recompensas
            </Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Rodapé */}
      <Text
        fontSize="sm"
        color="#d9d9d9"
        mb={2}
        textAlign="center"
        fontWeight="medium"
      >
        Reciclando tecnologia, preservando o futuro!
      </Text>
    </Flex>
  );
}