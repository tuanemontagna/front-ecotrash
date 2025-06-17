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
  HStack,
  Input,
  SimpleGrid
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdAddCircleOutline, MdCalendarToday, MdOutlineInfo, MdLocationOn, MdSchedule, MdRecycling, MdBusiness, MdClose, MdSave, MdCancel } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";

const coletasAgendadasMock = [
  {
    id: 1,
    data: "2024-07-25",
    horario: "10:00 - 12:00",
    local: "Rua das Palmeiras, 123, Bairro Sol",
    materiais: ["Baterias", "Celulares"],
    status: "Agendada",
    empresa: "EcoTech Reciclagem",
  },
  {
    id: 2,
    data: "2024-07-28",
    horario: "14:00 - 16:00",
    local: "Avenida Central, 456, Centro",
    materiais: ["Computadores", "Monitores"],
    status: "Confirmada",
    empresa: "GreenCycle Sustentável",
  },
];

export default function PaginaColetas() {
  const roteador = useRouter();
  
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [coletas, setColetas] = useState(coletasAgendadasMock);
  const [dadosFormulario, setDadosFormulario] = useState({
    data: "",
    horario: "",
    local: "",
    materiais: [],
    empresa: ""
  });
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [showToast, setShowToast] = useState(false);

  const materiaisDisponiveis = [
    "Baterias",
    "Celulares",
    "Computadores",
    "Monitores",
    "Impressoras",
    "Cabos",
    "Placas eletrônicas",
    "Televisores"
  ];

  const tratarVoltar = () => {
    roteador.back();
  };

  const tratarIrParaPerfil = () => {
    roteador.push("/usuario/perfil");
  };

  const tratarAgendarNovaColeta = () => {
    setMostrarFormulario(!mostrarFormulario);
    if (mostrarFormulario) {
      setDadosFormulario({
        data: "",
        horario: "",
        local: "",
        materiais: [],
        empresa: ""
      });
    }
  };

  const tratarMudancaFormulario = (campo, valor) => {
    setDadosFormulario(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const showToastMessage = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const tratarSubmissaoFormulario = () => {
    if (!dadosFormulario.data || !dadosFormulario.horario || !dadosFormulario.local || 
        dadosFormulario.materiais.length === 0 || !dadosFormulario.empresa) {
      showToastMessage("Por favor, preencha todos os campos obrigatórios.", "error");
      return;
    }

    const novaColeta = {
      id: coletas.length + 1,
      data: dadosFormulario.data,
      horario: dadosFormulario.horario,
      local: dadosFormulario.local,
      materiais: dadosFormulario.materiais,
      status: "Agendada",
      empresa: dadosFormulario.empresa
    };

    setColetas(prev => [...prev, novaColeta]);
    
    setDadosFormulario({
      data: "",
      horario: "",
      local: "",
      materiais: [],
      empresa: ""
    });
    setMostrarFormulario(false);

    showToastMessage("Coleta agendada com sucesso!", "success");
  };

  const handleMaterialChange = (material) => {
    setDadosFormulario(prev => ({
      ...prev,
      materiais: prev.materiais.includes(material)
        ? prev.materiais.filter(m => m !== material)
        : [...prev.materiais, material]
    }));
  };

  const tratarCancelarColeta = (idDaColeta) => {
    setColetas(coletasAtuais => 
      coletasAtuais.map(coleta => 
        coleta.id === idDaColeta ? { ...coleta, status: "Cancelada" } : coleta
      )
    );
    showToastMessage("Coleta cancelada.", "info");
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
      default:
        return "gray";
    }
  };

  return (
    <Flex direction="column" minH="100vh" bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)">
      {showToast && (
        <Box
          position="fixed"
          top="20px"
          right="20px"
          zIndex="9999"
          bg={toastType === "error" ? "#e53e3e" : toastType === "info" ? "#3182ce" : "#38a169"}
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
            Coletas Agendadas
          </Text>
          <Text
            color="whiteAlpha.800"
            fontSize={{ base: "xs", md: "sm" }}
            textAlign="center"
          >
          </Text>
        </VStack>
        <HStack
          position="absolute"
          right={{ base: "1rem", md: "1.5rem" }}
          top="50%"
          transform="translateY(-50%)"
          spacing={2}
        >
          <IconButton
            aria-label={mostrarFormulario ? "Fechar formulário" : "Agendar nova coleta"}
            color="white"
            variant="ghost"
            size="lg"
            borderRadius="full"
            _hover={{ bg: "whiteAlpha.200", transform: "scale(1.1)" }}
            _active={{ bg: "whiteAlpha.300" }}
            transition="all 0.2s"
            onClick={tratarAgendarNovaColeta}
          >
            {mostrarFormulario ? <MdClose /> : <MdAddCircleOutline />}
          </IconButton>
          <IconButton
            aria-label="Perfil do usuário"
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
        </HStack>
      </Box>
      
      <Container maxW="container.lg" py={{ base: 8, md: 12 }} flex="1">
        <VStack spacing={{ base: 8, md: 10 }} align="stretch">
          {mostrarFormulario && (
            <Box
              bg="white"
              borderRadius="2xl"
              boxShadow="xl"
              overflow="hidden"
              border="2px solid"
              borderColor="#48742c"
            >
              <Box
                bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                p={4}
              >
                <HStack spacing={3}>
                  <Box
                    bg="whiteAlpha.200"
                    borderRadius="full"
                    p={2}
                    display="inline-flex"
                  >
                    <MdAddCircleOutline color="white" size="24px" />
                  </Box>
                  <Heading size="md" color="white" fontWeight="semibold">
                    Agendar Nova Coleta
                  </Heading>
                </HStack>
              </Box>
              <Box p={6}>
                <VStack spacing={6}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                    <Box>
                      <Text color="#2d5016" fontWeight="semibold" mb={2}>Data *</Text>
                      <Input
                        type="date"
                        value={dadosFormulario.data}
                        onChange={(e) => tratarMudancaFormulario('data', e.target.value)}
                        focusBorderColor="#48742c"
                        color="#48742c"
                      />
                    </Box>
                    <Box>
                      <Text color="#2d5016" fontWeight="semibold" mb={2}>Horário *</Text>
                      <Input
                        placeholder="Ex: 10:00 - 12:00"
                        value={dadosFormulario.horario}
                        onChange={(e) => tratarMudancaFormulario('horario', e.target.value)}
                        focusBorderColor="#48742c"
                        color="#48742c"
                      />
                    </Box>
                  </SimpleGrid>
                  
                  <Box w="full">
                    <Text color="#2d5016" fontWeight="semibold" mb={2}>Local *</Text>
                    <textarea
                      placeholder="Digite o endereço completo"
                      value={dadosFormulario.local}
                      onChange={(e) => tratarMudancaFormulario('local', e.target.value)}
                      style={{
                        width: "100%",
                        background: "white",
                        color: "#48742c",
                        padding: "12px",
                        borderRadius: "6px",
                        border: "1px solid #e2e8f0",
                        fontFamily: "inherit",
                        fontSize: "16px",
                        resize: "vertical",
                        minHeight: "80px",
                        outline: "none"
                      }}
                      onFocus={(e) => e.target.style.borderColor = "#48742c"}
                      onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                    />
                  </Box>

                  <Box w="full">
                    <Text color="#2d5016" fontWeight="semibold" mb={2}>Empresa Responsável *</Text>
                    <select
                      value={dadosFormulario.empresa}
                      onChange={(e) => tratarMudancaFormulario('empresa', e.target.value)}
                      style={{
                        width: "100%",
                        padding: "12px",
                        color: "#48742c",
                        borderRadius: "6px",
                        border: "1px solid #e2e8f0",
                        fontFamily: "inherit",
                        fontSize: "16px",
                        backgroundColor: "white",
                        outline: "none"
                      }}
                      onFocus={(e) => e.target.style.borderColor = "#48742c"}
                      onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                    >
                      <option value="">Selecione uma empresa</option>
                      <option value="EcoTech Reciclagem">EcoTech Reciclagem</option>
                      <option value="GreenCycle Sustentável">GreenCycle Sustentável</option>
                      <option value="ReciclaVerde">ReciclaVerde</option>
                      <option value="EcoSolutions">EcoSolutions</option>
                    </select>
                  </Box>

                  <Box w="full">
                    <Text color="#2d5016" fontWeight="semibold" mb={2}>Materiais *</Text>
                    <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
                      {materiaisDisponiveis.map((material) => (
                        <Box key={material} display="flex" alignItems="center">
                          <input
                            type="checkbox"
                            id={material}
                            checked={dadosFormulario.materiais.includes(material)}
                            onChange={() => handleMaterialChange(material)}
                            style={{
                              marginRight: "8px",
                              accentColor: "#48742c",
                              transform: "scale(1.2)",
                              colorScheme: "white"
                            }}
                          />
                          <label htmlFor={material} style={{ cursor: "pointer", color:"#48742c", fontSize: "14px" }}>
                            {material}
                          </label>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Box>

                  <HStack spacing={4} w="full" justify="flex-end">
                    <Button
                      variant="outline"
                      colorScheme="gray"
                      onClick={tratarAgendarNovaColeta}
                      color="#48742c"
                    >
                      Cancelar
                    </Button>
                    <Button
                      bg="#48742c"
                      color="white"
                      _hover={{ bg: "#3a5e23" }}
                      leftIcon={<MdSave />}
                      onClick={tratarSubmissaoFormulario}
                    >
                      Agendar Coleta
                    </Button>
                  </HStack>
                </VStack>
              </Box>
            </Box>
          )}

          {coletas.length === 0 ? (
            <Box
              bg="white"
              borderRadius="2xl"
              p={{ base: 8, md: 12 }}
              textAlign="center"
              boxShadow="lg"
              border="2px solid"
              borderColor="blue.100"
            >
              <VStack spacing={4}>
                <Box
                  bg="blue.50"
                  borderRadius="full"
                  p={4}
                  display="inline-flex"
                >
                  <MdOutlineInfo size="48px" color="#3182ce" />
                </Box>
                <Heading size="md" color="#2d5016" fontWeight="bold">
                  Nenhuma coleta agendada
                </Heading>
                <Text color="gray.600" maxW="md" lineHeight="1.6">
                  Você ainda não possui coletas agendadas. Clique no botão acima para agendar uma nova coleta e contribuir com o meio ambiente.
                </Text>
              </VStack>
            </Box>
          ) : (
            <VStack spacing={6} align="stretch">
              {coletas.map((coleta) => (
                <Box
                  key={coleta.id}
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
                          <MdRecycling color="white" size="24px" />
                        </Box>
                        <Heading size="md" color="white" fontWeight="semibold">
                          Coleta #{coleta.id}
                        </Heading>
                      </HStack>
                      <span
                        style={{
                          backgroundColor: getStatusColor(coleta.status) === "orange" ? "#fd8a00" :
                                          getStatusColor(coleta.status) === "blue" ? "#3182ce" :
                                          getStatusColor(coleta.status) === "purple" ? "#805ad5" :
                                          getStatusColor(coleta.status) === "green" ? "#38a169" :
                                          getStatusColor(coleta.status) === "red" ? "#e53e3e" : "#718096",
                          color: "white",
                          padding: "8px 16px",
                          borderRadius: "20px",
                          fontWeight: "bold",
                          fontSize: "14px"
                        }}
                      >
                        {coleta.status}
                      </span>
                    </Flex>
                  </Box>
                  <Box p={6}>
                    <VStack spacing={4} align="stretch">
                      <HStack spacing={3} align="flex-start">
                        <MdCalendarToday color="#48742c" size="20px" />
                        <Box>
                          <Text fontWeight="semibold" color="#2d5016" fontSize="sm">
                            Data e Horário
                          </Text>
                          <Text color="gray.600" fontSize="sm">
                            {new Date(coleta.data).toLocaleDateString('pt-BR', { timeZone: 'UTC' })} - {coleta.horario}
                          </Text>
                        </Box>
                      </HStack>
                      <HStack spacing={3} align="flex-start">
                        <MdLocationOn color="#48742c" size="20px" />
                        <Box>
                          <Text fontWeight="semibold" color="#2d5016" fontSize="sm">
                            Local
                          </Text>
                          <Text color="gray.600" fontSize="sm">
                            {coleta.local}
                          </Text>
                        </Box>
                      </HStack>
                      <HStack spacing={3} align="flex-start">
                        <MdRecycling color="#48742c" size="20px" />
                        <Box>
                          <Text fontWeight="semibold" color="#2d5016" fontSize="sm">
                            Materiais
                          </Text>
                          <Flex wrap="wrap" gap={2} mt={1}>
                            {coleta.materiais.map((material, index) => (
                              <span
                                key={index}
                                style={{
                                  backgroundColor: "#f0fff4",
                                  color: "#2f855a",
                                  padding: "4px 12px",
                                  borderRadius: "20px",
                                  fontSize: "12px",
                                  fontWeight: "500"
                                }}
                              >
                                {material}
                              </span>
                            ))}
                          </Flex>
                        </Box>
                      </HStack>
                      <HStack spacing={3} align="flex-start">
                        <MdBusiness color="#48742c" size="20px" />
                        <Box>
                          <Text fontWeight="semibold" color="#2d5016" fontSize="sm">
                            Empresa Responsável
                          </Text>
                          <Text color="gray.600" fontSize="sm">
                            {coleta.empresa}
                          </Text>
                        </Box>
                      </HStack>
                    </VStack>
                    {['Agendada', 'Confirmada'].includes(coleta.status) && (
                      <Flex justify="flex-end" pt={4} mt={4} borderTop="1px solid #e2e8f0">
                        <Button
                          colorScheme="red"
                          variant="outline"
                          color="#48742c"
                          size="sm"
                          leftIcon={<MdCancel />}
                          onClick={() => tratarCancelarColeta(coleta.id)}
                        >
                          Cancelar Coleta
                        </Button>
                      </Flex>
                    )}
                  </Box>
                </Box>
              ))}
            </VStack>
          )}
        </VStack>
      </Container>
    </Flex>
  );
}