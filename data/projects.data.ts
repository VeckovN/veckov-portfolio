// import GrowviaImage from "@/public/images/Projects/Growvia/GrowviaFirst.png";
import GrowviaImage from "@/public/images/Projects/Growvia/Growvia.png";
import HomeAssistantImage from "@/public/images/Projects/HomeAssistant/HomeAssistant.png";
import FreshOrderImage from "@/public/images/Projects/FreshOrder/FreshOrder.png";

import TSIcon from "@/public/images/TechIcons/typescript.svg";
import ReactIcon from "@/public/images/TechIcons/react.svg";
import NodejsIcon from "@/public/images/TechIcons/nodejs.svg";
import ExpressIcon from "@/public/images/TechIcons/expressjs.svg";
import RabbitmqIcon from "@/public/images/TechIcons/RabbitMQ.svg";
import DockerIcon from "@/public/images/TechIcons/docker.svg";
import KubernetesIcon from "@/public/images/TechIcons/kubernetes.svg";

import ReduxIcon from "@/public/images/TechIcons/redux.svg";
import SassIcon from "@/public/images/TechIcons/sass.svg";
import SocketIcon from "@/public/images/TechIcons/socketio.svg";
import Neo4jIcon from "@/public/images/TechIcons/neo4j.svg";
import RedisIcon from "@/public/images/TechIcons/redis.svg";
import MongodbIcon from "@/public/images/TechIcons/mongodb.svg";

export const projects = [
    {
        title: "Growvia",
        slug: "growvia",
        subTitle: "Microservice with Event Driven Design",
        shortDesc:
            "A modern multi-vendor e-commerce marketplace connecting local farmers with consumers.",
        techList: [
            { name: "TypeScript", icon: TSIcon },
            { name: "React", icon: ReactIcon },
            { name: "Node.js", icon: NodejsIcon },
            { name: "Express", icon: ExpressIcon },
            { name: "RabbitMQ", icon: RabbitmqIcon },
            { name: "Docker", icon: DockerIcon },
            { name: "Kubernetes", icon: KubernetesIcon },
        ],
        techMoreCount: 10,
        projectSource:"Personal",
        categoryList: ["Full-Stack", "Design"],
        listTitle: "What Makes Growvia Special?",
        listItems: [
            { 
                listName: "Multi-Vendor Support", 
                listContet: "Multiple farmers can list products independently" 
            },
            { 
                listName: "Order Management", 
                listContet: "Complete order lifecycle with farmer approval workflow" 
            },
            { 
                listName: "Smart Search", 
                listContet: "Elasticsearch-powered advanced filtering" 
            },
            { 
                listName: "Secure Payments", 
                listContet: "PCI-compliant payment processing with Stripe" 
            },
        ],
        image: GrowviaImage,
        githubUrl:"https://github.com/VeckovN/GrowVia",
        liveUrl:"",
    },

    {
        title: "HomeAssistant",
        slug: "homeassistant",
        subTitle: "Real-time job-matching platform",
        shortDesc: "Clients and houseworkers connect instantly using live chat and filtering.",
        techList: [
            { name: "React", icon: ReactIcon },
            { name: "Redux", icon: ReduxIcon },
            { name: "Sass", icon: SassIcon },
            { name: "Node.js", icon: NodejsIcon },
            { name: "Express", icon: ExpressIcon },
            { name: "Socket.io", icon: SocketIcon },
            { name: "Neo4j", icon: Neo4jIcon },
            { name: "Redis", icon: RedisIcon },
        ],
        projectSource:"Personal",
        categoryList: ["Full-Stack", "Design"],
        listTitle: "What Makes HomeAssistant Special?",
        listItems: [
            {
                listName: "Real-Time Chat",
                listContet: "Instant messaging with live presence and typing indicators"
            },
            {
                listName: "Smart Recommendations",
                listContet: "Graph-based worker suggestions using Neo4j relationships"
            },
            {
                listName: "Advanced Filtering",
                listContet: "Fast, multi-criteria filtering powered by Redis caching"
            },
            {
                listName: "Dynamic Rooms",
                listContet: "Automatic chat room creation and activity tracking"
            }
        ],
        image: HomeAssistantImage,
        githubUrl:"https://github.com/VeckovN/HomeAssistant",
        liveUrl:"https://homeassistantapp.netlify.app/"
    },

    {
        title: "FreshOrder",
        slug: "freshorder",
        subTitle: "Food ordering system with admin panel",
        shortDesc: "A full-stack food ordering app with client ordering and admin management..",
        techList: [
            { name: "React", icon: ReactIcon },
            { name: "Redux", icon: ReduxIcon },
            { name: "Node.js", icon: NodejsIcon },
            { name: "Express", icon: ExpressIcon },
            { name: "MongoDB", icon: MongodbIcon },
        ],
        projectSource:"Personal",
        categoryList: ["Full-Stack", "Design"],
        listTitle: "What Makes FreshOrder Special?",
        listItems: [
            {
                listName: "End-to-End Ordering",
                listContet: "From product browsing to order placement and tracking"
            },
            {
                listName: "Role-Based Access",
                listContet: "JWT-secured client and admin workflows"
            },
            {
                listName: "Admin Control Panel",
                listContet: "Manage products, orders, and users in one place"
            },
            {
                listName: "Order Notifications",
                listContet: "Email confirmations with delivery status updates"
            }
        ],
        image: FreshOrderImage,
        githubUrl:"https://github.com/VeckovN/FreshOrder",
        liveUrl:"https://freshorderapp.netlify.app/"
    },
];