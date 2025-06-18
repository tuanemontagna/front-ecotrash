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
  SimpleGrid,
} from "@chakra-ui/react";
import {PasswordInput} from "@/components/ui/password-input"
import { IoMdArrowBack } from "react-icons/io";
import { 
  MdEdit, 
  MdSave, 
  MdCancel, 
  MdRecycling, 
  MdLocationOn, 
  MdEmail, 
  MdPhone, 
  MdNotifications,
  MdSecurity,
  MdHelp,
  MdLogout,
  MdEco,
  MdLock
} from "react-icons/md";
import { FaAward, FaTrophy } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

const mockUserData = {
  nome: "Tuane M",
  email: "tuane@exemplo.com",
  telefone: "(49) 99999-9999",
  endereco: "Rua das Flores, 123 - Chapecó, SC",
  dataCadastro: "2024-01-15",
  avatar: "",
  estatisticas: {
    coletasRealizadas: 12,
    itensReciclados: 45,
    pontosGanhos: 1250,
    impactoAmbiental: "2.3 kg CO₂ evitados"
  },
  configuracoes: {
    notificacoesPush: true,
    notificacoesEmail: true,
    compartilharEstatisticas: false
  }
};

export default function PerfilUsuario() {
  const roteador = useRouter();
  const [dadosUsuario, setDadosUsuario] = useState(mockUserData);
  const [editando, setEditando] = useState(false);
  const [dadosEdicao, setDadosEdicao] = useState({});
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [showToast, setShowToast] = useState(false);
  
  const [mostrandoTrocarSenha, setMostrandoTrocarSenha] = useState(false);
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenhaAtual, setMostrarSenhaAtual] = useState(false);
  const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  const tratarVoltar = () => {
    roteador.back();
  };

  const iniciarEdicao = () => {
    setDadosEdicao({
      nome: dadosUsuario.nome,
      email: dadosUsuario.email,
      telefone: dadosUsuario.telefone,
      endereco: dadosUsuario.endereco
    });
    setEditando(true);
  };

  const cancelarEdicao = () => {
    setDadosEdicao({});
    setEditando(false);
  };

  const salvarEdicao = () => {
    if (!dadosEdicao.nome || !dadosEdicao.email || !dadosEdicao.telefone) {
      showToastMessage("Por favor, preencha todos os campos obrigatórios.", "error");
      return;
    }

    setDadosUsuario(prev => ({
      ...prev,
      ...dadosEdicao
    }));
    setEditando(false);
    setDadosEdicao({});
    showToastMessage("Perfil atualizado com sucesso!", "success");
  };

  const alterarConfiguracao = (config, valor) => {
    setDadosUsuario(prev => ({
      ...prev,
      configuracoes: {
        ...prev.configuracoes,
        [config]: valor
      }
    }));
  };

  const showToastMessage = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  const handleLogout = () => {
    roteador.push("/login");
  };

  const abrirTrocarSenha = () => {
    setMostrandoTrocarSenha(true);
    setSenhaAtual("");
    setNovaSenha("");
    setConfirmarSenha("");
  };

  const cancelarTrocarSenha = () => {
    setMostrandoTrocarSenha(false);
    setSenhaAtual("");
    setNovaSenha("");
    setConfirmarSenha("");
  };

  const salvarNovaSenha = () => {
    if (!senhaAtual || !novaSenha || !confirmarSenha) {
      showToastMessage("Por favor, preencha todos os campos.", "error");
      return;
    }

    if (novaSenha.length < 6) {
      showToastMessage("A nova senha deve ter pelo menos 6 caracteres.", "error");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      showToastMessage("A nova senha e a confirmação não coincidem.", "error");
      return;
    }

    if (senhaAtual !== "senha123") { 
      showToastMessage("Senha atual incorreta.", "error");
      return;
    }

    setMostrandoTrocarSenha(false);
    setSenhaAtual("");
    setNovaSenha("");
    setConfirmarSenha("");
    showToastMessage("Senha alterada com sucesso!", "success");
  };

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

      {/* Header */}
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
            Meu Perfil
          </Text>
        </VStack>
        {!editando && (
          <IconButton
            aria-label="Editar perfil"
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
            onClick={iniciarEdicao}
          >
            <MdEdit />
          </IconButton>
        )}
      </Box>

      <Container maxW="container.lg" py={{ base: 8, md: 12 }} flex="1">
        <VStack spacing={{ base: 8, md: 10 }} align="stretch">
          
          {/* Profile Card */}
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
              p={6}
              textAlign="center"
            >
              <VStack spacing={4}>
                <Box
                  width="128px"
                  height="128px"
                  borderRadius="50%"
                  bg="#a8d995"
                  color="#2d5016"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="3xl"
                  fontWeight="bold"
                  margin="0 auto"
                >
                  {dadosUsuario.nome.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </Box>
                <VStack spacing={1}>
                  <Heading size="lg" color="white">
                    {dadosUsuario.nome}
                  </Heading>
                  <Text color="whiteAlpha.900" fontSize="sm">
                    Membro desde {new Date(dadosUsuario.dataCadastro).toLocaleDateString('pt-BR')}
                  </Text>
                </VStack>
              </VStack>
            </Box>

            <Box p={6}>
              <VStack spacing={6}>
                
                {/* Personal Information */}
                <VStack spacing={4} w="full" align="stretch">
                  <Heading size="md" color="#2d5016">
                    Informações Pessoais
                  </Heading>
                  
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <Box>
                      <Text color="#2d5016" fontWeight="semibold" mb={2}>Nome *</Text>
                      {editando ? (
                        <Input
                          color="#48742c"
                          value={dadosEdicao.nome || ""}
                          onChange={(e) => setDadosEdicao(prev => ({ ...prev, nome: e.target.value }))}
                          focusBorderColor="#48742c"
                        />
                      ) : (
                        <Text color="gray.600" p={3} bg="gray.50" borderRadius="md">
                          {dadosUsuario.nome}
                        </Text>
                      )}
                    </Box>
                    
                    <Box>
                      <Text color="#2d5016" fontWeight="semibold" mb={2}>E-mail *</Text>
                      {editando ? (
                        <Input
                          type="email"
                          color="#48742c"
                          value={dadosEdicao.email || ""}
                          onChange={(e) => setDadosEdicao(prev => ({ ...prev, email: e.target.value }))}
                          focusBorderColor="#48742c"
                        />
                      ) : (
                        <HStack p={3} bg="gray.50" borderRadius="md">
                          <MdEmail color="#48742c" />
                          <Text color="gray.600">{dadosUsuario.email}</Text>
                        </HStack>
                      )}
                    </Box>
                    
                    <Box>
                      <Text color="#2d5016" fontWeight="semibold" mb={2}>Telefone *</Text>
                      {editando ? (
                        <Input
                          color="#48742c"
                          value={dadosEdicao.telefone || ""}
                          onChange={(e) => setDadosEdicao(prev => ({ ...prev, telefone: e.target.value }))}
                          focusBorderColor="#48742c"
                        />
                      ) : (
                        <HStack p={3} bg="gray.50" borderRadius="md">
                          <MdPhone color="#48742c" />
                          <Text color="gray.600">{dadosUsuario.telefone}</Text>
                        </HStack>
                      )}
                    </Box>
                    
                    <Box>
                      <Text color="#2d5016" fontWeight="semibold" mb={2}>Endereço</Text>
                      {editando ? (
                        <Input
                          color="#48742c"
                          value={dadosEdicao.endereco || ""}
                          onChange={(e) => setDadosEdicao(prev => ({ ...prev, endereco: e.target.value }))}
                          focusBorderColor="#48742c"
                        />
                      ) : (
                        <HStack p={3} bg="gray.50" borderRadius="md">
                          <MdLocationOn color="#48742c" />
                          <Text color="gray.600">{dadosUsuario.endereco}</Text>
                        </HStack>
                      )}
                    </Box>
                  </SimpleGrid>

                  {editando && (
                    <HStack spacing={4} justify="flex-end">
                      <Button
                        variant="outline"
                        color="#48742c"
                        colorScheme="gray"
                        leftIcon={<MdCancel />}
                        onClick={cancelarEdicao}
                      >
                        Cancelar
                      </Button>
                      <Button
                        bg="#48742c"
                        color="white"
                        _hover={{ bg: "#3a5e23" }}
                        leftIcon={<MdSave />}
                        onClick={salvarEdicao}
                      >
                        Salvar
                      </Button>
                    </HStack>
                  )}
                </VStack>
              </VStack>
            </Box>
          </Box>

          {/* Statistics */}
          <Box
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            p={6}
          >
            <VStack spacing={6} align="stretch">
              <Heading size="md" color="#2d5016">
                Suas Estatísticas
              </Heading>
              
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
                <Box textAlign="center">
                  <Box mb={2}>
                    <MdRecycling size="32px" color="#48742c" style={{ margin: "0 auto" }} />
                  </Box>
                  <Text fontSize="2xl" fontWeight="bold" color="#2d5016">
                    {dadosUsuario.estatisticas.coletasRealizadas}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Coletas Realizadas
                  </Text>
                </Box>
                
                <Box textAlign="center">
                  <Box mb={2}>
                    <MdEco size="32px" color="#48742c" style={{ margin: "0 auto" }} />
                  </Box>
                  <Text fontSize="2xl" fontWeight="bold" color="#2d5016">
                    {dadosUsuario.estatisticas.itensReciclados}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Itens Reciclados
                  </Text>
                </Box>
                
                <Box textAlign="center">
                  <Box mb={2}>
                    <FaTrophy size="32px" color="#48742c" style={{ margin: "0 auto" }} />
                  </Box>
                  <Text fontSize="2xl" fontWeight="bold" color="#2d5016">
                    {dadosUsuario.estatisticas.pontosGanhos}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Pontos Ganhos
                  </Text>
                </Box>
                
                <Box textAlign="center">
                  <Box mb={2}>
                    <FaAward size="32px" color="#48742c" style={{ margin: "0 auto" }} />
                  </Box>
                  <Text fontSize="md" fontWeight="bold" color="#2d5016">
                    {dadosUsuario.estatisticas.impactoAmbiental}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Impacto Ambiental
                  </Text>
                </Box>
              </SimpleGrid>
            </VStack>
          </Box>          {/* Settings */}
          <Box
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            p={6}
          >
            <VStack spacing={6} align="stretch">
              <Heading size="md" color="#2d5016">
                Configurações
              </Heading>
              
              <VStack spacing={4} align="stretch">
                <Flex justify="space-between" align="center" p={3} bg="gray.50" borderRadius="md">
                  <HStack>
                    <MdNotifications color="#48742c" />
                    <Text color="gray.700">Notificações Push</Text>
                  </HStack>
                  <label style={{ position: "relative", display: "inline-block", width: "48px", height: "28px" }}>
                    <input
                      type="checkbox"
                      checked={dadosUsuario.configuracoes.notificacoesPush}
                      onChange={(e) => alterarConfiguracao('notificacoesPush', e.target.checked)}
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        cursor: "pointer",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: dadosUsuario.configuracoes.notificacoesPush ? "#38a169" : "#ccc",
                        borderRadius: "24px",
                        transition: "0.3s",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          content: "",
                          height: "20px",
                          width: "20px",
                          left: dadosUsuario.configuracoes.notificacoesPush ? "24px" : "4px",
                          bottom: "4px",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          transition: "0.3s",
                        }}
                      />
                    </span>
                  </label>
                </Flex>
                
                <Flex justify="space-between" align="center" p={3} bg="gray.50" borderRadius="md">
                  <HStack>
                    <MdEmail color="#48742c" />
                    <Text color="gray.700">Notificações por E-mail</Text>
                  </HStack>
                  <label style={{ position: "relative", display: "inline-block", width: "48px", height: "28px" }}>
                    <input
                      type="checkbox"
                      checked={dadosUsuario.configuracoes.notificacoesEmail}
                      onChange={(e) => alterarConfiguracao('notificacoesEmail', e.target.checked)}
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        cursor: "pointer",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: dadosUsuario.configuracoes.notificacoesEmail ? "#38a169" : "#ccc",
                        borderRadius: "24px",
                        transition: "0.3s",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          content: "",
                          height: "20px",
                          width: "20px",
                          left: dadosUsuario.configuracoes.notificacoesEmail ? "24px" : "4px",
                          bottom: "4px",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          transition: "0.3s",
                        }}
                      />
                    </span>
                  </label>
                </Flex>
                
                <Flex justify="space-between" align="center" p={3} bg="gray.50" borderRadius="md">
                  <HStack>
                    <MdSecurity color="#48742c" />
                    <Text color="gray.700">Compartilhar Estatísticas</Text>
                  </HStack>
                  <label style={{ position: "relative", display: "inline-block", width: "48px", height: "28px" }}>
                    <input
                      type="checkbox"
                      checked={dadosUsuario.configuracoes.compartilharEstatisticas}
                      onChange={(e) => alterarConfiguracao('compartilharEstatisticas', e.target.checked)}
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        cursor: "pointer",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: dadosUsuario.configuracoes.compartilharEstatisticas ? "#38a169" : "#ccc",
                        borderRadius: "24px",
                        transition: "0.3s",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          content: "",
                          height: "20px",
                          width: "20px",
                          left: dadosUsuario.configuracoes.compartilharEstatisticas ? "24px" : "4px",
                          bottom: "4px",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          transition: "0.3s",
                        }}
                      />
                    </span>
                  </label>
                </Flex>
              </VStack>
            </VStack>
          </Box>

          {/* Change Password */}
          <Box
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            p={6}
          >            <VStack spacing={6} align="stretch">
              <HStack spacing={3}>
                <MdLock color="#48742c" size="24px" />
                <Heading size="md" color="#2d5016">
                  Segurança
                </Heading>
              </HStack>
              
              {!mostrandoTrocarSenha ? (
                <Box textAlign="center" py={4}>
                  <Text color="gray.600" mb={4}>
                    Mantenha sua conta segura alterando sua senha regularmente
                  </Text>
                  <Button
                    variant="outline"
                    borderColor="#48742c"
                    color="#48742c"
                    size="lg"
                    leftIcon={<MdLock />}
                    _hover={{ bg: "#48742c", color: "white", transform: "translateY(-2px)" }}
                    transition="all 0.2s"
                    px={8}
                    onClick={abrirTrocarSenha}
                  >
                    Trocar Senha
                  </Button>
                </Box>              ) : (
                <Box>
                  <Text color="gray.600" mb={6} textAlign="center">
                    Digite sua senha atual e escolha uma nova senha segura
                  </Text>
                  
                  <VStack spacing={6} align="stretch">
                    <Box>
                      <Text color="#2d5016" fontWeight="semibold" mb={3} fontSize="sm">
                        SENHA ATUAL *
                      </Text>
                      <Box
                        border="2px solid"
                        borderColor="gray.200"
                        borderRadius="lg"
                        _focusWithin={{ borderColor: "#48742c", boxShadow: "0 0 0 1px #48742c" }}
                        transition="all 0.2s"
                      >
                        <HStack spacing={0}>
                          <PasswordInput
                            type={mostrarSenhaAtual ? "text" : "password"}
                            value={senhaAtual}
                            color="#48742c"
                            onChange={(e) => setSenhaAtual(e.target.value)}
                            placeholder="Digite sua senha atual"
                            border="none"
                            _focus={{ boxShadow: "none" }}
                            flex="1"
                            bg="transparent"
                          />
                        </HStack>
                      </Box>
                    </Box>

                    <Box>
                      <Text color="#2d5016" fontWeight="semibold" mb={3} fontSize="sm">
                        NOVA SENHA *
                      </Text>
                      <Box
                        border="2px solid"
                        borderColor="gray.200"
                        borderRadius="lg"
                        _focusWithin={{ borderColor: "#48742c", boxShadow: "0 0 0 1px #48742c" }}
                        transition="all 0.2s"
                      >
                        <HStack spacing={0}>
                          <PasswordInput
                            type={mostrarNovaSenha ? "text" : "password"}
                            value={novaSenha}
                            color="#48742c"
                            onChange={(e) => setNovaSenha(e.target.value)}
                            placeholder="Digite sua nova senha (mín. 6 caracteres)"
                            border="none"
                            _focus={{ boxShadow: "none" }}
                            flex="1"
                            bg="transparent"
                          />
                        </HStack>
                      </Box>
                    </Box>

                    <Box>
                      <Text color="#2d5016" fontWeight="semibold" mb={3} fontSize="sm">
                        CONFIRMAR NOVA SENHA *
                      </Text>
                      <Box
                        border="2px solid"
                        borderColor="gray.200"
                        borderRadius="lg"
                        _focusWithin={{ borderColor: "#48742c", boxShadow: "0 0 0 1px #48742c" }}
                        transition="all 0.2s"
                      >
                        <HStack spacing={0}>
                          <PasswordInput
                            type={mostrarConfirmarSenha ? "text" : "password"}
                            value={confirmarSenha}
                            color="#48742c"
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                            placeholder="Confirme sua nova senha"
                            border="none"
                            _focus={{ boxShadow: "none" }}
                            flex="1"
                            bg="transparent"
                          />
                        </HStack>
                      </Box>
                    </Box>

                    <HStack spacing={4} justify="center" pt={4}>
                      <Button
                        variant="outline"
                        color="#48742c"
                        borderColor="#48742c"
                        leftIcon={<MdCancel />}
                        onClick={cancelarTrocarSenha}
                        _hover={{ bg: "gray.50" }}
                        px={6}
                      >
                        Cancelar
                      </Button>
                      <Button
                        bg="#48742c"
                        color="white"
                        _hover={{ bg: "#3a5e23", transform: "translateY(-2px)" }}
                        leftIcon={<MdSave />}
                        onClick={salvarNovaSenha}
                        transition="all 0.2s"
                        px={6}
                      >
                        Salvar Nova Senha
                      </Button>
                    </HStack>
                  </VStack>
                </Box>
              )}
            </VStack>
          </Box>          {/* Action Buttons */}
          <HStack spacing={4} justify="center" flexWrap="wrap">
            <Button
              variant="outline"
              borderColor="#48742c"
              color="#48742c"
              size="lg"
              minW="200px"
              leftIcon={<MdHelp />}
              _hover={{ bg: "#48742c", color: "white" }}
            >
              Central de Ajuda
            </Button>
            
            <Button
              bg="#e53e3e"
              color="white"
              size="lg"
              minW="200px"
              leftIcon={<MdLogout />}
              _hover={{ bg: "#c53030" }}
              onClick={handleLogout}
            >
              Sair da Conta
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Flex>
  );
}
