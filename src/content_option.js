const logotext = "Inicio";
import me from '.././src/assets/logo.jpg'
import imagen1 from '.././src/assets/imagen1.jpg'
import imagen2 from '.././src/assets/imagen2.jpg'
import imagen3 from '.././src/assets/imagen3.jpg'
import imagen4 from '.././src/assets/imagen4.jpg'
import imagen5 from '.././src/assets/imagen5.jpg'
import imagen6 from '.././src/assets/imagen6.jpg'
import imagen7 from '.././src/assets/imagen7.jpg'
import imagen8 from '.././src/assets/imagen8.jpg'
import imagen9 from '.././src/assets/imagen9.jpg'
import imagen10 from '.././src/assets/imagen10.jpg'
import imagen11 from '.././src/assets/imagen11.jpg'
import imagen12 from '.././src/assets/imagen12.png'



const meta = {
    title: "Tus Bordados.com",
    description: 
    "Del hilo a la pantalla, creamos arte con aguja y código.",
};

const introdata = {
    title: "Hola, ¿Que quieres diseñar hoy?, Nuestros precios son desde $7 USD",
    animated: {
        first: "Diseños de alta calidad",
        second: "Te entregamos en menos de 24H",
        //third: "Recibes tu pedido y luego pagas",
        fourth: "Miles de entregas desde el 2016",
        fifth: "Instalación del software",
        sixth: "Precios desde solo $7 USD por diseño",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "Descubre nuestro talento, haz click aqui ↓↓↓",
    your_img_url: me,
};

const dataabout = {
    title: "Servicios",
    aboutme: "Disponibles en toda América Latina. Nuestros software está garantizados bajo la proteccion de TusBordados.com en un plazo no mayor a 90 días, salvo pocas excepciones",
};
const worktimeline = [{
        jobtitle: "Instalación",
        where: "Realizamos Instalación por Team View",
        date: "Actualizado",
    },
    {
        jobtitle: "Mantenimiento",
        where: "Cada Actualización se debe realizar mantenimiento",
        date: "6 meses",
    },
    {
        jobtitle: "Garantía",
        where: "Meta",
        date: "90 Días",
    },
];

const skills = [{
        name: "Wilcom 4.3-2",
    },
    
    {
        name: "Opitex 2.3 2",
    },
    
    {
        name: "Corel Draw (Todas las versiones)",
    },
    
    {
        name: "Bash",
    },

    {
        name: "Powershell",
    },

    {
        name: "Reverse Engineering",
    },

    {
        name: "Web-Exploitation",
    },

    {
        name: "Network Exploitation",
    },
];

const dataportfolio = [{
        img: imagen1,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: imagen2,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: imagen3,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: imagen4,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: imagen5,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: imagen6,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: imagen7,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: imagen8,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: imagen9,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: imagen10,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: imagen11,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    // {
    //     img: imagen12,
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "tusbordados.com.co@gmail.com",
    description: "Queremos saber de tí, Escribenos aquí!!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "tusbordados",
    YOUR_TEMPLATE_ID: "template_sf0cte7",
    YOUR_USER_ID: "Gs3Pjfem3FWM8bpx7",
};

const socialprofils = {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};