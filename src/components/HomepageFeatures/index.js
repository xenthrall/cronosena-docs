import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gestión Inteligente de Formación',
    Svg: require('@site/static/img/crono-mountains.svg').default,
    description: (
      <>
        CronoSENA centraliza la planificación académica del SENA, optimizando la
        asignación de instructores y fichas para lograr una gestión
        precisa y eficiente.
      </>
    ),
  },
  {
    title: 'Creado para la Comunidad SENA',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Pensado para coordinadores, instructores y personal administrativo,
        CronoSENA facilita la organización académica y fomenta la colaboración entre
        todos los actores de la formación profesional.
        Una herramienta hecha por aprendices, para el fortalecimiento de la comunidad educativa.
      </>
    ),
  },
  {
    title: 'Potenciado por Tecnología Moderna',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Desarrollado con <b>Laravel</b> y <b>Filament</b>, CronoSENA combina la
        estabilidad del backend con la flexibilidad del frontend, ofreciendo una
        experiencia fluida, segura y escalable.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        <div className="text--center margin-top--lg">
          <p>¡Explora todas las funcionalidades de CronoSENA!</p>
          <a
            className="button button--primary button--lg"
            href="https://cronosena.site" 
            target=""
            rel="noopener noreferrer"
          >
            Ir al sistema
          </a>
        </div>
      </div>
    </section>
  );
}
