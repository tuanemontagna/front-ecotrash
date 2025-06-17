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
  Input
} from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip"
import { IoMdArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { 
  MdLocationOn, 
  MdPhone, 
  MdAccessTime, 
  MdSearch, 
  MdBusiness,
  MdEdit,
  MdDelete,
  MdAdd,
  MdVisibility,
  MdToggleOn,
  MdToggleOff,
  MdSave,
  MdCancel
} from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";

const pontosColetaEmpresaMock = [
  {
    id: 1,
    nome: "EcoPonto Central - Matrix",
    endereco: "Av. Getúlio Vargas, 512 N, Centro",
    cidade: "Chapecó",
    telefone: "(49) 99911-0011",
    horarioFuncionamento: "Seg-Sex: 8h às 18h",
    materiaisAceitos: ["Celulares", "Notebooks", "Baterias", "Cabos"],
    descricao: "Ponto de coleta principal da empresa, localizado no centro da cidade para fácil acesso.",
    capacidadeMaxima: "500 kg/mês",
    ativo: true,
    coletasRealizadas: 42,
    avaliacaoMedia: 4.9,
    coordenadas: { lat: -27.0954, lng: -52.6189 }
  },
  {
    id: 2,
    nome: "Matrix Coleta - Bairro Efapi",
    endereco: "Rua das Garças, 321, Bairro Efapi",
    cidade: "Chapecó",
    telefone: "(49) 99922-0022",
    horarioFuncionamento: "Seg-Sab: 9h às 17h",
    materiaisAceitos: ["Televisores", "Eletrodomésticos", "Monitores", "Pilhas"],
    descricao: "Filial especializada em equipamentos de grande porte e eletrodomésticos.",
    capacidadeMaxima: "800 kg/mês",
    ativo: true,
    coletasRealizadas: 28,
    avaliacaoMedia: 4.7,
    coordenadas: { lat: -27.1121, lng: -52.6625 }
  },
  {
    id: 3,
    nome: "Ponto Matrix - Xanxerê",
    endereco: "Rua da Independência, 789, Centro",
    cidade: "Xanxerê",
    telefone: "(49) 99933-0033",
    horarioFuncionamento: "Seg-Sex: 8h às 12h, 14h às 18h",
    materiaisAceitos: ["Impressoras", "Tablets", "Computadores", "Baterias"],
    descricao: "Expansão regional da Matrix em Xanxerê, atendendo toda a região oeste.",
    capacidadeMaxima: "300 kg/mês",
    ativo: false,
    coletasRealizadas: 15,
    avaliacaoMedia: 4.6,
    coordenadas: { lat: -26.8769, lng: -52.4024 }
  }
];

const tiposMateriais = [
  "Computadores",
  "Celulares", 
  "Baterias",
  "Pilhas",
  "Cabos",
  "Televisores",
  "Tablets",
  "Impressoras",
  "Eletrodomésticos",
  "Monitores",
  "Notebooks"
];

const CardPontoColeta = ({ ponto, onEdit, onToggleStatus, onDelete }) => {
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
    <Box
      bg="white"
      borderRadius="2xl"
      boxShadow="lg"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "2xl",
        borderColor: ponto.ativo ? "#48742c" : "#e53e3e",
        borderWidth: "2px"
      }}
      border="2px solid transparent"
      opacity={ponto.ativo ? 1 : 0.7}
    >
      <Box
        bg={ponto.ativo 
          ? "linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
          : "linear-gradient(135deg, #e53e3e 0%, #fc8181 100%)"
        }
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
                  Matrix Tecnologia
                </Text>
              </HStack>
            </VStack>
            <HStack spacing={1}>
              <Box
                bg="whiteAlpha.200"
                px={2}
                py={1}
                borderRadius="full"
              >
                <Text fontSize="xs" color="white" fontWeight="bold">
                  {ponto.ativo ? "Ativo" : "Inativo"}
                </Text>
              </Box>
            </HStack>
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

            <HStack spacing={2}>
              <MdPhone color="#48742c" size="18px" />
              <Text fontSize="sm" color="gray.700">
                {ponto.telefone}
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
                  bg={getMaterialColor(material)}
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

          <Box
            bg="gray.50"
            p={3}
            borderRadius="lg"
            border="1px solid"
            borderColor="gray.200"
          >
            <SimpleGrid columns={2} spacing={3}>
              <Box textAlign="center">
                <Text fontSize="lg" fontWeight="bold" color="#48742c">
                  {ponto.coletasRealizadas}
                </Text>
                <Text fontSize="xs" color="gray.600">
                  Coletas
                </Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="lg" fontWeight="bold" color="#48742c">
                  {ponto.avaliacaoMedia} ⭐
                </Text>
                <Text fontSize="xs" color="gray.600">
                  Avaliação
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Text fontSize="xs" color="gray.600" noOfLines={2}>
            {ponto.descricao}
          </Text>

          <VStack spacing={2}>
            <HStack w="full" spacing={2}>
              <Button
                leftIcon={<MdEdit />}
                size="sm"
                color="#48742c"
                colorScheme="blue"
                variant="outline"
                flex={1}
                onClick={() => onEdit(ponto)}
              >
                Editar
              </Button>
              <Button
                leftIcon={ponto.ativo ? <MdToggleOff /> : <MdToggleOn />}
                size="sm"
                color="#48742c"
                colorScheme={ponto.ativo ? "red" : "green"}
                variant="outline"
                flex={1}
                onClick={() => onToggleStatus(ponto)}
              >
                {ponto.ativo ? "Desativar" : "Ativar"}
              </Button>
            </HStack>
            <Button
              leftIcon={<MdDelete />}
              size="sm"
              color="#48742c"
              colorScheme="red"
              variant="ghost"
              w="full"
              onClick={() => onDelete(ponto)}
            >
              Excluir Ponto
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

