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
  GridItem
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaginaLogin() {
  const roteador = useRouter();
  
  const [formData, setFormData] = useState({
    email: "",
    senha: ""
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
    
    if (!formData.email || !formData.senha) {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }

    if (!formData.email.includes("@")) {
      setMensagem("Por favor, insira um email válido.");
      return;
    }

    setMensagem("Login realizado com sucesso!");
    
    setTimeout(() => {
      roteador.push("/home");
    }, 2000);
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
                Reciclando tecnologia, preservando o futuro!
              </Text>
              <Text
                color="whiteAlpha.80"
                fontSize="lg"
                textAlign="center"
                lineHeight="1.6"
                mt={4}
              >
                Conecte-se à plataforma que transforma lixo eletrônico em oportunidades sustentáveis.
              </Text>
            </VStack>
          </VStack>
        </GridItem>

        {/* Lado direito - Formulário */}
        <GridItem
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={12}
          bg="white"
        >
          <Container maxW="md" w="full">
            <VStack spacing={8} align="stretch">
              <VStack spacing={4} textAlign="center">
                <Heading
                  size="xl"
                  color="#2d5016"
                  fontWeight="bold"
                >
                  Bem-vindo de volta!
                </Heading>
                <Text
                  color="gray.600"
                  fontSize="lg"
                >
                  Faça login para acessar sua conta
                </Text>
              </VStack>

              <Box as="form" onSubmit={tratarSubmit}>
                <VStack spacing={6}>
                  {/* Campo Email */}
                  <Box w="full">
                    <Text
                      mb={3}
                      fontWeight="semibold"
                      color="#2d5016"
                      fontSize="md"
                    >
                      Email
                    </Text>
                    <Input
                      placeholder="Digite seu email"
                      type="email"
                      color= "#2d5016"
                      value={formData.email}
                      onChange={(e) => tratarMudancaInput("email", e.target.value)}
                      bg="gray.50"
                      border="2px solid"
                      borderColor="gray.200"
                      borderRadius="lg"
                      py={6}
                      px={4}
                      fontSize="md"
                      _placeholder={{ color: "gray.400" }}
                      _hover={{ borderColor: "#48742c" }}
                      _focus={{
                        bg: "white",
                        borderColor: "#48742c",
                        boxShadow: "0 0 0 1px #48742c"
                      }}
                    />
                  </Box>

                  {/* Campo Senha */}
                  <Box w="full">
                    <Text
                      mb={3}
                      fontWeight="semibold"
                      color="#2d5016"
                      fontSize="md"
                    >
                      Senha
                    </Text>
                    <Input
                      placeholder="Digite sua senha"
                      type="password"
                      color= "#2d5016"
                      value={formData.senha}
                      onChange={(e) => tratarMudancaInput("senha", e.target.value)}
                      bg="gray.50"
                      border="2px solid"
                      borderColor="gray.200"
                      borderRadius="lg"
                      py={6}
                      px={4}
                      fontSize="md"
                      _placeholder={{ color: "gray.400" }}
                      _hover={{ borderColor: "#48742c" }}
                      _focus={{
                        bg: "white",
                        borderColor: "#48742c",
                        boxShadow: "0 0 0 1px #48742c"
                      }}
                    />
                  </Box>

                  {/* Mensagem de Feedback */}
                  {mensagem && (
                    <Box
                      w="full"
                      p={4}
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

                  {/* Botão Entrar */}
                  <Button
                    type="submit"
                    bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                    color="white"
                    borderRadius="lg"
                    py={6}
                    w="full"
                    fontSize="lg"
                    fontWeight="bold"
                    _hover={{
                      bg: "linear-gradient(135deg, #3a5e23 0%, #48742c 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "xl"
                    }}
                    _active={{ transform: "translateY(0)" }}
                    transition="all 0.2s"
                  >
                    Entrar
                  </Button>

                  {/* Links auxiliares */}
                  <HStack justify="space-between" w="full" pt={4}>
                    <Text
                      color="#48742c"
                      fontSize="sm"
                      cursor="pointer"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Esqueceu a senha?
                    </Text>
                    <Text
                      color="#48742c"
                      fontSize="sm"
                      cursor="pointer"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Criar conta
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </Container>
        </GridItem>
      </Grid>
    </Flex>
  );
}
