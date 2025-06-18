"use client";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  Heading,
  Container,
  IconButton,
  Alert,
  Stack,
  HStack,
  Input,
  SimpleGrid
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { 
  MdAddCircleOutline, 
  MdCalendarToday, 
  MdOutlineInfo, 
  MdLocationOn, 
  MdSchedule, 
  MdRecycling, 
  MdBusiness, 
  MdClose, 
  MdSave,
  MdCheckCircle,
  MdHourglassEmpty,
  MdAssignment,
  MdPhone,
  MdEmail,
  MdPerson
} from "react-icons/md";
import { FaTruck, FaBuilding, FaCheckCircle, FaClock } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

const coletasEmpresariais = {
  agendadas: [
    {
      id: 1,
      data: "2024-07-25",
      horario: "09:00 - 11:00",
      cliente: "Empresa TechSolutions Ltda",
      cnpj: "11.222.333/0001-44",
      contato: {
        nome: "Ana Silva",
        telefone: "(49) 99999-1111",
        email: "ana@techsolutions.com"
      },
      endereco: "Rua Tecnológica, 500 - Distrito Industrial, Chapecó, SC",
      materiais: ["Computadores", "Monitores", "Impressoras"],
      quantidade: "Aproximadamente 25 equipamentos",
      status: "Agendada",
      observacoes: "Acesso pelo portão lateral"
    },
    {
      id: 2,
      data: "2024-07-28",
      horario: "14:00 - 16:00",
      cliente: "Indústria Verde S.A.",
      cnpj: "22.333.444/0001-55",
      contato: {
        nome: "Carlos Oliveira",
        telefone: "(49) 88888-2222",
        email: "carlos@industriaverde.com"
      },
      endereco: "Av. Industrial, 1200 - Zona Industrial, Chapecó, SC",
      materiais: ["Baterias industriais", "Placas eletrônicas", "Cabos"],
      quantidade: "2 toneladas",
      status: "Confirmada",
      observacoes: "Coleta de grande porte - equipamento especial necessário"
    }
  ],
  concluidas: [
    {
      id: 3,
      data: "2024-07-20",
      horario: "10:00 - 12:00",
      cliente: "Escritório Contábil Lima & Associados",
      cnpj: "33.444.555/0001-66",
      contato: {
        nome: "Roberto Lima",
        telefone: "(49) 77777-3333",
        email: "roberto@lima.com.br"
      },
      endereco: "Rua do Comércio, 789 - Centro, Chapecó, SC",
      materiais: ["Computadores antigos", "Impressoras"],
      quantidade: "12 equipamentos",
      status: "Concluída",
      dataColeta: "2024-07-20",
      pesoColetado: "150 kg",
      certificado: "CERT-2024-0789"
    },
    {
      id: 4,
      data: "2024-07-15",
      horario: "08:00 - 10:00",
      cliente: "Hospital Regional Norte",
      cnpj: "44.555.666/0001-77",
      contato: {
        nome: "Dra. Maria Santos",
        telefone: "(49) 66666-4444",
        email: "maria@hospitalregional.com"
      },
      endereco: "Av. Saúde, 300 - Bairro Médico, Chapecó, SC",
      materiais: ["Equipamentos médicos eletrônicos", "Monitores"],
      quantidade: "35 equipamentos",
      status: "Concluída",
      dataColeta: "2024-07-15",
      pesoColetado: "280 kg",
      certificado: "CERT-2024-0756"
    }
  ],
  solicitacoes: [
    {
      id: 5,
      dataSolicitacao: "2024-07-23",
      cliente: "Fábrica de Móveis Madeira Verde",
      cnpj: "55.666.777/0001-88",
      contato: {
        nome: "João Ferreira",
        telefone: "(49) 55555-5555",
        email: "joao@madeiraverde.com"
      },
      endereco: "Estrada Rural, Km 15 - Zona Rural, Chapecó, SC",
      materiais: ["Equipamentos de escritório", "Computadores", "Telefones"],
      quantidade: "Aproximadamente 40 equipamentos",
      status: "Pendente",
      urgencia: "Normal",
      observacoes: "Empresa em processo de modernização - coleta pode ser agendada para qualquer dia da semana"
    },
    {
      id: 6,
      dataSolicitacao: "2024-07-24",
      cliente: "Clínica Odontológica Sorriso",
      cnpj: "66.777.888/0001-99",
      contato: {
        nome: "Dr. Pedro Almeida",
        telefone: "(49) 44444-6666",
        email: "pedro@clinicasorriso.com"
      },
      endereco: "Rua dos Dentistas, 200 - Centro, Chapecó, SC",
      materiais: ["Equipamentos odontológicos eletrônicos", "Computadores"],
      quantidade: "8 equipamentos",
      status: "Pendente",
      urgencia: "Alta",
      observacoes: "Equipamentos com componentes de mercúrio - necessita cuidado especial"
    }
  ],
  solicitacoesProcessadas: [
    {
      id: 7,
      dataSolicitacao: "2024-07-20",
      dataProcessamento: "2024-07-21",
      cliente: "Loja de Informática Digital",
      cnpj: "77.888.999/0001-11",
      contato: {
        nome: "Lucas Martins",
        telefone: "(49) 33333-7777",
        email: "lucas@digital.com"
      },
      endereco: "Av. Tecnologia, 150 - Centro, Chapecó, SC",
      materiais: ["Computadores defeituosos", "Peças de reposição"],
      quantidade: "15 equipamentos",
      status: "Aprovada",
      urgencia: "Normal",
      observacoes: "Solicitação aprovada - agendamento em processo",
      motivoProcessamento: "Solicitação atende aos critérios de coleta"
    },
    {
      id: 8,
      dataSolicitacao: "2024-07-19",
      dataProcessamento: "2024-07-20",
      cliente: "Empresa XYZ Serviços",
      cnpj: "88.999.000/0001-22",
      contato: {
        nome: "Fernanda Costa",
        telefone: "(49) 22222-8888",
        email: "fernanda@xyz.com"
      },
      endereco: "Rua Distante, 999 - Periferia, Chapecó, SC",
      materiais: ["Equipamentos diversos"],
      quantidade: "5 equipamentos",
      status: "Rejeitada",
      urgencia: "Baixa",
      observacoes: "Quantidade muito pequena para coleta dedicada",
      motivoProcessamento: "Quantidade insuficiente - sugerido levar a ponto de coleta"
    }
  ]
};

