"use client";
import { Box, Flex, Text, Button, SimpleGrid, VStack, Icon, Image, Container, Heading, HStack, IconButton } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle, FaBuilding, FaRecycle, FaLeaf, FaGlobe, FaChartLine } from "react-icons/fa";
import { FaHouseCircleCheck, FaLocationDot, FaTruck } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { BsAwardFill, BsGraphUp } from "react-icons/bs";
import { MdEco, MdGroups, MdTrendingUp, MdBusinessCenter, MdInventory, MdAnalytics } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";

export default function EmpresaHome() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleProfileNavigation = () => {
    router.push("/empresa/perfil");
  };

  return (
    <Flex minH="100vh" bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)" direction="column">
      <Box bg="linear-gradient(135deg, #48742c 0%, #3a5e23 100%)" py={{ base: 8, md: 12 }} position="relative">
        <IconButton
          aria-label="Perfil da empresa"
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
                  Gestão inteligente de resíduos empresariais
                </Heading>
                <Text 
                  fontSize={{ base: "lg", md: "xl" }} 
                  color="whiteAlpha.900" 
                  textAlign={{ base: "center", lg: "left" }}
                  maxW="600px"
                  lineHeight="1.6"
                >
                  Plataforma corporativa para gestão eficiente de coletas, análise de impacto e relatórios de sustentabilidade.
                </Text>
              </VStack>
            </VStack>
            <Box flex="1" display="flex" justifyContent="center">
              <Image
                src="/images/logo.png"
                alt="Gestão Empresarial"
                boxSize={{ base: "200px", md: "300px", lg: "350px" }}
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Main Options Section */}
      <Container maxW="container.xl" py={{ base: 8, md: 16 }}>
        <VStack spacing={12}>          <VStack spacing={4} textAlign="center">
            <Heading size={{ base: "lg", md: "xl" }} color="#2d5016">
              Painel de Gestão Empresarial
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="600px">
              Gerencie coletas, encontre pontos de coleta e acesse informações para otimizar a sustentabilidade da sua empresa
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            <VStack 
              spacing={4} 
              p={8} 
              bg="white" 
              borderRadius="2xl" 
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-8px)", boxShadow: "2xl" }}
              cursor="pointer"
              onClick={() => handleNavigation("/empresa/pontos-coleta")}
            >
              <Box
                bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                borderRadius="full"
                p={4}
              >
                <Icon as={FaLocationDot} boxSize={8} color="white" />
              </Box>
              <Heading size="md" color="#2d5016" textAlign="center">
                Meus Pontos de Coleta
              </Heading>
              <Text fontSize="sm" color="gray.600" textAlign="center" lineHeight="1.5">
                Encontre pontos de coleta corporativos próximos para descarte responsável
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
              onClick={() => handleNavigation("/empresa/coletas")}
            >
              <Box
                bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                borderRadius="full"
                p={4}
              >
                <Icon as={FaTruck} boxSize={8} color="white" />
              </Box>
              <Heading size="md" color="#2d5016" textAlign="center">
                Gerenciar Coletas
              </Heading>
              <Text fontSize="sm" color="gray.600" textAlign="center" lineHeight="1.5">
                Agende, acompanhe e gerencie todas as coletas de resíduos da empresa
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
                Acesse guias e informações sobre gestão sustentável empresarial
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* About EcoTrash Empresarial Section */}
      <Box bg="white" py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} color="#2d5016">
                EcoTrash Empresarial
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="800px" lineHeight="1.8">
                Solução completa para empresas que buscam excelência em gestão de resíduos eletrônicos, 
                compliance ambiental e otimização de processos sustentáveis.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <VStack spacing={4} textAlign="center" p={6}>
                <Box
                  bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)"
                  borderRadius="full"
                  p={4}
                >
                  <Icon as={MdBusinessCenter} boxSize={10} color="#2d5016" />
                </Box>
                <Heading size="md" color="#2d5016">
                  Gestão Corporativa
                </Heading>
                <Text color="gray.600" lineHeight="1.6">
                  Ferramentas especializadas para controle completo dos processos 
                  de coleta e descarte de resíduos empresariais.
                </Text>
              </VStack>

              <VStack spacing={4} textAlign="center" p={6}>
                <Box
                  bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)"
                  borderRadius="full"
                  p={4}
                >
                  <Icon as={BsGraphUp} boxSize={10} color="#2d5016" />
                </Box>
                <Heading size="md" color="#2d5016">
                  Análise e Relatórios
                </Heading>
                <Text color="gray.600" lineHeight="1.6">
                  Relatórios detalhados de impacto ambiental, métricas de 
                  sustentabilidade e dashboards executivos.
                </Text>
              </VStack>

              <VStack spacing={4} textAlign="center" p={6}>
                <Box
                  bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)"
                  borderRadius="full"
                  p={4}
                >
                  <Icon as={FaLeaf} boxSize={10} color="#2d5016" />
                </Box>
                <Heading size="md" color="#2d5016">
                  Compliance Ambiental
                </Heading>
                <Text color="gray.600" lineHeight="1.6">
                  Garanta conformidade com regulamentações ambientais e 
                  obtenha certificações de sustentabilidade.
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Enterprise Statistics Section */}
      <Box bg="linear-gradient(135deg, #48742c 0%, #3a5e23 100%)" py={{ base: 12, md: 16 }}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <Heading size={{ base: "lg", md: "xl" }} color="white" textAlign="center">
              Resultados Empresariais
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              <VStack spacing={2} textAlign="center">
                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="white">
                  50+
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.900">
                  Empresas Ativas
                </Text>
              </VStack>
              <VStack spacing={2} textAlign="center">
                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="white">
                  25K+
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.900">
                  Equipamentos Processados
                </Text>
              </VStack>
              <VStack spacing={2} textAlign="center">
                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="white">
                  95%
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.900">
                  Taxa de Reciclagem
                </Text>
              </VStack>
              <VStack spacing={2} textAlign="center">
                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="white">
                  100%
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.900">
                  Compliance Ambiental
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>      {/* Motivational Message */}
      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <VStack spacing={4} textAlign="center">
          <Heading size={{ base: "lg", md: "xl" }} color="#2d5016">
            Sua empresa está fazendo a diferença!
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="600px">
            Continue contribuindo para um futuro mais sustentável com suas práticas responsáveis de descarte.
          </Text>
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
              © 2024 EcoTrash Empresarial. Todos os direitos reservados. | Soluções sustentáveis para empresas responsáveis.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Flex>
  );
}
