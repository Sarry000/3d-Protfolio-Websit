export function Hero() {
  return (
    <section id="home" className="h-screen w-full">
      <div className="absolute inset-0 z-0">
         <iframe 
            src='https://my.spline.design/nexbotrobotcharacterconcept-8YIJtt5hQ3zIUjbhvSbNsUwq/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            title="Interactive 3D robot character"
          ></iframe>
      </div>
      <div className="relative z-10 flex h-full items-end justify-center pb-24">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-white md:text-6xl [text-shadow:0_0_20px_hsl(var(--primary))]">
              SarthakVerse
            </h1>
        </div>
      </div>
    </section>
  );
}
