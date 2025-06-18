"use client";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
  Heading,
  Input,
  Image,
  Container,
  Grid,
  GridItem,
  Stack
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaginaCriarConta() {
  const roteador = useRouter();
  
  const [tipoUsuario, setTipoUsuario] = useState("cliente");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    nomeEmpresa: "",
    cnpj: "",
    endereco: ""
  });

  const [mensagem, setMensagem] = useState("");

  const tratarMudancaInput = (campo, valor) => {
    setFormData(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const tratarSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.senha || !formData.confirmarSenha || !formData.telefone) {
      setMensagem("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (tipoUsuario === "empresa" && (!formData.nomeEmpresa || !formData.cnpj || !formData.endereco)) {
      setMensagem("Por favor, preencha todos os campos da empresa.");
      return;
    }

    if (!formData.email.includes("@")) {
      setMensagem("Por favor, insira um email válido.");
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      setMensagem("As senhas não coincidem.");
      return;
    }

    if (formData.senha.length < 6) {
      setMensagem("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setMensagem("Conta criada com sucesso!");
    
    setTimeout(() => {
      roteador.push("/");
    }, 2000);
  };

  const voltarParaLogin = () => {
    roteador.push("/");
  };

  return (
    <Flex minH="100vh" bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)">
      <Grid templateColumns="1fr 1fr" w="full" minH="100vh">
        {/* Lado esquerdo - Informações */}
        <GridItem
          bg="linear-gradient(135deg, #48742c 0%, #3a5e23 100%)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={12}
        >
          <VStack spacing={8} textAlign="center" maxW="lg">
            <Heading
            size="2xl"
            color="white"
            fontWeight="bold"
            letterSpacing="wide"
            >
            <Image src="images/ecotrash.png" sizes= "25px"/>
            </Heading>
            <Image
              src="/images/logo.png"
              alt="EcoTrash Logo"
              boxSize="300px"
              objectFit="contain"
            />
            <VStack spacing={4}>
              <Text
                color="whiteAlpha.900"
                fontSize="xl"
                fontWeight="medium"
                textAlign="center"
                lineHeight="1.6"
              >
                Junte-se à revolução sustentável!
              </Text>
              <Text
                color="whiteAlpha.80"
                fontSize="lg"
                textAlign="center"
                lineHeight="1.6"
                mt={4}
              >
                Crie sua conta e faça parte da comunidade que está transformando o futuro do lixo eletrônico.
              </Text>
            </VStack>
          </VStack>
        </GridItem>

        {/* Lado direito - Formulário */}
        <GridItem
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={8}
          bg="white"
          overflow="auto"
        >
          <Container maxW="md" w="full">
            <VStack spacing={6} align="stretch">
              <VStack spacing={4} textAlign="center">
                <Heading
                  size="xl"
                  color="#2d5016"
                  fontWeight="bold"
                >
                  Criar Conta
                </Heading>
                <Text
                  color="gray.600"
                  fontSize="md"
                >
                  Preencha os dados para criar sua conta
                </Text>
              </VStack>

              {/* Tipo de Usuário */}
              <Box>
                <Text
                  mb={3}
                  fontWeight="semibold"
                  color="#2d5016"
                  fontSize="md"
                >
                  Tipo de Conta *
                </Text>
                <HStack spacing={4}>
                  <Button
                    flex={1}
                    variant={tipoUsuario === "cliente" ? "solid" : "outline"}
                    bg={tipoUsuario === "cliente" ? "#48742c" : "transparent"}
                    color={tipoUsuario === "cliente" ? "white" : "#48742c"}
                    borderColor="#48742c"
                    borderWidth="2px"
                    py={6}
                    borderRadius="lg"
                    fontWeight="medium"
                    _hover={{
                      bg: tipoUsuario === "cliente" ? "#3a5e23" : "#48742c",
                      color: "white"
                    }}
                    onClick={() => setTipoUsuario("cliente")}
                  >
                    Cliente
                  </Button>
                  <Button
                    flex={1}
                    variant={tipoUsuario === "empresa" ? "solid" : "outline"}
                    bg={tipoUsuario === "empresa" ? "#48742c" : "transparent"}
                    color={tipoUsuario === "empresa" ? "white" : "#48742c"}
                    borderColor="#48742c"
                    borderWidth="2px"
                    py={6}
                    borderRadius="lg"
                    fontWeight="medium"
                    _hover={{
                      bg: tipoUsuario === "empresa" ? "#3a5e23" : "#48742c",
                      color: "white"
                    }}
                    onClick={() => setTipoUsuario("empresa")}
                  >
                    Empresa
                  </Button>
                </HStack>
              </Box>

              <Box as="form" onSubmit={tratarSubmit}>
                <VStack spacing={4}>
                  {/* Campos Básicos */}
                  <Box w="full">
                    <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                      Nome Completo *
                    </Text>
                    <Input
                      placeholder="Digite seu nome completo"
                      value={formData.nome}
                      color = "#2d5016"
                      onChange={(e) => tratarMudancaInput("nome", e.target.value)}
                      bg="gray.50"
                      border="2px solid"
                      borderColor="gray.200"
                      borderRadius="lg"
                      py={5}
                      _hover={{ borderColor: "#48742c" }}
                      _focus={{
                        bg: "white",
                        borderColor: "#48742c",
                        boxShadow: "0 0 0 1px #48742c"
                      }}
                    />
                  </Box>

                  <HStack spacing={4} w="full">
                    <Box flex={1}>
                      <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                        Email *
                      </Text>
                      <Input
                        placeholder="Digite seu email"
                        type="email"
                        color = "#2d5016"
                        value={formData.email}
                        onChange={(e) => tratarMudancaInput("email", e.target.value)}
                        bg="gray.50"
                        border="2px solid"
                        borderColor="gray.200"
                        borderRadius="lg"
                        py={5}
                        _hover={{ borderColor: "#48742c" }}
                        _focus={{
                          bg: "white",
                          borderColor: "#48742c",
                          boxShadow: "0 0 0 1px #48742c"
                        }}
                      />
                    </Box>
                    <Box flex={1}>
                      <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                        Telefone *
                      </Text>
                      <Input
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        color = "#2d5016"
                        onChange={(e) => tratarMudancaInput("telefone", e.target.value)}
                        bg="gray.50"
                        border="2px solid"
                        borderColor="gray.200"
                        borderRadius="lg"
                        py={5}
                        _hover={{ borderColor: "#48742c" }}
                        _focus={{
                          bg: "white",
                          borderColor: "#48742c",
                          boxShadow: "0 0 0 1px #48742c"
                        }}
                      />
                    </Box>
                  </HStack>

                  <HStack spacing={4} w="full">
                    <Box flex={1}>
                      <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                        Senha *
                      </Text>
                      <Input
                        placeholder="Digite sua senha"
                        type="password"
                        color = "#2d5016"
                        value={formData.senha}
                        onChange={(e) => tratarMudancaInput("senha", e.target.value)}
                        bg="gray.50"
                        border="2px solid"
                        borderColor="gray.200"
                        borderRadius="lg"
                        py={5}
                        _hover={{ borderColor: "#48742c" }}
                        _focus={{
                          bg: "white",
                          borderColor: "#48742c",
                          boxShadow: "0 0 0 1px #48742c"
                        }}
                      />
                    </Box>
                    <Box flex={1}>
                      <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                        Confirmar Senha *
                      </Text>
                      <Input
                        placeholder="Confirme sua senha"
                        type="password"
                        color = "#2d5016"
                        value={formData.confirmarSenha}
                        onChange={(e) => tratarMudancaInput("confirmarSenha", e.target.value)}
                        bg="gray.50"
                        border="2px solid"
                        borderColor="gray.200"
                        borderRadius="lg"
                        py={5}
                        _hover={{ borderColor: "#48742c" }}
                        _focus={{
                          bg: "white",
                          borderColor: "#48742c",
                          boxShadow: "0 0 0 1px #48742c"
                        }}
                      />
                    </Box>
                  </HStack>

                  {/* Campos específicos para Empresa */}
                  {tipoUsuario === "empresa" && (
                    <>
                      <Box w="full">
                        <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                          Nome da Empresa *
                        </Text>
                        <Input
                          placeholder="Digite o nome da empresa"
                          value={formData.nomeEmpresa}
                          color = "#2d5016"
                          onChange={(e) => tratarMudancaInput("nomeEmpresa", e.target.value)}
                          bg="gray.50"
                          border="2px solid"
                          borderColor="gray.200"
                          borderRadius="lg"
                          py={5}
                          _hover={{ borderColor: "#48742c" }}
                          _focus={{
                            bg: "white",
                            borderColor: "#48742c",
                            boxShadow: "0 0 0 1px #48742c"
                          }}
                        />
                      </Box>
                      <HStack spacing={4} w="full">
                        <Box flex={1}>
                          <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                            CNPJ *
                          </Text>
                          <Input
                            placeholder="00.000.000/0000-00"
                            value={formData.cnpj}
                            color = "#2d5016"
                            onChange={(e) => tratarMudancaInput("cnpj", e.target.value)}
                            bg="gray.50"
                            border="2px solid"
                            borderColor="gray.200"
                            borderRadius="lg"
                            py={5}
                            _hover={{ borderColor: "#48742c" }}
                            _focus={{
                              bg: "white",
                              borderColor: "#48742c",
                              boxShadow: "0 0 0 1px #48742c"
                            }}
                          />
                        </Box>
                        <Box flex={1}>
                          <Text mb={2} fontWeight="medium" color="#2d5016" fontSize="sm">
                            Endereço *
                          </Text>
                          <Input
                            placeholder="Endereço da empresa"
                            value={formData.endereco}
                            color = "#2d5016"
                            onChange={(e) => tratarMudancaInput("endereco", e.target.value)}
                            bg="gray.50"
                            border="2px solid"
                            borderColor="gray.200"
                            borderRadius="lg"
                            py={5}
                            _hover={{ borderColor: "#48742c" }}
                            _focus={{
                              bg: "white",
                              borderColor: "#48742c",
                              boxShadow: "0 0 0 1px #48742c"
                            }}
                          />
                        </Box>
                      </HStack>
                    </>
                  )}

                  {/* Mensagem de Feedback */}
                  {mensagem && (
                    <Box
                      w="full"
                      p={3}
                      borderRadius="lg"
                      bg={mensagem.includes("sucesso") ? "green.50" : "red.50"}
                      border="1px solid"
                      borderColor={mensagem.includes("sucesso") ? "green.200" : "red.200"}
                    >
                      <Text
                        color={mensagem.includes("sucesso") ? "green.700" : "red.700"}
                        fontSize="sm"
                        textAlign="center"
                        fontWeight="medium"
                      >
                        {mensagem}
                      </Text>
                    </Box>
                  )}

                  {/* Botões */}
                  <VStack spacing={3} w="full" pt={2}>
                    <Button
                      type="submit"
                      bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                      color="white"
                      borderRadius="lg"
                      py={5}
                      w="full"
                      fontSize="md"
                      fontWeight="bold"
                      _hover={{
                        bg: "linear-gradient(135deg, #3a5e23 0%, #48742c 100%)",
                        transform: "translateY(-2px)",
                        boxShadow: "xl"
                      }}
                      _active={{ transform: "translateY(0)" }}
                      transition="all 0.2s"
                    >
                      Criar Conta
                    </Button>

                    <Text fontSize="sm" color="gray.600" textAlign="center">
                      Já tem uma conta?{" "}
                      <Text
                        as="span"
                        color="#48742c"
                        cursor="pointer"
                        fontWeight="medium"
                        _hover={{ textDecoration: "underline" }}
                        onClick={voltarParaLogin}
                      >
                        Faça login
                      </Text>
                    </Text>
                  </VStack>
                </VStack>
              </Box>
            </VStack>
          </Container>
        </GridItem>
      </Grid>
    </Flex>
  );
}
