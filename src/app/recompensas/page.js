"use client";
import { Box, Flex, Text, Button, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaLock, FaCheckCircle } from "react-icons/fa";

export default function Recompensas() {
  // Pontuação do usuário (exemplo)
  const userPoints = 135;

  // Lista de recompensas
  const rewards = [
    { pts: 100, label: "CANECA PERSONALIZÁVEL", unlocked: userPoints >= 100, icon: <FaCheckCircle /> },
    { pts: 500, label: "AGENDA", unlocked: false },
    { pts: 1000, label: "POWER BANK", unlocked: false },
    { pts: 2500, label: "MOCHILA", unlocked: false },
    { pts: 5000, label: "NOTEBOOK", unlocked: false },
  ];

  return (
    <Flex
      minH="100vh"
      bg="#a8d995"
      align="center"
      justify="center"
      py={6}
    >
      <Box
        bg="#48742c"
        borderRadius="xl"
        w="100%"
        maxW="320px"
        boxShadow="md"
        overflow="hidden"
      >
        {/* Cabeçalho */}
        <Box bg="#48742c" py={3} px={4}>
          <Text color="white" fontWeight="bold" fontSize="lg" textAlign="center" letterSpacing="1px">
            RECOMPENSAS
          </Text>
        </Box>

        {/* Lista de recompensas */}
        <VStack spacing={3} bg="#a8d995" px={4} py={4}>
          {rewards.map((reward, idx) => (
            <Box
              key={reward.pts}
              w="100%"
              bg={reward.unlocked ? "#d9d9d9" : "#e6e6e6"}
              borderRadius="md"
              p={2}
              boxShadow="sm"
            >
              <VStack spacing={1} align="stretch">
                <HStack justify="center" spacing={2}>
                  <Box
                    bg="#48742c"
                    color="white"
                    px={4}
                    py={0.5}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                    minW="80px"
                    textAlign="center"
                  >
                    {reward.pts} pts
                  </Box>
                </HStack>
                <HStack justify="center" spacing={2}>
                  <Icon
                    as={reward.unlocked ? FaCheckCircle : FaLock}
                    color={reward.unlocked ? "#48742c" : "gray.500"}
                    boxSize={5}
                  />
                  <Text
                    fontWeight="bold"
                    fontSize="sm"
                    color={reward.unlocked ? "#48742c" : "gray.500"}
                  >
                    {reward.label}
                  </Text>
                </HStack>
              </VStack>
            </Box>
          ))}

          {/* Pontuação do usuário */}
          <Box
            bg="#48742c"
            color="white"
            borderRadius="md"
            w="100%"
            py={2}
            textAlign="center"
            fontWeight="bold"
            fontSize="md"
            mt={2}
          >
            Seus pontos: <span style={{ color: "#d9d9d9" }}>{userPoints} pontos</span>
          </Box>

          {/* Botões */}
          <Button
            w="100%"
            bg="#d9d9d9"
            color="#48742c"
            fontWeight="bold"
            borderRadius="md"
            mt={2}
            _hover={{ bg: "#c0c0c0" }}
          >
            Voltar
          </Button>
          <Button
            w="100%"
            bg="#48742c"
            color="white"
            fontWeight="bold"
            borderRadius="md"
            mb={1}
            _hover={{ bg: "#355823" }}
          >
            RESGATAR RECOMPENSA
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}