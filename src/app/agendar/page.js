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
  Input,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdSchedule, MdLocationOn, MdRecycling, MdBusiness } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";

const materiaisDisponiveis = ["Papel", "Plástico", "Vidro", "Metal", "Eletrônicos"];
const empresasColeta = ["EcoTech Reciclagem", "GreenCycle Sustentável", "ReciclaMais"];

export default function PaginaAgendarColeta() {
  const roteador = useRouter();

  const [dadosColeta, setDadosColeta] = useState({
    data: "",
    horario: "",
    endereco: "",
    cidade: "",
    cep: "",
    materiais: [],
    empresa: "",
    observacoes: ""
  });

  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  const tratarVoltar = () => {
    roteador.back();
  };

  const tratarIrParaPerfil = () => {
    roteador.push("/perfil");
  };

  const tratarMudancaInput = (campo, valor) => {
    setDadosColeta(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const tratarSelecaoMaterial = (materialSelecionado) => {
    setDadosColeta(prev => {
      const materiaisAtuais = prev.materiais;
      if (materiaisAtuais.includes(materialSelecionado)) {
        return { ...prev, materiais: materiaisAtuais.filter(m => m !== materialSelecionado) };
      } else {
        return { ...prev, materiais: [...materiaisAtuais, materialSelecionado] };
      }
    });
  };
  
  const tratarCliqueAgendar = () => {
    if (!dadosColeta.data || !dadosColeta.horario || !dadosColeta.endereco ||
        !dadosColeta.cidade || !dadosColeta.cep || dadosColeta.materiais.length === 0 ||
        !dadosColeta.empresa) {
      setMensagem("Por favor, preencha todos os campos obrigatórios.");
      setTipoMensagem("error");
      return;
    }

    console.log("Dados do Agendamento:", dadosColeta);
    setMensagem("Coleta agendada com sucesso! Você receberá uma confirmação em breve.");
    setTipoMensagem("success");

    setTimeout(() => {
      roteador.push("/coletas");
    }, 2000);
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
            icon={<IoMdArrowBack />}
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
        />
        <VStack spacing={1}>
            <Text color="white" fontWeight="bold" fontSize={{ base: "xl", md: "2xl" }} textAlign="center" letterSpacing="wide">
            Agendar Coleta
            </Text>
            <Text color="whiteAlpha.800" fontSize={{ base: "xs", md: "sm" }} textAlign="center">
            Preencha as informações abaixo
            </Text>
        </VStack>
        <IconButton
            aria-label="Perfil do usuário"
            icon={<CgProfile />}
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
        />
      </Box>

      <Container maxW="container.md" py={{ base: 6, md: 10 }} flex="1">
        <Box bg="white" borderRadius="2xl" p={{ base: 6, md: 8 }} boxShadow="lg">
          <VStack spacing={8} align="stretch">

            <VStack spacing={4} align="stretch">
                <Heading as="h2" size="md" color="#48742c" display="flex" alignItems="center">
                    <MdSchedule style={{ marginRight: '12px' }} /> Data e Horário
                </Heading>
                <HStack spacing={4}>
                    <Box w="100%">
                        <Text fontWeight="medium" mb="2" color="#2d5016">Data*</Text>
                        <Input 
                          type="date" 
                          value={dadosColeta.data} 
                          onChange={(e) => tratarMudancaInput('data', e.target.value)}
                          color="#48742c"
                          fontWeight="medium"
                        />
                    </Box>
                    <Box w="100%">
                        <Text fontWeight="medium" mb="2" color="#2d5016">Horário*</Text>
                        <Input 
                          type="time" 
                          value={dadosColeta.horario} 
                          onChange={(e) => tratarMudancaInput('horario', e.target.value)}
                          color="#48742c"
                          fontWeight="medium"
                        />
                    </Box>
                </HStack>
            </VStack>

            <VStack spacing={4} align="stretch">
                <Heading as="h2" size="md" color="#48742c" display="flex" alignItems="center">
                    <MdLocationOn style={{ marginRight: '12px' }} /> Endereço
                </Heading>
                <Box>
                    <Text fontWeight="medium" mb="2" color="#2d5016">Endereço Completo*</Text>
                    <Input 
                      placeholder="Ex: Rua das Flores, 123" 
                      value={dadosColeta.endereco} 
                      onChange={(e) => tratarMudancaInput('endereco', e.target.value)}
                      color="#48742c"
                      fontWeight="medium"
                      _placeholder={{ color: "gray.400" }}
                    />
                </Box>
                <HStack spacing={4}>
                    <Box w="100%">
                        <Text fontWeight="medium" mb="2" color="#2d5016">Cidade*</Text>
                        <Input 
                          placeholder="Ex: Chapecó" 
                          value={dadosColeta.cidade} 
                          onChange={(e) => tratarMudancaInput('cidade', e.target.value)}
                          color="#48742c"
                          fontWeight="medium"
                          _placeholder={{ color: "gray.400" }}
                        />
                    </Box>
                    <Box w="100%">
                        <Text fontWeight="medium" mb="2" color="#2d5016">CEP*</Text>
                        <Input 
                          placeholder="Ex: 89800-000" 
                          value={dadosColeta.cep} 
                          onChange={(e) => tratarMudancaInput('cep', e.target.value)}
                          color="#48742c"
                          fontWeight="medium"
                          _placeholder={{ color: "gray.400" }}
                        />
                    </Box>
                </HStack>
            </VStack>
            
            <VStack spacing={4} align="stretch">
                <Heading as="h2" size="md" color="#48742c" display="flex" alignItems="center">
                    <MdRecycling style={{ marginRight: '12px' }} /> Materiais para Coleta
                </Heading>
                <Box>
                    <Text fontWeight="medium" mb="2" color="#2d5016">Selecione os materiais*</Text>
                    <Flex wrap="wrap" gap={3}>
                        {materiaisDisponiveis.map((material) => {
                            const isActive = dadosColeta.materiais.includes(material);
                            return (
                                <Button
                                    key={material}
                                    onClick={() => tratarSelecaoMaterial(material)}
                                    variant={isActive ? "solid" : "outline"}
                                    bg={isActive ? "#48742c" : "transparent"}
                                    borderColor="#48742c"
                                    color={isActive ? "white" : "#48742c"}
                                    _hover={!isActive ? { bg: "gray.100" } : { bg: "#3a5e23" }}
                                >
                                    {material}
                                </Button>
                            );
                        })}
                    </Flex>
                </Box>
            </VStack>
            
            <VStack spacing={4} align="stretch">
                <Heading as="h2" size="md" color="#48742c" display="flex" alignItems="center">
                    <MdBusiness style={{ marginRight: '12px' }} /> Empresa de Coleta
                </Heading>
                <Box>
                    <Text fontWeight="medium" mb="2" color="#2d5016">Empresa*</Text>
                    <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                        {empresasColeta.map((empresa) => {
                             const isActive = dadosColeta.empresa === empresa;
                             return (
                                <Button
                                    key={empresa}
                                    onClick={() => tratarMudancaInput('empresa', empresa)}
                                    variant={isActive ? "solid" : "outline"}
                                    bg={isActive ? "#48742c" : "transparent"}
                                    borderColor="#48742c"
                                    color={isActive ? "white" : "#48742c"}
                                    flex={1}
                                    _hover={!isActive ? { bg: "gray.100" } : { bg: "#3a5e23" }}
                                >
                                    {empresa}
                                </Button>
                            );
                        })}
                    </Stack>
                </Box>
            </VStack>

            <VStack spacing={4} align="stretch">
                <Text fontWeight="medium" color="#2d5016">Observações (opcional)</Text>
                <Input
                    placeholder="Ex: Deixar na portaria, material pesado, etc."
                    value={dadosColeta.observacoes}
                    onChange={(e) => tratarMudancaInput('observacoes', e.target.value)}
                    color="#48742c"
                    fontWeight="medium"
                    _placeholder={{ color: "gray.400" }}
                />
            </VStack>

            {mensagem && (
              <Box p={4} borderRadius="md" bg={tipoMensagem === 'success' ? 'green.100' : 'red.100'} borderColor={tipoMensagem === 'success' ? 'green.400' : 'red.400'} borderWidth="1px">
                <Text color={tipoMensagem === 'success' ? 'green.700' : 'red.700'}>
                  {mensagem}
                </Text>
              </Box>
            )}

            <Button
              type="button"
              onClick={tratarCliqueAgendar}
              bg="#48742c"
              color="white"
              size="lg"
              fontSize="md"
              _hover={{ bg: "#3a5e23" }}
            >
              Agendar Coleta
            </Button>
          </VStack>
        </Box>
      </Container>
    </Flex>
  );
}