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
  HStack
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdArticle, MdShare, MdBookmark } from "react-icons/md";
import { useRouter, useParams } from "next/navigation";

const todosArtigos = [
  {
    id: 1,
    titulo: "O que é lixo eletrônico?",
    resumo: "Lixo eletrônico, também conhecido como e-lixo, é todo resíduo material proveniente de equipamentos eletroeletrônicos...",
    conteudoCompleto: "Este é o conteúdo completo e detalhado sobre o que é lixo eletrônico. Abrange definições, tipos, exemplos e a importância de sua correta gestão.\n\nLixo eletrônico, ou Resíduos de Equipamentos Elétricos e Eletrônicos (REEE), inclui itens como computadores, celulares, televisores, geladeiras e baterias. Seu descarte inadequado pode causar sérios danos ambientais e à saúde pública devido à presença de substâncias tóxicas como chumbo, mercúrio, cádmio e berílio.\n\n**Principais tipos de lixo eletrônico:**\n\n• Equipamentos de informática (computadores, notebooks, tablets)\n• Dispositivos de telecomunicação (celulares, telefones fixos)\n• Eletrodomésticos (geladeiras, micro-ondas, máquinas de lavar)\n• Equipamentos de áudio e vídeo (TVs, rádios, aparelhos de som)\n• Baterias e pilhas de todos os tipos\n• Lâmpadas fluorescentes e LED\n\n**Por que é importante conhecer sobre e-lixo?**\n\nO volume de lixo eletrônico cresce exponencialmente a cada ano. Segundo a ONU, o mundo gerou mais de 54 milhões de toneladas de lixo eletrônico em 2019, e esse número tende a aumentar para 74 milhões de toneladas até 2030.\n\n**Impactos ambientais:**\n\nQuando descartados incorretamente, os componentes eletrônicos liberam substâncias tóxicas no meio ambiente. O chumbo pode causar danos ao sistema nervoso, o mercúrio afeta o cérebro e os rins, enquanto o cádmio é cancerígeno e prejudica os ossos.\n\n**Oportunidades de reciclagem:**\n\nPor outro lado, o lixo eletrônico contém materiais valiosos como ouro, prata, cobre e terras raras. A reciclagem adequada pode recuperar esses materiais, reduzindo a necessidade de mineração e gerando valor econômico.\n\n**Responsabilidade compartilhada:**\n\nA gestão adequada do lixo eletrônico é responsabilidade de todos: fabricantes, distribuidores, consumidores e governo. Cada um tem um papel importante no ciclo de vida dos produtos eletrônicos.",
    dataPublicacao: "2024-07-01",
    tempoLeitura: "5 min",
    categoria: "Educação Ambiental"
  },
  {
    id: 2,
    titulo: "Como descartar o lixo eletrônico?",
    resumo: "O descarte consciente de lixo eletrônico começa com a separação adequada dos materiais e o encaminhamento para pontos de coleta especializados...",
    conteudoCompleto: "O descarte correto do lixo eletrônico é fundamental para proteger o meio ambiente e a saúde pública. Este guia prático apresenta as melhores formas de descartar seus equipamentos eletrônicos de forma responsável.\n\n**Passo 1: Preparação dos equipamentos**\n\nAntes de descartar qualquer equipamento eletrônico, é essencial remover todos os dados pessoais. Faça backup das informações importantes e execute a formatação completa dos dispositivos de armazenamento.\n\n**Passo 2: Verificar programas de logística reversa**\n\nMuitos fabricantes e varejistas oferecem programas de logística reversa, onde você pode devolver o produto usado na compra de um novo ou gratuitamente. Empresas como Apple, Samsung, Dell e outras possuem programas estruturados.\n\n**Passo 3: Pontos de coleta especializados**\n\n• Ecopontos municipais\n• Cooperativas de reciclagem\n• ONGs ambientais\n• Lojas de eletrônicos\n• Postos de coleta em shopping centers\n\n**Passo 4: Separação adequada**\n\nSepare os componentes por categoria:\n• Baterias e pilhas em recipientes específicos\n• Cabos e fios em grupos\n• Equipamentos grandes (eletrodomésticos)\n• Equipamentos pequenos (celulares, tablets)\n\n**O que NUNCA fazer:**\n\n• Jogar no lixo comum\n• Descartar em aterros sanitários\n• Queimar componentes eletrônicos\n• Abandonar equipamentos em vias públicas\n• Misturar com lixo orgânico\n\n**Certificação dos recicladores:**\n\nSempre verifique se o local de descarte possui licenças ambientais adequadas e segue os protocolos de reciclagem responsável.",
    dataPublicacao: "2024-07-05",
    tempoLeitura: "7 min",
    categoria: "Práticas Sustentáveis"
  },
  {
    id: 3,
    titulo: "Consequências do descarte incorreto",
    resumo: "Lixo eletrônico como celulares, computadores, pilhas e eletrodomésticos contém substâncias tóxicas que podem contaminar o solo e a água...",
    conteudoCompleto: "O descarte inadequado de lixo eletrônico representa uma das maiores ameaças ambientais da era digital. Este artigo explora os impactos devastadores que o manejo incorreto desses resíduos pode causar ao planeta e à saúde humana.\n\n**Contaminação do solo e água:**\n\nQuando dispositivos eletrônicos são descartados em aterros comuns, substâncias tóxicas como chumbo, mercúrio, cádmio e arsênio se infiltram no solo. Essas toxinas eventualmente alcançam os lençóis freáticos, contaminando fontes de água potável.\n\n**Principais substâncias tóxicas e seus efeitos:**\n\n• **Chumbo:** Encontrado em soldas e baterias, causa danos neurológicos, especialmente em crianças\n• **Mercúrio:** Presente em lâmpadas e alguns componentes, afeta o sistema nervoso central\n• **Cádmio:** Em baterias recarregáveis, é cancerígeno e prejudica rins e ossos\n• **Berílio:** Em componentes de computadores, causa doenças pulmonares\n• **Retardantes de chama bromados:** Em plásticos, são desreguladores endócrinos\n\n**Impactos na cadeia alimentar:**\n\nA contaminação não para no solo e na água. Plantas absorvem essas toxinas, que são consumidas por animais e, eventualmente, chegam aos humanos através da cadeia alimentar, causando bioacumulação de substâncias nocivas.\n\n**Poluição do ar:**\n\nA queima informal de lixo eletrônico, comum em países em desenvolvimento, libera dioxinas e furanos na atmosfera, causando problemas respiratórios, câncer e outras doenças graves.\n\n**Consequências econômicas:**\n\n• Perda de materiais valiosos (ouro, prata, cobre)\n• Custos de remediação ambiental\n• Gastos com tratamento de saúde pública\n• Redução do valor de propriedades em áreas contaminadas\n\n**Casos reais:**\n\nAgnbogbloshie, em Gana, e Guiyu, na China, são exemplos de como o descarte inadequado transformou comunidades inteiras em zonas de alto risco ambiental e sanitário.",
    dataPublicacao: "2024-07-10",
    tempoLeitura: "6 min",
    categoria: "Impacto Ambiental"
  },
  {
    id: 4,
    titulo: "A Importância da Reciclagem de E-lixo",
    resumo: "Reciclar e-lixo economiza recursos naturais, reduz a poluição e gera empregos na cadeia de reciclagem...",
    conteudoCompleto: "A reciclagem de lixo eletrônico representa uma oportunidade única de transformar um problema ambiental em solução econômica e ecológica. Este artigo explora os múltiplos benefícios da reciclagem responsável de equipamentos eletrônicos.\n\n**Recuperação de materiais valiosos:**\n\nOs dispositivos eletrônicos contêm uma verdadeira 'mina urbana' de materiais preciosos:\n• Uma tonelada de celulares contém mais ouro que uma tonelada de minério aurífero\n• Computadores possuem prata, paládio e cobre em quantidades significativas\n• Terras raras, essenciais para tecnologias modernas, podem ser recuperadas\n\n**Benefícios econômicos:**\n\n• **Geração de empregos:** A indústria de reciclagem de e-lixo emprega milhões globalmente\n• **Redução de custos:** Materiais reciclados são mais baratos que materiais virgens\n• **Desenvolvimento de tecnologias:** Inovação em processos de recuperação\n• **Economia circular:** Criação de modelos de negócios sustentáveis\n\n**Benefícios ambientais:**\n\n• **Redução da mineração:** Menos extração de recursos naturais\n• **Economia de energia:** Reciclagem consome 95% menos energia que produção primária\n• **Redução de emissões:** Menor pegada de carbono na produção\n• **Preservação de habitats:** Menos destruição de ecossistemas para mineração\n\n**Processos de reciclagem modernos:**\n\n1. **Desmontagem automatizada:** Robôs especializados separam componentes\n2. **Separação magnética:** Recuperação de metais ferrosos\n3. **Processos hidrometalúrgicos:** Extração de metais preciosos com solventes\n4. **Recuperação de plásticos:** Transformação em novos produtos\n\n**Desafios e soluções:**\n\n• **Complexidade dos produtos:** Desenvolvimento de técnicas de separação mais eficientes\n• **Miniaturização:** Tecnologias para recuperar materiais de componentes cada vez menores\n• **Logística:** Criação de redes de coleta eficientes\n\n**O futuro da reciclagem:**\n\nInteligência artificial e machine learning estão revolucionando a reciclagem, permitindo identificação automática de componentes e otimização de processos de recuperação.",
    dataPublicacao: "2024-07-15",
    tempoLeitura: "8 min",
    categoria: "Economia Circular"
  },
  {
    id: 5,
    titulo: "Legislação sobre Lixo Eletrônico no Brasil",
    resumo: "Conheça as principais leis e normativas que regulamentam o descarte e a gestão de resíduos eletrônicos no país.",
    conteudoCompleto: "O Brasil possui um marco regulatório robusto para a gestão de resíduos eletrônicos, baseado no princípio da responsabilidade compartilhada. Este artigo detalha as principais legislações e suas implicações práticas.\n\n**Política Nacional de Resíduos Sólidos (PNRS) - Lei 12.305/2010:**\n\nA PNRS estabelece as diretrizes fundamentais para a gestão de resíduos no país, incluindo os eletrônicos:\n• Responsabilidade compartilhada pelo ciclo de vida dos produtos\n• Obrigatoriedade de logística reversa\n• Hierarquia de gestão: não geração, redução, reutilização, reciclagem\n• Metas de redução de resíduos enviados para aterros\n\n**Acordo Setorial para REEE (2019):**\n\nEste acordo específico para equipamentos eletroeletrônicos define:\n• Metas progressivas de coleta e destinação\n• Estruturação de sistema de logística reversa\n• Responsabilidades de cada ator da cadeia\n• Indicadores de desempenho e monitoramento\n\n**Principais obrigações por categoria:**\n\n**Fabricantes e Importadores:**\n• Implementar sistemas de logística reversa\n• Custear a coleta e destinação adequada\n• Fornecer informações sobre composição dos produtos\n• Metas de recuperação progressivas\n\n**Distribuidores e Comerciantes:**\n• Receber produtos usados dos consumidores\n• Disponibilizar pontos de coleta\n• Orientar consumidores sobre descarte correto\n• Manter registros de produtos coletados\n\n**Consumidores:**\n• Descartar produtos em locais adequados\n• Não misturar e-lixo com resíduos comuns\n• Acondicionamento adequado para transporte\n• Remoção de dados pessoais antes do descarte\n\n**Poder Público:**\n• Fiscalização e monitoramento\n• Licenciamento de atividades\n• Educação ambiental\n• Apoio a cooperativas de reciclagem\n\n**Penalidades e sanções:**\n\n• Multas que variam de R$ 5.000 a R$ 50 milhões\n• Suspensão de licenças ambientais\n• Embargo de atividades\n• Responsabilização civil e criminal\n\n**Resolução CONAMA 401/2008:**\n\nEspecífica para pilhas e baterias, estabelece:\n• Limites de substâncias tóxicas\n• Obrigatoriedade de coleta pelos fabricantes\n• Pontos de coleta em estabelecimentos comerciais\n\n**Avanços recentes:**\n\n• Regulamentação da ANATEL para telecomunicações\n• Iniciativas estaduais e municipais complementares\n• Parcerias público-privadas para ampliar coleta\n• Integração com política de economia circular\n\n**Desafios na implementação:**\n\n• Fiscalização efetiva em todo território nacional\n• Conscientização da população\n• Capacitação de cooperativas\n• Harmonização entre diferentes esferas de governo",
    dataPublicacao: "2024-07-20",
    tempoLeitura: "10 min",
    categoria: "Legislação"
  },
  {
    id: 6,
    titulo: "Inovações Tecnológicas na Reciclagem",
    resumo: "Descubra novas tecnologias que estão tornando a reciclagem de componentes eletrônicos mais eficiente e sustentável.",
    conteudoCompleto: "A reciclagem de lixo eletrônico está passando por uma revolução tecnológica. Inovações em inteligência artificial, robótica e biotecnologia estão transformando como recuperamos materiais valiosos de dispositivos descartados.\n\n**Inteligência Artificial e Machine Learning:**\n\nSistemas de IA estão revolucionando a identificação e separação de componentes:\n• **Visão computacional:** Câmeras identificam automaticamente tipos de materiais\n• **Algoritmos de otimização:** Maximizam recuperação de materiais valiosos\n• **Aprendizado contínuo:** Sistemas se adaptam a novos tipos de produtos\n• **Previsão de composição:** IA estima conteúdo de materiais antes da desmontagem\n\n**Robótica Avançada:**\n\nRobôs especializados estão assumindo tarefas complexas de desmontagem:\n• **Braços robóticos precisos:** Removem componentes delicados sem danos\n• **Sistemas de múltiplos braços:** Processamento paralelo de vários dispositivos\n• **Robôs colaborativos:** Trabalham junto com humanos em segurança\n• **Automação completa:** Linhas totalmente automatizadas para produtos específicos\n\n**Biotecnologia na Recuperação de Metais:**\n\nMicroorganismos estão sendo usados para extrair metais preciosos:\n• **Biolixiviação:** Bactérias dissolvem metais de circuitos integrados\n• **Biosorção:** Algas e fungos absorvem metais pesados de soluções\n• **Processos mais limpos:** Redução do uso de químicos tóxicos\n• **Menor consumo energético:** Processos biológicos requerem menos energia\n\n**Tecnologias de Separação Avançadas:**\n\n• **Separação óptica:** Sensores infravermelhos identificam tipos de plásticos\n• **Separação eletrostática:** Campos elétricos separam condutores de isolantes\n• **Tecnologia de raios-X:** Identifica composição interna sem desmontagem\n• **Separação magnética de alta intensidade:** Recupera metais não-ferrosos\n\n**Impressão 3D com Materiais Reciclados:**\n\nTransformação de resíduos eletrônicos em novos produtos:\n• **Filamentos de impressão:** Plásticos reciclados se tornam material de impressão\n• **Componentes funcionais:** Criação de novos dispositivos com materiais recuperados\n• **Prototipagem sustentável:** Desenvolvimento de produtos com pegada reduzida\n\n**Blockchain para Rastreabilidade:**\n\nTecnologia blockchain garante transparência na cadeia de reciclagem:\n• **Rastreamento completo:** Do descarte até a destinação final\n• **Certificação digital:** Prova de reciclagem responsável\n• **Combate ao comércio ilegal:** Prevenção de exportação irregular de e-lixo\n\n**Nanotecnologia:**\n\nAplicações em escala molecular para recuperação eficiente:\n• **Nanofiltros:** Separação de materiais em escala atômica\n• **Nanocatalisadores:** Aceleram reações de recuperação de metais\n• **Nanossensores:** Detecção precisa de substâncias tóxicas\n\n**Tecnologias Emergentes:**\n\n• **Plasma frio:** Decomposição molecular de componentes complexos\n• **Microondas assistidas:** Aquecimento seletivo para separação eficiente\n• **Processamento ultrassônico:** Quebra de ligações moleculares com ondas sonoras\n• **Criogenia:** Fragilização de materiais para separação mecânica\n\n**Desafios e Perspectivas Futuras:**\n\n• **Integração de tecnologias:** Combinação de múltiplas inovações\n• **Redução de custos:** Tornar tecnologias acessíveis globalmente\n• **Escalabilidade:** Aplicação em grandes volumes de resíduos\n• **Sustentabilidade energética:** Uso de energias renováveis nos processos",
    dataPublicacao: "2024-07-25",
    tempoLeitura: "9 min",
    categoria: "Tecnologia"
  }
];

