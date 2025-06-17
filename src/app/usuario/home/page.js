"use client";
import { Box, Flex, Text, Button, SimpleGrid, VStack, Icon, Image, Container, Heading, HStack, IconButton } from "@chakra-ui/react";
import { FaHouseCircleCheck, FaLocationDot } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { BsAwardFill } from "react-icons/bs";
import { MdEco, MdGroups, MdTrendingUp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleProfileNavigation = () => {
    router.push("/usuario/perfil");
  };

  return (
    <Flex minH="100vh" bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)" direction="column">
      <Box bg="linear-gradient(135deg, #48742c 0%, #3a5e23 100%)" py={{ base: 8, md: 12 }} position="relative">
        <IconButton
          aria-label="Perfil do usuário"
          position="absolute"
          right={{ base: "1rem", md: "1.5rem" }}
          top={{ base: "1rem", md: "1.5rem" }}
          color="white"
          variant="ghost"
          size="lg"
          borderRadius="full"
          _hover={{ bg: "whiteAlpha.200", transform: "scale(1.1)" }}
          _active={{ bg: "whiteAlpha.300" }}
          transition="all 0.2s"
          onClick={handleProfileNavigation}
          zIndex={10}
        >
          <CgProfile />
        </IconButton>
        
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", lg: "row" }} align="center" justify="space-between" gap={8}>
            <VStack align={{ base: "center", lg: "flex-start" }} spacing={6} flex="1">
              <Image
                src="/images/ecotrash.png"
                alt="EcoTrash Logo"
                height={{ base: "60px", md: "80px" }}
                objectFit="contain"
              />
              <VStack align={{ base: "center", lg: "flex-start" }} spacing={4}>
                <Heading 
                  size={{ base: "xl", md: "2xl" }} 
                  color="white" 
                  textAlign={{ base: "center", lg: "left" }}
                  fontWeight="bold"
                >
                  Reciclando tecnologia, preservando o futuro!
                </Heading>
                <Text 
                  fontSize={{ base: "lg", md: "xl" }} 
                  color="whiteAlpha.900" 
                  textAlign={{ base: "center", lg: "left" }}
                  maxW="600px"
                  lineHeight="1.6"
                >
                  Plataforma inteligente para descarte responsável de eletrônicos e tecnologia sustentável.
                </Text>
              </VStack>
            </VStack>
            <Box flex="1" display="flex" justifyContent="center">
              <Image
                src="/images/logo.png"
                alt="Reciclagem"
                boxSize={{ base: "200px", md: "300px", lg: "350px" }}
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Main Options Section */}
      <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size={{ base: "lg", md: "xl" }} color="#2d5016">
              Como podemos te ajudar?
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="600px">
              Escolha uma das opções abaixo para começar sua jornada sustentável
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
            <VStack 
              spacing={4} 
              p={8} 
              bg="white" 
              borderRadius="2xl" 
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-8px)", boxShadow: "2xl" }}
              cursor="pointer"
              onClick={() => handleNavigation("/usuario/pontos-coleta")}
            >
              <Box
                bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                borderRadius="full"
                p={4}
              >
                <Icon as={FaLocationDot} boxSize={8} color="white" />
              </Box>
              <Heading size="md" color="#2d5016" textAlign="center">
                Pontos de Coleta
              </Heading>
              <Text fontSize="sm" color="gray.600" textAlign="center" lineHeight="1.5">
                Encontre pontos de coleta próximos a você para descarte responsável
              </Text>
            </VStack>

            <VStack 
              spacing={4} 
              p={8} 
              bg="white" 
              borderRadius="2xl" 
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-8px)", boxShadow: "2xl" }}
              cursor="pointer"
              onClick={() => handleNavigation("/usuario/coletas")}
            >
              <Box
                bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                borderRadius="full"
                p={4}
              >
                <Icon as={FaHouseCircleCheck} boxSize={8} color="white" />
              </Box>
              <Heading size="md" color="#2d5016" textAlign="center">
                Agendar Coleta
              </Heading>
              <Text fontSize="sm" color="gray.600" textAlign="center" lineHeight="1.5">
                Agende uma coleta domiciliar para seus eletrônicos
              </Text>
            </VStack>

            <VStack 
              spacing={4} 
              p={8} 
              bg="white" 
              borderRadius="2xl" 
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-8px)", boxShadow: "2xl" }}
              cursor="pointer"
              onClick={() => handleNavigation("/information")}
            >
              <Box
                bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                borderRadius="full"
                p={4}
              >
                <Icon as={GrArticle} boxSize={8} color="white" />
              </Box>
              <Heading size="md" color="#2d5016" textAlign="center">
                Informações
              </Heading>
              <Text fontSize="sm" color="gray.600" textAlign="center" lineHeight="1.5">
                Aprenda sobre reciclagem e descarte correto de eletrônicos
              </Text>
            </VStack>

            <VStack 
              spacing={4} 
              p={8} 
              bg="white" 
              borderRadius="2xl" 
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-8px)", boxShadow: "2xl" }}
              cursor="pointer"
              onClick={() => handleNavigation("/usuario/recompensas")}
            >
              <Box
                bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                borderRadius="full"
                p={4}
              >
                <Icon as={BsAwardFill} boxSize={8} color="white" />
              </Box>
              <Heading size="md" color="#2d5016" textAlign="center">
                Recompensas
              </Heading>
              <Text fontSize="sm" color="gray.600" textAlign="center" lineHeight="1.5">
                Ganhe pontos e recompensas por suas ações sustentáveis
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* About EcoTrash Section */}
      <Box bg="white" py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="#2d5016">
                Sobre o EcoTrash
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="800px" lineHeight="1.8">
                Somos uma plataforma dedicada à sustentabilidade tecnológica, conectando pessoas e empresas 
                para o descarte responsável de eletrônicos e equipamentos tecnológicos.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <VStack spacing={4} textAlign="center" p={6}>
                <Box
                  bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)"
                  borderRadius="full"
                  p={4}
                >
                  <Icon as={MdEco} boxSize={10} color="#2d5016" />
                </Box>
                <Heading size="md" color="#2d5016">
                  Sustentabilidade
                </Heading>
                <Text color="gray.600" lineHeight="1.6">
                  Promovemos práticas sustentáveis no descarte de eletrônicos, 
                  reduzindo o impacto ambiental e preservando recursos naturais.
                </Text>
              </VStack>

              <VStack spacing={4} textAlign="center" p={6}>
                <Box
                  bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)"
                  borderRadius="full"
                  p={4}
                >
                  <Icon as={MdGroups} boxSize={10} color="#2d5016" />
                </Box>
                <Heading size="md" color="#2d5016">
                  Comunidade
                </Heading>
                <Text color="gray.600" lineHeight="1.6">
                  Conectamos uma rede de usuários, empresas recicladoras e pontos 
                  de coleta para maximizar o impacto positivo.
                </Text>
              </VStack>

              <VStack spacing={4} textAlign="center" p={6}>
                <Box
                  bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)"
                  borderRadius="full"
                  p={4}
                >
                  <Icon as={MdTrendingUp} boxSize={10} color="#2d5016" />
                </Box>
                <Heading size="md" color="#2d5016">
                  Inovação
                </Heading>
                <Text color="gray.600" lineHeight="1.6">
                  Utilizamos tecnologia para tornar o processo de reciclagem 
                  mais eficiente e acessível para todos.
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Box bg="linear-gradient(135deg, #48742c 0%, #3a5e23 100%)" py={{ base: 12, md: 16 }}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <Heading size={{ base: "lg", md: "xl" }} color="white" textAlign="center">
              Nosso Impacto
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              <VStack spacing={2} textAlign="center">
                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="white">
                  10K+
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.900">
                  Eletrônicos Reciclados
                </Text>
              </VStack>
              <VStack spacing={2} textAlign="center">
                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="white">
                  500+
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.900">
                  Pontos de Coleta
                </Text>
              </VStack>
              <VStack spacing={2} textAlign="center">
                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="white">
                  5K+
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.900">
                  Usuários Ativos
                </Text>
              </VStack>
              <VStack spacing={2} textAlign="center">
                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="white">
                  100+
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.900">
                  Empresas Parceiras
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <VStack spacing={8} textAlign="center">
          <VStack spacing={4}>
            <Heading size={{ base: "lg", md: "xl" }} color="#2d5016">
              Pronto para fazer a diferença?
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="600px">
              Junte-se a milhares de pessoas que já estão contribuindo para um futuro mais sustentável
            </Text>
          </VStack>
          <HStack spacing={4} flexWrap="wrap" justify="center">
            <Button
              bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
              color="white"
              size="lg"
              px={8}
              py={6}
              borderRadius="full"
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              leftIcon={<FaHouseCircleCheck />}
              onClick={() => handleNavigation("/usuario/coletas")}
            >
              Agendar Primeira Coleta
            </Button>
            <Button
              variant="outline"
              borderColor="#48742c"
              color="#48742c"
              size="lg"
              px={8}
              py={6}
              borderRadius="full"
              _hover={{ bg: "#48742c", color: "white", transform: "translateY(-2px)" }}
              leftIcon={<FaLocationDot />}
              onClick={() => handleNavigation("/usuario/pontos-coleta")}
            >
              Encontrar Pontos
            </Button>
          </HStack>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="#2d5016" py={8}>
        <Container maxW="container.xl">
          <VStack spacing={4}>
            <Image
              src="/images/ecotrash.png"
              alt="EcoTrash Logo"
              height="40px"
              filter="brightness(0) invert(1)"
            />
            <Text fontSize="sm" color="whiteAlpha.800" textAlign="center">
              © 2024 EcoTrash. Todos os direitos reservados. | Reciclando tecnologia, preservando o futuro!
            </Text>
          </VStack>
        </Container>
      </Box>
    </Flex>
  );
}