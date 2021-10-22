exports.createPages = ({ actions }) => {
    
    const { createPage } = actions
  
    const serviciosData = [
      {
        name: `DEPILACIÓN`,
        slug: `depilacion`,
        tratamiento: `depilacion`,
        position:  1,
        altText: 'depilacion',
        src: '/images/slider/tratamientos/depilacion/depilacion.jpg'
      },
      {
        name: `NUTRICIÓN`,
        slug: `nutricion`,
        tratamiento: `nutricion`,
        position:  1,
        altText: 'nutricion',
        src: '/images/slider/tratamientos/nutricion/nutricion.jpg'
      },
      {
        name: `POST-OPERATORIO`,
        slug: `post-operatorio`,
        tratamiento: `corporales`,
        position:  1,
        altText: 'corporales',
        src: '/images/slider/tratamientos/corporales/post-operatorio.jpg'
      },
      {
        name: `REAFIMANTE CORPORAL`,
        slug: `reafirmante-corporal`,
        tratamiento: `corporales`,
        position:  2,
        altText: 'reafirmante-corporal',
        src: '/images/slider/tratamientos/corporales/reafirmante-corporal.jpg'
      },
      {
        name: `ANTICELULÍTICO`,
        slug: `anticelulitico`,
        tratamiento: `corporales`,
        position:  3,
        altText: 'anticelulitico',
        src: '/images/slider/tratamientos/corporales/anticelulitico.jpg'
      },
      {
        name: `REDUCTIVO DE BRAZOS`,
        slug: `reductivo-de-brazos`,
        tratamiento: `corporales`,
        position:  4,
        altText: 'reductivo-de-brazos',
        src: '/images/slider/tratamientos/corporales/reductivo-de-brazos.jpg'
      },
      {
        name: `GLÚTEOS PERFECTOS`,
        slug: `gluteos-perfectos`,
        tratamiento: `corporales`,
        position:  5,
        altText: 'gluteos-perfectos',
        src: '/images/slider/tratamientos/corporales/gluteos-perfectos.jpg'
      },
      {
        name: `CRIOLIPÓSIS`,
        slug: `criolipolisis`,
        tratamiento: `corporales`,
        position:  6,
        altText: 'criolipolisis',
        src: '/images/slider/tratamientos/corporales/criolipolisis.jpg'
      },
      {
        name: `LIPO SIN CIRUGÍA`,
        slug: `lipo-sin-cirugia`,
        tratamiento: `corporales`,
        position:  7,
        altText: 'lipo-sin-cirugia',
        src: '/images/slider/tratamientos/corporales/lipo-sin-cirugia.jpg'
      },
      {
        name: `POST-NATAL`,
        slug: `post-natal`,
        tratamiento: `corporales`,
        position:  8,
        altText: 'post-natal',
        src: '/images/slider/tratamientos/corporales/post-natal.jpg'
      },
      {
        name: `DESCONTRACTURANTE`,
        slug: `descontracturante`,
        tratamiento: `masajes`,
        position:  1,
        altText: 'descontracturante',
        src: '/images/slider/tratamientos/masajes/descontracturante.jpg'
      },
      {
        name: `DRENAJE LINFÁTICO`,
        slug: `drenaje-linfatico`,
        tratamiento: `masajes`,
        position:  2,
        altText: 'drenaje-linfatico',
        src: '/images/slider/tratamientos/masajes/drenaje-linfatico.jpg'
      },
      {
        name: `SUECO`,
        slug: `sueco`,
        tratamiento: `masajes`,
        position:  3,
        altText: 'sueco',
        src: '/images/slider/tratamientos/masajes/sueco.jpg'
      },
      {
        name: `RELAJANTE`,
        slug: `relajante`,
        tratamiento: `masajes`,
        position:  4,
        altText: 'relajante',
        src: '/images/slider/tratamientos/masajes/relajante.jpg'
      },
      {
        name: `LIFTING FACIAL`,
        slug: `lifting-facial`,
        tratamiento: `faciales`,
        position:  1,
        altText: 'lifting-facial',
        src: '/images/slider/tratamientos/faciales/lifting-facial.jpg'
      },
      {
        name: `CUTIS GRASO`,
        slug: `cutis-graso`,
        tratamiento: `faciales`,
        position:  2,
        altText: 'cutis-graso',
        src: '/images/slider/tratamientos/faciales/cutis-graso.jpg'
      },
      {
        name: `REDUCTIVO DE PAPADA`,
        slug: `reductivo-de-papada`,
        tratamiento: `faciales`,
        position:  3,
        altText: 'reductivo-de-papada',
        src: '/images/slider/tratamientos/faciales/reductivo-de-papada.jpg'
      },
      {
        name: `DESPIGMENTANTE`,
        slug: `despigmentante`,
        tratamiento: `faciales`,
        position:  4,
        altText: 'despigmentante',
        src: '/images/slider/tratamientos/faciales/despigmentante.jpg'
      },
      {
        name: `LIMPIEZA FACIAL`,
        slug: `limpieza-facial`,
        tratamiento: `faciales`,
        position:  5,
        altText: 'corporales',
        src: '/images/slider/tratamientos/faciales/limpieza-facial.jpg'
      }
    ]
    const tratamientosData = [
      {
        name: `TRATAMIENTOS CORPORALES`,
        slug: `corporales`,
        position:  1,
        altText: 'corporales',
        src: '/images/slider/tratamientos/corporales.jpg'
      },
      {
        name: `TRATAMIENTOS FACIALES`,
        slug: `faciales`,
        position:  2,
        altText: 'faciales',
        src: '/images/slider/tratamientos/faciales.jpg'
      },
      {
        name: `MASAJES`,
        slug: `masajes`,
        position:  3,
        altText: 'masajes',
        src: '/images/slider/tratamientos/masajes.jpg'
      },
    ]

    serviciosData.forEach(servicio => {
      let servicios = serviciosData;
      createPage({
        path: `/servicios/${servicio.tratamiento}/${servicio.slug}`,
        component: require.resolve(`./src/templates/servicio.js`),
        context: { servicios, servicio },
      })
    })

    tratamientosData.forEach(tratamiento => {
      let tratamientos = tratamientosData;
      createPage({
        path: `/servicios/${tratamiento.slug}`,
        component: require.resolve(`./src/templates/tratamiento.js`),
        context: { tratamientos, tratamiento },
      })
    })
  }
  