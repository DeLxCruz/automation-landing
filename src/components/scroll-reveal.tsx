import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Ahorro Energético",
    description:
      "Optimiza el consumo de energía en tu hogar con soluciones inteligentes que te ayudan a reducir costos y minimizar el impacto ambiental.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Seguridad",
    description:
      "Protege lo que más importa con sistemas de seguridad avanzados que ofrecen vigilancia continua y notificaciones instantáneas para tu tranquilidad.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Seguridad
      </div>
    ),
  },
  {
    title: "Confort",
    description:
      "En el mundo de la domótica, el confort es la clave para crear un hogar a medida de tus necesidades. Desde ajustar la temperatura y la iluminación hasta personalizar la música y los ambientes, la domótica te brinda el control total para hacer que cada momento en casa sea perfecto para ti.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Comunicaciones",
    description:
      "En el corazón de la domótica, las comunicaciones conectan tu hogar de manera inteligente y eficiente. Con sistemas integrados de comunicación, puedes estar siempre en contacto con tu hogar, recibir notificaciones importantes y mantener la tranquilidad, incluso cuando estás lejos. Desde videovigilancia hasta control remoto de dispositivos, la domótica hace que tu hogar esté más conectado que nunca.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
