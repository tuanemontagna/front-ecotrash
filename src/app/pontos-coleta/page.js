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
  Input,
  Image
} from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip"
import { IoMdArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { 
  MdLocationOn, 
  MdDirections, 
  MdPhone, 
  MdAccessTime, 
  MdSearch, 
  MdFilterList, 
  MdBusiness,
  MdContentCopy,
  MdCheck
} from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

const pontosColetaMock = [
  {
    id: 1,
    nome: "EcoPonto Chapecó - Centro",
    endereco: "Av. Getúlio Vargas, 512 N, Centro",
    cidade: "Chapecó",
    telefone: "(49) 99911-0011",
    horarioFuncionamento: "Seg-Sex: 8h às 18h",
    materiaisAceitos: ["Celulares", "Notebooks", "Baterias", "Cabos"],
    empresa: "Prefeitura de Chapecó",
    distancia: "1.5 km",
    avaliacao: 4.9,
    coordenadas: { lat: -27.0954, lng: -52.6189 }
  },
  {
    id: 2,
    nome: "Recicla Oeste - Bairro Efapi",
    endereco: "Rua das Garças, 321, Bairro Efapi",
    cidade: "Chapecó",
    telefone: "(49) 99922-0022",
    horarioFuncionamento: "Seg-Sab: 9h às 17h",
    materiaisAceitos: ["Televisores", "Eletrodomésticos", "Monitores", "Pilhas"],
    empresa: "Recicla Oeste Ltda",
    distancia: "5.2 km",
    avaliacao: 4.7,
    coordenadas: { lat: -27.1121, lng: -52.6625 }
  },
  {
    id: 3,
    nome: "Xanxerê Sustentável",
    endereco: "Rua da Independência, 789, Centro",
    cidade: "Xanxerê",
    telefone: "(49) 99933-0033",
    horarioFuncionamento: "Seg-Sex: 8h às 12h, 14h às 18h",
    materiaisAceitos: ["Impressoras", "Tablets", "Computadores", "Baterias"],
    empresa: "Xanxerê Recicla",
    distancia: "45.8 km",
    avaliacao: 4.6,
    coordenadas: { lat: -26.8769, lng: -52.4024 }
  },
  {
    id: 4,
    nome: "Conecta Recicla - Concórdia",
    endereco: "Rua Dr. Maruri, 1234, Centro",
    cidade: "Concórdia",
    telefone: "(49) 99944-0044",
    horarioFuncionamento: "Seg-Sex: 8h às 17h",
    materiaisAceitos: ["Computadores", "Monitores", "Celulares", "Cabos"],
    empresa: "Conecta Ambiental",
    distancia: "88.1 km",
    avaliacao: 4.8,
    coordenadas: { lat: -27.2347, lng: -52.0278 }
  },
  {
    id: 5,
    nome: "Ponto Limpo - Xaxim",
    endereco: "Av. Plínio Arlindo de Nês, 999, Centro",
    cidade: "Xaxim",
    telefone: "(49) 99955-0055",
    horarioFuncionamento: "Ter-Qui: 10h às 16h",
    materiaisAceitos: ["Celulares", "Tablets", "Pilhas", "Eletrodomésticos"],
    empresa: "Soluções Ambientais Xaxim",
    distancia: "26.3 km",
    avaliacao: 4.5,
    coordenadas: { lat: -26.9614, lng: -52.5369 }
  }
];

const cidades = ["Todas", "Chapecó", "Xanxerê", "Concórdia", "Xaxim"];
const tiposMateriais = [
  "Todos",
  "Computadores",
  "Celulares",
  "Baterias",
  "Pilhas",
  "Cabos",
  "Televisores",
  "Tablets",
  "Impressoras",
  "Eletrodomésticos",
];

const CardPontoColeta = ({ ponto, onCopy, copiedPhone }) => {
  return (
    <Box
      key={ponto.id}
      bg="white"
      borderRadius="2xl"
      boxShadow="lg"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "2xl",
        borderColor: "#48742c",
        borderWidth: "2px"
      }}
      border="2px solid transparent"
    >
      <Box
        bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
        p={4}
      >
        <VStack spacing={2} align="stretch">
          <HStack justify="space-between" align="start">
            <VStack align="start" spacing={1} flex={1}>
              <Heading size="sm" color="white" noOfLines={2}>
                {ponto.nome}
              </Heading>
              <HStack spacing={1}>
                <MdBusiness color="white" size="14px" />
                <Text fontSize="xs" color="whiteAlpha.900">
                  {ponto.empresa}
                </Text>
              </HStack>
            </VStack>
            <Box
              bg="whiteAlpha.200"
              px={2}
              py={1}
              borderRadius="full"
            >
              <Text fontSize="xs" color="white" fontWeight="bold">
                {ponto.distancia}
              </Text>
            </Box>
          </HStack>
        </VStack>
      </Box>

      <Box p={5}>
        <VStack spacing={4} align="stretch">
          <VStack spacing={3} align="stretch">
            <HStack spacing={2} align="start">
              <MdLocationOn color="#48742c" size="18px" />
              <Text fontSize="sm" color="gray.700" lineHeight="1.4">
                {ponto.endereco}
              </Text>
            </HStack>
            
            <HStack spacing={2}>
              <MdAccessTime color="#48742c" size="18px" />
              <Text fontSize="sm" color="gray.700">
                {ponto.horarioFuncionamento}
              </Text>
            </HStack>
          </VStack>

          <Box>
            <Text fontSize="sm" fontWeight="semibold" color="#2d5016" mb={2}>
              Materiais aceitos:
            </Text>
            <Flex wrap="wrap" gap={2}>
              {ponto.materiaisAceitos.map((material, index) => (
                <Box
                  key={index}
                  bg={ponto.getMaterialColor(material)}
                  color="white"
                  px={2}
                  py={1}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight="medium"
                >
                  {material}
                </Box>
              ))}
            </Flex>
          </Box>

          <HStack justify="space-between" align="center">
            <HStack spacing={1}>
              <Text fontSize="sm" color="gray.600">Avaliação:</Text>
              <Text fontSize="sm" fontWeight="bold" color="#48742c">
                {ponto.avaliacao} ⭐
              </Text>
            </HStack>
          </HStack>

          <VStack spacing={3} pt={2}>
            <Button
              leftIcon={<MdDirections />}
              bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
              color="white"
              size="sm"
              borderRadius="lg"
              w="full"
              _hover={{
                bg: "linear-gradient(135deg, #3a5e23 0%, #48742c 100%)"
              }}
              onClick={() => ponto.tratarVerRota(ponto)}
            >
              Ver Rota
            </Button>
            
            <HStack
              w="full"
              bg="gray.100"
              borderRadius="lg"
              p={2}
              justify="space-between"
              spacing={2}
            >
              <HStack>
                <MdPhone color="#48742c"/>
                <Text fontSize="sm" color="#48742c" fontWeight="medium">
                  {ponto.telefone}
                </Text>
              </HStack>
              <Tooltip label={copiedPhone === ponto.telefone ? "Copiado!" : "Copiar"} closeOnClick={false}>
                <IconButton
                  aria-label="Copiar telefone"
                  icon={copiedPhone === ponto.telefone ? <MdCheck /> : <MdContentCopy />}
                  size="xs"
                  variant="ghost"
                  colorScheme="green"
                  onClick={() => onCopy(ponto.telefone)}
                />
              </Tooltip>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default function PaginaPontosColeta() {
  const roteador = useRouter();
  
  const [filtros, setFiltros] = useState({
    cidade: "Todas",
    material: "Todos",
    busca: ""
  });

  const [copiedPhone, setCopiedPhone] = useState(null);

  const tratarVoltar = () => {
    roteador.back();
  };

  const tratarIrParaPerfil = () => {
    roteador.push("/perfil");
  };

  const tratarVerRota = (ponto) => {
    const url = `https://maps.google.com/?q=...2{ponto.coordenadas.lat},${ponto.coordenadas.lng}`;
    window.open(url, '_blank');
  };

  const copiarTelefone = async (telefone) => {
    if (!navigator.clipboard) {
      console.error("Clipboard API not available");
      return;
    }
    try {
      await navigator.clipboard.writeText(telefone);
      setCopiedPhone(telefone);
      setTimeout(() => setCopiedPhone(null), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  const pontosFiltrados = useMemo(() => {
    return pontosColetaMock.filter(ponto => {
      const passaCidade = filtros.cidade === "Todas" || ponto.cidade === filtros.cidade;
      const passaMaterial = filtros.material === "Todos" || 
        ponto.materiaisAceitos.includes(filtros.material);
      const passaBusca = filtros.busca === "" || 
        ponto.nome.toLowerCase().includes(filtros.busca.toLowerCase()) ||
        ponto.empresa.toLowerCase().includes(filtros.busca.toLowerCase()) ||
        ponto.endereco.toLowerCase().includes(filtros.busca.toLowerCase());
      
      return passaCidade && passaMaterial && passaBusca;
    });
  }, [filtros]);

  const getMaterialColor = (material) => {
    const cores = {
      "Computadores": "#3182ce",
      "Celulares": "#38a169",
      "Monitores": "#805ad5",
      "Televisores": "#dd6b20",
      "Tablets": "#e53e3e",
      "Impressoras": "#0bc5ea",
      "Baterias": "#d69e2e",
      "Pilhas": "#9f7aea",
      "Cabos": "#48bb78",
      "Eletrodomésticos": "#ed8936",
      "Notebooks": "#4299e1"
    };
    return cores[material] || "#718096";
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
            Pontos de Coleta
          </Text>
          <Text
            color="whiteAlpha.800"
            fontSize={{ base: "xs", md: "sm" }}
            textAlign="center"
          >
            Encontre locais para descarte seguro
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
          <Box
            bg="white"
            borderRadius="2xl"
            p={6}
            boxShadow="lg"
            border="2px solid transparent"
          >
            <VStack spacing={6} align="stretch">
              <HStack spacing={3} mb={2}>
                <MdFilterList color="#48742c" size="24px" />
                <Heading size="md" color="#2d5016">
                  Filtros de Busca
                </Heading>
              </HStack>
              
              <VStack spacing={6} align="stretch">
                <Box>
                  <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                    Buscar por nome, empresa ou endereço
                  </Text>
                  <HStack 
                    spacing={4} 
                    align="center" 
                    bg="white" 
                    border="2px solid" 
                    borderColor="#48742c" 
                    borderRadius="lg" 
                    _hover={{ borderColor: "#48742c" }} 
                    _focusWithin={{
                      borderColor: "#48742c",
                      boxShadow: "0 0 0 1px #48742c"
                    }}
                    px={3}
                  >
                    <MdSearch color="#48742c" />
                    <Input
                      placeholder="Digite sua busca..."
                      value={filtros.busca}
                      border= "#48742c"
                      onChange={(e) => setFiltros(prev => ({ ...prev, busca: e.target.value }))}
                      variant="unstyled"
                      flex={1}
                      py={2}
                      color= "#48742c"
                      bg= "white"
                    />
                  </HStack>
                </Box>

                <VStack spacing={2} align="stretch">
                <Text fontWeight="medium" color="#2d5016" fontSize="sm">
                    Cidade
                </Text>
                <Flex wrap="wrap" gap={2}>
                    {cidades.map(cidade => (
                    <Button
                        key={cidade}
                        size="sm"
                        color= "#48742c"
                        onClick={() => setFiltros(prev => ({ ...prev, cidade: cidade }))}
                        colorScheme="green"
                        variant={filtros.cidade === cidade ? "solid" : "outline"}
                        _hover={{ 
                        bg: "gray.100",
                        color: "#48742c" 
                        }}
                    >
                        {cidade}
                    </Button>
                    ))}
                </Flex>
                </VStack>

                <VStack spacing={2} align="stretch">
                <Text fontWeight="medium" color="#2d5016" fontSize="sm">
                    Tipo de Material
                </Text>
                <Flex wrap="wrap" gap={2}>
                    {tiposMateriais.map(material => (
                    <Button
                        key={material}
                        size="sm"
                        color= "#48742c"
                        onClick={() => setFiltros(prev => ({ ...prev, material: material }))}
                        colorScheme="green"
                        variant={filtros.material === material ? "solid" : "outline"}
                        _hover={{ 
                        bg: "gray.100",
                        color: "#48742c" 
                        }}
                    >
                        {material}
                    </Button>
                    ))}
                </Flex>
                </VStack>

              </VStack>
            </VStack>
          </Box>

          <Box>
            <HStack justify="space-between" align="center" mb={6}>
              <Heading size="lg" color="#2d5016">
                Pontos Encontrados
              </Heading>
              <Text color="gray.600" fontSize="sm">
                {pontosFiltrados.length} {pontosFiltrados.length === 1 ? 'resultado' : 'resultados'}
              </Text>
            </HStack>

            {pontosFiltrados.length === 0 ? (
              <Box
                bg="white"
                borderRadius="2xl"
                p={8}
                textAlign="center"
                boxShadow="md"
              >
                <MdLocationOn size="48px" color="#718096" style={{ margin: "0 auto 16px" }} />
                <Heading size="md" color="#2d5016" mb={2}>
                  Nenhum ponto encontrado
                </Heading>
                <Text color="gray.600">
                  Tente ajustar os filtros para encontrar pontos de coleta na sua região.
                </Text>
              </Box>
            ) : (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {pontosFiltrados.map((ponto) => (
                  <CardPontoColeta 
                    key={ponto.id} 
                    ponto={{...ponto, getMaterialColor, tratarVerRota}} 
                    onCopy={copiarTelefone}
                    copiedPhone={copiedPhone}
                  />
                ))}
              </SimpleGrid>
            )}
          </Box>
        </VStack>
      </Container>
    </Flex>
  );
}