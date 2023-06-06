
export const Score = () => {
  return (
    <section className="bg-gradient-to-t from-light-royal-blue to-violet-blue md:rounded-3xl rounded-b-3xl text-center flex items-center flex-col md:py-10 md:px-20 py-5 px-10">
      <h2 className="text-light-lavender font-medium text-2xl mb-6">Your Result</h2>
      <div className="mb-8 rounded-full bg-gradient-to-t from-plae-blue/5 to-dark-gray-blue/40 w-40 h-40 flex justify-center items-center flex-col">
        <p className="text-6xl font-bold text-white">76</p>
        <span className="text-light-lavender">of 100</span>
      </div>

      <div>
        <h1 className="text-white font-semibold text-2xl mb-2">Great</h1>
        <p className="font-light text-light-lavender w-56">You scored higher than 65% of the people who have taken these test.</p>
      </div>
    </section>
  )
}
