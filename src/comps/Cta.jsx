import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cta } from "../constants";

const Cta = () => {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#111] font-body text-white">
      {/* Background */}
      <div
        style={{
          backgroundImage: `url(${cta.image}), linear-gradient(160deg,#1f3d2b,#0b0e10)`,
        }}
        className="absolute inset-0 -z-10 bg-cover bg-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center sm:py-28 lg:py-36">
        <h2 className="animate-fade-up text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {cta.title}
        </h2>

        <p className="mt-5 max-w-xl animate-fade-up text-sm leading-relaxed text-white/80 [animation-delay:150ms] sm:text-base">
          {cta.text}
        </p>

        <form
          onSubmit={submit}
          className="mt-8 flex w-full max-w-lg animate-fade-up flex-col gap-3 [animation-delay:300ms] sm:mt-10 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder={cta.placeholder}
            className="min-w-0 flex-1 rounded-full bg-white px-6 py-3.5 text-sm text-neutral-900 outline-none ring-2 ring-transparent transition placeholder:text-neutral-500 focus:ring-green-400"
          />
          <button
            type="submit"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/20 bg-[#1e2430] px-7 py-3.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:border-green-400 hover:bg-green-400 hover:text-black"
          >
            {sent ? "Subscribed ✓" : cta.button}
            {!sent && <ArrowRight size={16} />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Cta;
