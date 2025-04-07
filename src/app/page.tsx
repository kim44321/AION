import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/header";

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
              <button className="font-medium rounded-full px-2 py-2 bg-gradient-to-r from-[#93754D] from-0% via-[#B2986B] via-50% to-[#94764E] to-100% ">
                {" "}
                <ArrowLeft />
              </button>
              <button className="font-medium rounded-full px-2 py-2 bg-gradient-to-r from-[#93754D] from-0% via-[#B2986B] via-50% to-[#94764E] to-100% ">
                {" "}
                <ArrowRight />{" "}
              </button>
            </div>
          </div>
          <div className="place-self-end flex flex-row gap-5">
            <img src="/images/arcanist.png" />
            <img src="/images/arcanist.png" className="opacity-50" />
            <img src="/images/arcanist.png" className="opacity-20" />
          </div>
        </div>
      </section>
      <section className="bg-[#000F1F]">
        <div className=" flex flex-col justify-center items-center p-10">
          <div className="flex flex-col justify-center items-center p-10 gap-2">
            {" "}
            <span className="font-bold text-[#B2986B] text-1xl">
              EXPLORE CAMBRIA
            </span>
            <h1 className="font-bold text-white text-6xl">
              DISCOVER A <br />
              NEW WORLD
            </h1>
            <p className="text-white text-center ">
              Journey through the vast reaches of Cambria, where Aion energy
              shapes the <br />
              very fabric of the world. Experience immersive quest lines, unlock
              new regions,
              <br />
              and embark on epic roguelike raids.
            </p>
          </div>

          <div>
            <img src="/images/aionmap.png" alt="" className="h-120 w-auto" />
          </div>

          <div className="p-10">
            <div className="flex flex-col justify-center items-center ">
              <span className="text-[#B2986B]">
                PLAY FOR FREE OR CONNECT YOUR WALLET
              </span>
              <h1 className="text-6xl text-white font-bold">
                BLOCKCHAIN <br /> INTEGRATION
              </h1>
              <p className="text-white text-center pt-5">
                In Aion Rising, blockchain integration is an optional layer of
                your experience.
                <br /> Players can connect their wallet to start collecting
                blockchain rewards, trade
                <br /> assets, or simply enjoy the game with a regular, free to
                play account.
              </p>
              <div className="grid grid-cols-2 gap-5 p-10">
                <div>
                  <img src="images/log1.png" />
                  <h1 className="text-white font-bold text-3xl pt-4">
                    SEAMLESS
                  </h1>
                  <p className="text-white  pt-4">
                    Our blockchain implementation is seamless and secure.
                    <br />
                    Transactions are abstracted away from the user experience,
                    <br />
                    keeping gameplay front and centre where it belongs.
                  </p>
                </div>
                <div>
                  <img src="images/logo2.png" />
                  <h1 className="text-white font-bold text-3xl pt-4">
                    REWARDS
                  </h1>
                  <p className="text-white pt-4 ">
                    Connect your wallet to earn $AION as well as exclusive NFTs{" "}
                    <br />
                    such as Cards, Spell Scrolls, Relics and cosmetics across a{" "}
                    <br />
                    variety of gameplay modes.
                  </p>
                </div>
                <div>
                  <img src="images/logo3.png" />
                  <h1 className="text-white font-bold text-3xl pt-4">
                    MARKETPLACE
                  </h1>
                  <p className="text-white  pt-4">
                    Our native marketplace offers safe and efficient trading
                    right <br />
                    within the game. Enjoy frictionless transactions with
                    nominal
                    <br />
                    gas fees, making it easy to trade your assets.
                  </p>
                </div>
                <div>
                  <img src="images/logo4.png" />
                  <h1 className="text-white font-bold text-3xl pt-4">
                    AION TOKEN
                  </h1>
                  <p className="text-white pt-4">
                    $AION powers our game economy, and is used for all <br />
                    marketplace and in-game transactions. A significant portion{" "}
                    <br />
                    of $AION’s limited supply is reserved for gameplay rewards.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center p-20">
                <span className="text-[#B2986B]"> OUR PATH FORWARD</span>
                <h1 className="text-white font-bold text-6xl pt-2">ROADMAP</h1>
                <p className="text-white text-center pt-5">
                  Our roadmap reflects an exciting journey ahead, with a clearly
                  defined <br />
                  approach to growing the Aion universe. Post-launch, we are
                  dedicated to <br />
                  continuously evolving Aion Rising through major feature
                  releases, ensuring an <br />
                  ever-growing adventure for our players.
                </p>
              </div>
              <div className="flex justify-around items-center text-white gap-30">
                <div className="flex flex-col gap-90">
                  <img src="images/logo5.png" />
                  <img src="images/logo6.png" />
                  <img src="images/logo7.png" />
                  <img src="images/logo7.png" />
                </div>
                <div className="flex flex-col gap-90">
                  <img src="images/logo5.png" />
                  <img src="images/logo6.png" />
                  <img src="images/logo7.png" />
                  <img src="images/logo7.png" />
                </div>
                <div className="flex flex-col gap-90">
                  <img src="images/logo5.png" />
                  <img src="images/logo6.png" />
                  <img src="images/logo7.png" />
                  <img src="images/logo7.png" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center p-20">
                <span className="text-[#B2986B] text-2xl">A BIT ABOUT US</span>
                <h1 className="font-bold text-white text-6xl">OUR TEAM</h1>
                <p className="pt-5 text-white text-center">
                  We’re Chainwave Studios, a group of creators and developers
                  driven by a <br /> simple goal: to build a game we’d love to
                  play. With a focus on delivering <br /> meaningful gameplay
                  and player-first design, we’re constantly pushing <br />{" "}
                  ourselves to bring a top-notch experience to our audience.
                </p>
              </div>
              <div className="flex flex-row gap-5 justify-center items-center">
                <div>
                  <img src="/images/marko.png" alt="" className="h-80w-auto" />
                  <span className="text-white"> TECHNICAL</span>
                  <h1 className="text-white text-2xl font-bold">Marko Bilal</h1>
                  <p className="flex flex-row text-[#B2986B]">
                    Learn more <ArrowRight />
                  </p>
                </div>
                <div>
                  <img src="/images/zarko.png" alt="" className="h-80w-auto" />
                  <span className="text-white"> STORY & GAME MECHANICS </span>
                  <h1 className="text-white text-2xl font-bold">Zarko Bilal</h1>
                  <p className="flex flex-row text-[#B2986B]">
                    Learn more <ArrowRight />
                  </p>
                </div>
                <div>
                  <img src="/images/andre.png" alt="" className="h-80w-auto" />
                  <span className="text-white"> UX & UI</span>
                  <h1 className="text-white text-2xl font-bold">
                    Andre Milanovic
                  </h1>
                  <p className="flex flex-row text-[#B2986B]">
                    Learn more <ArrowRight />
                  </p>
                </div>
                <div>
                  <img src="/images/thomas.png" alt="" className="h-80w-auto" />
                  <span className="text-white"> BLOCKCHAIN </span>
                  <h1 className="text-white text-2xl font-bold">
                    Thomas Harper
                  </h1>
                  <p className="flex flex-row text-[#B2986B]">
                    Learn more <ArrowRight />
                  </p>
                </div>
              </div>
              <div className="flex flex-row p-20 gap-20 items-center">
                <div>
                  <h1 className="text-white font-bold text-6xl">
                    JOIN OUR <br />
                    COMMUNITY
                  </h1>
                  <p className="text-white py-5">
                    Join our Discord to connect with the dev team and <br />
                    fellow players. Receive the latest updates, beta
                    <br /> access, and exclusive pre-launch opportunities.
                  </p>
                  <button className="font-medium rounded-lg w-3/7 px-2 py-2 bg-gradient-to-r from-[#93754D] from-0% via-[#B2986B] via-50% to-[#94764E] to-100% ">
                    Join Now
                  </button>
                </div>
                <div>
                  <img
                    src="images/community.png"
                    alt=""
                    className="h-100 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-10 mx-auto ">
          <div className=" flex flex-row justify-between items-center py-4">
            <div>
              <img src="images/emblem2.png" className="w-auto h-20" />
            </div>
            <ul className="text-white flex flex-row gap-4 text-sm ">
              <li>Home</li>
              <li>Collections</li>
              <li>NFT</li>
              <li>Worlds</li>
              <li>Litepaper</li>
              <li>Roadmap</li>
              <li>Team</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="w-full h-0.5 border-dashed  bg-gradient-to-r from-[#93754D] from-0% via-[#B2986B] via-50% to-[#94764E] to-100%"></div>
          <div className="py-6 text-white text-xs flex flex-row justify-between">
            ©Aion Rising 2024. All rights reserved <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
