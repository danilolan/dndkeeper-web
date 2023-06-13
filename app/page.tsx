'use client';

import { Button } from "./components/atoms/Button";
import { Card } from "./components/molecules/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 items-center justify-center font-mono text-sm lg:flex">
        <Card />
      </div>
    </main>
  )
}
