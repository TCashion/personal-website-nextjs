export const LearningGolang = () => {
  return (
    <div className="container">
      <div className="page-title">
        <div>
          <h1>What I Learned from Learning GoLang</h1>
          <h4>November 3, 2022</h4>
        </div>
      </div>
      <div className="divider"></div>

      <div className="prose-container">
        <p className="prose">
          I'm now a few years into my journey as a programmer. As a bootcamp
          grad, I began my coding journey with web-development languages: HTML,
          CSS, JavaScript. Then, I branched out to Python for some extra backend
          flavor. Tinkering with these dynamically typed languages helped me
          grow immensely as a developer. They brought me from, well,{' '}
          <span className="italic">zero</span> to a full-time professional
          engineer. But recently, I had the opportunity to learn my first
          compiled language: Go.{' '}
        </p>
        <p className="prose">
          The contrast between Go and the other languages I've worked with
          taught me some really valuable lessons.{' '}
        </p>
        <p className="prose">
          To start, Go is a compiled language, which also means it is a
          statically typed language. When a Go application runs its build step,
          the compiler checks types at build time. If something is not right,
          the build will fail with an error message describing the issue,
          thereby blocking you from even deploying until certain bugs are fixed.
          This is in contrast to dynamically-typed languages, which perform type
          checking done at runtime rather than at build time.
        </p>
        <p className="prose">
          Since dynamic languages don't catch a lot of bugs during the build
          process, this difference can make apps written in dynamic languages a
          bit (or a lot) less reliable and more prone to bugs. Though there are
          some workarounds (Typescript in Javascript; type{' '}
          <a href="https://medium.com/towards-data-science/how-to-make-python-statically-typed-the-essential-guide-e087cf4fa400">
            hints
          </a>{' '}
          in Python), the extent to which statically typed languages like Go
          require type declarations{' '}
          <span className="italic">while you're writing the code</span> makes
          life much easier. Refactoring is a relative breeze and much safer when
          the machine is checking your work. You don't get that without good
          typing.{' '}
        </p>
        <p className="prose">
          The compiled nature of Go also means that it runs a step closer to the
          machine. There’s no need for an engine to interpret the code for your
          machine’s processor line-by-line at runtime. This makes for much
          faster and much more efficient computation than you would get from an
          interpreted language.
        </p>
        <p className="prose">
          In addition to types, there are plenty more opinionated, idiomatic
          conventions that are designed to make developers’ lives easier when
          they come back to read the code. For example, Go does not throw
          errors. So, errors needs to either be checked and handled in every
          instance, or intentionally ignored with the conventional underscore.
          And that’s just scratching the surface. By being opinionated on
          conventions like this, Go strives to be{' '}
          <span className="italic">boring</span>. Boring code is synonymous to
          easier-to-understand, uncoupled, human-readable code. This must be
          worth something, because there’s a big community around Go, and plenty
          of resources available for new folks to learn how to get started with
          Go. Here are just a few resources:{' '}
        </p>
        <ul className="list-disc list-inside">
          <li>https://gobyexample.com/</li>
          <li>
            https://go.dev/, which includes a nifty Go{' '}
            <a href="https://go.dev/play/">playground</a>
          </li>
          <li>
            The GO GitHub <a href="https://github.com/golang/go">repository</a>
          </li>
          <li>Tons o’ books (just google “Golang books”)</li>
        </ul>
        <p className="prose">
          And, there’s so much more out there. The rabbit hole goes deep with
          this language… Go has idiomatic approaches to concepts like data
          structures, concurrency, routines, channels, and more. But, we’ll save
          the rest for another post!{' '}
        </p>
      </div>
    </div>
  );
};
