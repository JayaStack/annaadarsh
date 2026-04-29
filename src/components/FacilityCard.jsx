export default function FacilityCard({ title, image, description }) {
  return (
    <article className="group relative snap-start shrink-0 w-[82vw] sm:w-[320px] lg:w-[250px] xl:w-[270px] h-[240px] rounded-xl overflow-hidden bg-slate-900 transition-all duration-300 hover:scale-[1.05] hover:brightness-110">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-x-0 bottom-0 p-5 text-white z-10">
        <h4 className="text-xl font-semibold tracking-wide">{title}</h4>
        {description ? (
          <p className="mt-2 text-sm text-white/80 leading-6 max-w-[26ch]">
            {description}
          </p>
        ) : null}
      </div>
    </article>
  );
}