import { Request, Response } from 'express';
import { loremIpsum } from 'lorem-ipsum';

const lorem = (req: Request, res: Response) => {
  res.send(
    loremIpsum({
      count: 3,
      format: 'html',
      paragraphLowerBound: 3,
      paragraphUpperBound: 7,
      random: Math.random,
      sentenceLowerBound: 5,
      sentenceUpperBound: 15,
      suffix: '\n',
      units: 'paragraph',
    }),
  );
};

const about = (req: Request, res: Response) => {
  res.send('Sobre!');
};

const hb1 = (req: Request, res: Response) => {
  res.render('main/hb1', {
    mensagem: 'Olá, você está aprendendo Express + HBS!',
  });
};

const hb2 = (req: Request, res: Response) => {
  res.render('main/hb2', {
    poweredByNodejs: true,
    name: 'Express',
    type: 'Framework',
  });
};

const hb3 = (req: Request, res: Response) => {
  const profs = [
    {
      nome: 'Barreto',
      sala: 1300,
    },
    {
      nome: 'David',
      sala: 1301,
    },
    {
      nome: 'Elaine',
      sala: 1302,
    },
    {
      nome: 'Juan',
      sala: 1303,
    },
  ];

  res.render('main/hb3', { profs });
};

const hb4 = function (req: Request, res: Response) {
  const technologies = [
    { name: 'Express', type: 'Framework', poweredByNodejs: true },
    { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
    { name: 'React', type: 'Library', poweredByNodejs: true },
    { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
    { name: 'Django', type: 'Framework', poweredByNodejs: false },
    { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
    { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
  ];
  res.render('main/hb4', { technologies });
};

const index = (req: Request, res: Response) => {
  res.render('/', { layout: 'hb2' });
};

const paginaComImagem = (req: Request, res: Response) => {
  res.render('main/paginaComImagem')
}

const ui = (req: Request, res: Response) => {
  res.render('main/ui')
}

export default { lorem, about, hb1, hb2, hb3, hb4, index, paginaComImagem,ui };
