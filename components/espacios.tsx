import { BedDouble, Bath, ChefHat, Car, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const espacios = [
  {
    icon: BedDouble,
    title: "Recámara principal + 2 secundarias",
    description:
      "Recámara principal con aire acondicionado y amplio walk-in clóset; dos recámaras secundarias, cada una con clóset.",
  },
  {
    icon: Bath,
    title: "2 baños completos + medio baño",
    description:
      "Dos baños completos y un medio baño para visitas, distribuidos para la comodidad de toda la familia.",
  },
  {
    icon: ChefHat,
    title: "Cocina integral con isla central",
    description:
      "Cubiertas de granito y amplia sala-comedor con excelente iluminación natural, ideal para convivir en familia.",
  },
  {
    icon: Car,
    title: "Patio amplio + estacionamiento para 3 autos",
    description:
      "Patio perfecto para reuniones, niños o mascotas, más estacionamiento para hasta 3 vehículos.",
  },
  {
    icon: ShieldCheck,
    title: "Fraccionamiento privado con seguridad 24h",
    description:
      "Acceso controlado, seguridad 24 horas y área de juegos infantiles, en una comunidad tranquila y de excelente nivel.",
  },
]

export function Espacios() {
  return (
    <section id="espacios" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-800 sm:text-4xl">
            110 m² construidos, pensados para tu familia
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Una casa de 3 recámaras en 140 m² de terreno, dentro de un
            fraccionamiento privado con acceso controlado.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {espacios.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full gap-5 rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
