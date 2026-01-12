export default function AboutPage() {
  return (
    <main className="px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">
        About Me
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        I'm a backend-focused developer interested in building
        reliable systems and implementing AI in practical,
        real-world applications.
      </p>

        <p className="mt-4 text-gray-600">
        While I work across the stack, my main focus is on backend
        logic, data modeling, API design, and AI-powered workflows.
        Frontend is a tool for delivering well-structured systems,
        not the end goal.
        </p>

        <p className="mt-4 text-gray-600">
        I'm currently developing <strong>Educativo IA</strong>, an
        AI-powered educational platform. This project has allowed
        me to work on backend architecture, authentication,
        database design, and AI integration using modern tools.
        </p>


      <h2 className="mt-12 text-2xl font-semibold">
        What I work with
      </h2>

      <ul className="mt-4 grid grid-cols-2 gap-2 text-gray-600">
        <li>• Python</li>
        <li>• JavaScript</li>
        <li>• Node.js</li>
        <li>• Next.js</li>
        <li>• TypeScript</li>
        <li>• Git & GitHub</li>
        <li>• Linux & tooling</li>
        <li>• Django</li>
        <li>• Flask</li>
        <li>• REST APIs</li>
        <li>• Supabase (PostgreSQL)</li>
        <li>• OpenAI API</li>
       </ul>

      <h2 className="mt-12 text-2xl font-semibold">
        How I think as a developer
      </h2>

      <p className="mt-4 text-gray-600">
        I care about writing code that is readable,
        maintainable, and easy to reason about. I prefer
        simple solutions that solve real problems instead
        of overengineering.
      </p>

      <p className="mt-4 text-gray-600">
        I’m continuously learning and improving by building
        projects, refactoring my own work, and understanding
        how real-world applications are structured.
      </p>
    </main>
  )
}
