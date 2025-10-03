export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  credit?: string;
  tags?: string[];
};

export const photos: Photo[] = [
  {
    id: 'cover',
    src: '/images/vencedores/cover-vencedores-2.jpg',
    width: 844,
    height: 861,
    alt: 'Logo Vencedores II sobre fundo preto com tipografia dourada',
    caption: 'Vencedores II — Winners 2',
    credit: 'Vencedores II',
    tags: ['Capa', 'Institucional']
  },
  {
    id: 'goalball-01',
    src: '/images/vencedores/goalball-defesa.jpg',
    width: 1600,
    height: 1066,
    alt: 'Atleta de goalball se estica em defesa com bola azul em quadra',
    caption: 'Defesa no goalball',
    credit: 'Vencedores II',
    tags: ['Goalball', 'Quadra', 'Ação']
  },
  {
    id: 'atletismo-dardo-01',
    src: '/images/vencedores/atletismo-lancamento-dardo.jpg',
    width: 1600,
    height: 1066,
    alt: 'Paratleta no momento do lançamento de dardo',
    caption: 'Lançamento de dardo',
    credit: 'Vencedores II',
    tags: ['Atletismo', 'Campo', 'Dardo']
  },
  {
    id: 'tenis-mesa-01',
    src: '/images/vencedores/paratleta-tenis-mesa.jpg',
    width: 1600,
    height: 972,
    alt: 'Paratleta executa golpe no tênis de mesa em ginásio lotado',
    caption: 'Impacto no tênis de mesa — Paris 2024',
    credit: 'Vencedores II',
    tags: ['Tênis de Mesa', 'Paris 2024', 'Indoor']
  },
  {
    id: 'parataekwondo-01',
    src: '/images/vencedores/parataekwondo-chute-voador.jpg',
    width: 1600,
    height: 1066,
    alt: 'Paratleta de taekwondo executa chute no ar em treino',
    caption: 'Explosão no parataekwondo',
    credit: 'Vencedores II',
    tags: ['ParaTaekwondo', 'Treino', 'Ação']
  },
  {
    id: 'esgrima-cadeira-01',
    src: '/images/vencedores/esgrima-em-cadeira-toque.jpg',
    width: 1600,
    height: 1066,
    alt: 'Toque de lâmina entre esgrimistas em cadeira de rodas',
    caption: 'Toque decisivo na esgrima em cadeira de rodas',
    credit: 'Vencedores II',
    tags: ['Esgrima em Cadeira', 'Arena', 'Duelos']
  },
  {
    id: 'tenis-cadeira-01',
    src: '/images/vencedores/tenis-cadeira-quadra-verde.jpg',
    width: 1600,
    height: 1066,
    alt: 'Tenista em cadeira executa forehand em quadra verde',
    caption: 'Amplitude no forehand',
    credit: 'Vencedores II',
    tags: ['Tênis em Cadeira', 'Quadra', 'Ação']
  },
  {
    id: 'atletismo-largada-guias-01',
    src: '/images/vencedores/atletismo-guia-largada.jpg',
    width: 1600,
    height: 1066,
    alt: 'Atletas e guias alinhados para prova de atletismo',
    caption: 'Concentração na largada',
    credit: 'Vencedores II',
    tags: ['Atletismo', 'Pista', 'Guias']
  },
  {
    id: 'arco-01',
    src: '/images/vencedores/paraarco-competicao.jpg',
    width: 1600,
    height: 1066,
    alt: 'Paraatleta mira com arco composto diante de fundo verde',
    caption: 'Precisão no paratir com arco',
    credit: 'Vencedores II',
    tags: ['Tiro com Arco', 'Foco', 'Composto']
  },
  {
    id: 'lancamento-disco-01',
    src: '/images/vencedores/lancamento-disco-arremesso-sentado.jpg',
    width: 1600,
    height: 1066,
    alt: 'Paraatleta realiza arremesso de disco em cadeira com rede ao fundo',
    caption: 'Potência no arremesso sentado',
    credit: 'Vencedores II',
    tags: ['Arremesso/Disco', 'Campo', 'Força']
  }
];
