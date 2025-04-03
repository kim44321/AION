import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from "@/components/header";
import Image from "next/image";
export default function Home() {
  return (
    <div className="">
      {/* hero */}
      <section className="bg-black h-screen bg-[url(/images/background.png)] bg-no-repeat bg-cover">
        <Header />
        <div className="container m-auto mt-20">
          <div className="flex flex-col gap-4 mb-4 ">
            <h1 className="text-8xl text-white font-bold">
              Become <br />
              Legendary
            </h1>
            <p className="lg:max-w-[600px] text-white">
              Dive into endless adventure. Create your Champion, assemble a
              unique deck and a discover new kind of card battler.
            </p>
          </div>
          <button className="font-medium rounded-md px-3 py-2 bg-gradient-to-r from-[#93754D] from-0% via-[#B2986B] via-50% to-[#94764E] to-100% ">
            Register Now
          </button>
        </div>
      </section>
      <section className=" bg-[#121b27]">
        <div className="container m-auto flex justify-center gap-20 pt-30 items-center sm:flex-row">
          <img src="/images/item1.png" alt="" className="h-100 w-auto" />
          <div className="max-w-[500px] flex flex-col gap-5 text-white">
            <p className="text-lg">
              Tired of the same old card games, where the most exciting thing is
              a rare foil card? Well, buckle up - Aion Rising is about to flip
              your world upside down (and maybe inside out, we're still working
              on that feature).
            </p>
            <p className="text-lg">
              We've taken the best bits of hero customization, sprinkled in some
              deck-building magic, and created a card battler that's more
              addictive than grandma's cookies.
            </p>
            <p className="text-lg">
              Ready to start your journey in Cambria? Great! Just remember: the
              fate of an entire magical world rests on your shoulders. No
              pressure.
            </p>
          </div>
        </div>
        <div className=" pt-25 flex flex-col items-center gap-1 ">
          <span className="text-[#B2986B] font-bold">
            WE COULD REALLY USE YOUR HELP
          </span>
          <h1 className="text-white font-bold text-6xl">
            A NEW AGE <br /> OF HEROES
          </h1>
          <p className="text-white text-center pt-3">
            Like most magical realms, Cambria’s in a bind, and not the fun kind.
            <br /> We desperately need brave heroes like you to bail us out of
            our latest calamity.
            <br /> Aion Champions come in three flavors - each as unique as your
            last bad <br /> decision. Choose wisely - Cambria's counting on you.
          </p>
        </div>

        <div className="container flex m-auto gap-20 justify-center pt-6 items-center ">
          <div className="gap-3">
            <h1 className="text-white text-6xl font-bold">RANGER</h1>
            <span className="text-[#B2986B] pt-4 ">
              Flexible in all the right aways
            </span>

            <p className="text-white pt-7 text-bold">
              Turning combat into an art form is the hallmark of the <br />
              adaptable Ranger. They're not just about deadly shots; they're{" "}
              <br /> about controlling the scene. Ranger decks have the highest{" "}
              <br /> utility in the game and are masters of poison and debuffs.
            </p>
            <p className="text-white pt-4">
              Choose Ranger if your idea of fun is multi-turn tactics that pay
              <br />
              deadly dividends.
            </p>
          </div>
          <div>
            <img src="/images/ranger.png" alt="" className="h-100 w-auto" />
          </div>
        </div>

        <div className="flex m-auto justify-center pt-10 gap-20 items-center">
          <div className="">
            <img src="/images/fighter.png" alt="" className="h-100 w-auto" />
          </div>
          <div>
            <h1 className="text-white text-6xl font-bold">FIGHTER</h1>
            <span className="text-[#B2986B] pt-4">
              Brute force with no apologies
            </span>
            <p className="text-white pt-7 ">
              Fighters focus on devastating attacks and impenetrable
              <br /> armor, allowing them to outlast opponents while delivering
              <br /> crushing blows. Fighter spells focus on amplifying damage
              <br /> and enhancing the effectiveness of defence cards.
            </p>
            <p className="text-white pt-4">
              Choose the Fighter if you prefer a direct, no-nonsense <br />
              approach that leaves subtlety at the door.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-20 items-center pt-10">
          <div>
            <h1 className="text-white font-bold text-6xl">MAGE</h1>
            <span className="text-[#B2986B] pt-4">
              Spellcraft and arrogance in equal measure
            </span>
            <p className="text-white pt-7">
              Mages wield an impressive arsenal of spells that can turn the{" "}
              <br /> tide of battle in an instant. Their cards manipulate the
              game <br />
              state, disrupt enemy plans, and unleash explosive bursts of <br />{" "}
              damage. With low defence but unparalleled attack potential,
              <br /> Mages must carefully manage their resources to survive.{" "}
            </p>
            <p className="text-white pt-4">
              Choose the Mage if you enjoy outsmarting opponents and a <br />{" "}
              ‘glass cannon’ playstyle.
            </p>
          </div>
          <div>
            <img src="/images/Mage.png" alt="" className="h-100 w-auto" />
          </div>
        </div>

        <div className=" m-auto flex flex-col pt-30  text-center">
          <span className="text-[#B2986B]">ASSEMBLE AN EPIC COLLECTION</span>
          <h1 className="text-bold text-white text-6xl pt-3">
            CURATE YOUR <br /> DECK
          </h1>
          <p className="text-white pt-5">
            Building a great Deck is not just about finding the best cards, but
            developing a <br />
            synergy between Deck and Champion. Cards can be traded, upgraded and{" "}
            <br />
            even disenchanted, providing maximum flexibility for the player
            experience.
          </p>
        </div>
      </section>
      <section className="bg-black h-screen bg-[url(/images/bg2.png)] bg-cover bg-no-repeat bg-center flex ">
        <div className="pt-20 pl-30 flex m-auto justify-center items-center gap-10">
          <div className="gap-3">
            <h1 className="text-white text-4xl font-bold">Arcanist</h1>
            <span className="text-[#B2986B]">Melee Fighter</span>
            <div className="flex flex-row items-center gap-3">
              <h1 className="text-white font-bold">Rarity</h1>
              <div className="flex flex-row gap-2 items-center">
                <div className="border-1 -skew-x-20 bg-[#93754D] w-7.5 h-7.5"></div>
                <div className="border-1 -skew-x-20 bg-[#93754D] w-7.5 h-7.5"></div>
                <div className="border-1 -skew-x-20 bg-[#93754D] w-7.5 h-7.5"></div>
                <div className="border-1 border-[#93754D] -skew-x-20 bg-transparent w-7.5 h-7.5"></div>
              </div>
            </div>
            <p className="pt-3  text-white">
              The Viking Berserker is a fearsome fighter
              <br /> who wields his axe with deadly precision.
              <br /> He is know for his relentless ferocity and
              <br /> his ability to turn the tide of battle.
            </p>
            <div className="flex flex-row gap-6 pt-8">
              <button className="font-medium rounded-full px-2 py-2 bg-gradient-to-r from-[#93754D] from-0% via-[#B2986B] via-50% to-[#94764E] to-100% "> <ArrowLeft /></button>
              <button className="font-medium rounded-full px-2 py-2 bg-gradient-to-r from-[#93754D] from-0% via-[#B2986B] via-50% to-[#94764E] to-100% "> <ArrowRight/> </button>
              


            </div>
          </div>
          <div className="pl-31 flex flex-row gap-5">
            <img src="/images/arcanist.png" />
            <img src="/images/arcanist.png" className="opacity-50" />
            <img src="/images/arcanist.png" className="opacity-20" />
          </div>
        </div>
      </section>
    </div>
  );
}