const ModalPontoColeta = ({ isOpen, onClose, ponto, onSave, isEdit = false }) => {
  const [formData, setFormData] = useState({
    nome: ponto?.nome || "",
    endereco: ponto?.endereco || "",
    cidade: ponto?.cidade || "Chapecó",
    telefone: ponto?.telefone || "",
    horarioFuncionamento: ponto?.horarioFuncionamento || "",
    materiaisAceitos: ponto?.materiaisAceitos || [],
    descricao: ponto?.descricao || "",
    capacidadeMaxima: ponto?.capacidadeMaxima || "",
    ativo: ponto?.ativo ?? true
  });

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const toggleMaterial = (material) => {
    setFormData(prev => ({
      ...prev,
      materiaisAceitos: prev.materiaisAceitos.includes(material)
        ? prev.materiaisAceitos.filter(m => m !== material)
        : [...prev.materiaisAceitos, material]
    }));
  };

  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="blackAlpha.600"
      zIndex="1000"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
      <Box
        bg="white"
        borderRadius="2xl"
        boxShadow="2xl"
        maxW="2xl"
        w="full"
        maxH="90vh"
        overflow="auto"
        position="relative"
      >
        {/* Header */}
        <Box
          bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
          p={6}
          borderTopRadius="2xl"
        >
          <HStack justify="space-between" align="center">
            <Heading size="lg" color="white">
              {isEdit ? "Editar Ponto de Coleta" : "Novo Ponto de Coleta"}
            </Heading>
            <IconButton
              aria-label="Fechar modal"
              icon={<MdCancel />}
              variant="ghost"
              color="white"
              size="lg"
              onClick={onClose}
              _hover={{ bg: "whiteAlpha.200" }}
            />
          </HStack>
        </Box>

        {/* Body */}
        <Box p={6}>
          <VStack spacing={6} align="stretch">
            {/* Nome do Ponto */}
            <Box>
              <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                Nome do Ponto *
              </Text>
              <Input
                value={formData.nome}
                onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                placeholder="Digite o nome do ponto de coleta"
                border="2px solid"
                borderColor="#48742c"
                _focus={{ borderColor: "#48742c", boxShadow: "0 0 0 1px #48742c" }}
              />
            </Box>

            {/* Endereço */}
            <Box>
              <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                Endereço *
              </Text>
              <Input
                value={formData.endereco}
                onChange={(e) => setFormData(prev => ({ ...prev, endereco: e.target.value }))}
                placeholder="Digite o endereço completo"
                border="2px solid"
                borderColor="#48742c"
                _focus={{ borderColor: "#48742c", boxShadow: "0 0 0 1px #48742c" }}
              />
            </Box>

            <HStack spacing={4}>
              {/* Cidade */}
              <Box flex={1}>
                <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                  Cidade *
                </Text>
                <Box position="relative">
                  <select
                    value={formData.cidade}
                    onChange={(e) => setFormData(prev => ({ ...prev, cidade: e.target.value }))}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "2px solid #48742c",
                      borderRadius: "6px",
                      backgroundColor: "white",
                      color: "#2d5016",
                      fontSize: "14px"
                    }}
                  >
                    <option value="Chapecó">Chapecó</option>
                    <option value="Xanxerê">Xanxerê</option>
                    <option value="Concórdia">Concórdia</option>
                    <option value="Xaxim">Xaxim</option>
                  </select>
                </Box>
              </Box>

              {/* Telefone */}
              <Box flex={1}>
                <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                  Telefone *
                </Text>
                <Input
                  value={formData.telefone}
                  onChange={(e) => setFormData(prev => ({ ...prev, telefone: e.target.value }))}
                  placeholder="(49) 99999-0000"
                  border="2px solid"
                  borderColor="#48742c"
                  _focus={{ borderColor: "#48742c", boxShadow: "0 0 0 1px #48742c" }}
                />
              </Box>
            </HStack>

            {/* Horário de Funcionamento */}
            <Box>
              <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                Horário de Funcionamento *
              </Text>
              <Input
                value={formData.horarioFuncionamento}
                onChange={(e) => setFormData(prev => ({ ...prev, horarioFuncionamento: e.target.value }))}
                placeholder="Seg-Sex: 8h às 18h"
                border="2px solid"
                borderColor="#48742c"
                _focus={{ borderColor: "#48742c", boxShadow: "0 0 0 1px #48742c" }}
              />
            </Box>

            {/* Capacidade Máxima */}
            <Box>
              <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                Capacidade Máxima
              </Text>
              <Input
                value={formData.capacidadeMaxima}
                onChange={(e) => setFormData(prev => ({ ...prev, capacidadeMaxima: e.target.value }))}
                placeholder="500 kg/mês"
                border="2px solid"
                borderColor="#48742c"
                _focus={{ borderColor: "#48742c", boxShadow: "0 0 0 1px #48742c" }}
              />
            </Box>

            {/* Materiais Aceitos */}
            <Box>
              <Text mb={3} fontWeight="medium" color="#2d5016" fontSize="sm">
                Materiais Aceitos *
              </Text>
              <Flex wrap="wrap" gap={2}>
                {tiposMateriais.map(material => (
                  <Button
                    key={material}
                    size="sm"
                    colorScheme="green"
                    variant={formData.materiaisAceitos.includes(material) ? "solid" : "outline"}
                    onClick={() => toggleMaterial(material)}
                    _hover={{
                      bg: formData.materiaisAceitos.includes(material) ? "#48742c" : "gray.100"
                    }}
                  >
                    {material}
                  </Button>
                ))}
              </Flex>
            </Box>

            {/* Descrição */}
            <Box>
              <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                Descrição
              </Text>
              <textarea
                value={formData.descricao}
                onChange={(e) => setFormData(prev => ({ ...prev, descricao: e.target.value }))}
                placeholder="Descrição detalhada do ponto de coleta"
                rows={3}
                bg="white"
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "2px solid #48742c",
                  borderRadius: "6px",
                  resize: "vertical",
                  fontFamily: "inherit",
                  fontSize: "14px"
                }}
              />
            </Box>

            {/* Status Ativo (apenas para edição) */}
            {isEdit && (
              <Box>
                <HStack justify="space-between" align="center">
                  <Text fontWeight="medium" color="#2d5016" fontSize="sm">
                    Ponto ativo
                  </Text>
                  <Button
                    size="sm"
                    colorScheme={formData.ativo ? "green" : "gray"}
                    variant={formData.ativo ? "solid" : "outline"}
                    onClick={() => setFormData(prev => ({ ...prev, ativo: !prev.ativo }))}
                    leftIcon={formData.ativo ? <MdToggleOn /> : <MdToggleOff />}
                  >
                    {formData.ativo ? "Ativo" : "Inativo"}
                  </Button>
                </HStack>
              </Box>
            )}

            {/* Botões de Ação */}
            <HStack spacing={3} pt={4}>
              <Button
                leftIcon={<MdSave />}
                bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                color="white"
                flex={1}
                onClick={handleSave}
                isDisabled={!formData.nome || !formData.endereco || !formData.telefone || formData.materiaisAceitos.length === 0}
                _hover={{
                  bg: "linear-gradient(135deg, #3a5e23 0%, #48742c 100%)"
                }}
              >
                Salvar
              </Button>
              <Button
                leftIcon={<MdCancel />}
                variant="outline"
                borderColor="#48742c"
                color="#48742c"
                flex={1}
                onClick={onClose}
                _hover={{ bg: "gray.100" }}
              >
                Cancelar
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>  );
};