export default function ColetasEmpresa() {
  const roteador = useRouter();
  const [coletas, setColetas] = useState(coletasEmpresariais);
  const [tabAtiva, setTabAtiva] = useState('agendadas');
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [showToast, setShowToast] = useState(false);

  const tratarVoltar = () => {
    roteador.back();
  };

  const tratarIrParaPerfil = () => {
    roteador.push("/empresa/perfil");
  };

  const showToastMessage = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Agendada":
        return "orange";
      case "Confirmada":
        return "blue";
      case "Em Andamento":
        return "purple";
      case "Concluída":
        return "green";
      case "Cancelada":
        return "red";
      case "Pendente":
        return "yellow";
      default:
        return "gray";
    }
  };

  const getUrgenciaColor = (urgencia) => {
    switch (urgencia) {
      case "Alta":
        return "red";
      case "Normal":
        return "blue";
      case "Baixa":
        return "gray";
      default:
        return "gray";
    }
  };
  const handleAprovarSolicitacao = (id) => {
    const solicitacao = coletas.solicitacoes.find(s => s.id === id);
    if (solicitacao) {
      const solicitacaoProcessada = {
        ...solicitacao,
        status: "Aprovada",
        dataProcessamento: new Date().toISOString().split('T')[0],
        motivoProcessamento: "Solicitação aprovada - agendamento em processo"
      };
      
      setColetas(prev => ({
        ...prev,
        solicitacoes: prev.solicitacoes.filter(s => s.id !== id),
        solicitacoesProcessadas: [...prev.solicitacoesProcessadas, solicitacaoProcessada]
      }));
      
      showToastMessage("Solicitação aprovada! Coleta será agendada.", "success");
    }
  };

  const handleRejeitarSolicitacao = (id) => {
    const solicitacao = coletas.solicitacoes.find(s => s.id === id);
    if (solicitacao) {
      const solicitacaoProcessada = {
        ...solicitacao,
        status: "Rejeitada",
        dataProcessamento: new Date().toISOString().split('T')[0],
        motivoProcessamento: "Solicitação rejeitada pela empresa"
      };
      
      setColetas(prev => ({
        ...prev,
        solicitacoes: prev.solicitacoes.filter(s => s.id !== id),
        solicitacoesProcessadas: [...prev.solicitacoesProcessadas, solicitacaoProcessada]
      }));
      
      showToastMessage("Solicitação rejeitada.", "info");
    }
  };

  const ContainerColeta = ({ coleta, tipo }) => (
    <Box
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
        <Flex justify="space-between" align="center">
          <HStack spacing={3}>
            <Box
              bg="whiteAlpha.200"
              borderRadius="full"
              p={2}
              display="inline-flex"
            >
              {tipo === 'solicitacao' ? (
                <MdAssignment color="white" size="24px" />
              ) : (
                <FaTruck color="white" size="24px" />
              )}
            </Box>
            <VStack align="start" spacing={0}>
              <Heading size="md" color="white" fontWeight="semibold">
                {tipo === 'solicitacao' ? 'Solicitação' : 'Coleta'} #{coleta.id}
              </Heading>
              <Text color="whiteAlpha.900" fontSize="sm">
                {coleta.cliente}
              </Text>
            </VStack>
          </HStack>          <VStack spacing={2} align="end">
            <Box
              bg={getStatusColor(coleta.status) === "orange" ? "#fd8a00" :
                  getStatusColor(coleta.status) === "blue" ? "#3182ce" :
                  getStatusColor(coleta.status) === "purple" ? "#805ad5" :
                  getStatusColor(coleta.status) === "green" ? "#38a169" :
                  getStatusColor(coleta.status) === "red" ? "#e53e3e" : 
                  getStatusColor(coleta.status) === "yellow" ? "#d69e2e" : "#718096"}
              color="white"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="xs"
              fontWeight="bold"
            >
              {coleta.status}
            </Box>
            {coleta.urgencia && (
              <Box
                border="2px solid"
                borderColor={getUrgenciaColor(coleta.urgencia) === "red" ? "#e53e3e" :
                            getUrgenciaColor(coleta.urgencia) === "blue" ? "#3182ce" : "#718096"}
                color={getUrgenciaColor(coleta.urgencia) === "red" ? "#e53e3e" :
                       getUrgenciaColor(coleta.urgencia) === "blue" ? "#3182ce" : "#718096"}
                px={2}
                py={1}
                borderRadius="full"
                fontSize="xs"
                fontWeight="bold"
              >
                {coleta.urgencia}
              </Box>
            )}
          </VStack>
        </Flex>
      </Box>
      <Box p={6}>
        <VStack spacing={4} align="stretch">
          {/* Data/Horário ou Data Solicitação */}
          <HStack spacing={3} align="flex-start">
            <MdCalendarToday color="#48742c" size="20px" />
            <Box>
              <Text fontWeight="semibold" color="#2d5016" fontSize="sm">
                {tipo === 'solicitacao' ? 'Data da Solicitação' : 'Data e Horário'}
              </Text>
              <Text color="gray.600" fontSize="sm">
                {tipo === 'solicitacao' 
                  ? new Date(coleta.dataSolicitacao).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
                  : `${new Date(coleta.data).toLocaleDateString('pt-BR', { timeZone: 'UTC' })} - ${coleta.horario}`
                }
              </Text>
            </Box>
          </HStack>

          {/* Informações da Empresa Cliente */}
          <HStack spacing={3} align="flex-start">
            <FaBuilding color="#48742c" size="20px" />
            <Box>
              <Text fontWeight="semibold" color="#2d5016" fontSize="sm">
                Empresa Cliente
              </Text>
              <Text color="gray.600" fontSize="sm">
                {coleta.cliente}
              </Text>
              <Text color="gray.500" fontSize="xs">
                CNPJ: {coleta.cnpj}
              </Text>
            </Box>
          </HStack>

          {/* Contato */}
          <HStack spacing={3} align="flex-start">
            <MdPerson color="#48742c" size="20px" />
            <Box>
              <Text fontWeight="semibold" color="#2d5016" fontSize="sm">
                Contato
              </Text>
              <Text color="gray.600" fontSize="sm">
                {coleta.contato.nome}
              </Text>
              <HStack spacing={4} mt={1}>
                <HStack spacing={1}>
                  <MdPhone color="#48742c" size="14px" />
                  <Text color="gray.500" fontSize="xs">
                    {coleta.contato.telefone}
                  </Text>
                </HStack>
                <HStack spacing={1}>
                  <MdEmail color="#48742c" size="14px" />
                  <Text color="gray.500" fontSize="xs">
                    {coleta.contato.email}
                  </Text>
                </HStack>
              </HStack>
            </Box>
          </HStack>

          {/* Endereço */}
          <HStack spacing={3} align="flex-start">
            <MdLocationOn color="#48742c" size="20px" />
            <Box>
              <Text fontWeight="semibold" color="#2d5016" fontSize="sm">
                Endereço
              </Text>
              <Text color="gray.600" fontSize="sm">
                {coleta.endereco}
              </Text>
            </Box>
          </HStack>

          {/* Materiais */}
          <HStack spacing={3} align="flex-start">
            <MdRecycling color="#48742c" size="20px" />
            <Box>
              <Text fontWeight="semibold" color="#2d5016" fontSize="sm">
                Materiais e Quantidade
              </Text>              <Flex wrap="wrap" gap={2} mt={1} mb={2}>
                {coleta.materiais.map((material, index) => (
                  <Box
                    key={index}
                    bg="#f0fff4"
                    color="#2f855a"
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="medium"
                  >
                    {material}
                  </Box>
                ))}
              </Flex>
              <Text color="gray.600" fontSize="sm">
                Quantidade: {coleta.quantidade}
              </Text>
            </Box>
          </HStack>          {/* Informações específicas por tipo */}
          {tipo === 'concluida' && (
            <>
              <HStack spacing={3} align="flex-start">
                <MdCheckCircle color="#48742c" size="20px" />
                <Box>
                  <Text fontWeight="semibold" color="#2d5016" fontSize="sm">
                    Dados da Coleta
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    Peso coletado: {coleta.pesoColetado}
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    Certificado: {coleta.certificado}
                  </Text>
                </Box>
              </HStack>
            </>
          )}

          {/* Informações de processamento para solicitações processadas */}
          {tipo === 'processada' && (
            <>
              <HStack spacing={3} align="flex-start">
                <MdCalendarToday color="#48742c" size="20px" />
                <Box>
                  <Text fontWeight="semibold" color="#2d5016" fontSize="sm">
                    Data de Processamento
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    {new Date(coleta.dataProcessamento).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                  </Text>
                </Box>
              </HStack>
              
              <HStack spacing={3} align="flex-start">
                <MdOutlineInfo color="#48742c" size="20px" />
                <Box>
                  <Text fontWeight="semibold" color="#2d5016" fontSize="sm">
                    Motivo do Processamento
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    {coleta.motivoProcessamento}
                  </Text>
                </Box>
              </HStack>
            </>
          )}

          {/* Observações */}
          {coleta.observacoes && (
            <HStack spacing={3} align="flex-start">
              <MdOutlineInfo color="#48742c" size="20px" />
              <Box>
                <Text fontWeight="semibold" color="#2d5016" fontSize="sm">
                  Observações
                </Text>
                <Text color="gray.600" fontSize="sm">
                  {coleta.observacoes}
                </Text>
              </Box>
            </HStack>
          )}

          {/* Botões para solicitações */}
          {tipo === 'solicitacao' && coleta.status === 'Pendente' && (
            <HStack spacing={3} pt={4}>
              <Button
                size="sm"
                bg="#48742c"
                color="white"
                _hover={{ bg: "#3a5e23" }}
                leftIcon={<MdCheckCircle />}
                onClick={() => handleAprovarSolicitacao(coleta.id)}
                flex="1"
              >
                Aprovar
              </Button>
              <Button
                size="sm"
                color="#48742c"
                variant="outline"
                colorScheme="red"
                leftIcon={<MdClose />}
                onClick={() => handleRejeitarSolicitacao(coleta.id)}
                flex="1"
              >
                Rejeitar
              </Button>
            </HStack>
          )}
        </VStack>
      </Box>
    </Box>
  );

  return (
    <Flex direction="column" minH="100vh" bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)">
      {/* Toast notification */}
      {showToast && (
        <Box
          position="fixed"
          top="20px"
          right="20px"
          zIndex="9999"
          bg={toastType === "error" ? "#e53e3e" : "#38a169"}
          color="white"
          p={4}
          borderRadius="md"
          boxShadow="lg"
        >
          {toastMessage}
        </Box>
      )}

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
            Gestão de Coletas
          </Text>
          <Text
            color="whiteAlpha.800"
            fontSize={{ base: "xs", md: "sm" }}
            textAlign="center"
          >
            Gerencie coletas agendadas, concluídas e solicitações
          </Text>
        </VStack>
        <IconButton
          aria-label="Perfil da empresa"
          position="absolute"
          right={{ base: "1rem", md: "1.5rem" }}
          top="50%"
          transform="translateY(-50%)"
          color="white"
          variant="ghost"
          size="lg"
          borderRadius="full"
          _hover={{ bg: "whiteAlpha.200", transform: "scale(1.1)" }}
          _active={{ bg: "whiteAlpha.300" }}
          transition="all 0.2s"
          onClick={tratarIrParaPerfil}
        >
          <CgProfile />
        </IconButton>
      </Box>
      
      <Container maxW="container.xl" py={{ base: 8, md: 12 }} flex="1">
        <VStack spacing={{ base: 6, md: 8 }} align="stretch">          {/* Resumo das Coletas */}
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
            <Box
              bg="white"
              borderRadius="xl"
              p={6}
              textAlign="center"
              boxShadow="md"
              border="2px solid"
              borderColor="orange.200"
            >
              <VStack spacing={3}>
                <Box
                  bg="orange.100"
                  borderRadius="full"
                  p={3}
                  display="inline-flex"
                >
                  <FaClock color="#fd8a00" size="24px" />
                </Box>
                <Text fontSize="2xl" fontWeight="bold" color="orange.600">
                  {coletas.agendadas.length}
                </Text>
                <Text fontSize="sm" color="gray.600" fontWeight="semibold">
                  Coletas Agendadas
                </Text>
              </VStack>
            </Box>

            <Box
              bg="white"
              borderRadius="xl"
              p={6}
              textAlign="center"
              boxShadow="md"
              border="2px solid"
              borderColor="green.200"
            >
              <VStack spacing={3}>
                <Box
                  bg="green.100"
                  borderRadius="full"
                  p={3}
                  display="inline-flex"
                >
                  <FaCheckCircle color="#38a169" size="24px" />
                </Box>
                <Text fontSize="2xl" fontWeight="bold" color="green.600">
                  {coletas.concluidas.length}
                </Text>
                <Text fontSize="sm" color="gray.600" fontWeight="semibold">
                  Coletas Concluídas
                </Text>
              </VStack>
            </Box>

            <Box
              bg="white"
              borderRadius="xl"
              p={6}
              textAlign="center"
              boxShadow="md"
              border="2px solid"
              borderColor="yellow.200"
            >
              <VStack spacing={3}>
                <Box
                  bg="yellow.100"
                  borderRadius="full"
                  p={3}
                  display="inline-flex"
                >
                  <MdHourglassEmpty color="#d69e2e" size="24px" />
                </Box>
                <Text fontSize="2xl" fontWeight="bold" color="yellow.600">
                  {coletas.solicitacoes.length}
                </Text>
                <Text fontSize="sm" color="gray.600" fontWeight="semibold">
                  Solicitações Pendentes
                </Text>
              </VStack>
            </Box>

            <Box
              bg="white"
              borderRadius="xl"
              p={6}
              textAlign="center"
              boxShadow="md"
              border="2px solid"
              borderColor="blue.200"
            >
              <VStack spacing={3}>
                <Box
                  bg="blue.100"
                  borderRadius="full"
                  p={3}
                  display="inline-flex"
                >
                  <MdAssignment color="#3182ce" size="24px" />
                </Box>
                <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                  {coletas.solicitacoesProcessadas.length}
                </Text>
                <Text fontSize="sm" color="gray.600" fontWeight="semibold">
                  Solicitações Processadas
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>{/* Sistema de navegação por abas */}
          <Box bg="white" borderRadius="2xl" boxShadow="lg" overflow="hidden">            {/* Navegação manual das abas */}
            <Box bg="gray.50" px={6} py={4}>
              <HStack spacing={6} flexWrap="wrap">
                <Button
                  variant={tabAtiva === 'agendadas' ? 'solid' : 'ghost'}
                  bg={tabAtiva === 'agendadas' ? '#48742c' : 'transparent'}
                  color={tabAtiva === 'agendadas' ? 'white' : '#48742c'}
                  _hover={tabAtiva !== 'agendadas' ? { bg: 'gray.100' } : {}}
                  fontWeight="semibold"
                  onClick={() => setTabAtiva('agendadas')}
                  size="sm"
                >
                  Agendadas ({coletas.agendadas.length})
                </Button>
                <Button
                  variant={tabAtiva === 'concluidas' ? 'solid' : 'ghost'}
                  bg={tabAtiva === 'concluidas' ? '#48742c' : 'transparent'}
                  color={tabAtiva === 'concluidas' ? 'white' : '#48742c'}
                  _hover={tabAtiva !== 'concluidas' ? { bg: 'gray.100' } : {}}
                  fontWeight="semibold"
                  onClick={() => setTabAtiva('concluidas')}
                  size="sm"
                >
                  Concluídas ({coletas.concluidas.length})
                </Button>
                <Button
                  variant={tabAtiva === 'solicitacoes' ? 'solid' : 'ghost'}
                  bg={tabAtiva === 'solicitacoes' ? '#48742c' : 'transparent'}
                  color={tabAtiva === 'solicitacoes' ? 'white' : '#48742c'}
                  _hover={tabAtiva !== 'solicitacoes' ? { bg: 'gray.100' } : {}}
                  fontWeight="semibold"
                  onClick={() => setTabAtiva('solicitacoes')}
                  size="sm"
                >
                  Solicitações ({coletas.solicitacoes.length})
                </Button>
                <Button
                  variant={tabAtiva === 'processadas' ? 'solid' : 'ghost'}
                  bg={tabAtiva === 'processadas' ? '#48742c' : 'transparent'}
                  color={tabAtiva === 'processadas' ? 'white' : '#48742c'}
                  _hover={tabAtiva !== 'processadas' ? { bg: 'gray.100' } : {}}
                  fontWeight="semibold"
                  onClick={() => setTabAtiva('processadas')}
                  size="sm"
                >
                  Processadas ({coletas.solicitacoesProcessadas.length})
                </Button>
              </HStack>
            </Box>

            {/* Conteúdo das abas */}
            <Box p={6}>
              {/* Coletas Agendadas */}
              {tabAtiva === 'agendadas' && (
                <>
                  {coletas.agendadas.length === 0 ? (
                    <Box textAlign="center" py={12}>
                      <VStack spacing={4}>
                        <Box
                          bg="orange.50"
                          borderRadius="full"
                          p={4}
                          display="inline-flex"
                        >
                          <FaClock size="48px" color="#fd8a00" />
                        </Box>
                        <Heading size="md" color="#2d5016">
                          Nenhuma coleta agendada
                        </Heading>
                        <Text color="gray.600" maxW="md">
                          Você não possui coletas agendadas no momento.
                        </Text>
                      </VStack>
                    </Box>
                  ) : (
                    <VStack spacing={6} align="stretch">
                      {coletas.agendadas.map((coleta) => (
                        <ContainerColeta key={coleta.id} coleta={coleta} tipo="agendada" />
                      ))}
                    </VStack>
                  )}
                </>
              )}

              {/* Coletas Concluídas */}
              {tabAtiva === 'concluidas' && (
                <>
                  {coletas.concluidas.length === 0 ? (
                    <Box textAlign="center" py={12}>
                      <VStack spacing={4}>
                        <Box
                          bg="green.50"
                          borderRadius="full"
                          p={4}
                          display="inline-flex"
                        >
                          <FaCheckCircle size="48px" color="#38a169" />
                        </Box>
                        <Heading size="md" color="#2d5016">
                          Nenhuma coleta concluída
                        </Heading>
                        <Text color="gray.600" maxW="md">
                          Você ainda não possui coletas concluídas.
                        </Text>
                      </VStack>
                    </Box>
                  ) : (
                    <VStack spacing={6} align="stretch">
                      {coletas.concluidas.map((coleta) => (
                        <ContainerColeta key={coleta.id} coleta={coleta} tipo="concluida" />
                      ))}
                    </VStack>
                  )}
                </>
              )}              {/* Solicitações Pendentes */}
              {tabAtiva === 'solicitacoes' && (
                <>
                  {coletas.solicitacoes.length === 0 ? (
                    <Box textAlign="center" py={12}>
                      <VStack spacing={4}>
                        <Box
                          bg="yellow.50"
                          borderRadius="full"
                          p={4}
                          display="inline-flex"
                        >
                          <MdHourglassEmpty size="48px" color="#d69e2e" />
                        </Box>
                        <Heading size="md" color="#2d5016">
                          Nenhuma solicitação pendente
                        </Heading>
                        <Text color="gray.600" maxW="md">
                          Você não possui solicitações de coleta pendentes.
                        </Text>
                      </VStack>
                    </Box>
                  ) : (
                    <VStack spacing={6} align="stretch">
                      {coletas.solicitacoes.map((coleta) => (
                        <ContainerColeta key={coleta.id} coleta={coleta} tipo="solicitacao" />
                      ))}
                    </VStack>
                  )}
                </>
              )}

              {/* Solicitações Processadas */}
              {tabAtiva === 'processadas' && (
                <>
                  {coletas.solicitacoesProcessadas.length === 0 ? (
                    <Box textAlign="center" py={12}>
                      <VStack spacing={4}>
                        <Box
                          bg="blue.50"
                          borderRadius="full"
                          p={4}
                          display="inline-flex"
                        >
                          <MdAssignment size="48px" color="#3182ce" />
                        </Box>
                        <Heading size="md" color="#2d5016">
                          Nenhuma solicitação processada
                        </Heading>
                        <Text color="gray.600" maxW="md">
                          Você não possui solicitações processadas.
                        </Text>
                      </VStack>
                    </Box>
                  ) : (
                    <VStack spacing={8} align="stretch">
                      {/* Seção de Solicitações Aprovadas */}
                      {coletas.solicitacoesProcessadas.filter(s => s.status === 'Aprovada').length > 0 && (
                        <Box>
                          <Heading size="md" color="#2d5016" mb={4} display="flex" alignItems="center">
                            <MdCheckCircle color="#38a169" style={{ marginRight: '8px' }} />
                            Solicitações Aprovadas ({coletas.solicitacoesProcessadas.filter(s => s.status === 'Aprovada').length})
                          </Heading>
                          <VStack spacing={4} align="stretch">
                            {coletas.solicitacoesProcessadas
                              .filter(coleta => coleta.status === 'Aprovada')
                              .map((coleta) => (
                                <ContainerColeta key={coleta.id} coleta={coleta} tipo="processada" />
                              ))}
                          </VStack>
                        </Box>
                      )}

                      {/* Seção de Solicitações Rejeitadas */}
                      {coletas.solicitacoesProcessadas.filter(s => s.status === 'Rejeitada').length > 0 && (
                        <Box>
                          <Heading size="md" color="#2d5016" mb={4} display="flex" alignItems="center">
                            <MdClose color="#e53e3e" style={{ marginRight: '8px' }} />
                            Solicitações Rejeitadas ({coletas.solicitacoesProcessadas.filter(s => s.status === 'Rejeitada').length})
                          </Heading>
                          <VStack spacing={4} align="stretch">
                            {coletas.solicitacoesProcessadas
                              .filter(coleta => coleta.status === 'Rejeitada')
                              .map((coleta) => (
                                <ContainerColeta key={coleta.id} coleta={coleta} tipo="processada" />
                              ))}
                          </VStack>
                        </Box>
                      )}
                    </VStack>
                  )}
                </>
              )}
            </Box>
          </Box>
        </VStack>
      </Container>
    </Flex>
  );
}
