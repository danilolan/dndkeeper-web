"use client";

import { Card } from "./components/organisms/Card";
import { PlayerCard } from "./components/molecules/PlayerCard";
import { DungeonMasterCard } from "./components/molecules/DungeonMasterCard";
import character from "../public/images/wizard.png";
import master from "../public/images/master.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 items-center justify-center font-mono text-sm lg:flex">
        <Card>
          <PlayerCard
            character_name="Baragor Ironfirst"
            character_race="Dwarf"
            character_class="Cleric"
            character_level="4"
            character_image={character}
            table_name="Mesa 1"
            date="23/04/2023"
            master_image={master}
            master_name="Porto"
          />
        </Card>

        <Card>
          <DungeonMasterCard 
            name="Porto"
            date="21/06/2023"
            image={master}
            table_name="Mesa 1"
          />
        </Card>
      </div>
    </main>
  );
}