export default function PaginaPontosColetaEmpresa() {
  const roteador = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [showToast, setShowToast] = useState(false);
  
  const [pontosColeta, setPontosColeta] = useState(pontosColetaEmpresaMock);
  const [pontoEditando, setPontoEditando] = useState(null);
  const [filtros, setFiltros] = useState({
    busca: "",
    status: "todos" // todos, ativo, inativo
  });

  const showToastMessage = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const tratarVoltar = () => {
    roteador.back();
  };

  const tratarIrParaPerfil = () => {
    roteador.push("/empresa/perfil");
  };
  const tratarNovoPonto = () => {
    setPontoEditando(null);
    setIsModalOpen(true);
  };

  const tratarEditarPonto = (ponto) => {
    setPontoEditando(ponto);
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
    setPontoEditando(null);
  };  const tratarSalvarPonto = (dadosPonto) => {
    if (pontoEditando) {
      // Editar ponto existente
      setPontosColeta(prev => prev.map(p => 
        p.id === pontoEditando.id 
          ? { ...p, ...dadosPonto }
          : p
      ));
      showToastMessage("Ponto atualizado com sucesso!", "success");
    } else {
      // Criar novo ponto
      const novoPonto = {
        ...dadosPonto,
        id: Date.now(),
        coletasRealizadas: 0,
        avaliacaoMedia: 0,
        coordenadas: { lat: -27.0954, lng: -52.6189 }
      };
      setPontosColeta(prev => [...prev, novoPonto]);
      showToastMessage("Novo ponto criado com sucesso!", "success");
    }
    fecharModal();
  };
  const tratarAlternarStatus = (ponto) => {
    setPontosColeta(prev => prev.map(p => 
      p.id === ponto.id 
        ? { ...p, ativo: !p.ativo }
        : p
    ));
    showToastMessage(
      `Ponto ${ponto.ativo ? "desativado" : "ativado"} com sucesso!`,
      ponto.ativo ? "warning" : "success"
    );
  };
  const tratarExcluirPonto = (ponto) => {
    if (window.confirm(`Tem certeza que deseja excluir o ponto "${ponto.nome}"?`)) {
      setPontosColeta(prev => prev.filter(p => p.id !== ponto.id));
      showToastMessage(`Ponto "${ponto.nome}" excluído com sucesso!`, "error");
    }
  };
  // Filtros aplicados diretamente
  const pontosFiltrados = pontosColeta.filter(ponto => {
    const passaBusca = filtros.busca === "" || 
      ponto.nome.toLowerCase().includes(filtros.busca.toLowerCase()) ||
      ponto.endereco.toLowerCase().includes(filtros.busca.toLowerCase()) ||
      ponto.cidade.toLowerCase().includes(filtros.busca.toLowerCase());
    
    const passaStatus = filtros.status === "todos" ||
      (filtros.status === "ativo" && ponto.ativo) ||
      (filtros.status === "inativo" && !ponto.ativo);
    
    return passaBusca && passaStatus;
  });

  const estatisticas = {
    total: pontosColeta.length,
    ativos: pontosColeta.filter(p => p.ativo).length,
    inativos: pontosColeta.filter(p => !p.ativo).length,
    totalColetas: pontosColeta.reduce((acc, p) => acc + p.coletasRealizadas, 0)
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
            Meus Pontos de Coleta
          </Text>
          <Text
            color="whiteAlpha.800"
            fontSize={{ base: "xs", md: "sm" }}
            textAlign="center"
          >
            Gerencie seus pontos de coleta
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
          {/* Estatísticas */}
          <Box
            bg="white"
            borderRadius="2xl"
            p={6}
            boxShadow="lg"
          >
            <VStack spacing={4} align="stretch">
              <Heading size="md" color="#2d5016" textAlign="center">
                Resumo dos Pontos de Coleta
              </Heading>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
                <Box textAlign="center" p={4} bg="blue.50" borderRadius="lg">
                  <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                    {estatisticas.total}
                  </Text>
                  <Text fontSize="sm" color="blue.600">
                    Total de Pontos
                  </Text>
                </Box>
                <Box textAlign="center" p={4} bg="green.50" borderRadius="lg">
                  <Text fontSize="2xl" fontWeight="bold" color="green.600">
                    {estatisticas.ativos}
                  </Text>
                  <Text fontSize="sm" color="green.600">
                    Pontos Ativos
                  </Text>
                </Box>
                <Box textAlign="center" p={4} bg="red.50" borderRadius="lg">
                  <Text fontSize="2xl" fontWeight="bold" color="red.600">
                    {estatisticas.inativos}
                  </Text>
                  <Text fontSize="sm" color="red.600">
                    Pontos Inativos
                  </Text>
                </Box>
                <Box textAlign="center" p={4} bg="purple.50" borderRadius="lg">
                  <Text fontSize="2xl" fontWeight="bold" color="purple.600">
                    {estatisticas.totalColetas}
                  </Text>
                  <Text fontSize="sm" color="purple.600">
                    Total de Coletas
                  </Text>
                </Box>
              </SimpleGrid>
            </VStack>
          </Box>

          {/* Filtros e Ações */}
          <Box
            bg="white"
            borderRadius="2xl"
            p={6}
            boxShadow="lg"
          >
            <VStack spacing={4} align="stretch">
              <HStack justify="space-between" align="center" flexWrap="wrap" gap={4}>
                <Heading size="md" color="#2d5016">
                  Gerenciar Pontos
                </Heading>
                <Button
                  leftIcon={<MdAdd />}
                  colorScheme="green"
                  onClick={tratarNovoPonto}
                >
                  Novo Ponto
                </Button>
              </HStack>

              <HStack spacing={4} align="end" flexWrap="wrap">
                <Box flex={1} minW="200px">
                  <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                    Buscar pontos
                  </Text>
                  <HStack 
                    bg="white" 
                    border="2px solid" 
                    borderColor="#48742c" 
                    borderRadius="lg" 
                    _focusWithin={{
                      borderColor: "#48742c",
                      boxShadow: "0 0 0 1px #48742c"
                    }}
                    px={3}
                  >
                    <MdSearch color="#48742c" />
                    <Input
                      placeholder="Nome, endereço ou cidade..."
                      value={filtros.busca}
                      bg="white"
                      onChange={(e) => setFiltros(prev => ({ ...prev, busca: e.target.value }))}
                      variant="unstyled"
                      flex={1}
                      py={2}
                    />
                  </HStack>
                </Box>                <Box>
                  <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                    Status
                  </Text>
                  <select
                    value={filtros.status}
                    onChange={(e) => setFiltros(prev => ({ ...prev, status: e.target.value }))}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "2px solid #48742c",
                      borderRadius: "6px",
                      backgroundColor: "white",
                      color: "#2d5016",
                      fontSize: "14px"
                    }}
                  >
                    <option value="todos">Todos</option>
                    <option value="ativo">Ativos</option>
                    <option value="inativo">Inativos</option>
                  </select>
                </Box>
              </HStack>
            </VStack>
          </Box>

          {/* Lista de Pontos */}
          <Box>
            <HStack justify="space-between" align="center" mb={6}>
              <Heading size="lg" color="#2d5016">
                Pontos de Coleta
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
                <Text color="gray.600" mb={4}>
                  {pontosColeta.length === 0 
                    ? "Você ainda não possui pontos de coleta cadastrados."
                    : "Tente ajustar os filtros para encontrar seus pontos."
                  }
                </Text>
                {pontosColeta.length === 0 && (
                  <Button
                    leftIcon={<MdAdd />}
                    colorScheme="green"
                    onClick={tratarNovoPonto}
                  >
                    Criar Primeiro Ponto
                  </Button>
                )}
              </Box>
            ) : (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {pontosFiltrados.map((ponto) => (
                  <CardPontoColeta 
                    key={ponto.id} 
                    ponto={ponto}
                    onEdit={tratarEditarPonto}
                    onToggleStatus={tratarAlternarStatus}
                    onDelete={tratarExcluirPonto}
                  />
                ))}
              </SimpleGrid>
            )}
          </Box>
        </VStack>
      </Container>      {/* Modal de Cadastro/Edição */}
      <ModalPontoColeta
        isOpen={isModalOpen}
        onClose={fecharModal}
        ponto={pontoEditando}
        onSave={tratarSalvarPonto}
        isEdit={!!pontoEditando}
      />

      {/* Toast Customizado */}
      {showToast && (
        <Box
          position="fixed"
          top="20px"
          right="20px"
          bg={toastType === "success" ? "green.500" : 
              toastType === "error" ? "red.500" : 
              toastType === "warning" ? "orange.500" : "blue.500"}
          color="white"
          px={4}
          py={3}
          borderRadius="lg"
          boxShadow="lg"
          zIndex="9999"
          maxW="400px"
          animation="slideIn 0.3s ease-out"
        >
          <Text fontSize="sm" fontWeight="medium">
            {toastMessage}
          </Text>
        </Box>
      )}
    </Flex>
  );
}
