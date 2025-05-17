const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="relative flex h-full min-h-[400px] w-full flex-col items-center justify-center gap-[1.38rem] bg-[url('/images/about-us/image7.webp')] bg-cover bg-center bg-no-repeat text-[1.5rem] leading-[110%]"
    >
      <div className="absolute inset-0 bg-black/50" />
      <h1 className="absolute z-10 w-full text-center font-playfair text-5xl leading-[80%] text-white md:text-[4.75rem]">
        Table Booking
      </h1>
    </section>
  );
};

export default Hero;