export default function PaginaArtigo() {
  const roteador = useRouter();
  const params = useParams();
  const idArtigo = parseInt(params.id);

  const artigo = todosArtigos.find(a => a.id === idArtigo);

  const tratarVoltar = () => {
    roteador.back();
  };

  const tratarIrParaPerfil = () => {
    roteador.push("/perfil");
  };

  const tratarCompartilhar = () => {
    if (navigator.share) {
      navigator.share({
        title: artigo.titulo,
        text: artigo.resumo,
        url: window.location.href,
      });
    }
  };

  const tratarSalvarArtigo = () => {
    console.log("Artigo salvo:", artigo.titulo);
  };

  if (!artigo) {
    return (
      <Flex direction="column" minH="100vh" bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)">
        <Container maxW="container.lg" py={20} textAlign="center">
          <Heading color="#2d5016" mb={4}>Artigo não encontrado</Heading>
          <Text color="gray.600" mb={6}>O artigo que você está procurando não existe.</Text>
          <Button onClick={tratarVoltar} bg="#48742c" color="white">
            Voltar
          </Button>
        </Container>
      </Flex>
    );
  }

  return (
    <Flex direction="column" minH="100vh" bg="linear-gradient(135deg, #a8d995 0%, #8cc973 100%)">
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
            fontSize={{ base: "lg", md: "xl" }}
            textAlign="center"
            letterSpacing="wide"
            noOfLines={2}
          >
            {artigo.titulo}
          </Text>
          <Text
            color="whiteAlpha.800"
            fontSize={{ base: "xs", md: "sm" }}
            textAlign="center"
          >
            Artigo • {artigo.tempoLeitura} de leitura
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
            aria-label="Compartilhar artigo"
            color="white"
            variant="ghost"
            size="lg"
            borderRadius="full"
            _hover={{ bg: "whiteAlpha.200", transform: "scale(1.1)" }}
            _active={{ bg: "whiteAlpha.300" }}
            transition="all 0.2s"
            onClick={tratarCompartilhar}
          >
            <MdShare />
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

      {/* Conteúdo do Artigo */}
      <Container maxW="container.md" py={{ base: 6, md: 10 }} flex="1">
        <Box
          bg="white"
          borderRadius="2xl"
          boxShadow="xl"
          overflow="hidden"
          border="2px solid transparent"
        >
          {/* Cabeçalho do Artigo */}
          <Box
            bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
            p={6}
            textAlign="center"
          >
            <VStack spacing={3}>
              <Box
                bg="whiteAlpha.200"
                borderRadius="full"
                p={3}
                display="inline-flex"
              >
                <MdArticle color="white" size="32px" />
              </Box>
              <VStack spacing={2}>
                <Text
                  color="white"
                  fontSize="xs"
                  fontWeight="medium"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  {artigo.categoria}
                </Text>
                <Heading
                  size="xl"
                  color="white"
                  textAlign="center"
                  lineHeight="1.3"
                  fontWeight="bold"
                >
                  {artigo.titulo}
                </Heading>
                <HStack spacing={4} color="whiteAlpha.900" fontSize="sm">
                  <Text>{new Date(artigo.dataPublicacao).toLocaleDateString('pt-BR')}</Text>
                  <Text>•</Text>
                  <Text>{artigo.tempoLeitura} de leitura</Text>
                </HStack>
              </VStack>
            </VStack>
          </Box>

          {/* Conteúdo */}
          <Box p={{ base: 6, md: 8 }}>
            <VStack spacing={6} align="stretch">
              {/* Resumo */}
              <Box
                bg="blue.50"
                p={5}
                borderRadius="xl"
                border="2px solid"
                borderColor="blue.100"
              >
                <Text
                  fontSize="lg"
                  color="blue.800"
                  fontWeight="medium"
                  lineHeight="1.7"
                  fontStyle="italic"
                >
                  {artigo.resumo}
                </Text>
              </Box>

              {/* Conteúdo Principal */}
              <Box>
                <Text
                  fontSize="md"
                  color="gray.700"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                  sx={{
                    "& strong": {
                      fontWeight: "bold",
                      color: "#2d5016"
                    }
                  }}
                >
                  {artigo.conteudoCompleto}
                </Text>
              </Box>

              {/* Ações do Artigo */}
              <Box pt={6}>
                <Box w="full" h="1px" bg="gray.200" mb={6} />
                <HStack justify="space-between" align="center">
                  <VStack align="start" spacing={1}>
                    <Text fontSize="sm" color="gray.500">
                      Publicado em {new Date(artigo.dataPublicacao).toLocaleDateString('pt-BR')}
                    </Text>
                    <Text fontSize="xs" color="gray.400">
                      Tempo de leitura: {artigo.tempoLeitura}
                    </Text>
                  </VStack>
                  <HStack spacing={3}>
                    <Button
                      leftIcon={<MdBookmark />}
                      variant="outline"
                      colorScheme="green"
                      size="sm"
                      borderRadius="full"
                      onClick={tratarSalvarArtigo}
                    >
                      Salvar
                    </Button>
                    <Button
                      leftIcon={<MdShare />}
                      bg="linear-gradient(135deg, #48742c 0%, #5d8f3a 100%)"
                      color="white"
                      size="sm"
                      borderRadius="full"
                      _hover={{
                        bg: "linear-gradient(135deg, #3a5e23 0%, #48742c 100%)"
                      }}
                      onClick={tratarCompartilhar}
                    >
                      Compartilhar
                    </Button>
                  </HStack>
                </HStack>
              </Box>
            </VStack>
          </Box>
        </Box>

        {/* Botão Voltar */}
        <Box textAlign="center" mt={8}>
          <Button
            onClick={tratarVoltar}
            variant="outline"
            colorScheme="green"
            size="lg"
            borderRadius="full"
            px={8}
            _hover={{
              bg: "#48742c",
              color: "white",
              borderColor: "#48742c"
            }}
          >
            Voltar aos Artigos
          </Button>
        </Box>
      </Container>
    </Flex>
  );
}
