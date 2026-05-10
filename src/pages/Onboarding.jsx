export default function Onboarding() {
  return (
    <main className="min-h-screen bg-[#06162B] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="font-black text-[#168DFF]">
          ← Back to Summit Web Co.
        </a>

        <div className="mt-12 text-center">
          <div className="text-6xl text-[#168DFF]">▲</div>

          <p className="mt-6 font-black uppercase tracking-[0.35em] text-[#168DFF]">
            Client Onboarding
          </p>

          <h1 className="mt-5 text-4xl font-black md:text-6xl">
            Let’s get your project started.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Fill this out so we can understand your business, goals, content,
            and what needs to be built.
          </p>
        </div>

        <form
          name="onboarding"
          method="POST"
          action="/success.html"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-8"
        >
          <input type="hidden" name="form-name" value="onboarding" />

          <p hidden>
            <input name="bot-field" />
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Your Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone Number" name="phone" />
            <Field label="Business Name" name="business" required />
            <Field label="Current Website" name="currentWebsite" />
            <Field label="Business Location" name="location" />

            <Select
              label="Project Type"
              name="projectType"
              options={[
                "New Website",
                "Website Redesign",
                "Landing Page",
                "Branding",
                "SEO / Marketing",
                "Custom Project",
              ]}
            />

            <Select
              label="Timeline"
              name="timeline"
              options={[
                "ASAP",
                "1-2 weeks",
                "2-4 weeks",
                "1-2 months",
                "Not sure yet",
              ]}
            />

            <TextArea
              label="What does your business do?"
              name="businessDescription"
              required
            />

            <TextArea
              label="What are your main goals for this project?"
              name="goals"
              required
            />

            <TextArea
              label="What services or products should be featured?"
              name="services"
            />

            <TextArea
              label="Who are your ideal customers?"
              name="customers"
            />

            <TextArea
              label="Do you have brand colors, logo, photos, or content ready?"
              name="assets"
            />

            <TextArea
              label="List 2-3 websites you like and why."
              name="inspiration"
            />

            <TextArea
              label="Any competitors we should look at?"
              name="competitors"
            />

            <TextArea
              label="Anything else we should know?"
              name="notes"
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-[#168DFF] px-8 py-4 font-black text-white shadow-[0_20px_70px_rgba(22,141,255,0.35)] transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Submit Onboarding Form →
          </button>
        </form>
      </div>
    </main>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-black uppercase tracking-widest text-white/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-white/35 focus:border-[#168DFF]"
      />
    </div>
  );
}

function Select({ label, name, options }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-black uppercase tracking-widest text-white/70">
        {label}
      </label>
      <select
        name={name}
        className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none focus:border-[#168DFF]"
      >
        <option className="text-black" value="">
          Select one
        </option>
        {options.map((option) => (
          <option key={option} className="text-black">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextArea({ label, name, required = false }) {
  return (
    <div className="md:col-span-2">
      <label className="mb-2 block text-sm font-black uppercase tracking-widest text-white/70">
        {label}
      </label>
      <textarea
        name={name}
        required={required}
        rows="5"
        className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-white outline-none placeholder:text-white/35 focus:border-[#168DFF]"
      />
    </div>
  );
}