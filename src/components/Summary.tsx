import Reaction from '../assets/icons/icon-reaction.svg'
import Memory from '../assets/icons/icon-memory.svg'
import Verbal from '../assets/icons/icon-verbal.svg'
import Visual from '../assets/icons/icon-visual.svg'


export const Summary = () => {
  return (
    <section className="md:w-72 h-full md:h-auto  m-10 flex flex-col justify-between">
        <div>
            <h1 className="text-2xl text-dark-gray-blue font-semibold mb-5">Summary</h1>

            <ul className="flex flex-col gap-3">
                <li className="flex flex-row justify-between bg-light-red/10 p-3 rounded-lg">
                    <div className="flex flex-row items-center gap-3">
                        <Reaction/>
                        <p className="text-light-red font-semibold">Reaction</p>
                    </div>
                    <p className="text-dark-gray-blue/60 font-medium"><span className="text-dark-gray-blue font-semibold">80</span> / 100</p>
                </li>
                <li className="flex flex-row justify-between bg-orangey-yellow/10 p-3 rounded-lg">
                    <div className="flex flex-row items-center gap-3">
                        <Memory/>
                        <p className="text-orangey-yellow font-semibold">Memory</p>
                    </div>
                    <p className="text-dark-gray-blue/60 font-medium"><span className="text-dark-gray-blue font-semibold">92</span> / 100</p>
                </li>
                <li className="flex flex-row justify-between bg-green-teal/10 p-3 rounded-lg">
                    <div className="flex flex-row items-center gap-3">
                        <Verbal/>
                        <p className="text-green-teal font-semibold">Verbal</p>
                    </div>
                    <p className="text-dark-gray-blue/60 font-medium"><span className="text-dark-gray-blue font-semibold">61</span> / 100</p>
                </li>
                <li className="flex flex-row justify-between bg-cobalt-blue/10 p-3 rounded-lg">
                    <div className="flex flex-row items-center gap-3">
                        <Visual/>
                        <p className="text-cobalt-blue font-semibold">Visual</p>
                    </div>
                    <p className="text-dark-gray-blue/60 font-medium"><span className="text-dark-gray-blue font-semibold">72</span> / 100</p>
                </li>
            </ul>
        </div>

        <button className="bg-dark-gray-blue text-white py-2 rounded-full hover:bg-gradient-to-t from-light-royal-blue to-violet-blue">Continue</button>
    </section>
  )
}
