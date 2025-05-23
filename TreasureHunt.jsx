import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stops = [
  {
    title: "Start: Charterhouse Road",
    content: `🧭 Direction:
Leave your door with smiles wide,
To eastbound trains, let’s hitch a ride.
To Dalston Junction, step with glee,
Then switch lines twice — just wait and see!
Elizabeth Line from Whitechapel rolls,
To Tottenham Court — that’s your goal.

🧩 Riddle (You're Close!):
The pastries here are a Nordic dream,
Cinnamon swirls with a rich whipped cream.
With Danish roots and a cozy sheen,
What’s the café called? It’s — ________.
(Answer: Ole & Steen)`
  },
  {
    title: "Stop 1: To Little Pudding",
    content: `🧭 Direction:
From Bedford Ave, turn to the crowd,
Past Tottenham Court where traffic is loud.
Head toward the dials where seven roads meet,
A tiny café makes puddings sweet...

🍴 Bonus Stop:
But before dessert, let’s have a bite,
A savoury snack, just feels right!
At Seven Dials, the choice is plumping —
Let’s grab some dumplings at Ugly Dumpling!

🧩 Riddle (You're Close!):
It’s little by name, but full of delight,
With pancakes that jiggle and syrup light.
Find the place where fluffy treats sing —
This must be ________.
(Answer: Little Pudding)`
  },
  {
    title: "Stop 2: To Mamasons",
    content: `🧭 Direction:
Circle the dials then south you roam,
Toward Chinatown’s lanterned dome.
A glowing court that’s pink and tight,
Holds purple scoops and neon light...

🧩 Riddle (You're Close!):
Filipino flair in a London breeze,
They serve their scoops with purple tease.
From ube ice cream to halo-halo games,
This tiny shop has two‑syllable names.
(Answer: Mamasons)`
  },
  {
    title: "Stop 3: To Badiani (Final)",
    content: `🧭 Direction:
Exit the court and turn with grace,
Toward Covent Garden’s cobbled place.
Past the street where jugglers play,
A gelateria hides just off the way...

🧩 Riddle (You're Close!):
Gelato born in Florence, smooth and light,
Pistachio green and truffle white.
Its name rolls like a song from Rome —
What’s the shop that feels like home?
(Answer: Badiani)

🎉 Final Note:
You’ve tasted London’s sweetest sights,
Solved each clue and earned your bites.
Raise a spoon and celebrate —
Your treasure hunt ends with something great!`
  }
];

export default function TreasureHunt() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-6 bg-gradient-to-b from-pink-100 to-white">
      <Card className="max-w-md w-full shadow-xl">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold text-center">{stops[step].title}</h2>
          <pre className="whitespace-pre-wrap text-sm">{stops[step].content}</pre>
          <div className="flex justify-between pt-4">
            <Button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
              Back
            </Button>
            <Button onClick={() => setStep(Math.min(stops.length - 1, step + 1))} disabled={step === stops.length - 1}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}