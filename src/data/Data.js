import Templateimg from "../assets/template.png";
import Dsfimg from "../assets/dsf.png";
import Yummyimg from "../assets/yummy.png";
import cfsImg from "../assets/cfs.png";
import west from "../assets/9900west.png";
import westMobile from "../assets/westmobile.png";
import templateMobile from "../assets/templatemobile.png";
import dsfMobile from "../assets/dsfmobile.png";
import yummyMobile from "../assets/yummymobile.png";
import cfsMobile from "../assets/cfsmobile.png";


const proyectos = [
    {
      nombre: '9900West',
      id: 1,
      url: 'https://9900west.com/newsite/',
      descripcion: 'Project carried out for a U.S.-based company specializing in residential services, showcasing a new building in Miami. It is a website with 7 internal pages, and WordPress in conjunction with Elementor PRO was used for the layout.',
      imagen: west,
      imagenMobile: westMobile
    },
    {
      nombre: 'Template de Agencias',
      id: 2,
      url: 'https://templates.happyagencies.com/landing-pages/agencies',
      descripcion: 'Project created in HubSpot for a functional template designed for marketing agencies. It involved the use of HTML, CSS, and HubL (a language specific to the HubSpot platform that provides all the necessary functional aspects).',
      imagen: Templateimg,
      imagenMobile: templateMobile
    },
    {
      nombre: 'Diamond Sports Foundation',
      id: 3,
      url: 'https://thediamondsportsfoundation.org/',
      descripcion: 'This project was dedicated to a U.S. sports foundation. This landing page was developed in WordPress using Elementor as a plugin for the layout.',
      imagen: Dsfimg,
      imagenMobile: dsfMobile
    },
    {
      nombre: 'Yummy Marketing',
      id: 4,
      url: 'https://www.yummymarketing.com/',
      descripcion: 'Project carried out for a U.S. digital marketing agency, which offers various services such as SEO, PPC, Social Advertising, among others. The website was developed in WordPress, featuring over 7 internal pages, including a functional and automated Blog. Elementor PRO was used as a plugin for the layout, in conjunction with Crocoblock plugins to provide additional functionality.',
      imagen: Yummyimg,
      imagenMobile: yummyMobile
    },
    {
      nombre: 'Certified Fleet Services',
      id: 5,
      url: 'https://www.certifiedfleetservices.com/',
      descripcion: 'Project dedicated to a U.S. fleet vehicle services company. The website was developed in WordPress, featuring over 12 internal pages, including a Blog and a dedicated page for hiring employees, with job listings and the ability to apply for them. Elementor PRO was used as a plugin for the layout, in conjunction with Crocoblock plugins to provide additional functionality.',
      imagen: cfsImg,
      imagenMobile: cfsMobile
    },
    
  ]

  export default proyectos;