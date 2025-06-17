"use client";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
  Heading,
  Container,
  IconButton,
  SimpleGrid,
  Image
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdStars, MdRedeem, MdHistory, MdEco, MdLocalOffer, MdCheckCircle, MdWarning, MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";

const recompensasDisponiveis = [
  {
    id: 1,
    nome: "Desconto 10% - Loja Verde",
    descricao: "Desconto em produtos sustentáveis",
    pontos: 500,
    categoria: "Desconto",
    disponivel: true,
    imagem: "/images/desconto.png"
  },
  {
    id: 2,
    nome: "Voucher R$ 25 - EcoMarket",
    descricao: "Vale compras em produtos ecológicos",
    pontos: 1000,
    categoria: "Voucher",
    disponivel: true,
    imagem: "/images/voucher.png"
  },
  {
    id: 3,
    nome: "Kit de Reciclagem",
    descricao: "Kit completo para reciclagem doméstica",
    pontos: 1500,
    categoria: "Produto",
    disponivel: false,
    imagem: "/images/kit.png"
  }, 
  {
    id: 4,
    nome: "Curso Online - Sustentabilidade",
    descricao: "Curso certificado sobre práticas sustentáveis",
    pontos: 800,
    categoria: "Educação",
    disponivel: true,
    imagem: "/images/curso-sustentabilidade.png"
  }
];

