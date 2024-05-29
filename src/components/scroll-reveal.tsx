import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Ahorro Energético",
    description:
      "La domótica optimiza el consumo de energía al regular inteligentemente el uso de dispositivos en el hogar. Desde ajustar la temperatura según la ocupación hasta apagar luces automáticamente, reduce el desperdicio y los costos eléctricos.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Seguridad",
    description:
      "Con sistemas de vigilancia inteligente y alarmas conectadas, la domótica protege tu hogar. Los sensores de intrusión y las cerraduras electrónicas garantizan tu tranquilidad, mientras que el monitoreo remoto te permite actuar rápidamente ante cualquier amenaza.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Seguridad
      </div>
    ),
  },
  {
    title: "Confort",
    description:
      "La domótica crea un ambiente personalizado y acogedor. Desde el control de la temperatura y la iluminación hasta la reproducción de música, adapta tu hogar a tus preferencias individuales para mejorar tu calidad de vida.",
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
