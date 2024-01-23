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
    title: "Hola, ¿Que quieres diseñar hoy?, Nuestra Tarifa es de $10 USD",
    animated: {
        first: "Diseños de alta calidad",
        second: "Te entregamos en menos de 24H",
        third: "Recibes tu pedido y luego pagas",
        fourth: "Miles de entregas desde el 2016",
        fifth: "Instalación del software",
        sixth: "Tarifa plana $10 USD",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "Descubre nuestro talento, haz click aqui ↓↓↓",
    your_img_url: me,
};

const dataabout = {
    title: "Quienes somos",
    aboutme: "En TusBordados.com, fusionamos la artesanía del bordado con tecnología punta. Nos destacamos por la calidad y la creatividad, transformando tus ideas en obras maestras visuales. Ofrecemos servicios de diseño personalizado, bordados de alta precisión y la instalación experta de software especializado. Cada hilo cuenta una historia, y en nuestro compromiso con la excelencia, creamos experiencias visuales únicas y duraderas. Únete a nosotros en el arte de convertir visiones en realidad.",
};
const worktimeline = [{
        jobtitle: "Example 1",
        where: "Google",
        date: "2023",
    },
    {
        jobtitle: "Example 2",
        where: "Micosoft",
        date: "2022",
    },
    {
        jobtitle: "Example 3",
        where: "Meta",
        date: "2021",
    },
];

const skills = [{
        name: "Python",
    },
    
    {
        name: "C",
    },
    
    {
        name: "Java",
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
    {
        img: imagen12,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
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