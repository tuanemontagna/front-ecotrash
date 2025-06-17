"use client";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  SimpleGrid,
  Heading,
  Container,
  IconButton,
  Alert,
  useColorModeValue
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineInfo, MdArticle } from "react-icons/md";
import { useRouter } from "next/navigation";

const todosArtigos = [
  {
    id: 1,
    titulo: "O que é lixo eletrônico?",
    resumo: "Lixo eletrônico, também conhecido como e-lixo, é todo resíduo material proveniente de equipamentos eletroeletrônicos...",
    conteudoCompleto: "Este é o conteúdo completo e detalhado sobre o que é lixo eletrônico. Abrange definições, tipos, exemplos e a importância de sua correta gestão. Lixo eletrônico, ou Resíduos de Equipamentos Elétricos e Eletrônicos (REEE), inclui itens como computadores, celulares, televisores, geladeiras e baterias. Seu descarte inadequado pode causar sérios danos ambientais e à saúde pública devido à presença de substâncias tóxicas como chumbo, mercúrio, cádmio e berílio.",
  },
  {
    id: 2,
    titulo: "Como descartar o lixo eletrônico?",
    resumo: "O descarte consciente de lixo eletrônico começa com a separação adequada dos materiais e o encaminhamento para pontos de coleta especializados...",
    conteudoCompleto: "O descarte correto do lixo eletrônico é crucial. Primeiro, verifique se o fabricante ou vendedor oferece programas de logística reversa. Muitos municípios possuem pontos de coleta específicos para REEE. ONGs e cooperativas de reciclagem também desempenham um papel importante. Nunca descarte eletrônicos no lixo comum ou em aterros sanitários. A separação correta e o encaminhamento para recicladores certificados garantem que os materiais perigosos sejam tratados adequadamente e que os componentes valiosos possam ser recuperados e reutilizados.",
  },
  {
    id: 3,
    titulo: "Consequências do descarte incorreto",
    resumo: "Lixo eletrônico como celulares, computadores, pilhas e eletrodomésticos contém substâncias tóxicas que podem contaminar o solo e a água...",
    conteudoCompleto: "O descarte incorreto de lixo eletrônico tem graves consequências. Substâncias tóxicas podem infiltrar-se no solo, contaminando lençóis freáticos e cursos d'água, afetando ecossistemas e a saúde humana através da cadeia alimentar. A queima a céu aberto de lixo eletrônico libera gases tóxicos na atmosfera, contribuindo para a poluição do ar e problemas respiratórios. Além disso, o desperdício de materiais valiosos que poderiam ser reciclados representa uma perda econômica e um esgotamento desnecessário de recursos naturais.",
  },
  {
    id: 4,
    titulo: "A Importância da Reciclagem de E-lixo",
    resumo: "Reciclar e-lixo economiza recursos naturais, reduz a poluição e gera empregos na cadeia de reciclagem...",
    conteudoCompleto: "A reciclagem de e-lixo é fundamental para a sustentabilidade. Ela permite a recuperação de materiais preciosos como ouro, prata, cobre e paládio, reduzindo a necessidade de mineração e seus impactos ambientais. Além disso, diminui a quantidade de resíduos enviados para aterros, minimiza a contaminação do solo e da água, e economiza energia em comparação com a produção de materiais virgens. A indústria da reciclagem de eletrônicos também gera empregos e promove uma economia circular.",
  },
  {
    id: 5,
    titulo: "Legislação sobre Lixo Eletrônico no Brasil",
    resumo: "Conheça as principais leis e normativas que regulamentam o descarte e a gestão de resíduos eletrônicos no país.",
    conteudoCompleto: "No Brasil, a Política Nacional de Resíduos Sólidos (PNRS), Lei nº 12.305/2010, estabelece a responsabilidade compartilhada pelo ciclo de vida dos produtos, incluindo os eletroeletrônicos. Isso implica que fabricantes, importadores, distribuidores e comerciantes são corresponsáveis pela implementação de sistemas de logística reversa. Existem também normativas específicas e acordos setoriais que detalham as metas e procedimentos para a coleta e destinação ambientalmente adequada dos REEE. É importante estar ciente dessas regulamentações para garantir o cumprimento legal e contribuir para a gestão sustentável desses resíduos.",
  },
  {
    id: 6,
    titulo: "Inovações Tecnológicas na Reciclagem",
    resumo: "Descubra novas tecnologias que estão tornando a reciclagem de componentes eletrônicos mais eficiente e sustentável.",
    conteudoCompleto: "A reciclagem de lixo eletrônico está em constante evolução, com novas tecnologias buscando aumentar a eficiência na recuperação de materiais e minimizar os impactos ambientais. Processos hidrometalúrgicos e pirometalúrgicos avançados, automação e robótica para desmontagem, e o uso de inteligência artificial para triagem de componentes são algumas das inovações. Essas tecnologias visam não apenas recuperar metais preciosos, mas também tratar de forma segura os plásticos e outros materiais complexos presentes nos dispositivos eletrônicos, tornando o processo mais sustentável e economicamente viável.",
  },
];

