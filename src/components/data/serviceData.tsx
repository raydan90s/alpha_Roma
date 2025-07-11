import { Scale, Users, Building, Gavel, Gem, SquareDashedBottom} from 'lucide-react';

export const services = [
  {
    id: 1,
    title: "Registro de Marca",
    description: "Protección y registro de marcas comerciales para resguardar tu propiedad intelectual.",
    icon: <Gem className="text-2xl" />,
    href: "/registro-de-marca",
  },
  {
    id: 2,
    title: "Servicios Legales para Compañías",
    description: "Asesoría integral para empresas, constitución, contratos y cumplimiento normativo.",
    icon: <Building className="text-2xl" />,
    href: "/servicios-legales",
  },
  {
    id: 3,
    title: "Consultas Legales y Juicios",
    description: "Asesoría legal especializada y representación en procesos judiciales.",
    icon: <Scale className="text-2xl" />,
    href: "/consultas-legales",
  },
  {
    id: 4,
    title: "Disoluciones y Liquidaciones de Compañías",
    description: "Procesos de cierre y liquidación de empresas conforme a la normativa vigente.",
    icon: <Gavel className="text-2xl" />,
    href: "/disolucion-liquidacion",
  },
  {
    id: 5,
    title: "Inmigración Legal a Estados Unidos",
    description: "Asesoría especializada en procesos migratorios y documentación para Estados Unidos.",
    icon: <Users className="text-2xl" />,
    href: "/inmigracion-legal",
  },
  {
    id: 6,
    title: "Constitución de SAS",
    description: "Asesoría legal para la constitución de sociedades por acciones simplificadas (SAS), cumpliendo con los requisitos legales vigentes.",
    icon: <SquareDashedBottom className="text-2xl" />,
    href: "/constitucion-sas",
  }
];