export default function PaginaRecompensas() {
  const roteador = useRouter();
  
  const [pontosUsuario, setPontosUsuario] = useState(1250);
  const [recompensaSelecionada, setRecompensaSelecionada] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [historicoResgates, setHistoricoResgates] = useState([
    {
      id: 1,
      nome: "Desconto 5% - EcoShop",
      pontos: 300,
      data: "2024-07-20",
      status: "Usado",
      codigo: "ECO5-2024"
    },
    {
      id: 2,
      nome: "Voucher R$ 15",
      pontos: 600,
      data: "2024-07-15",
      status: "Ativo",
      codigo: "VOUCHER15-XYZ"
    }
  ]);
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [loading, setLoading] = useState(false);

  const proximoNivel = 2000;
  const progressoPorcentagem = (pontosUsuario / proximoNivel) * 100;

  const tratarVoltar = () => {
    roteador.back();
  };

  const tratarIrParaPerfil = () => {
    roteador.push("/perfil");
  };

  const abrirModalResgate = (recompensa) => {
    if (pontosUsuario >= recompensa.pontos && recompensa.disponivel) {
      setRecompensaSelecionada(recompensa);
      setMostrarModal(true);
    }
  };

  const fecharModal = () => {
    setMostrarModal(false);
    setRecompensaSelecionada(null);
  };

  const confirmarResgate = async () => {
    if (!recompensaSelecionada) return;
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setPontosUsuario(prev => prev - recompensaSelecionada.pontos);

    const novoResgate = {
      id: Date.now(),
      nome: recompensaSelecionada.nome,
      pontos: recompensaSelecionada.pontos,
      data: new Date().toISOString().split('T')[0],
      status: "Ativo",
      codigo: `CODE-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    };

    setHistoricoResgates(prev => [novoResgate, ...prev]);
    setMensagemSucesso(`🎉 Parabéns! Você resgatou: ${recompensaSelecionada.nome}. Verifique seu email para mais detalhes sobre o resgate.`);
    
    setLoading(false);
    fecharModal();

    setTimeout(() => setMensagemSucesso(""), 8000);
  };

  const tratarResgatarRecompensa = (recompensa) => {
    abrirModalResgate(recompensa);
  };

  const getCategoriaColor = (categoria) => {
    switch (categoria) {
      case "Desconto": return "blue.400";
      case "Voucher": return "green.400";
      case "Produto": return "purple.400";
      case "Educação": return "orange.400";
      default: return "gray.400";
    }
  };

  return (
    <Flex direction="column" minH="100vh" bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)">
      <Box
        as="header"
        bg="linear-gradient(135deg, #48742c 0%, #3a5e23 100%)"
        py={{ base: 4, md: 5 }}
        px={{ base: 4, md: 6 }}
        boxShadow="xl"
        position="relative"
      >
        <IconButton
          aria-label="Voltar"
          position="absolute"
          left={{ base: "1rem", md: "1.5rem" }}
          top="50%"
          transform="translateY(-50%)"
          color="white"
          variant="ghost"
          size="lg"
          borderRadius="full"
          _hover={{ bg: "whiteAlpha.200", transform: "translateY(-50%) scale(1.1)" }}
          _active={{ bg: "whiteAlpha.300" }}
          transition="all 0.2s"
          onClick={tratarVoltar}
        >
          <IoMdArrowBack />
        </IconButton>
        <VStack spacing={1}>
          <Text
            color="white"
            fontWeight="bold"
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign="center"
            letterSpacing="wide"
          >
            Recompensas
          </Text>
          <Text
            color="whiteAlpha.800"
            fontSize={{ base: "xs", md: "sm" }}
            textAlign="center"
          >
            Troque seus pontos por benefícios incríveis
          </Text>
        </VStack>
        <IconButton
          aria-label="Perfil do usuário"
          position="absolute"
          right={{ base: "1rem", md: "1.5rem" }}
          top="50%"
          transform="translateY(-50%)"
          color="white"
          variant="ghost"
          size="lg"
          borderRadius="full"
          _hover={{ bg: "whiteAlpha.200", transform: "translateY(-50%) scale(1.1)" }}
          _active={{ bg: "whiteAlpha.300" }}
          transition="all 0.2s"
          onClick={tratarIrParaPerfil}
        >
          <CgProfile />
        </IconButton>
      </Box>

      <Container maxW="container.xl" py={{ base: 6, md: 10 }} flex="1">
        <VStack spacing={8} align="stretch">
          {mensagemSucesso && (
            <Box
              bg="white"
              borderRadius="2xl"
              p={5}
              boxShadow="xl"
              border="3px solid"
              borderColor="green.300"
              bgGradient="linear(135deg, green.50 0%, green.100 100%)"
              animation="slideIn 0.5s ease-out"
            >
              <HStack spacing={4} align="center">
                <Box
                  bg="green.500"
                  borderRadius="full"
                  p={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <MdCheckCircle color="white" size="24px" />
                </Box>
                <VStack align="start" spacing={1} flex={1}>
                  <Text color="green.800" fontWeight="bold" fontSize="lg">
                    Resgate Realizado!
                  </Text>
                  <Text color="green.700" fontSize="sm">
                    {mensagemSucesso}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          )}

          <Box
            bg="white"
            borderRadius="2xl"
            p={6}
            boxShadow="xl"
            border="2px solid transparent"
            bgGradient="linear(135deg, white 0%, blue.50 100%)"
          >
            <HStack justify="space-between" align="center" mb={4}>
              <VStack align="start" spacing={1}>
                <Text color="gray.600" fontSize="sm" fontWeight="medium">
                  Seus Pontos EcoTrash
                </Text>
                <HStack spacing={2}>
                  <MdStars color="#48742c" size="32px" />
                  <Heading size="xl" color="#2d5016" fontWeight="bold">
                    {pontosUsuario.toLocaleString()}
                  </Heading>
                  <Text color="gray.500" fontSize="sm">pontos</Text>
                </HStack>
              </VStack>
              <Box textAlign="center">
                <Text fontSize="xs" color="gray.500" mb={1}>
                  Próximo nível em
                </Text>
                <Text fontWeight="bold" color="#48742c">
                  {(proximoNivel - pontosUsuario).toLocaleString()} pts
                </Text>
              </Box>
            </HStack>
            <Box>
              <Flex justify="space-between" mb={2}>
                <Text fontSize="sm" color="gray.600">Progresso para o próximo nível</Text>
                <Text fontSize="sm" color="gray.600">{progressoPorcentagem.toFixed(0)}%</Text>
              </Flex>
              <Box
                w="full"
                h="8px"
                bg="gray.200"
                borderRadius="full"
                overflow="hidden"
              >
                <Box
                  h="full"
                  bg="linear-gradient(90deg, #48742c 0%, #5d8f3a 100%)"
                  borderRadius="full"
                  width={`${progressoPorcentagem}%`}
                  transition="width 0.3s ease"
                />
              </Box>
            </Box>
          </Box>

          <Box>
            <HStack spacing={3} mb={6}>
              <MdRedeem color="#48742c" size="28px" />
              <Heading size="lg" color="#2d5016">
                Recompensas Disponíveis
              </Heading>
            </HStack>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {recompensasDisponiveis.map((recompensa) => {
                const podeResgatar = pontosUsuario >= recompensa.pontos && recompensa.disponivel;
                
                return (
                  <Box
                    key={recompensa.id}
                    bg="white"
                    borderRadius="2xl"
                    boxShadow="lg"
                    overflow="hidden"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: podeResgatar ? "translateY(-6px)" : "none",
                      boxShadow: podeResgatar ? "2xl" : "lg",
                    }}
                    border="2px solid transparent"
                    opacity={!recompensa.disponivel ? 0.7 : 1}
                    position="relative"
                  >
                    {!recompensa.disponivel && (
                      <Box
                        position="absolute"
                        top="3"
                        right="3"
                        bg="red.500"
                        color="white"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="bold"
                        zIndex={2}
                        boxShadow="md"
                      >
                        Esgotado
                      </Box>
                    )}
                    
                    {pontosUsuario >= recompensa.pontos && recompensa.disponivel && (
                      <Box
                        position="absolute"
                        top="3"
                        right="3"
                        bg="green.500"
                        color="white"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="bold"
                        zIndex={2}
                        boxShadow="md"
                      >
                        Disponível
                      </Box>
                    )}
                    
                    <Image
                      src={recompensa.imagem}
                      alt={`Imagem da recompensa ${recompensa.nome}`}
                      h="160px"
                      w="full"
                      objectFit="cover"
                      fallbackSrc='https://via.placeholder.com/400x160?text=Imagem+Indisponível'
                    />
                    
                    <Box p={6}>
                      <VStack align="stretch" spacing={4}>
                        <Box>
                          <Box
                            display="inline-block"
                            bg={getCategoriaColor(recompensa.categoria)}
                            color="white"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="xs"
                            fontWeight="medium"
                            mb={3}
                          >
                            {recompensa.categoria}
                          </Box>
                          
                          <Heading size="sm" color="#2d5016" noOfLines={2} mb={2}>
                            {recompensa.nome}
                          </Heading>
                          <Text fontSize="sm" color="gray.600" noOfLines={3} lineHeight="1.5">
                            {recompensa.descricao}
                          </Text>
                        </Box>
                        
                        <Box>
                          <HStack justify="space-between" align="center" mb={3}>
                            <VStack align="start" spacing={0}>
                              <HStack spacing={1}>
                                <MdStars color="#48742c" size="18px" />
                                <Text fontWeight="bold" color="#48742c" fontSize="md">
                                  {recompensa.pontos.toLocaleString()}
                                </Text>
                              </HStack>
                              <Text fontSize="xs" color="gray.500">pontos necessários</Text>
                            </VStack>
                          </HStack>
                          
                          <Button
                            w="full"
                            size="md"
                            bg={podeResgatar 
                              ? "linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)" 
                              : "gray.300"}
                            color="white"
                            borderRadius="lg"
                            py={3}
                            fontSize="sm"
                            fontWeight="bold"
                            isDisabled={!podeResgatar}
                            _hover={{
                              bg: podeResgatar 
                                ? "linear-gradient(135deg, #3a5e23 0%, #48742c 100%)" 
                                : "gray.300",
                              transform: podeResgatar ? "scale(1.02)" : "none"
                            }}
                            _active={{ transform: podeResgatar ? "scale(0.98)" : "none" }}
                            leftIcon={podeResgatar ? <MdRedeem /> : undefined}
                            onClick={(e) => {
                              e.stopPropagation();
                              tratarResgatarRecompensa(recompensa);
                            }}
                          >
                            {!recompensa.disponivel ? "Indisponível" : 
                             pontosUsuario >= recompensa.pontos ? "Resgatar Agora" : 
                             `Faltam ${(recompensa.pontos - pontosUsuario).toLocaleString()} pts`}
                          </Button>
                        </Box>
                      </VStack>
                    </Box>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>

          <Box>
            <HStack spacing={3} mb={6}>
              <MdHistory color="#48742c" size="28px" />
              <Heading size="lg" color="#2d5016">
                Histórico de Resgates
              </Heading>
            </HStack>
            <VStack spacing={4} align="stretch">
              {historicoResgates.map((item) => (
                <Box
                  key={item.id}
                  bg="white"
                  borderRadius="xl"
                  p={5}
                  boxShadow="md"
                  border="2px solid transparent"
                >
                  <Flex justify="space-between" align="center">
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="semibold" color="#2d5016">
                        {item.nome}
                      </Text>
                      <HStack spacing={4}>
                        <HStack spacing={1}>
                          <MdStars color="#48742c" size="16px" />
                          <Text fontSize="sm" color="gray.600">
                            {item.pontos} pontos
                          </Text>
                        </HStack>
                        <Text fontSize="sm" color="gray.500">
                          {new Date(item.data).toLocaleDateString('pt-BR')}
                        </Text>
                      </HStack>
                    </VStack>
                    <Box
                      display="inline-block"
                      bg={item.status === "Ativo" ? "green.400" : "gray.400"}
                      color="white"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="medium"
                    >
                      {item.status}
                    </Box>
                  </Flex>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>

      {mostrarModal && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.700"
          zIndex="9999"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
          backdropFilter="blur(4px)"
        >
          <Box
            bg="white"
            borderRadius="2xl"
            maxW="500px"
            w="full"
            maxH="90vh"
            overflow="auto"
            boxShadow="2xl"
            position="relative"
          >
            <Box p={6} borderRadius="2xl 2xl 0 0">
              <HStack justify="space-between" align="center" mb={4}>
                <HStack spacing={3}>
                  <Box
                    bg="green.500"
                    borderRadius="full"
                    p={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <MdRedeem color="white" size="20px" />
                  </Box>
                  <Text color="#2d5016" fontSize="lg" fontWeight="bold">
                    Confirmar Resgate
                  </Text>
                </HStack>
                <IconButton
                  aria-label="Fechar modal"
                  icon={<MdClose />}
                  variant="ghost"
                  colorScheme="gray"
                  onClick={fecharModal}
                />
              </HStack>
            </Box>

            {recompensaSelecionada && (
              <Box px={6} pb={2}>
                <VStack spacing={6} align="stretch">
                  <Box
                    bg="gray.50"
                    p={5}
                    borderRadius="xl"
                    border="2px solid"
                    borderColor="gray.200"
                  >
                    <VStack spacing={4} align="stretch">
                      <HStack spacing={3}>
                        <Image src={recompensaSelecionada.imagem} h="40px" w="40px" borderRadius="md" objectFit="cover" />
                        <Text fontWeight="bold" color="#2d5016" fontSize="lg">
                          {recompensaSelecionada.nome}
                        </Text>
                      </HStack>
                      <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                        {recompensaSelecionada.descricao}
                      </Text>
                    </VStack>
                  </Box>

                  <Box 
                    bg="blue.50" 
                    p={5} 
                    borderRadius="xl" 
                    border="2px solid" 
                    borderColor="blue.200"
                  >
                    <VStack spacing={4}>
                      <HStack justify="space-between" w="full">
                        <VStack align="start" spacing={1}>
                          <Text fontSize="sm" color="blue.700" fontWeight="medium">
                            Custo da recompensa
                          </Text>
                          <HStack spacing={1}>
                            <MdStars color="#48742c" size="20px" />
                            <Text fontWeight="bold" color="#48742c" fontSize="xl">
                              {recompensaSelecionada.pontos.toLocaleString()}
                            </Text>
                            <Text fontSize="sm" color="gray.600">pontos</Text>
                          </HStack>
                        </VStack>
                        <VStack align="end" spacing={1}>
                          <Text fontSize="sm" color="blue.700" fontWeight="medium">
                            Saldo após resgate
                          </Text>
                          <Text fontWeight="bold" color="#2d5016" fontSize="xl">
                            {(pontosUsuario - recompensaSelecionada.pontos).toLocaleString()}
                          </Text>
                          <Text fontSize="sm" color="gray.600">pontos</Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </Box>

                  <Box bg="green.50" p={4} borderRadius="lg" border="2px solid" borderColor="green.200">
                    <HStack spacing={3}>
                      <MdCheckCircle color="#38a169" size="20px" />
                      <VStack align="start" spacing={1}>
                        <Text fontSize="sm" color="green.700" fontWeight="semibold">
                          Instruções por email
                        </Text>
                        <Text fontSize="xs" color="green.600" lineHeight="1.4">
                          Após confirmar o resgate, você receberá um email com todas as instruções 
                          e códigos necessários para utilizar sua recompensa.
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>

                  {pontosUsuario < recompensaSelecionada.pontos && (
                    <Box bg="red.50" p={4} borderRadius="lg" border="2px solid" borderColor="red.200">
                      <HStack spacing={3}>
                        <MdWarning color="#e53e3e" size="24px" />
                        <VStack align="start" spacing={1}>
                          <Text fontSize="sm" color="red.700" fontWeight="semibold">
                            Pontos insuficientes
                          </Text>
                          <Text fontSize="xs" color="red.600">
                            Você precisa de mais {(recompensaSelecionada.pontos - pontosUsuario).toLocaleString()} pontos para este resgate.
                          </Text>
                        </VStack>
                      </HStack>
                    </Box>
                  )}
                </VStack>
              </Box>
            )}

            <Box p={6} borderRadius="0 0 2xl 2xl">
              <HStack spacing={3} w="full">
                <Button 
                  variant="outline" 
                  onClick={fecharModal}
                  flex={1}
                  borderRadius="lg"
                  borderColor="gray.300"
                  _hover={{ borderColor: "gray.400", bg: "gray.50" }}
                >
                  Cancelar
                </Button>
                <Button
                  bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                  color="white"
                  onClick={confirmarResgate}
                  isLoading={loading}
                  flex={1}
                  borderRadius="lg"
                  _hover={{
                    bg: "linear-gradient(135deg, #3a5e23 0%, #48742c 100%)"
                  }}
                  isDisabled={!recompensaSelecionada || pontosUsuario < recompensaSelecionada.pontos}
                  leftIcon={<MdCheckCircle />}
                >
                  {loading ? "Processando..." : "Confirmar Resgate"}
                </Button>
              </HStack>
            </Box>
          </Box>
        </Box>
      )}
    </Flex>
  );
}