export default function PaginaListaInformacoes() {
  const roteador = useRouter();

  const tratarVoltar = () => {
    roteador.back();
  };

  const tratarIrParaPerfil = () => {
    roteador.push("/perfil");
  };

  const tratarAcessarArtigo = (idArtigo) => {
    roteador.push(`/information/article/${idArtigo}`);
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
            Informações
          </Text>
          <Text
            color="whiteAlpha.800"
            fontSize={{ base: "xs", md: "sm" }}
            textAlign="center"
          >
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
      <Container maxW="container.xl" py={{ base: 8, md: 12 }} flex="1">
        <VStack spacing={{ base: 6, md: 8 }} mb={{ base: 6, md: 8 }}>
          <Box textAlign="center" maxW="2xl">
            <Heading
              size={{ base: "lg", md: "xl" }}
              color="#2d5016"
              mb={3}
              fontWeight="bold"
            >
              Central de Conhecimento
            </Heading>
            <Text
              color="gray.600"
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="medium"
            >
              Explore nossos artigos e descubra como fazer a diferença no meio ambiente
            </Text>
          </Box>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 6, md: 8 }}
          mb={{ base: 6, md: 8 }}
        >
          {todosArtigos.map((artigo) => (
            <Box
              key={artigo.id}
              bg="white"
              borderRadius="2xl"
              boxShadow="lg"
              overflow="hidden"
              display="flex"
              flexDirection="column"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "2xl",
                borderColor: "#48742c",
                borderWidth: "2px"
              }}
              border="2px solid transparent"
            >
              <Box
                bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                p={4}
                position="relative"
              >
                <Flex align="center" justify="center" mb={2}>
                  <MdArticle color="white" size="24px" />
                </Flex>
                <Heading
                  as="h3"
                  size="md"
                  color="white"
                  textAlign="center"
                  noOfLines={2}
                  lineHeight="1.3"
                  fontWeight="semibold"
                >
                  {artigo.titulo}
                </Heading>
              </Box>
              <VStack
                p={{ base: 5, md: 6 }}
                spacing={4}
                align="stretch"
                flexGrow={1}
                justify="space-between"
                bg="gray.50"
              >
                <Text
                  fontSize="sm"
                  color="gray.600"
                  noOfLines={4}
                  lineHeight="1.6"
                  textAlign="justify"
                >
                  {artigo.resumo}
                </Text>
                <Button
                  bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                  color="white"
                  borderRadius="full"
                  size="md"
                  fontWeight="semibold"
                  _hover={{
                    bg: "linear-gradient(135deg, #3a5e23 0%, #48742c 100%)",
                    transform: "scale(1.05)"
                  }}
                  _active={{ transform: "scale(0.98)" }}
                  transition="all 0.2s"
                  onClick={() => tratarAcessarArtigo(artigo.id)}
                  alignSelf="center"
                  px={8}
                  py={2}
                  leftIcon={<MdArticle />}
                >
                  Ler artigo
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
}