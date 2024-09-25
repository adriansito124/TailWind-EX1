
import menu from "@/assets/menu.png";
import bk from "@/assets/bk.png";
import coroa from "@/assets/coroa.png";
import Image from "next/image";

export default function Home() {

  const style = 
  { 
    bro: "h-1/2 bg-fonte p-2 flex flex-row items-center",
    cuca: "h-1/2 bg-transparent p-6 flex flex-row justify-between items-center",
    butao: "bg-vermelho h-12 w-32 rounded-3xl text-sm text-white",
    texbro: "bg-fonte text-fundo font-medium text-sm",
    tibro: "bg-fonte text-fundo font-bold",
    brobs: "bg-fonte",
    megatigro: "text-fonte font-bold text-3xl",
    tigro: "text-fonte font-bold text-3xl",
    burgao: "bg-hamburgui"
  }

  return (
    <div className="font(regular)">
      <header>
        <div className={style.cuca}>
          <Image src={menu} height={20} alt=""/>
          <Image src={bk} height={70} alt=""/>
          <button className={style.butao}>Sign Up / Sign In</button>
        </div>
        <div className={style.bro}>
          <h1 className={style.tibro}>ROYAL PERKS</h1>
          <Image src={coroa} className={style.brobs} height={25} alt=""/>
          <h2 className={style.texbro}>Earn Crowns - </h2>
          <a className={style.texbro}>Join Now</a>
        </div>
      </header>
      <main>
        <h1 className={style.tigro}>Start Your BK Order</h1>
        <div className={style.burgao}>
        </div>
      </main> 
      <footer>

      </footer>
    </div>
  );
}
